import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../common/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const moduleImport = [CommonModule, MaterialModule, FlexLayoutModule];

@NgModule({
  declarations: [],
  imports: [moduleImport],
  exports: [moduleImport],
})
export class SharedModule {}
