import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetanguloHorizontalComponent } from './retangulo-horizontal.component';

describe('RetanguloHorizontalComponent', () => {
  let component: RetanguloHorizontalComponent;
  let fixture: ComponentFixture<RetanguloHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetanguloHorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetanguloHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
