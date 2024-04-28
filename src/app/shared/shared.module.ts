import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { PipesModule } from '../layouts/dashboard/pages/pipes/pipes.module';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';



@NgModule({
  declarations: [
    FormFieldValidationErrorsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatTableModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatSelectModule,MatIconModule,FormFieldValidationErrorsPipe,
  ],
})
export class SharedModule { }

