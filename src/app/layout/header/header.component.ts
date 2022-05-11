import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  getProfile(){
    console.log('routing to the profile page')
    this.router.navigateByUrl('profile');
  }
  logout(){
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token')
    this.router.navigateByUrl("")
  }
  ngOnInit(): void {
  }

}
