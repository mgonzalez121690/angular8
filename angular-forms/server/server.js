const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res){
    res.send('Hello from server');
});

app.post('/enroll',function(req, res){
    console.log(req.body);
    res.status(200).send({'message':'Data saved successfully'});
});

app.post('/vucem-ts/questios/create', function(req, res){
	console.log(req.body);
	res.status(200).send({'message':'Data stored successfully'});
});

app.get('/vucem-ts/questios/getAll', function(req, res){
	console.log(req.body);
	var questions =  [
    {"question":{"idQuestion": 1,"title": "Java Alert! bad certificate","description": "cuando lo usa java me da error de NullPointer. El problema se elimina si uno le quita el spring security, lo cual no es la idea. Dejo los archivos principales. Web.XML <?xml encoding … Buenas tengo problemas para inplementar el spring security, ya tenia configurado anteriormente el spring freamworks y sus beans y funciona perfecto. Ahora que he puesto el spring security los beans",'tags':[''], 'publicationDate':'27/10/2019'}, "tag":["java", "web logic","certificate","security"], "answers":0},
    {"question":{"idQuestion": 2,"title": "Como dar de alta menu en vucem","description": "Estoy intentando dar de alta un menu en la vucem y no puedo.",'tags':[''], 'publicationDate':'04/07/2018'}, "tag":["vucem","menu"], "answers":1},
    {"question":{"idQuestion": 3,"title": "Multiples DataSources en Spring Boot de forma dinamica","description": "Como configuro dos datasource a diferentes tipos de base.",'tags':[''], 'publicationDate':'28/11/2018'}, "tag":["spring","jpa"], "answers":2},    
    {"question":{"idQuestion": 4,"title": "Error de valores nulos con JSF, Spring e Hibernate","description": "",'tags':[''], 'publicationDate':'28/11/2019'}, "tag":["java","hibernate"], "answers":1}    

	];


	res.status(200).send(questions);
});


app.get('/vucem-ts/questios/getKeyword/:keyword', function(req, res){
	console.log(req.body);
	var questions =  [
    {"question":{"idQuestion": 3,"title": "Multiples DataSources en Spring Boot de forma dinamica","description": "Como configuro dos datasource a diferentes tipos de base.",'tags':['']}, "tag":["spring","jpa"], "answers":2},    
    {"question":{"idQuestion": 4,"title": "Error de valores nulos con JSF, Spring e Hibernate","description": "",'tags':['']}, "tag":["java","hibernate"], "answers":1}    

	];

	res.status(200).send(questions);
	
});

app.get('/vucem-ts/questios/getOne/:id', function(req, res){
  		console.log(req.body);
	var question = {"question":{"idQuestion": 1,"title": "Java Alert! bad certificate","description": "cuando lo usa java me da error de NullPointer. El problema se elimina si uno le quita el spring security, lo cual no es la idea. Dejo los archivos principales. Web.XML <?xml encoding … Buenas tengo problemas para inplementar el spring security, ya tenia configurado anteriormente el spring freamworks y sus beans y funciona perfecto. Ahora que he puesto el spring security los beans",'tags':['']}, "tag":["java", "web logic","certificate","security"], "answers":0};

	res.status(200).send(question);
});

app.get('/vucem-ts/answers/getByQuestionId/:id', function(req, res){
  		console.log(req.body);
	var answers = [{ "idAnswer":1,
				   "idQuestion":1,
				   "cause":'You re providing a bad cerficicate path or your web application server configuration isnt correct',
				   "solution":'It possible cause by will be  bad certificate path choosed. You ensure that did choose it correctly path and file.'
				},
				{ "idAnswer":2,
				   "idQuestion":1,
				   "cause":'Your application server has bad configuration.',
				   "solution":"Whats the java sdk version that you had been used it for bootstraping ?. "
				}
	];

	res.status(200).send(answers);
});




app.listen(PORT, function(){
    console.log('Server is running on localhost:' + PORT);
});
