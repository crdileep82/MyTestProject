import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-element',
  templateUrl: './dynamic-element.component.html',
  styleUrls: ['./dynamic-element.component.css']
})
export class DynamicElementComponent implements OnInit {
  public myForm: FormGroup;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this._fb.group({
      FrontEnd: [''],
      languages: this._fb.array([this.initlanguage()])
    });
  }

  initlanguage() {
    return this._fb.group({
      Angular2: [''],
      React: ['']
    });
  }

  addLanguage() {
    const control = <FormArray>this.myForm.controls['languages'];
    control.push(this.initlanguage());
  }
  removeLanguage(i: number) {
    const control = <FormArray>this.myForm.controls['languages'];
    control.removeAt(i);
  }
  save(model: any) {
    console.log(model);
  }
}
