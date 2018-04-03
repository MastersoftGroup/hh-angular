import { Component, OnInit, Input } from '@angular/core';
import { HhJsonpService } from '../services/hh-jsonp.service';
import { Router } from "@angular/router";
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

@Component({
  selector: 'app-hra',
  templateUrl: './hra.component.html',
  providers: [HhJsonpService],
  styleUrls: ['./hra.component.css']
})
export class HraComponent implements OnInit {
  @Input() sot: String = '';
  @Input() locale: String = '';
  @Input() host: String= '';
  @Input() token: String= '';

  model: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  configs = {};

  constructor(private hh : HhJsonpService, private router : Router) { }

  ngOnInit() {
    this.configs = {
      sourceOfTruth: this.sot,
      featureOptions: "singleLineHitNumber:10;",
      Authorization: "Basic " + this.token
    };
  }

  search = (text$: Observable<string>) =>
     text$
       .debounceTime(300)
       .distinctUntilChanged()
       .do(() => this.searching = true)
       .switchMap(term =>
          this.hh.address(this.host, this.locale, this.configs, term)
            //.map(address => this.fullAddress)
           .do(() => this.searchFailed = false)
           .catch(() => {
             this.searchFailed = true;
            return of([]);
           }))
       .do(() => this.searching = false)
       .merge(this.hideSearchingWhenUnsubscribed);

}
