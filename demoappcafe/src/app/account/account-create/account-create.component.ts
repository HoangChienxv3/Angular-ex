import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  formCreate: FormGroup = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl('Abc@123'),
    avatar: new FormControl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJF7LAdiF7JlRs24nLsBKz7nWamkcdXPODQ&usqp=CAU')
  });

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
  }

  onSubmitCreate(){

  }

}
