import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SnackService } from '../../services/snack.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Snack } from '../../models/snack';


@Component({
  selector: 'app-snack-form',
  templateUrl: './snack-form.component.html',
  styleUrls: ['./snack-form.component.css']
})
export class SnackFormComponent implements OnInit {

  @Output()
  submitSnack = new EventEmitter<Snack>();
  submitSnacks = new EventEmitter<Snack[]>();

  snackForm: FormGroup;
  snacksForm: FormGroup;

  formGroup: FormGroup[] = [];

  constructor(private snackService: SnackService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.snackForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      image: new FormControl('', [Validators.required, Validators.minLength(2)]),
      price: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });
    this.formGroup.push(this.snackForm);
  }

  actionBtnPlusForm() {
    this.initForm();
  }

  saveSnack() {
    console.log(this.snackForm.value);
    const snack: Snack = this.snackForm.value;

    this.submitSnack.emit(snack);

    this.snackForm.reset();

    this.snackService.postSnack(snack).subscribe(
      s => {
        console.log('res', s)
        this.submitSnack.emit(s);
      }
    );
  }

  saveListeSnack() {
    console.log(this.snacksForm.value);
    const snacks: Snack[] = this.snacksForm.value;

    this.submitSnacks.emit(snacks);

    this.snacksForm.reset();

    this.snackService.postListeSnacks(snacks).subscribe(
      ss => {
        console.log('res', ss)
        this.submitSnacks.emit(ss);
      }
    );
  }
}
