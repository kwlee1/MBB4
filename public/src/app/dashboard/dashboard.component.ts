import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user; 
  questions; 

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this.user = this._apiService.user; 
    this._apiService.all((res)=>{
      console.log(res);
      this.questions=res;
    })
  }

  onDelete(id){
    console.log('delete',id)
    this._apiService.delete(id);
  }

}
