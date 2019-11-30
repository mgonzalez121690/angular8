import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { QuestionService } from '../services/questions/question.service';
import { Search } from '../model/search';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Answer } from '../model/answer';
import { AnswerService } from '../services/answers/answer.service';

@Component({
  selector: 'app-show-responses',
  templateUrl: './show-responses.component.html',
  styleUrls: ['./show-responses.component.css']
})
export class ShowResponsesComponent implements OnInit {

  public question: Search;
  public answers: Answer[];
  public answersSize: number;

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private questionService: QuestionService, 
              private answerService: AnswerService) { }

  ngOnInit() {
    let idQuestion = this.route.snapshot.paramMap.get('id');
    this.getById(idQuestion);
    this.getAnswersByQuestionId(idQuestion);
  }

  getById(idQuestion){
    this.questionService.getById(idQuestion)
        .subscribe( data => {
          console.log(data);
                    this.question = data},
                    error => console.log(error.message));
  }

  getAnswersByQuestionId(idQuestion){
    this.answerService.getByQuestionId(idQuestion)
        .subscribe( data => {
                    this.answers = data
                    this.answersSize = this.answers.length;
                  },
                   error => console.log(error.message));
  }

}
