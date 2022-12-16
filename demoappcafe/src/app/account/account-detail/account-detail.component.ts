import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models';


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Input()
  user: User | any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

}
