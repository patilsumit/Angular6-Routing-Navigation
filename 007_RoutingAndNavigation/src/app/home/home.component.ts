import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userNavigate: Router) { }

  ngOnInit() {
  }

  // Method to navitate to followers component
  routeToGit() {

    this.userNavigate.navigate(['/followers']);

  } 

  // Method to navigate to posts component 
  routeToPost(){

    this.userNavigate.navigate(['/posts']);

  }
}
