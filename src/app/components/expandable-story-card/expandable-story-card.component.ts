import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Story } from "../../interfaces/story.interface";

@Component({
  selector: "app-expandable-story-card",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="story-card">
      <h3>{{ story.title }}</h3>
      <div #storyContent class="story-content" [class.expanded]="isExpanded">
        <p>{{ story.content }}</p>
      </div>
      <button *ngIf="isContentTruncatable" (click)="toggleExpand()" class="read-more-btn">
        {{ isExpanded ? "קרא פחות" : "קרא יותר" }}
      </button>
    </div>
  `,
  styles: [
    `
      .story-card {
        padding: 1rem;
        // margin: 1rem 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: var(--card-bg);
        width: 100%;
        height: 100%;
      }

      .story-content {
        position: relative;
        max-height: 4.5em; /* Approximately 3 lines */
        overflow: hidden;
        transition: max-height 0.3s ease-out;
      }

      .story-content.expanded {
        max-height: none;
      }

      .story-content:not(.expanded)::after {
        position: absolute;
        bottom: 0;
        right: 0;
        background: white;
        padding-left: 4px;
      }

      .read-more-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 1rem auto;
        padding: 12px 24px;
        min-width: 160px;
        background-color: #f8f9fa;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.02);
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 1rem;
        color: #2c3e50;
        font-weight: 500;
      }

      .read-more-btn:hover {
        background-color: #ffffff;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.03);
      }

      .read-more-btn:active {
        transform: translateY(0);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        background-color: #f1f3f5;
      }

      @media (max-width: 768px) {
        .read-more-btn {
          font-size: 14px;
          height: 8px;
        }

        .story-card {
          h3 {
            font-size: 18px;
            font-weight: 500;
          }

          .story-content {
            font-size: 14px;
          }
        }
      }
    `,
  ],
})
export class ExpandableStoryCardComponent {
  @Input() story!: Story;
  @ViewChild("storyContent") storyContentElement!: ElementRef;
  isExpanded = false;
  isContentTruncatable = false;

  ngAfterViewInit() {
    // Wait for next tick to ensure content is rendered
    setTimeout(() => {
      this.checkContentTruncatable();
    });
  }

  private checkContentTruncatable() {
    const element = this.storyContentElement.nativeElement;
    // Compare scroll height (full content height) with client height (visible height)
    this.isContentTruncatable = element.scrollHeight > element.clientHeight;
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
