import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Story } from '../../models/story.interface';
import { stories } from '../../data/stories.data';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [NgbModule, CommonModule],
  template: `
    <section id="stories" class="section">
      <div class="container">
        <h2 class="section-title">סיפורים וזכרונות</h2>
        <div class="row">
          <div class="col-md-6 mb-4" *ngFor="let story of stories">
            <div class="testimonial-card">
              <p class="story-content">{{ story.content }}</p>
              <div class="story-author">
                <strong>{{ story.author }}</strong>
                <span class="text-muted"> - {{ story.relation }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .story-content {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 1rem;
    }
    
    .story-author {
      font-size: 1rem;
      color: var(--primary-color);
    }
  `]
})
export class StoriesComponent {
  stories: Story[] = stories;
}