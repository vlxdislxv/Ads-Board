import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AsdService} from '../ads/asd.service';

@Component({
  selector: 'app-ad-info',
  templateUrl: './ad-info.component.html',
  styleUrls: ['./ad-info.component.css']
})
export class AdInfoComponent implements OnInit {

  ad;
  constructor(private route: ActivatedRoute, adsService: AsdService) {
    this.ad = adsService.getAdById(route.snapshot.params.id);
  }

  ngOnInit() {
  }

}
