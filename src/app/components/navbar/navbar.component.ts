import { Component, HostListener, OnInit } from "@angular/core";
import { NgbNavModule, NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [NgbNavModule, NgbCollapseModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <div class="d-flex w-100 justify-content-between">
          <button class="navbar-toggler order-1 order-lg-0" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand order-0 order-lg-0" href="#">לזכרו</a>
        </div>

        <div class="collapse navbar-collapse" [ngbCollapse]="isMenuCollapsed">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#biography" (click)="isMenuCollapsed = true">ביוגרפיה</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gallery" (click)="isMenuCollapsed = true">גלריה</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#videos" (click)="isMenuCollapsed = true">סרטונים</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#stories" (click)="isMenuCollapsed = true">סיפורים</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar {
        background-color: #333333;
        padding: 1rem 0;
        transition: background-color 0.3s ease;
      }

      .nav-container {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        align-items: center;
      }

      .navbar-brand {
        font-weight: bold;
        color: #ffffff !important;
        font-size: 1.4rem;
      }

      .nav-link {
        color: rgba(255, 255, 255, 0.9) !important;
        font-weight: 500;
        padding: 0.5rem 1rem;
        transition: color 0.3s ease;
      }

      .nav-link:hover {
        color: #ffffff !important;
      }

      @media (max-width: 768px) {
        .nav-container {
          padding: 0 1rem;
        }
      }

      .navbar-collapse {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      @media (max-width: 991px) {
        .navbar-collapse {
          background-color: #333333;
          padding: 1rem;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transform-origin: top;
          opacity: 1;
        }

        .navbar-collapse.collapse:not(.show) {
          display: block;
          height: 0;
          padding-top: 0;
          padding-bottom: 0;
          overflow: hidden;
          transform: scaleY(0);
          opacity: 0;
        }

        .navbar-collapse.collapsing {
          height: auto;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          transform: scaleY(1);
          opacity: 1;
        }

        .navbar-collapse.show {
          transform: scaleY(1);
          opacity: 1;
        }

        .navbar-nav {
          text-align: center;
          transform-origin: top;
          transition: transform 0.35s ease;
        }

        .nav-item {
          margin: 0.5rem 0;
          transform-origin: top;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .navbar-brand {
          margin-right: 0;
        }

        .navbar-toggler {
          margin-left: 0;
        }

        .navbar-toggler:focus {
          box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
        }
      }

      .navbar-toggler {
        border-color: rgba(255, 255, 255, 0.5);
      }

      .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = true;
  private lastScrollTop = 0;

  ngOnInit() {
    // Initialize the last scroll position
    this.lastScrollTop = window.pageYOffset;
  }

  @HostListener("window:scroll", ["$event"])
  onScroll() {
    const currentScroll = window.pageYOffset;

    // If we're scrolling down and the menu is open, close it
    if (currentScroll > this.lastScrollTop && !this.isMenuCollapsed) {
      this.isMenuCollapsed = true;
    }

    this.lastScrollTop = currentScroll;
  }
}
