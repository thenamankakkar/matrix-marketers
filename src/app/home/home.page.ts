import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../services.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  posts;
  ngOnInit(): void {
    this.service.getApi().subscribe(res=>{
      this.posts = res
      console.log("res",res)
    })
  }

  constructor(private service : ServicesService) {}

}
