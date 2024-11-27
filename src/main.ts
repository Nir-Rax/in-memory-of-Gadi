import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { NavbarComponent } from "./app/components/navbar/navbar.component";
import { HeroComponent } from "./app/components/hero/hero.component";
import { BiographyComponent } from "./app/components/biography/biography.component";
import { GalleryComponent } from "./app/components/gallery/gallery.component";
import { VideosComponent } from "./app/components/videos/videos.component";
import { StoriesComponent } from "./app/components/stories/stories.component";
import { FooterComponent } from "./app/components/footer/footer.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NavbarComponent, HeroComponent, BiographyComponent, GalleryComponent, VideosComponent, StoriesComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-biography></app-biography>
    <app-gallery></app-gallery>
    <app-videos></app-videos>
    <app-stories></app-stories>
    <app-footer></app-footer>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [importProvidersFrom(NgbModule), provideRouter([]), provideAnimations()],
}).catch((err) => console.error(err));
