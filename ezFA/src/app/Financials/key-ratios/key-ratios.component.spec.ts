import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRatiosComponent } from './key-ratios.component';

describe('KeyRatiosComponent', () => {
  let component: KeyRatiosComponent;
  let fixture: ComponentFixture<KeyRatiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyRatiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyRatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
