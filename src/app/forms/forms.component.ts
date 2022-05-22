import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [DataService]
})
export class FormsComponent implements OnInit {

  dataForm: FormGroup;
  formSubmitPost: any;
  firstname: string = '';
  lastname: string = '';
  tableData: any = [];
  fnameError = 'First Name field is required';
  lnameError = 'Lirst Name field is required';

  constructor(private fb: FormBuilder, private _dataservice: DataService) {
    this.dataForm = fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', [Validators.required]],
      'validate': ''
    });

  }

  submitFormData(formSubmitPost: { firstname: string; lastname: string; }) {
    this.firstname = formSubmitPost.firstname;
    this.lastname = formSubmitPost.lastname;
    this._dataservice.addFormData(formSubmitPost).subscribe(res => {
      if (res) {
        this.getData();
        alert("Saved Successfully");
        this.dataForm.reset();
      }
    })
  }
  getData() {
    this._dataservice.getFormData().subscribe(res => {
      this.tableData = res;
    })
  }
  ngOnInit() {

    this.getData();
  }
}
