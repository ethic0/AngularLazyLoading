import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){}
  auth = false;

  ngOnInit(): void {
    var token = localStorage.getItem('token')
    if(token){
      this.auth = true
    this.router.navigateByUrl("dashboard")
    }
    else
    this.auth = false
    
  }
}
