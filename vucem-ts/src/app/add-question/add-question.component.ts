import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants/constants';
import { Question } from '../model/question';

import { Router } from '@angular/router';
import { QuestionService } from '../services/questions/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  title = Constants.REALIZAR_PREGUNTA;
  question: Question
  errorMsg;
  formHasError = true;
  constructor(private router: Router,
              private questionService: QuestionService){
   
      this.question = new Question(0,'','',['']);
  }

  ngOnInit() {
  }

  validateText(value){
    this.formHasError = false;
  }

  onSubmit(){
    console.log(this.question);
    this.questionService.push(this.question)
        .subscribe( (response) =>{ this.router.navigate([['/questions']]) },
                     error => { 
                       console.log(JSON.stringify(error))
                       this.errorMsg = error.message}
        )
        /*.subscribe( (response) => {
          this.router.navigate(['/questions']);
        });*/
  }
}
