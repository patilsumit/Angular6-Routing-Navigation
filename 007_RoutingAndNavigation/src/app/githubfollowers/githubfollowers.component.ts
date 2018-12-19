import { GithubserviceService } from './../githubservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {

  followers: any[];

  constructor(private route: ActivatedRoute, private service: GithubserviceService) { }

  ngOnInit() {
    
    // Method to get all the GIT followers and display them
    this.service.getAll()
      .subscribe(response => 
        { this.followers = response.json();}
      );

    // Method to demonstrate getting query parameters from the view 
    this.route.queryParamMap.
      subscribe(params => {
        console.log("The optional parameters are" + params);
        
        let pageNumber = params.get('page');
        let sortOrder = params.get('order');

        console.log("The actual values" + pageNumber + sortOrder);

      });
  }

}
