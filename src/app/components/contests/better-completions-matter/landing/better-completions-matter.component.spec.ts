import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterCompletionsMatterComponent } from './better-completions-matter.component';

describe('BetterCompletionsMatterComponent', () => {
  let component: BetterCompletionsMatterComponent;
  let fixture: ComponentFixture<BetterCompletionsMatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterCompletionsMatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetterCompletionsMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
