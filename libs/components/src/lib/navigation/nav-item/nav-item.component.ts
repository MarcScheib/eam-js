import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationNode } from '../navigation.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'eamx-nav-item',
  templateUrl: 'nav-item.component.html',
  styleUrls: ['nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'eamx-nav-item' },
})
export class NavItemComponent implements OnChanges {
  @Input() node: NavigationNode;
  @Input() level = 1;
  @Input() isParentExpanded = true;
  @Input() selectedNodes: NavigationNode[];

  isExpanded = false;
  isSelected = false;
  nodeChildren: NavigationNode[];

  childrenContainerClasses: { [index: string]: boolean };
  itemClasses: { [index: string]: boolean };

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

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
    this.childrenContainerClasses = {
      collapsed: !this.isExpanded,
      expanded: this.isExpanded,
      selected: this.isSelected,
    };

    this.itemClasses = {
      ['level-' + this.level]: true,
      ...this.childrenContainerClasses,
    };

    if (this.level === 1 && this.isExpanded) {
      this.renderer.addClass(this.elementRef.nativeElement, 'expanded');
    } else if (this.level === 1 && !this.isExpanded) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'expanded');
    }
  }

  headerClicked(): void {
    this.isExpanded = !this.isExpanded;
    this.setClasses();
  }
}
