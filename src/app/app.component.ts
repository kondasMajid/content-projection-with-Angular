import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  
  userInp: string = "hello input";

  title = 'blank';

  // @ViewChild(DetailsComponent,{static:false}) element: DetailsComponent;

  // @ViewChild(ChatComponent, {static:false}) chatTitle: ChatComponent

  
  ngOnInit(): void {

    // throw new Error("Method not implemented.");
  }

  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
    // console.log(this.element.title)
    // console.log(this.chatTitle.title)
  }

}
