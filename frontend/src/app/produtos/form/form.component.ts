import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() produto;
  @Output() save = new EventEmitter<any>();
  public enableToSave: boolean = false;
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl(),
    preco: new FormControl(),
    

  });

  constructor() { }
  get nome(): any { return this.form.get('nome'); }
  get descricao(): any { return this.form.get('descricao'); }
  get preco(): any { return this.form.get('preco'); }
  
  ngOnChanges(changes) {
    if (changes.produto.currentValue) {
      this.form.patchValue(changes.produto.currentValue);
    }
  }
  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.enableToSave = this.form.valid;
    });
  }
  submit() {
    this.save.emit(this.form.value);
    this.form.reset();
  }

}
