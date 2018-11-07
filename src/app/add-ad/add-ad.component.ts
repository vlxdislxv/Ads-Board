import { Component, OnInit } from '@angular/core';
import {AsdService} from '../ads/asd.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.minLength(5),
                                                    Validators.maxLength(30),
                                                    Validators.required
    ]),
    text: new FormControl('', [Validators.minLength(10),
                                                    Validators.maxLength(40),
                                                    Validators.required]),
    picture: new FormControl('', [Validators.pattern('(http|https)://[a-z0-9/-A-Z._]{0,}(jpg|png)'),
                                                       Validators.required])
});

  constructor(private adsService: AsdService) { }

  frmSub() {
      const ads = this.adsService.getAds('');
      let id = 0;
      if (ads.length > 0) {
          id = ads[ads.length - 1].id + 1;
      }
    this.adsService.addAd(
        {id: id,
            name: this.formGroup.controls.name.value,
            text: this.formGroup.controls.text.value,
            picture: this.formGroup.controls.picture.value,
            username: 'userN'
    });

    alert('Объявление ' + this.formGroup.controls.name.value + ' добавлено');
  }

  ngOnInit() {
  }

}
