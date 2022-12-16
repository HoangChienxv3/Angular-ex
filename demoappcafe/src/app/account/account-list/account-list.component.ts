import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User, UserListConfig, UserService } from 'src/app/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  formSearch: FormGroup | any;

  users: User[] | any;
  errors: Object = {};
  userDetail: User = {
    id: '',
    createdAt: '',
    name: '',
    avatar: '',
    password: '',
    username: ''
  };
  cf: UserListConfig = {
    filters: {}
  };
  constructor(
    private userService: UserService
  ) {
    console.log("list");

  }
  ngOnInit(): void {
    this.getListAccount(this.cf);
    this.formSearch = new FormGroup({
      id: new FormControl(this.userDetail.id),
      username: new FormControl(this.userDetail.username),
      name: new FormControl(this.userDetail.name)
    });
    console.log("on list");

  }

  

  getAccountDetail(id: string) {
    this.userService.get(id).subscribe(
      (data: User) => {
        this.userDetail = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  AccountDetail(user: User) {
    this.userDetail = user;
  }

  getListAccount(config: UserListConfig) {
    this.userService.query(config).subscribe(
      data => {
        this.users = data;
        this.userDetail = this.users[0];
      },
      err => {
        console.log(err);
      }
    )
  }

  onClickSearch() {
    const data = this.formSearch.value;
    console.log(this.formSearch.value);
    this.cf.filters.id = data.id;
    this.cf.filters.username = data.username;
    this.cf.filters.name = data.name;

    this.getListAccount(this.cf);
  }

}
