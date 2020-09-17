import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovePreviewComponent } from './move-preview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovePreviewComponent', () => {
  let component: MovePreviewComponent;
  let fixture: ComponentFixture<MovePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovePreviewComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
