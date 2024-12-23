import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

selectedItem:any;
updateSelected(item:any) {
this.selectedItem=item.textContent.trim();
console.log(item.textContent)
}


}
