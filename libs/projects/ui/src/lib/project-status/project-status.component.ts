import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'project-status',
  templateUrl: './project-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectStatusComponent {
  @Input() active = true;

  get label() {
    return this.active ? 'active' : 'inactive';
  }

  get type() {
    return this.active ? 'primary' : 'default';
  }
}
