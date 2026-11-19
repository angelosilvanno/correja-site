import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

type PlatformTab = 'android' | 'ios' | 'desktop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly appUrl = 'https://correjarun.vercel.app';
  readonly installDeepLink = 'https://correjarun.vercel.app/?install=1';
  readonly qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&bgcolor=ffffff&color=141416&data=${encodeURIComponent('https://correjarun.vercel.app/?install=1')}`;

  isInstallModalOpen = signal(false);
  selectedPlatform = signal<PlatformTab>('android');
  mobileMenuOpen = signal(false);

  constructor() {
    if (typeof navigator !== 'undefined') {
      const ua = navigator.userAgent.toLowerCase();
      if (/iphone|ipad|ipod/.test(ua)) {
        this.selectedPlatform.set('ios');
      } else if (/android/.test(ua)) {
        this.selectedPlatform.set('android');
      } else {
        this.selectedPlatform.set('desktop');
      }
    }
  }

  openInstallModal(): void {
    this.mobileMenuOpen.set(false);
    this.isInstallModalOpen.set(true);
  }

  closeInstallModal(): void {
    this.isInstallModalOpen.set(false);
  }

  selectPlatform(platform: PlatformTab): void {
    this.selectedPlatform.set(platform);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isInstallModalOpen()) {
      this.closeInstallModal();
    }
  }
}