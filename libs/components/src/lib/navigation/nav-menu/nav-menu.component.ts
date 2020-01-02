import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { CurrentNode, NavigationNode } from '../navigation.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'eamx-nav-menu',
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'eamx-nav-menu' },
})
export class NavMenuComponent {
  @Input() currentNode: CurrentNode;
  @Input() nodes: NavigationNode[];

  get filteredNodes() {
    return this.nodes ? this.nodes.filter(n => !n.hidden) : [];
  }
}
