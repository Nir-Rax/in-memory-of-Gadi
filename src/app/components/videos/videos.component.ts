import { Component } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "app-videos",
  standalone: true,
  imports: [NgbModule, CommonModule],
  template: `
    <section id="videos" class="section">
      <div class="container">
        <h2 class="section-title">סרטוני זיכרון</h2>
        <div class="row">
          <!-- First video with Vimeo embed -->
          <div class="col-md-6 mb-4">
            <div class="video-container" [innerHTML]="vimeoEmbed"></div>
            <h4 class="video-title mt-2 text-center">סרט הנצחה - גדי רחמים ז״ל</h4>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .video-title {
        color: var(--primary-color);
        font-size: 1.2rem;
        margin-top: 1rem;
      }
      .video-container {
        position: relative;
        background: #f8f9fa;
        border-radius: 4px;
        overflow: hidden;
      }
    `,
  ],
})
export class VideosComponent {
  vimeoEmbed: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    const embedHtml = `<div style="padding:66.67% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/43301545?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="גדי רחמים ז&quot;ל - סרט הנצחה"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    this.vimeoEmbed = this.sanitizer.bypassSecurityTrustHtml(embedHtml);
  }
}
