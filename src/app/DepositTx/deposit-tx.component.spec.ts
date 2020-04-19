import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositTxComponent } from './deposit-tx.component';

describe('DepositTxComponent', () => {
  let component: DepositTxComponent;
  let fixture: ComponentFixture<DepositTxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositTxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
