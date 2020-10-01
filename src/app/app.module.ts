import { InMemoryDb } from './in-memory-db';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentSearchComponent } from './components/student-search/student-search.component';
import { ExponentPipe } from './pipes/exponent.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentEditComponent,
    StudentSearchComponent,
    ExponentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDb)
  ],
  providers: [
    ExponentPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
