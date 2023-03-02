import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcmLeaderboardComponent } from './bcm-leaderboard.component';

describe('BcmLeaderboardComponent', () => {
  let component: BcmLeaderboardComponent;
  let fixture: ComponentFixture<BcmLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcmLeaderboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcmLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
