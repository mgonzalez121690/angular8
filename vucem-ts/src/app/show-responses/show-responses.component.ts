import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { QuestionService } from '../services/questions/question.service';
import { Search } from '../model/search';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-responses',
  templateUrl: './show-responses.component.html',
  styleUrls: ['./show-responses.component.css']
})
export class ShowResponsesComponent implements OnInit {

  public question: Search;

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private questionService: QuestionService) { }

  ngOnInit() {
    let idQuestion = this.route.snapshot.paramMap.get('id');
    /*this.question$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.questionService.getById(params.get('id')))
      
    );*/
    this.getById(idQuestion);

  }

  getById(idQuestion){
    this.questionService.getById(idQuestion)
        .subscribe( data => {
          console.log(data);
                    this.question = data},
                    error => console.log(error.message));
  }

}
