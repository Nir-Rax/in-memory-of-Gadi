import { Component } from "@angular/core";

@Component({
  selector: "app-hero",
  standalone: true,
  template: `
    <section class="hero-section">
      <div class="hero-container">
        <div class="row h-100 align-items-center flex-md-row-reverse">
          <div class="col-md-6 text-center text-md-start">
            <h1 class="hero-title mb-4">גדי רחמים הי"ד</h1>
            <p class="hero-subtitle mb-4">גדי רחמים הי"ד נפל בקרב גבורה בציר המתפללים בחברון בשנת 2002. הוא היה לוחם מצטיין, בן ואח אהוב, וחבר נאמן לכל מי שהכיר אותו</p>
            <div class="hero-details">
              <p class="mb-2">2002 - 1983</p>
              <p>נפל בקרב הגנה על המולדת</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="image-container">
              <img
                [src]="imageSrc"
                (error)="onImageError()"
                alt="גדי רחמים"
                class="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero-section {
        min-height: 75vh;
        background-color: var(--light-bg);
        padding-top: 90px;
        padding-bottom: 2rem;
        width: 100%;
      }

      .hero-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        min-height: calc(75vh - 110px);
        display: flex;
        align-items: center;
      }

      .hero-title {
        font-size: 3.5rem;
        color: var(--primary-color);
        font-weight: bold;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        color: var(--secondary-color);
        line-height: 1.6;
      }

      .hero-details {
        font-size: 1.2rem;
        color: var(--text-color);
        font-weight: 500;
      }

      .image-container {
        background-color: var(--card-bg);
        border: 3px solid var(--border-color);
        box-shadow: 0 8px 24px rgba(61, 49, 42, 0.12);
        border-radius: 50%;
        width: 400px;
        height: 400px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .placeholder-text {
        color: var(--secondary-color);
        font-size: 1.2rem;
      }

      .image-fluid {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .hero-image {
        width: 84%;
        height: 136%;
        object-fit: cover;
        margin-bottom: 133px;
        margin-left: 29px;
      }

      @media (max-width: 768px) {
        .hero-section {
          min-height: 100vh;
          padding-top: 85px;
        }

        .hero-container {
          padding: 0 1rem;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          margin-bottom: 12px !important;
        }

        .image-container {
          width: 290px;
          height: 290px;
          margin-top: 2.5rem;
        }

        .hero-image {
          width: 84%;
          height: 136%;
          margin-bottom: 98px;
          margin-left: 21px;
        }

        .hero-details {
          font-size: 1.15rem;
          color: var(--text-color);
          margin-bottom: 30px;
        }
      }
    `,
  ],
})
export class HeroComponent {
  imageSrc = "assets/images/hero-image.png";
  private fallbackAttempted = false;

  onImageError() {
    if (!this.fallbackAttempted) {
      this.fallbackAttempted = true;
      this.imageSrc = "/in-memory-of-Gadi/assets/images/hero-image.png";
    }
  }
}
