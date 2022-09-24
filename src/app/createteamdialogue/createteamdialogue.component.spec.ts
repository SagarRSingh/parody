import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateteamdialogueComponent } from './createteamdialogue.component';

describe('CreateteamdialogueComponent', () => {
  let component: CreateteamdialogueComponent;
  let fixture: ComponentFixture<CreateteamdialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateteamdialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateteamdialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
