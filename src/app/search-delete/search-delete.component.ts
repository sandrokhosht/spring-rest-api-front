import { Component, OnInit } from '@angular/core';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
  name:string;
  domain:string;
  experience:number;
  email:string;
  
  constructor(private service:UserRegistationService) { }




public findUserByEmailId(email:string){
  let resp= this.service.getUserByEmail(this.email);
  resp.subscribe((data)=>this.users.map=data);
  
 }

 public deleteUser(email:string) {
  let resp= this.service.deleteUser(this.email);
  resp.subscribe((data)=>this.users.map=data);
  this.ngOnInit();
}

  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
    
  }

}
