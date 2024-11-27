import { Component } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-biography",
  standalone: true,
  imports: [NgbModule],
  template: `
    <section id="biography" class="section">
      <div class="container">
        <h2 class="section-title">לזכרו של גדי רחמים ז"ל</h2>
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="biography-text">
              <p class="lead">גדי רחמים ז"ל נפל בקרב גבורה בציר המתפללים בחברון בשנת 2002. הוא היה לוחם מצטיין, בן ואח אהוב, וחבר נאמן לכל מי שהכיר אותו.</p>
              <p>גדי שירת בצה"ל בגאווה ובמסירות, תמיד היה הראשון להתנדב למשימות מאתגרות ודאג לחבריו ליחידה. הוא נפל בעת מילוי תפקידו במהלך קרב גבורה, מגן על אזרחים חפים מפשע, ועל כך קיבל את עיטור האומץ.</p>
            </div>
          </div>
          <!-- <div class="col-md-6">
            <img src="/assets/images/gadi-military.jpg" alt="גדי רחמים ז״ל במדים" class="img-fluid rounded shadow" />
          </div> -->
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .biography-text {
        padding: 2rem;
      }

      .biography-text p {
        margin-bottom: 1.5rem;
        line-height: 1.8;
      }
    `,
  ],
})
export class BiographyComponent {}
