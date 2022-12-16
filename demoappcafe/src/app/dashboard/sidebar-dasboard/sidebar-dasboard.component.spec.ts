import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDasboardComponent } from './sidebar-dasboard.component';

describe('SidebarDasboardComponent', () => {
  let component: SidebarDasboardComponent;
  let fixture: ComponentFixture<SidebarDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarDasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
