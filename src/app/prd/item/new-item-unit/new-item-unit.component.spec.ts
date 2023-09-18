import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemUnitComponent } from './new-item-unit.component';

describe('NewItemUnitComponent', () => {
  let component: NewItemUnitComponent;
  let fixture: ComponentFixture<NewItemUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewItemUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
