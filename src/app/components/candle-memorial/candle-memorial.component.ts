import { Component, OnInit } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { Candle } from "../../interfaces/candle.interface";
import { SafePipe } from "../../pipes/safe.pipe";

@Component({
  selector: "app-candle-memorial",
  templateUrl: "./candle-memorial.component.html",
  styleUrls: ["./candle-memorial.component.scss"],
  standalone: true,
  imports: [CommonModule, DatePipe, SafePipe],
})
export class CandleMemorialComponent implements OnInit {
  googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf56kZG6j7tIcAlq0iyU5qmUy57f_jvTWPjOCWQGDndxBHeNg/viewform?embedded=true";
  candles: Candle[] = [];

  ngOnInit() {
    // Initialize Google Forms API client
    this.loadExistingCandles();
  }

  private async loadExistingCandles() {
    try {
      const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1pzSxmmsoz1V4hKIB3ZCHp1OroVXozez4SwdyFGxORc4/values/Sheet1!A2:C9999?key=AIzaSyB9snCYAJlQimk-9GLtulfGVOcGkqLu46M");
      const data = await response.json();

      this.candles = data.values.map((row: any[]) => ({
        deceasedName: row[0],
        submitterName: row[1],
        lightingDate: new Date(row[2]),
        message: row[3],
      }));
    } catch (error) {
      console.error("Error loading candles:", error);
      this.candles = [];
    }
  }

  onFormSubmit(event: any) {
    // Handle form submission and update candles array
    // This will be implemented when we set up the Google Forms API integration
  }
}
