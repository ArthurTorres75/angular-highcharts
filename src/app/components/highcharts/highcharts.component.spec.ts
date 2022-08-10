import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsComponent } from './highcharts.component';

describe('HighchartsComponent', () => {
  let component: HighchartsComponent;
  let fixture: ComponentFixture<HighchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
