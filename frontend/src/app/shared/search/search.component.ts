import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  constructor() { }

  form = new FormGroup({
    search: new FormControl()
  });
  
  ngOnInit() {
  }
  submit(term) {
    this.search.emit(term);
    this.search.unsubscribe;
    this.form.reset();
    
  }
}
