import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    console.log('on init works');
  }
  selectedItem = '';
  logged = false;
  // updateSelected(item: any) {
  //   this.selectedItem = item.textContent.trim();
  // }
}
