import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { NavigationNode } from '../navigation.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'eamx-nav-item',
  templateUrl: 'nav-item.component.html',
  styleUrls: ['nav-item.component.scss'],
})
export class NavItemComponent implements OnChanges {
  @Input() node: NavigationNode;
  @Input() level = 1;
  @Input() isParentExpanded = true;
  @Input() selectedNodes: NavigationNode[];

  isExpanded = false;
  isSelected = false;
  classes: { [index: string]: boolean };
  nodeChildren: NavigationNode[];

  ngOnChanges(): void {
    this.nodeChildren =
      this.node && this.node.children
        ? this.node.children.filter(n => !n.hidden)
        : [];

    if (this.selectedNodes) {
      const ix = this.selectedNodes.indexOf(this.node);
      this.isSelected = ix !== -1; // this node is the selected node or its ancestor
      this.isExpanded = this.isParentExpanded && this.isSelected;
    } else {
      this.isSelected = false;
    }

    this.setClasses();
  }

  setClasses(): void {
    this.classes = {
      ['level-' + this.level]: true,
      collapsed: !this.isExpanded,
      expanded: this.isExpanded,
      selected: this.isSelected,
    };
  }

  headerClicked(): void {
    this.isExpanded = !this.isExpanded;
    this.setClasses();
  }
}
