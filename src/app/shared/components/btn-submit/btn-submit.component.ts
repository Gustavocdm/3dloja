import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-btn-submit',
  templateUrl: './btn-submit.component.html',
  styleUrls: ['./btn-submit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnSubmitComponent implements OnInit {
  @Input() btnText: string = 'enviar';
  @Input() podeEnviar: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
