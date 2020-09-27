import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentSearchComponent } from './components/student-search/student-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentEditComponent,
    StudentSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
