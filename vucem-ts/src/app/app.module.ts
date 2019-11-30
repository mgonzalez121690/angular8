import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatAutocompleteModule, MatFormFieldModule } from  '@angular/material';
import { StartComponent } from './start/start.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ShowResponsesComponent } from './show-responses/show-responses.component';
import { SearchComponent } from './search/search.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ShowQuestionsComponent } from './show-questions/show-questions.component';
import { InputSearchComponent } from './input-search/input-search.component';

import { HttpClientModule } from '@angular/common/http';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    routingComponents,
    ShowResponsesComponent,
    SearchComponent,
    SearchItemComponent,
    AddQuestionComponent,
    ShowQuestionsComponent,
    InputSearchComponent,
    AnswerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AutocompleteLibModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
