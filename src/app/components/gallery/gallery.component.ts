import { Component, HostListener } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [NgbModule, CommonModule],
  template: `
    <section id="gallery" class="section">
      <div class="container">
        <h2 class="section-title">גלריית תמונות</h2>
        <div class="row">
          <div class="col-md-4 mb-4" *ngFor="let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]">
            <img [src]="'assets/images/personal/' + i + '.jpg'" [alt]="'תמונה ' + i" class="img-fluid gallery-image" (click)="openImage(i)" />
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox overlay -->
    <div class="lightbox-overlay" *ngIf="selectedImage" (click)="handleOverlayClick($event)" [@fadeInOut]="true">
      <div class="lightbox-content">
        <button class="close-button" (click)="closeImage()" aria-label="Close image">×</button>
        <img [src]="'assets/images/personal/' + selectedImage + '.jpg'" [alt]="'תמונה ' + selectedImage" class="lightbox-image" />
      </div>
    </div>
  `,
  styles: [
    `
      .gallery-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
      }

      .gallery-image:hover {
        transform: scale(1.02);
        transition: transform 0.3s ease;
      }

      .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 20px;
      }

      .lightbox-content {
        position: relative;
        max-width: 90vw;
        height: 80vh;
      }

      .lightbox-image {
        max-width: 100%;
        height: 80vh;
        object-fit: contain;
        border-radius: 4px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        margin-top: 5vh;
      }

      .close-button {
        position: absolute;
        top: -20px;
        right: -40px;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 10px;
        z-index: 1001;
      }

      @media (max-width: 768px) {
        .close-button {
          top: 10px;
          right: 0;
        }
      }
    `,
  ],
  animations: [trigger("fadeInOut", [transition(":enter", [style({ opacity: 0 }), animate("0.3s ease-in-out", style({ opacity: 1 }))]), transition(":leave", [animate("0.3s ease-in-out", style({ opacity: 0 }))])])],
})
export class GalleryComponent {
  selectedImage: number | null = null;

  @HostListener("window:keydown.escape")
  onEscapePress() {
    if (this.selectedImage !== null) {
      this.closeImage();
    }
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event: Event) {
    if (this.selectedImage !== null) {
      event.preventDefault();
      this.closeImage();
    }
  }

  openImage(imageIndex: number) {
    this.selectedImage = imageIndex;
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  }

  closeImage() {
    // Add a small delay to allow the animation to complete
    setTimeout(() => {
      document.body.style.overflow = "auto"; // Re-enable scrolling
      this.selectedImage = null;
    }, 300); // Match this with your animation duration
  }

  handleOverlayClick(event: MouseEvent) {
    this.closeImage();
  }
}
