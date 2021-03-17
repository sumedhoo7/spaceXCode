import { Component, OnInit } from '@angular/core';
import { AppServer } from './app.server'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public apiResults:any = []
  title = 'spaceXcodeTest';
  public updatedData:any = []
  public headerElement = ["Flight Number","Mission Name","Launch Year","Launch Date","Details"]
  public filterOptions = [
      {displayItem:"Launch Success",value:1},
      {displayItem:"Launch And Land Success",value:2},
      {displayItem:"Launch Success And Land In 2014",value:3}
  ]

  constructor(private _appServer:AppServer){}

  ngOnInit(){
    this._appServer.getItems().subscribe(result=>{
      this.apiResults = result
      this.updatedData = result
    })
  }

  public getFilterRecord(filterValue){
    if(filterValue == 1){
      this.updatedData = this.apiResults.filter(function(eachRecord){
        if(eachRecord.launch_success == true){
          return eachRecord
        }
      })
    }
    else if(filterValue == 2){
      this.updatedData = this.apiResults.filter(function(eachRecord){
        if(eachRecord.launch_success == true && eachRecord.rocket.first_stage.cores[0].land_success == true){
          return eachRecord
        }
      })
    }
    else if(filterValue == 3){
      this.updatedData = this.apiResults.filter(function(eachRecord){
        if(eachRecord.launch_success == true && eachRecord.launch_year == "2014"){
          return eachRecord
        }
      })
    }
    else{
      this.updatedData = this.apiResults
    }
  }
}
