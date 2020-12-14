import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


function allStorage() {

  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
  }

  return values;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  private models: string[] = [];
  private Sub

  constructor(private route: ActivatedRoute) { 
    this.Sub = route.queryParams.subscribe(qparams => { 
    if (qparams["id"] !== undefined) { 
    this.models.push(qparams["id"]); 
    
    let data = JSON.stringify({ 
    id: qparams["id"], 
    product: qparams["name"], 
    date: qparams["date"], 
    price: qparams["cost"], 
    }); 
    localStorage.setItem(qparams["id"], data); 
    } 
    })
    }

}
