import { Answer } from './answer';

export class Question {
    constructor(
        public idQuestion: number,
        public title: string,
        public description: string,
        public tags: string[],
        public publicationDate: string
    ){}
}
