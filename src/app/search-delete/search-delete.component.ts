import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';
import { User } from '../user'

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
  email:string;
  
  constructor(private service:UserRegistationService) { }


public deleteUser(user:User){
 let resp= this.service.deleteUser(user.email);
 resp.subscribe((data)=>this.users.map=data);
// console.log(user.email);
 this.ngOnInit();
}

public findUserByEmailId(email:string){
  let resp= this.service.getUserByEmail(this.email);
  resp.subscribe((data)=>this.users.map=data);
  
 }

  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

}
