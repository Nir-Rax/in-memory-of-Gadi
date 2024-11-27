import { Component } from "@angular/core";

@Component({
  selector: "app-hero",
  standalone: true,
  template: `
    <section class="hero-section">
      <div class="hero-container">
        <div class="row h-100 align-items-center">
          <div class="col-md-6 text-center text-md-end">
            <h1 class="hero-title mb-4">גדי רחמים ז"ל</h1>
            <p class="hero-subtitle mb-4">"החיים שחי משאירים מורשת נצחית"</p>
            <div class="hero-details">
              <p class="mb-2">1983 - 2002</p>
              <p>נפל בהגנה על המולדת</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="image-container">
              <img src="assets/images/hero-image.png" alt="גדי רחמים" class="flipped-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero-section {
        height: 90vh;
        background-color: var(--light-bg);
        padding-top: 76px;
        width: 100%;
      }

      .hero-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        height: calc(100vh - 76px);
      }

      .hero-title {
        font-size: 3.5rem;
        color: var(--primary-color);
        font-weight: bold;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        color: var(--secondary-color);
      }

      .hero-details {
        font-size: 1.2rem;
        color: var(--text-color);
      }

      .image-container {
        background-color: var(--card-bg);
        border: 2px dashed var(--border-color);
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

      .flipped-image {
        transform: scaleX(-1);
        width: 84%;
        height: 130%;
        object-fit: cover;
        margin-bottom: 127px;
      }

      @media (max-width: 768px) {
        .hero-section {
          height: 100vh;
        }

        .hero-container {
          padding: 0 1rem;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
        }

        .image-container {
          width: 300px;
          height: 300px;
          margin-top: 2rem;
        }

        .flipped-image {
          width: 84%;
          height: 130%;
          margin-bottom: 92px;
        }
      }
    `,
  ],
})
export class HeroComponent {}
