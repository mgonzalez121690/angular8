import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '../constants/constants';
import { QuestionService } from '../services/questions/question.service';
import { Search } from '../model/search';

@Component({
  selector: 'app-show-questions',
  templateUrl: './show-questions.component.html',
  styleUrls: ['./show-questions.component.css']
})
export class ShowQuestionsComponent implements OnInit {

  public formTitle = Constants.TITLE_FORM_QUESTIONS;
  buttonRealizarPregunta = Constants.REALIZAR_PREGUNTA;

  public keyword;
  public questions: Search[];

  constructor(private route: ActivatedRoute, private router: Router, private questionService: QuestionService) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('keyword');

    if( param != null && param != undefined){
      this.formTitle = Constants.TITLE_FORM_SEARCH;
    }
    
    this.showQuestions(param);

    this.keyword = param;
  }

  showQuestions(keyword){
    this.questionService.pull(keyword)
        .subscribe(
          data => {
            console.log(data)
            this.questions = data},
          error => console.log(error.status)
        );
  }

  askQuestion(){
    this.router.navigate(['/questions/ask']);
  }

}
