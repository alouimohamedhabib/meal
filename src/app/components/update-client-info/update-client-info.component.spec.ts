import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientInfoComponent } from './update-client-info.component';

describe('UpdateClientInfoComponent', () => {
  let component: UpdateClientInfoComponent;
  let fixture: ComponentFixture<UpdateClientInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
