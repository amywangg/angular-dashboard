import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatAutocomplete } from '@angular/material';
import { Router } from '@angular/router';

import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-files-add',
  templateUrl: './files-add.component.html',
  styleUrls: ['./files-add.component.css']
})
export class FilesAddComponent implements OnInit {
  fileToUpload: File = null;
  fileForm: FormGroup;

  applications: string[] = ['Fidelity.ca', 'AiWeb'];
  servers: string[] = ['Production', 'QA', 'Development'];

  constructor(private router: Router, private api: FileService, private formBuilder: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.fileForm = this.formBuilder.group({
      nameControl: [null, Validators.required],
      pathControl: [null, Validators.required],
      appControl: [null, Validators.required],
      serverControl: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    console.log(this.fileForm);

    if (this.fileForm.valid && $('#file').val()!='') {
      const data = this.fileForm.value;
      this.api.addFile(data);
    }
  }
}
