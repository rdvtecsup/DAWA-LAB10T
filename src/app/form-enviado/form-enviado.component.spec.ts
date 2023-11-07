import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnviadoComponent } from './form-enviado.component';

describe('FormEnviadoComponent', () => {
  let component: FormEnviadoComponent;
  let fixture: ComponentFixture<FormEnviadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEnviadoComponent]
    });
    fixture = TestBed.createComponent(FormEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
