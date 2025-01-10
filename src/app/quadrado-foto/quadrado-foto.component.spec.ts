import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadradoFotoComponent } from './quadrado-foto.component';

describe('QuadradoFotoComponent', () => {
  let component: QuadradoFotoComponent;
  let fixture: ComponentFixture<QuadradoFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadradoFotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadradoFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
