import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'eamx-loading-indicator',
  templateUrl: 'loading-indicator.component.html',
  styleUrls: ['loading-indicator.component.scss'],
})
export class LoadingIndicatorComponent implements OnChanges {
  @Input() loading = false;

  isLoading = false;
  private isLoadingTimeout: any;

  constructor(private readonly cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.loading) {
      // stop loading timeout (which, when render is fast, means loading indicator was never shown)
      clearTimeout(this.isLoadingTimeout);
      if (this.loading) {
        // show loading indicator if not hidden again within brief time
        this.isLoadingTimeout = setTimeout(() => {
          this.isLoading = true;
          this.cd.markForCheck();
        }, 200);
      } else {
        // if loading indicator has been shown, keep it for at least 500ms (to avoid flashing)
        setTimeout(() => {
          this.isLoading = false;
          this.cd.markForCheck();
        }, 400);
      }
    }
  }
}
