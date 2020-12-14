import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, AfterContentInit {
  name: string;
  information: string;
  constructor() {
    this.name = "Евгений";
    this.information = "";
  }

  
  @Input() userName: string = "default";
  _userAge : number = 123;

  @Input()
  set userAge(age : number){
    if (age < 0){
      this._userAge = 0;
    }
    else if (age > 100){
      this._userAge = 100;
    }
    else {
      this._userAge = age;
    }
  }

  get userAge() {
    return this._userAge;
  }

  @Output() onChanged = new EventEmitter<boolean>();

  change(increased : boolean){
    this.onChanged.emit(increased);
  }

  ngOnInit(){
    console.log("ngOnInit")
  }
  ngOnChanges(){
    console.log("ngOnChanges")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }
}
