import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should update the query when users searches by character name', (done) => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    const hostElement = fixture.nativeElement;
    const characterName = 'Rick Sanchez';

    fixture.detectChanges();
    app.query$.subscribe(x => {
      expect(x).toEqual('Rick Sanchez');
      done();
    });

    const characterNameInput: HTMLInputElement = hostElement.querySelector('input');

    characterNameInput.value = characterName;

    characterNameInput.dispatchEvent(newEvent('input'));

    fixture.detectChanges();
  });
});

/**
 * Create custom DOM event the old fashioned way
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent
 * Although officially deprecated, some browsers (phantom) don't accept the preferred "new Event(eventName)"
 */
export function newEvent(eventName: string, bubbles = false, cancelable = false) {
  let evt = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}
