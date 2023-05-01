import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-email',
  templateUrl: './confirmation-email.component.html',
  styleUrls: ['./confirmation-email.component.scss']
})
export class ConfirmationEmailComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

}
