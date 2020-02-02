import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SettingsFacade } from '@eam-js/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  settings$ = this.settingsFacade.settings$;

  themes = [
    { value: 'default', label: 'Default' },
    { value: 'dark', label: 'Dark' },
  ];

  constructor(private readonly settingsFacade: SettingsFacade) {}

  onThemeSelect($event: MatSelectChange) {
    this.settingsFacade.selectTheme($event.value);
  }

  onAutoNightModeToggle($event: MatSlideToggleChange) {
    this.settingsFacade.setAutoNightMode($event.checked);
  }
}
