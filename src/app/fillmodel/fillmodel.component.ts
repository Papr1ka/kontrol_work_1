import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-fillmodel',
  templateUrl: './fillmodel.component.html',
  styleUrls: ['./fillmodel.component.css'],
  providers: [DataService]
})
export class FillmodelComponent implements OnInit{
  item = {
    id: 0,
    name: "default",
    date: "1",
    cost: 100
  }

  clickCount:number=0;

  constructor(private router: Router, private dataService: DataService) {
    
  }

  goToItem(item: any){
    this.router.navigate(['/models', item.id], {
      queryParams: {
        "name": item.name,
        "date": item.date,
        "cost": item.cost
      }
    })
  }
  OnInit(){}

  models: any[] = [];
  public addModel(model: any){
    var obj = {
      "id": model.id,
      "name": model.name,
      "date": model.date,
      "cost": model.cost
    }
    var d = JSON.stringify(obj);
    localStorage.setItem(model.id, d);
    console.log(d)

    this.router.navigate(['/models', model.id], {
      queryParams: {
        "id": model.id,
        "name": model.name,
        "date": model.date,
        "cost": model.cost
      }
    })
  }


}
