import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-feature-flag',
  standalone: true,
  imports: [],
  templateUrl: './feature-flag.component.html',
  styleUrl: './feature-flag.component.scss',
})
export class FeatureFlagComponent {
  name = input();
  value = input();

  type = computed(() => typeof this.value());
}
