import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeTitleStyle = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  clickMe() {
    this.homeTitleStyle = !this.homeTitleStyle;
    console.log('clicked!');
  }

}
