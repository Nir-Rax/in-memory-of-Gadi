import { Component } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-battle-story",
  standalone: true,
  imports: [NgbModule],
  template: `
    <section id="battle-story" class="section">
      <div class="container text-bg">
        <h2 class="section-title">סיפור הגבורה</h2>
        <div class="row align-items-center pinned-right">
          <div class="col-md-9">
            <div class="battle-story-text">
              <p class="lead">
                בסיום תפילת ערב שבת, במערת המכפלה יצאה קבוצת מתפללים גדולה בדרכה חזרה לקריית ארבע כאשר כוח צה"ל ומג"ב מאבטח אותם, דקות מעטות לאחר מכן נפתחה לעברם אש תופת ע"י מחבלים מהג'יהאד האיסלמי שהתמקמו בבית נטוש על גבעת אבו-סנינה,
                החולשת על ציר המתפללים. כוחות רבים הוקפצו למקום, כולל חיילים, אנשי מג"ב וכוחות מכיתת הכוננות בקרית ארבע. המחבלים הציבו מארב מתוכנן היטב ובחסות החשכה הטילו רימונים והחלו לירות על כוחות החילוץ שהגיעו למקום. אש כבדה ומדויקת
                מטווח קצר. במקום התנהלו חילופי אש קשים אשר הקשו על פעולות החילוץ.
              </p>
              <p class="lead">
                בשעה 19:00 נפתחה אש משני מוקדים ע"י שלושה מחבלים לעבר כוח צה"ל ומג"ב שאבטחו את ציר המתפללים שבין מערכת המכפלה לקריית ארבע. צוות מג"ב שכלל את גדי רחמים הי"ד ושני לוחמים נוספים היו בסיור ממנוע על הציר והגיע לנקודת ההיתקלות של
                סיור רגלי צבאי עם המחבלים ליד מבנה לאורך הסמטה, שם נפתחה עליהם אש כבדה ממנה נפצעו הלוחמים מרסיסי-רימונים.
              </p>
              <p class="lead">במקביל, ג'יפ ובו גדי וקצין אחר נכנסו לציר המתפללים שממנו נשמעו קול ירי מאסיבי, על-מנת לאתר את מיקום המחבלים ואז נפתחה לכיוונם אש שפגעה בשניהם.</p>
              <p class="lead">
                בשלב זה שמעו גדי ולוחם נוסף את קצין-המבצעים מודיע בקשר שהוא נפגע, הם החליטו להיכנס לסמטה על מנת לסייע בחילוצו, על אף שהם פצועים. גדי ושני הלוחמים נכנסו לסמטה ארבע פעמים כאשר בשלוש הפעמים הראשונות חלצו חיילים וביניהם את המח"ט
                דרור ויינברג הי"ד, כל זאת תחת אש.
              </p>
              <p class="lead">
                בפעם הרביעית נכנסו יחד עם כיתת הכוננות לסמטה, הגיעו לג'יפ של קצין המבצעים וגדי ירד מהרכב על מנת לנפץ את פנסי הג'יפ שלו שחשפו את מיקומם באפלה, ברגעים אלה נפתחה לעברם אש מאסיבית ממנה נהרגו גדי רחמים הי"ד, לוחם נוסף ושלושה
                מחברי כיתת הכוננות. באותו קרב נפלו 12 לוחמים ואנשי כוחות בטחון.
              </p>
              <p class="lead">עיטור האומץ הוענק לגדי על מעשה גבורה שעשה בעת מילוי תפקידו תוך כדי חירוף נפש שיש בו גילוי אומץ לב בלתי רגיל.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf56kZG6j7tIcAlq0iyU5qmUy57f_jvTWPjOCWQGDndxBHeNg/viewform?embedded=true" width="640" height="551" frameborder="0" marginheight="0" marginwidth="0">בטעינה…</iframe> -->
    </section>
  `,
  styles: [
    `
      .battle-story-text {
        padding: 1rem;
        font-size: 15px;
      }

      .battle-story-text p {
        margin-bottom: -8.5rem;
        line-height: 1.8;
      }

      .text-bg {
        background-image: url("/in-memory-of-Gadi/assets/images/text-bg.png");
        background-repeat: no-repeat;
        background-size: 75% 125%;
        background-position: center;
        // text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        height: fit-content;
      }

      .left-side {
        text-align: right;
      }

      .lead {
        padding: 22px 234px 140px 0px;
      }

      .pinned-right {
        margin-right: 50px;
      }

      .section-title {
        padding-top: 45px;
      }

      @media (max-width: 768px) {
        .section {
          margin-top: -92px;
        }

        .battle-story-text {
          padding: 1rem;
        }

        .battle-story-text p {
          margin-bottom: -3.5rem;
          line-height: 1.6;
        }

        .text-bg {
          padding: 1rem;
          background-size: 90% 130%;
        }

        .lead {
          padding: 0px 25px 100px 25px;
          font-size: 14px;
        }

        .hidden-on-mobile {
          display: none;
        }

        .pinned-right {
          margin-right: 0px;
        }

        .section-title {
          padding-top: 20px;
        }
      }
    `,
  ],
})
export class BattleStoryComponent {}
