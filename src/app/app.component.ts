import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SettingsFromUrlService } from './settings-from-url.service';
import { FeatureFlagComponent } from './components/feature-flag/feature-flag.component';
import { GetEntiresPipe } from './pipes/get-entires.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    FeatureFlagComponent,
    GetEntiresPipe,
  ],
})
export class AppComponent {
  title = 'vanity-url-poc';
  settingSerivce = inject(SettingsFromUrlService);
  regex = /https?:\/\/(?:www\.)?([^\/:.]+)/;
  url = window.location.href;
  regexResult = this.regex.exec(this.url);

  settings = this.settingSerivce.getSettings(this.regex.exec(this.url)![1]);
}
