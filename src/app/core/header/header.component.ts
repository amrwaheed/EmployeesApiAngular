import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService,
    private router: Router) { }
    
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.username;
    }
    return '';
  }
  ngOnInit() {
    
  }
  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

}
