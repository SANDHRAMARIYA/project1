import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewpassenger',
  templateUrl: './viewpassenger.component.html',
  styleUrls: ['./viewpassenger.component.css']
})
export class ViewpassengerComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }




  fetchData=()=>{
    this.myapi.viewpassengers().subscribe(
      (data)=>{
        this.passengerData=data
      }
    )
  }



  passengerData:any={}
  
  ngOnInit(): void {
  }

}
