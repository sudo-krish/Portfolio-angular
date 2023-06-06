import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplasScreenComponent } from './splas-screen.component';

describe('SplasScreenComponent', () => {
  let component: SplasScreenComponent;
  let fixture: ComponentFixture<SplasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplasScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
