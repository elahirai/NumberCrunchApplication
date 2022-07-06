import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  selectedDesign: any = '';
  bordered: boolean = false;
  simple: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeDesign(){
    console.log(this.selectedDesign)
    if(this.selectedDesign === "bordered"){
      this.bordered = true;
      this.simple = false;
    }else if(this.selectedDesign === "simple"){
      this.bordered = false
      this.simple = true
    }
    else{
      this.bordered = false;
      this.simple = false
    }

  }
}
