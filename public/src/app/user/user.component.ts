import { Component, OnInit } from '@angular/core';
import { User } from './../User';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = new User(); 

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this._apiService.user = null; 
  }

  onSubmit(){
    this._apiService.user = this.user; 
    this._router.navigateByUrl('/dashboard')
  }

}
