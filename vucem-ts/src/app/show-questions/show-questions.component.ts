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
  public questions: Search[];/* = [
    {"question":{"idQuestion": 1,"title": "Java Alert! bad certificate","description": "cuando lo usa java me da error de NullPointer. El problema se elimina si uno le quita el spring security, lo cual no es la idea. Dejo los archivos principales. Web.XML <?xml encoding … Buenas tengo problemas para inplementar el spring security, ya tenia configurado anteriormente el spring freamworks y sus beans y funciona perfecto. Ahora que he puesto el spring security los beans",'tags':['']}, "tag":["java", "web logic","certificate","security"], "answers":0},
    {"question":{"idQuestion": 2,"title": "Como dar de alta menu en vucem","description": "Estoy intentando dar de alta un menu en la vucem y no puedo.",'tags':['']}, "tag":["vucem","menu"], "answers":1},
    {"question":{"idQuestion": 3,"title": "Multiples DataSources en Spring Boot de forma dinamica","description": "Como configuro dos datasource a diferentes tipos de base.",'tags':['']}, "tag":["spring","jpa"], "answers":2},    
    {"question":{"idQuestion": 4,"title": "Error de valores nulos con JSF, Spring e Hibernate","description": "",'tags':['']}, "tag":["java","hibernate"], "answers":1}    
    
  ];*/

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
