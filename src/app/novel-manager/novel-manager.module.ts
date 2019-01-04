import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { PickerComponent } from './picker/picker.component';
import { NovelService } from './services/novel.service';
import { DeleteNovelComponent } from './delete-novel/delete-novel.component';
import { CreateNovelComponent } from './create-novel/create-novel.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  declarations: [PickerComponent, DeleteNovelComponent, CreateNovelComponent],
  providers: [NovelService],
  exports: [PickerComponent],
  entryComponents: [DeleteNovelComponent, CreateNovelComponent]
})
export class NovelManagerModule {
}
