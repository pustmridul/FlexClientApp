import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';


@Component({
  selector: 'app-new-item-unit',
  templateUrl: './new-item-unit.component.html',
  styleUrls: ['./new-item-unit.component.scss']
})


export class NewItemUnitComponent implements OnInit {
  public fullname;
  public username;
  public email;

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
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Submit
   *
   * @param form
   */
  submit(form) {
    if (form.valid) {
      this.toggleSidebar('new-item-unit');
    }
  }

  ngOnInit(): void {}
}
