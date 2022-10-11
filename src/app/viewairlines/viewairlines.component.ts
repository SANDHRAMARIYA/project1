import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewairlines',
  templateUrl: './viewairlines.component.html',
  styleUrls: ['./viewairlines.component.css']
})
export class ViewairlinesComponent implements OnInit {

  constructor(private myapi:ApiService) {
this.fetchData()
   }



fetchData=()=>{
  this.myapi.viewairlines().subscribe(
    (data)=>{
      this.airlinesData=data
    }
  )
}







  airlinesData:any=[]
  ngOnInit(): void {
  }



  
}
