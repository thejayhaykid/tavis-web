import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcmPlayerComponent } from './bcm-player.component';

describe('BcmPlayerComponent', () => {
  let component: BcmPlayerComponent;
  let fixture: ComponentFixture<BcmPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcmPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcmPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
