import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-responses',
  templateUrl: './show-responses.component.html',
  styleUrls: ['./show-responses.component.css']
})
export class ShowResponsesComponent implements OnInit {

  public keyword;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('keyword');
    this.keyword = param;
  }

}
