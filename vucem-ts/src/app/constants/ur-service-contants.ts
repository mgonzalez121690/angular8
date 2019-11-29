const PROTOCOL = 'http://'; 
const HOST = 'localhost';
const PORT = ':3000'
const SERVER = PROTOCOL + HOST + PORT ;

export class UrlServiceContants {    
    
    public static readonly URL_PUSH_QUESTION_SERVICE = SERVER + '/vucem-ts/questios/push';
    public static readonly URL_PULL_QUESTION_SERVICE = SERVER + '/vucem-ts/questios/pull';

}
