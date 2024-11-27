import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer mt-5 py-4">
      <div class="container text-center">
        <p class="mb-0">
          תודה על הביקור באתר ההנצחה
          <br>
          נר זיכרון לעילוי נשמתו
        </p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--card-bg);
      color: var(--text-color);
      border-top: 1px solid var(--accent-color);
    }
  `]
})
export class FooterComponent {}