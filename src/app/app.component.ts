import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  query$: Observable<string>;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      query: null
    });
  }

  get query() { return this.form.get('query'); }

  ngOnInit() {
    this.query$ = this.query.valueChanges
      .pipe(debounceTime(300));
  }
}
