import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ShowResponsesComponent } from './show-responses/show-responses.component';
import { ShowQuestionsComponent } from './show-questions/show-questions.component';
import { AddQuestionComponent } from './add-question/add-question.component';

const routes: Routes = [
  {path: '', redirectTo:'/start', pathMatch:'full'},
  {path:'start', component: StartComponent},

  {path:'search', component: ShowQuestionsComponent},
  {path:'search/:keyword', component: ShowQuestionsComponent}, 

  {path:'questions', component: ShowQuestionsComponent},
  {path:'questions/:id', component: ShowResponsesComponent},
  {path:'questions/ask', component: AddQuestionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StartComponent , ShowResponsesComponent];