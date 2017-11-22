import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { Question } from './../Question'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newQue = new Question(); 

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this.newQue.user = this._apiService.user.name;  
    console.log(this.newQue)
  }

  onSubmit(){
    console.log("submit to component")
    this.newQue.vote1 = 0; 
    this.newQue.vote2 = 0; 
    this.newQue.vote3 = 0; 
    this.newQue.vote4 = 0; 
    console.log(this.newQue)
		this._apiService.create(this.newQue, (createres)=>{
			this._router.navigateByUrl('/dashboard');
		})
	}

}
