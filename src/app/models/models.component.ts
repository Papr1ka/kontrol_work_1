import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  model = { 
    id: 1,
    name: "default",
    date: 2015, 
    cost: 10000 
    }
  
  constructor(private router: Router, private route: ActivatedRoute){
    let di = route.params["_value"]["id"]
    let storage = localStorage.getItem(di)
    console.log(storage['name'])
    this.model.id = this.route.snapshot.queryParamMap.get('id');
    console.log(this.model.id)
    this.model.name = storage['name']
    this.model.date = storage['date']
    this.model.cost = storage['cost']
  }

   
    
    ngOnInit(): void {
      
    }

}
