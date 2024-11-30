import { Component } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [NgbModule],
  template: `
    <section id="about" class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="about-text text-bg">
              <p class="lead">
                גדי רחמים נולד בשנת 1983 וגדל בקרית מלאכי. הוא היה ילד רגיש, חברותי, אהוב ונער מקסים. גדי אהב בעלי חיים ותחביביו היו בן היתר אופנועים, סוסים וכלבים. גדי היה בן בכור וסייע לאביו בעבודתו בנגריה בזמן חופשות. גדי היה אח דואג
                ותומך, ודמות לחיקוי עבור אחיו הצעירים
              </p>
            </div>
          </div>
          <div class="col-md-6 text-center text-md-start">
            <div class="about-text hidden-on-mobile">
              <p class="lead left-side"></p>
            </div>
          </div>
          <div class="col-md-6 hidden-on-mobile">
            <div class="about-text">
              <p class="lead"></p>
            </div>
          </div>
          <div class="col-md-6 text-center text-md-start">
            <div class="about-text text-bg">
              <p class="lead left-side">
                גדי היה שילוב נדיר של אומץ לב, טוב לב וחוש הומור מיוחד. הוא היה בן משפחה מסור שתמיד דאג לכולם. הוא היה חביב פופולרי, אך תמיד צנוע, מתחבר לכולם ועם לב רחב. אהבתו למשפחתו ולחבריו, נכונותו לעזור ותמיד להיות שם בשבילם, יחד עם
                שמחת החיים, הצחוק המתגלגל וההומור הייחודי שלו, הפכו אותו לדמות אהובה ובלתי נשכחת.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about-text {
        padding: 1rem;
      }

      .about-text p {
        margin-bottom: -6.5rem;
        line-height: 1.8;
      }

      .text-bg {
        background-image: url("/in-memory-of-Gadi/assets/images/text-bg.png");
        background-size: cover;
        background-position: center;
        // text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        height: fit-content;
        margin-bottom: -20px;
      }

      .left-side {
        text-align: right;
      }

      .lead {
        padding: 28px 35px 140px 26px;
      }

      @media (max-width: 768px) {
        .section {
          margin-top: -92px;
        }

        .about-text {
          padding: 1rem;
        }

        .about-text p {
          margin-bottom: -3.5rem;
          line-height: 1.8;
        }

        .text-bg {
          padding: 1rem;
        }

        .lead {
          padding: 56px 35px 140px 26px;
        }

        .hidden-on-mobile {
          display: none;
        }
      }
    `,
  ],
})
export class AboutComponent {}
