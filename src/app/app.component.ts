import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingStateComponent } from '@helpers/loading/loading.state.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  imports: [CommonModule, RouterOutlet, LoadingStateComponent]
})
export class AppComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
}