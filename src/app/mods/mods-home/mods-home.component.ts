import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modelOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modelOpen = !this.modelOpen;
  }

}
