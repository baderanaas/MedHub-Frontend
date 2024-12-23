import { AfterContentChecked, ChangeDetectorRef, Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit{
  ngOnInit(): void {
  console.log(this.selectedRoute);
    
    if(this.acr.snapshot.title){
      this.component=this.acr.snapshot.title;
      
    }
  }


 acr=inject(ActivatedRoute)
  component:string='';
  @Input() selectedRoute:any;
  

}
