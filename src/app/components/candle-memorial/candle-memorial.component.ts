import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Candle } from "../../interfaces/candle.interface";

interface ExpandedMessages {
  [key: number]: boolean;
}

@Component({
  selector: "app-candle-memorial",
  templateUrl: "./candle-memorial.component.html",
  styleUrls: ["./candle-memorial.component.scss"],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CandleMemorialComponent implements OnInit {
  googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf56kZG6j7tIcAlq0iyU5qmUy57f_jvTWPjOCWQGDndxBHeNg/viewform?embedded=true";
  candles: Candle[] = [];
  shouldShowSuccessMessage = false;
  formData = {
    name: "",
    message: "",
  };

  currentPage = 0;
  itemsPerPage = 5;

  expandedMessages: ExpandedMessages = {};
  readonly MESSAGE_PREVIEW_LENGTH = 100;

  get totalPages(): number {
    return Math.ceil(this.candles.length / this.itemsPerPage);
  }

  get currentPageCandles(): Candle[] {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.candles.slice(start, end);
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
    }
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  isMessageLong(message: string): boolean {
    return message.length > this.MESSAGE_PREVIEW_LENGTH;
  }

  getDisplayMessage(message: string, index: number): string {
    if (!this.isMessageLong(message) || this.expandedMessages[index]) {
      return message;
    }
    return message.substring(0, this.MESSAGE_PREVIEW_LENGTH) + "...";
  }

  toggleMessage(index: number): void {
    this.expandedMessages[index] = !this.expandedMessages[index];
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Initialize Google Forms API client
    this.loadExistingCandles();
  }

  private async loadExistingCandles() {
    try {
      const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1pzSxmmsoz1V4hKIB3ZCHp1OroVXozez4SwdyFGxORc4/values/Sheet1!A2:D9999?key=AIzaSyB9snCYAJlQimk-9GLtulfGVOcGkqLu46M");
      const data = await response.json();

      this.candles = data.values.map((row: any[]) => {
        // Parse date safely
        let date: Date;
        try {
          if (row[0]) {
            // Split the date string and parse it manually
            const [datePart, timePart] = row[0].split(" ");
            const [day, month, year] = datePart.split("/").map(Number);
            // Create date using year, month (0-based), day
            date = new Date(year, month - 1, day);
          } else {
            date = new Date();
          }
          // Check if date is valid
          if (isNaN(date.getTime())) {
            date = new Date();
          }
        } catch {
          date = new Date();
        }

        return {
          deceasedName: row[0] || "גדי",
          submitterName: row[1] || "",
          lightingDate: date,
          message: row[2] || "",
        };
      });

      // Sort candles by date in descending order (newest first)
      this.candles.sort((a, b) => a.lightingDate.getTime() - b.lightingDate.getTime());
      // reverse the array
      this.candles = this.candles.reverse();
    } catch (error) {
      console.error("Error loading candles:", error);
      this.candles = [];
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("entry.1124576045", this.formData.name);
    formData.append("entry.1236492616", this.formData.message);

    const newCandle: Candle = {
      submitterName: this.formData.name,
      message: this.formData.message,
      lightingDate: new Date(),
      deceasedName: "",
    };

    const submitUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf56kZG6j7tIcAlq0iyU5qmUy57f_jvTWPjOCWQGDndxBHeNg/formResponse";

    fetch(submitUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        this.candles.unshift(newCandle);
        this.shouldShowSuccessMessage = true;
        this.formData = { name: "", message: "" };
        this.currentPage = 0;
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }
}
