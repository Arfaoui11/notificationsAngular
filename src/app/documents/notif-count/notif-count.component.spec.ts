import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifCountComponent } from './notif-count.component';

describe('NotifCountComponent', () => {
  let component: NotifCountComponent;
  let fixture: ComponentFixture<NotifCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
