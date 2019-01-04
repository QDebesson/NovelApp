import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNovelComponent } from './create-novel.component';

describe('CreateNovelComponent', () => {
  let component: CreateNovelComponent;
  let fixture: ComponentFixture<CreateNovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNovelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
