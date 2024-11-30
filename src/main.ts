import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { NavbarComponent } from "./app/components/navbar/navbar.component";
import { HeroComponent } from "./app/components/hero/hero.component";
import { AboutComponent } from "./app/components/about/about.component";
import { GalleryComponent } from "./app/components/gallery/gallery.component";
import { VideosComponent } from "./app/components/videos/videos.component";
import { BattleStoryComponent } from "./app/components/battle-story/battle-story.component";
import { StoriesComponent } from "./app/components/stories/stories.component";
import { FooterComponent } from "./app/components/footer/footer.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { CandleMemorialComponent } from "./app/components/candle-memorial/candle-memorial.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, GalleryComponent, VideosComponent, BattleStoryComponent, StoriesComponent, FooterComponent, CandleMemorialComponent],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-gallery></app-gallery>
    <app-videos></app-videos>
    <app-battle-story></app-battle-story>
    <!-- <app-stories></app-stories> -->
    <!-- <app-candle-memorial></app-candle-memorial> -->
    <app-footer></app-footer>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [importProvidersFrom(NgbModule), provideRouter([]), provideAnimations()],
}).catch((err) => console.error(err));
