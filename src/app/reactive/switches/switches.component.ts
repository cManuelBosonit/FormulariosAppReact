import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required ],
    notifiaciones: [true, Validators.required ],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notifiaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset( {
      ...this.persona,
    condiciones: false
    });

    /* this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
      console.log(newValue);
    }) */

    this.miFormulario.valueChanges.subscribe( ({condiciones,...rest}) => {
      //delete form.condiciones
      this.persona = rest;
    })
  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    this.persona = formValue;
  }

}
