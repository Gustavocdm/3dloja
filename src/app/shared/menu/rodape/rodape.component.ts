import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RodapeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
