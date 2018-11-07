import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  @Input() ad;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getAdInfo() {
      this.router.navigate(['/ad-info/' + this.ad.id]);
  }
}
