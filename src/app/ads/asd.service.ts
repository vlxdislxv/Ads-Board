import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable()
export class AsdService {
    asds = [
        {id: 1, name: 'asd1', text: 'text1', picture: 'https://hsto.org/files/8bc/360/ba3/8bc360ba3d7f48fb8244112d5a5814e0.png'},
        {id: 2, name: 'asd2', text: 'text2', picture: 'https://hsto.org/files/8bc/360/ba3/8bc360ba3d7f48fb8244112d5a5814e0.png'}
    ];

    constructor(private httpClient: HttpClient) {
    }


    getAds(str) {
        const rads = [];
        for (let i = 0; i < this.asds.length; i++) {
            if (this.asds[i].name.includes(str)) {
                rads.push(this.asds[i]);
            }
        }
        return rads;
    }

    getAdById(id) {
        return this.asds[id - 1];
    }

    addAd(ad) {
        this.asds.push(ad);
        // const params = new HttpParams().set('username', ad.username);
        // const options = {
        //     'headers': new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded')
        // };
        // return this.httpClient.post('http://localhost:3000/add-ad/', params.toString(), options);
    }
}
