import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorLedPage } from './cor-led.page';

describe('CorLedPage', () => {
  let component: CorLedPage;
  let fixture: ComponentFixture<CorLedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorLedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorLedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
