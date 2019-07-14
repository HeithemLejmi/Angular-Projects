import { Component, OnInit, Input } from '@angular/core';
// Services
import { AppareilService } from '../service/appareil.service';
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  constructor(private appareilService: AppareilService) {
  }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
  if (this.getStatus() === 'éteint') {
    return'red';
  } else {
    return 'green';
  }
  }
  onSwitch() {
if ( this.appareilStatus === 'éteint') {
  this.appareilService.switchOnOne(this.index);
} else if ( this.appareilStatus === 'allumé') {
  this.appareilService.switchOffOne(this.index);
}
  }
  }

