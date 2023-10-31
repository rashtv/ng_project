import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Drink} from "../../models/drink/drink";
import {ApiService} from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-alco-detail',
  templateUrl: './alco-detail.component.html',
  styleUrls: ['./alco-detail.component.css']
})
export class AlcoDetailComponent {
  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  curID: string = '';
  curDrink: Drink | undefined;

  async getData() {
    this.curID = await this.route.snapshot.params['id'];
    const res = await this.api.get_by_id(this.curID);
    this.curDrink = res.drinks[0];
    console.log(res.drinks[0]);
  }

  // dataObs() {
  //   this.api.sharedData.subscribe((array) => {
  //     this.curDrink = array;
  //   });
  // }
  ngOnInit() {
    this.getData();
    // this.dataObs();
    // setInterval(() => {
    //   console.log(this.curDrink)
    // }, 1000);
  }
}
