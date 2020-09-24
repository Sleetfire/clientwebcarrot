import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsDetailsComponent } from './collections-details.component';

describe('CollectionsDetailsComponent', () => {
  let component: CollectionsDetailsComponent;
  let fixture: ComponentFixture<CollectionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
