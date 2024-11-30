import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { stories } from "../../data/stories.data";
import { ExpandableStoryCardComponent } from "../expandable-story-card/expandable-story-card.component";

@Component({
  selector: "app-stories",
  standalone: true,
  imports: [CommonModule, ExpandableStoryCardComponent],
  template: `
    <div class="stories-container">
      <h2>סיפורים וזכרונות</h2>
      <div class="stories-grid">
        <app-expandable-story-card *ngFor="let story of stories" [story]="story"></app-expandable-story-card>
      </div>
    </div>
  `,
  styles: [
    `
      .stories-container {
        padding: 1rem;
      }

      .stories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
      }
    `,
  ],
})
export class StoriesComponent {
  stories = stories;
}
