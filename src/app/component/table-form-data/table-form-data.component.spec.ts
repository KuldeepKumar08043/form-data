import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFormDataComponent } from './table-form-data.component';

describe('TableFormDataComponent', () => {
  let component: TableFormDataComponent;
  let fixture: ComponentFixture<TableFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFormDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
