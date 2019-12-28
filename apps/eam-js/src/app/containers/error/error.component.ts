import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ErrorService } from '../../error.service';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent implements OnInit {
  constructor(private readonly errorService: ErrorService) {}

  ngOnInit() {}
}
