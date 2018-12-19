import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GithubserviceService} from '../githubservice.service';
@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubprofileComponent implements OnInit {

  data:any[];
   myURL='http://api.github.com/users/';
  id:string;

  constructor(private route: ActivatedRoute,private service:GithubserviceService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
        this.id = params.get('login');
        console.log("The ID is" + this.id);

      });


     this.service.getHttp(this.myURL + this.id).subscribe(Response=>{
         this.data=Response.json();
         console.log(this.data);
     });  



     

  }
  
}
