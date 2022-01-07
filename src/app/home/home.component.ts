import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') public stepper!: MatStepper;

  public greeting = 'Welcome to Home!';

  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;

  public numberOrUndefined: number | undefined;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    console.log(this.stepper.steps);
    // setTimeout(() => this.stepper.next());
  }
}
