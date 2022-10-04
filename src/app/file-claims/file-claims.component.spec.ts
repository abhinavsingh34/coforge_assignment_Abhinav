import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileClaimsComponent } from './file-claims.component';

describe('FileClaimsComponent', () => {
  let component: FileClaimsComponent;
  let fixture: ComponentFixture<FileClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileClaimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
