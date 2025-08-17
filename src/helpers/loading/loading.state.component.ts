import { Component } from '@angular/core';
import { LoadingService } from '../../state/Loading/LoadingState';
import { CommonModule, NgIf } from '@angular/common';

@Component({
    selector: 'loading-state-filler',
    templateUrl: './loading.state.component.html',
    styleUrls: ['./loading.state.component.scss'],
    imports: [NgIf, CommonModule]
})
export class LoadingStateComponent {
  constructor(private _loadingSerivce : LoadingService) {}
  public isLoading$ = this._loadingSerivce.isLoading$;
}