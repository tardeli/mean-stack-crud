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
  data = new FormGroup({
    nome: new FormControl('', Validators.required),
    descricao: new FormControl(),
    preco: new FormControl()

  });

  constructor() { }
  get nome(): any { return this.data.get('nome'); }
  get descricao(): any { return this.data.get('descricao'); }
  get preco(): any { return this.data.get('preco'); }
  
  ngOnChanges(changes) {
    if (changes.produto.currentValue) {
      this.data.patchValue(changes.produto.currentValue);
    }
  }
  ngOnInit() {
    this.data.valueChanges.subscribe(() => {
      this.enableToSave = this.data.valid;
    });
  }
  submit() {
    this.save.emit({...this.data.value});
    this.data.reset();
  }

}
