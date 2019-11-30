const PROTOCOL = 'http://'; 
const HOST = 'localhost';
const PORT = ':3000'
const SERVER = PROTOCOL + HOST + PORT ;

export class UrlServiceContants {    
    
    public static readonly URL_PUSH_QUESTION_SERVICE = SERVER + '/vucem-ts/questios/create';
    public static readonly URL_PULL_QUESTION_SERVICE = SERVER + '/vucem-ts/questios/getAll';
    public static readonly URL_GET_KEY_WORD_QUESTION_SERVICE = SERVER + '/vucem-ts/questios/getKeyword';
    public static readonly URL_GET_ONE_QUESTION_SERVICE = SERVER + '/vucem-ts/questios/getOne';

    public static readonly URL_GET_ALL_ANSWER_BY_QUESTION_ID = SERVER + '/vucem-ts/answers/getByQuestionId/:id';
}
