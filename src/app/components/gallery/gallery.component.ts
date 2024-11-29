import { Component, HostListener } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { trigger, transition, style, animate, state } from "@angular/animations";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [NgbModule, CommonModule],
  template: `
    <section id="gallery" class="section">
      <div class="container">
        <h2 class="section-title">גלריית תמונות</h2>
        <div class="gallery-wrapper">
          <div class="row">
            <!-- Desktop Layout -->
            <div class="desktop-gallery">
              <div class="col-md-4 mb-4" *ngFor="let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]">
                <img [src]="'assets/images/personal/' + i + '.jpg'" [alt]="'תמונה ' + i" class="img-fluid gallery-image" (click)="openImage(i)" />
              </div>
            </div>

            <!-- Mobile Layout -->
            <div class="mobile-gallery">
              <div class="col-md-4 mb-4">
                <img src="assets/images/personal/1.jpg" alt="תמונה 1" class="img-fluid gallery-image" (click)="openImage(1)" />
              </div>

              <div class="collapsible-content" [@collapseExpand]="isCollapsed ? 'collapsed' : 'expanded'">
                <div class="col-md-4 mb-4" *ngFor="let i of [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]">
                  <img [src]="'assets/images/personal/' + i + '.jpg'" [alt]="'תמונה ' + i" class="img-fluid gallery-image" (click)="openImage(i)" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Show button only on mobile -->
        <div class="button-wrapper mobile-only" [class.expanded]="!isCollapsed">
          <button class="toggle-gallery-btn" (click)="toggleGallery()" [attr.aria-expanded]="!isCollapsed" [attr.aria-label]="isCollapsed ? 'הצג את כל התמונות' : 'הצג פחות תמונות'">
            <span class="button-text">{{ isCollapsed ? "הצג את כל התמונות" : "הצג פחות תמונות" }}</span>
            <i class="chevron" [class.collapsed]="isCollapsed"></i>
          </button>
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
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      .gallery-image:hover {
        transform: scale(1.05);
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

      .toggle-gallery-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 2rem auto;
        padding: 14px 28px;
        min-width: 200px;
        background-color: #f8f9fa;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.02);
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 1.1rem;
        color: #2c3e50;
        font-weight: 500;
      }

      .toggle-gallery-btn:hover {
        background-color: #ffffff;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.03);
      }

      .toggle-gallery-btn:active {
        transform: translateY(0);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        background-color: #f1f3f5;
      }

      .chevron {
        width: 10px;
        height: 10px;
        border-right: 2px solid #2c3e50;
        border-bottom: 2px solid #2c3e50;
        transform: rotate(-135deg);
        transition: transform 0.2s ease;
      }

      .chevron.collapsed {
        transform: rotate(45deg);
      }

      .button-text {
        font-weight: 500;
        letter-spacing: 0.01em;
      }

      @media (max-width: 768px) {
        .toggle-gallery-btn {
          min-width: 200px;
          padding: 12px 24px;
          font-size: 1rem;
        }
      }

      .row {
        display: flex;
        flex-wrap: wrap;
      }

      .collapsible-content {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
      }

      .col-md-4:first-child {
        opacity: 1;
        transform: none;
      }

      .gallery-wrapper {
        position: relative;
        // min-height: 300px;
      }

      .button-wrapper {
        position: relative;
        z-index: 2;
        transition: all 0.3s ease;
      }

      .button-wrapper.expanded {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        pointer-events: none;
      }

      .button-wrapper.expanded:is(.section:hover *) {
        opacity: 1;
        pointer-events: all;
      }

      #gallery:hover .button-wrapper.expanded {
        opacity: 1;
        pointer-events: all;
      }

      @media (max-width: 768px) {
        .button-wrapper.expanded {
          bottom: 10px;
        }
      }

      .section {
        position: relative;
        min-height: 300px;
        margin-bottom: -80px;
      }

      .desktop-gallery {
        display: none;
        width: 100%;
      }

      .mobile-gallery {
        display: none;
        width: 100%;
      }

      /* Desktop styles */
      @media (min-width: 769px) {
        .desktop-gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .desktop-gallery .col-md-4 {
          flex: 0 0 calc(33.333% - 16px);
          max-width: calc(33.333% - 16px);
        }

        .desktop-gallery .gallery-image {
          height: 300px;
          width: 100%;
          object-fit: cover;
        }

        .mobile-gallery,
        .mobile-only {
          display: none;
        }
      }

      /* Mobile styles */
      @media (max-width: 768px) {
        .mobile-gallery {
          display: block;
        }

        .desktop-gallery {
          display: none;
        }

        .mobile-only {
          display: block;
        }
      }
    `,
  ],
  animations: [
    trigger("fadeInOut", [transition(":enter", [style({ opacity: 0 }), animate("0.1s ease-in-out", style({ opacity: 1 }))]), transition(":leave", [animate("0.1s ease-in-out", style({ opacity: 0 }))])]),
    trigger("collapseExpand", [
      state(
        "collapsed",
        style({
          height: "0",
          opacity: "0",
          overflow: "hidden",
          margin: "0",
          padding: "0",
        })
      ),
      state(
        "expanded",
        style({
          height: "*",
          opacity: "1",
          overflow: "visible",
        })
      ),
      transition("expanded <=> collapsed", [animate("0.1s cubic-bezier(0.4, 0.0, 0.2, 1)")]),
    ]),
  ],
})
export class GalleryComponent {
  selectedImage: number | null = null;
  isCollapsed = true;

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
    }, 100); // Match this with your animation duration
  }

  handleOverlayClick(event: MouseEvent) {
    this.closeImage();
  }

  toggleGallery() {
    this.isCollapsed = !this.isCollapsed;
    // Add a small delay to ensure smooth animation
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
      // Scroll to gallery section
      const gallerySection = document.getElementById("gallery");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    }, 350);
  }
}
