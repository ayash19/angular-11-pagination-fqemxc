import { Component, VERSION, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  startIndex = 0;
  endIndex = 5;
  data$:Observable<any>;
  constructor(private httpClient:HttpClient){    
  } 
  getArrayLenght(length){
    return new Array(length/20)
  }
  ngOnInit(){
    this.data$ =  this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }

  getIndex(pageIndex){
    this.startIndex = pageIndex * 5;
   this.endIndex = this.startIndex + 5;
   console.log(this.startIndex);
  }
  prevIndex(length){
    this.startIndex = length * 0;
    console.log(this.startIndex)
  }
  nextIndex(endIndex){
    this.endIndex++
    console.log(this.endIndex)
  }
}
