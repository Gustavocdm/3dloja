import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Output() voltarHome = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onVoltarHome() {
    this.voltarHome.next();
  }

}
