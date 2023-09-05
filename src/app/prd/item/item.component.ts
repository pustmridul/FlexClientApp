import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
 public contentHeader: object;
  constructor(
        private _coreSidebarService: CoreSidebarService,
  ) { }

  ngOnInit() {
  //  this.contentHeader = {
  //     headerTitle: 'Bootstrap Tables',
  //     actionButton: true,
  //     breadcrumb: {
  //       type: '',
  //       links: [
  //         {
  //           name: 'Home',
  //           isLink: true,
  //           link: '/'
  //         },
  //         {
  //           name: 'Table',
  //           isLink: true,
  //           link: '/'
  //         },
  //         {
  //           name: 'Bootstrap Tables',
  //           isLink: false
  //         }
  //       ]
  //     }
  //   };
  }

 toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }
}