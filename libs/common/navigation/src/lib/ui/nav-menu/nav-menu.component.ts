import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CurrentNode, NavigationNode } from '../../navigation.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'nav-menu',
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['nav-menu.component.scss'],
})
export class NavMenuComponent {
  @Input() currentNode: CurrentNode;
  @Input() nodes: NavigationNode[];

  get filteredNodes() {
    return this.nodes ? this.nodes.filter(n => !n.hidden) : [];
  }
}
