import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  que;
  question; 

  constructor(private _apiService: ApiService,private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe((params)=>{
			this.que=params.get("id")
    })
  }

  ngOnInit() {
    console.log('on init', this.que)
    this._apiService.show(this.que,res=>{
      this.question=res;
    })
    console.log(this.question)
  }

  vote(idx){
    if(idx==1){
      this.question.vote1 += 1;
    }else if(idx==2){
      this.question.vote2 += 1;
    }else if(idx==3){
      this.question.vote3 += 1; 
    }else if(idx==4){
      this.question.vote4 += 1; 
    }
    this._apiService.update(this.question, res=>{})
  }
}
