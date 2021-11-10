import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addBox() {
    var newBox = document.createElement("div");
    newBox.style.height = "100px";
    //newBox.classList.add("box");
    newBox.setAttribute("cdkDrag", "");
    newBox.style.zIndex = "1";
    newBox.style.backgroundColor = "gray";
    
    (<HTMLDivElement>document.getElementById("box-container")).appendChild(newBox);
    console.log("added box");
  }

}
