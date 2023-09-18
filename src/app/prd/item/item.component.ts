import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {
  public contentHeader: object;
 
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
  public sidebarToggleRef = false;
  public rows=[];
  public selectedOption = 10;
  public temp = [];
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  

    constructor(
    private _itemService: ItemService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    // Subscribe config change
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this._itemService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
            console.log(response);
          });
        }, 450);
      } else {
        this._itemService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.rows = response;
          this.tempData = this.rows;
           console.log(response);
        });
      }
    });
  }


 toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

    ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
