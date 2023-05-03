import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-expired',
  templateUrl: './link-expired.component.html',
  styleUrls: ['./link-expired.component.scss']
})
export class LinkExpiredComponent  implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

}
