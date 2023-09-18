import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { ItemUnit } from '../item';


@Component({
  selector: 'app-new-item-unit',
  templateUrl: './new-item-unit.component.html',
  styleUrls: ['./new-item-unit.component.scss']
})


export class NewItemUnitComponent implements OnInit {
 
  itemUnit= new ItemUnit();
  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _coreSidebarService: CoreSidebarService) {}

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this.itemUnit= new ItemUnit();
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
      console.log(this.itemUnit);
      this.toggleSidebar('new-item-unit');
    }
  }

  ngOnInit(): void {}
}
