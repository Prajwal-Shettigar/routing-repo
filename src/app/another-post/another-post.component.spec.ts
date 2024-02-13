import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPostComponent } from './another-post.component';

describe('AnotherPostComponent', () => {
  let component: AnotherPostComponent;
  let fixture: ComponentFixture<AnotherPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnotherPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnotherPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
