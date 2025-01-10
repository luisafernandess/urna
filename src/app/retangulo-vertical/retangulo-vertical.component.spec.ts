import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetanguloVerticalComponent } from './retangulo-vertical.component';

describe('RetanguloVerticalComponent', () => {
  let component: RetanguloVerticalComponent;
  let fixture: ComponentFixture<RetanguloVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetanguloVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetanguloVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
