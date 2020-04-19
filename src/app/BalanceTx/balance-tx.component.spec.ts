import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceTxComponent } from './balance-tx.component';

describe('BalanceTxComponent', () => {
  let component: BalanceTxComponent;
  let fixture: ComponentFixture<BalanceTxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceTxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
