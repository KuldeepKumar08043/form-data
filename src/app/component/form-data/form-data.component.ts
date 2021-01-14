import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent {
  title = 'form';
  myform = new FormGroup({
    lname: new FormControl(),
    city: new FormControl()
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private formService: FormService) {
    this.createForm();
  }

  createForm() {
    this.myform = this.formBuilder.group({
      fname: '',
      lname: '',
      city: ''
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      var encryptedData = window.btoa(JSON.stringify(this.myform.value));
      this.router.navigate(['table-data'], { queryParams: { data: encryptedData } });
    }
  }
}
