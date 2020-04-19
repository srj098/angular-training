import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalTxComponent } from './withdrawal-tx.component';

describe('WithdrawalTxComponent', () => {
  let component: WithdrawalTxComponent;
  let fixture: ComponentFixture<WithdrawalTxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalTxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
