import { Question } from './question';
import { NumberSymbol } from '@angular/common';

export class Search {
    
    constructor(
        public question: Question,
        public tags: string[],
        public answers: number     
    ){}
}
