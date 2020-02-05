import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SettingsFacade, THEMES } from '@eam-js/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  settings$ = this.settingsFacade.settings$;

  themes = THEMES;

  constructor(private readonly settingsFacade: SettingsFacade) {}

  onThemeSelect($event: MatSelectChange) {
    this.settingsFacade.selectTheme($event.value);
  }

  onAutoNightModeToggle($event: MatSlideToggleChange) {
    this.settingsFacade.setAutoNightMode($event.checked);
  }
}
