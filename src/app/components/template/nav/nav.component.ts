import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToLogout() : void {
    if (confirm("Deseja realmente fazer logout do sistema?") == true) {
      this.router.navigate(['/'])
    }
  }

}
