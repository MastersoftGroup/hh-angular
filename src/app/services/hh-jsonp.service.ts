import { Injectable } from '@angular/core';
// Import HttpClient class
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {URLSearchParams} from '@angular/http';

@Injectable()
export class HhJsonpService {

  // Inject HttpClient class
  constructor(private http: HttpClient) { }

  address(host, locale, config, fullAddress){
    let params = new URLSearchParams();
    params.set('fullAddress', fullAddress);
    for(let key in config){
        params.set(key, config[key]);
    }

    let url =  `${host}/harmony/rest/${locale}/address?`
              + params.toString();

    // return back a list of full addresses
    return this.http.jsonp(url,'callback').map(
      (res:Response) => {

          var addresses=[];
          for (let item of (<any>res).payload) {
          //  console.log(item.fullAddress);
            addresses.push(item.fullAddress);
          }
          return  addresses;
    });
  }

}
