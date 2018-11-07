import {Component, OnInit} from '@angular/core';
import {AsdService} from './asd.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  ads;
  ttext = '';
  constructor(private adsService: AsdService) { }

  ngOnInit() {
    this.ads = this.adsService.getAds(this.ttext);
  }

  keyUp() {
    this.ads = this.adsService.getAds(this.ttext);
  }
}
