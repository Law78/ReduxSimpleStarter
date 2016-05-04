# ReduxSimpleStarter

Iniziamo ;)

###Getting Started###

There are two methods for getting started with this repo.

####Familiar with Git?#####
Checkout this repo, install depdencies, then start the gulp process with the following:

```
	> git clone git@github.com:StephenGrider/ReduxSimpleStarter.git
	> cd ReduxSimpleStarter
	> npm install
	> npm start
```

####Not Familiar with Git?#####
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
	> npm install
	> npm start
```

###Per iniziare

Devo creare un file keys.js del tipo:
```
var myAPIkey = {
  API_KEY: 'AIzaSyAhs**********',
  NAME: 'Browser key 1',
  TYPE: 'Browser'
}

export default myAPIkey;
```
in cui vado ad inserire la mia API KEY creata da: [https://console.developers.google.com/apis](Youtube API Key)

# React

Faccio partire il React Simple Starter che fa uso di webpack come server. La mia app in index.html ha un file chiamato bundle.js che è il risultato della compilazione dei miei script fatti da babel e webpack.

Vado a modificare la scritta di saluto in app.js sotto src/components.

Ma ora partiamo dall'inizio e cancelliamo tutta la cartella src e creiamo un nuovo file src/index.js

React è una libreria JS per produrre HTML da usare nel nostro browser. Quando utilizziamo React creaiamo dei componenti che rappresentano la VIEW della mia applicazione web, ed un componente non è altro che uno snippet HTML. L'applicazione React sarà un insieme complesso di questi componenti. Un componente è una collezione di funzioni js o oggetti js che producono per l'appunto l'html della view.

I passi logici sono quelli di: 1) creare un componente React 2) visualizzare l'html generato a partire dal componente nel DOM.

In ES6 ho accesso al concetto di Moduli: l'idea è che il codice lo scriviamo in files separati e/o in librerie che carico nel momento del bisogno.
I moduli di ES6 sono simili ai moduli Node, ma con alcune differenze come ad esempio la sostituzione della parola chiave module exports con export, invece di require si usa import.
Es.:
var foo = function foo(){
	return true;
}

export default { foo };

Quando esporto solo una cosa, devo inserire la parola chiave default e le parentesi graffe tra foo non sono necessarie. Per importala mi basterà fare:

import { foo as bar } from 'example';

Dove con as rinomino la variabile importata (non necessario!) e quindi posso scrivere:

import foo from 'example';

Rect è installato come dipendenza, grazie al package.json e la fatto di aver scaricato il tutto tramite npm init.

Nell'applicazione che andiamo a creare abbiamo vari componenti che rappresentano: la search bar, il video player, il box della descrizione e del titolo del video e i vari video proposti lateralmente, contenuti a loro volta in una lista. Infine abbiamo un unico componente che wrappa tutti questi altri. Abbiamo in totale 5 componenti. Quindi andiamo a dividere la nostra pagina web, il wireframe creato, in vari blocchi visivi che rappresentano il nostro componente.

Costruiamo un componente per file. Creiamo in src la cartella components e i files dei vari componenti.
Per caricare i video abbiamo bisogno di accedere alle API di youtube e ottenere una API Key.
Ottenuta la API Key installiamo la libreria. Dalla root del progetto scriverò:
npm install --save youtube-api-search

con il save inserisco la libreria nel package.json

Nel codice facciamo il refactoring di un functional component ad un class component, tramite l'uso di classi ES6:
```
const SearchBar = () => {
  return <input />;
};
```
la classe eredita da React.Component:
```
class SearchBar extends React.Component{
}
```
la classe deve avere un metodo di visualizzazione del componente chiamato render(), questo metodo è obbligatorio (sempre)!
Ci sono vari modi per creare un componente React: il primo è quello di utilizzare le Classi ES6, poi con l'uso del metodo React.createClass ed infine le funzioni senza stato. La classe ci serve quando devo aggiungere delle funzionalità al componente che non potrei fare con l'uso della solo funzione.

Posso scrivere in maniera stringata, facendo questo tipo di import:
import React, { Component } from 'react';

che è come se avessi scritto
var Component = React.Component;

ed in questo modo posso scrivere:
class SearchBar extends Component{
}

Nel nostro componente andiamo aggiungere la funzione di render, utilizzando la gestione degli Eventi [React Event System](https://facebook.github.io/react/docs/events.html#form-events)

Posso scrivere, omettendo le parentesi dell'argomento event in quanto singolo parametro, la forma stringata:
```
class SearchBar extends Component{
  render(){
    return <input onChange={event => console.log(event.target.value)} />;
  }
}
```

#Class Component, Stati e Costruttore

(inizio lezione 18)
I class components, che definiscono un componente di React con stato, hanno la funzione costruttore che viene chiamata di default dall'engine.
Il costruttore viene richiamato ogni volta che creo una istanza del mio componente.

```
class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			term: ''
		};
	}

	render(){
		return <input onChange={event => console.log(event.target.value)} />;
	}
}
```

Anche Component ha il suo constructor ed è per questo che ho l'istruzione che richiama il costruttore della classe padre, altrimenti otterrei un errore!
Come vedi il this.state è un object literal detto plain object. In questo caso ho solo un valore: 'term'.

Vediamo gli STATE di React. Lo state è un plain object JS che è usato in React per registrare gli eventi dell'utente (this.state). Ogni classe ha il suo state object, mentre i functional component no(!). Quando uno stato cambia, la visualizzazione (render) del componente viene aggiornata. Prima di usare l'object state nel componente, devo inizializzarlo con l'uso del costruttore: constructor.

Ogni istanza della classe ha il suo stato. Con this.state accedo a questa proprietà e la inizializzo con le proprietà che mi interessano. In questo caso vogliamo inserire ciò che ha scritto l'utente.

```
constructor(props){
	super(props);

	this.state = { term: ''};
}
```

SOLO NEL COSTRUTTORE ANDIAMO AD ASSEGNARE IL NOSTRO STATO, mai(MAI!!!) fare in una funzione:

```
this.state.term = 'blahblahblah'; //MAIII!!!
```
I CAMBIAMENTI LI FAI SOLAMENTE con il setState passando l'oggetto che cambierà lo stato del mio componente.

Per impostare la proprietà term andrò a lavorare nella funzione render, dove ho il mio elemento input e la funzione che richiamo sull'onChange, per cui scriverò this.setState:

```
render(){
		return <input onChange = {event => this.setState({term: event.target.value})} />
}
```
Se provassi il componente ovviamente non succede nulla, questo perchè scrivo nel mio input ma non ho nessun output del mio stato :) ecco perchè non vedo nulla. Creo un elemento pre dove vado a renderizzare il valore dello stato, che devo farlo tra le parentesi graffe.
Per cui avrò:

```
render(){
	return (
		<div>
			<input value={this.state.term} onChange={event => this.setState({term:event.target.value})} />
			<pre>Valore dell'input: {this.state.term}</pre>
		</div>
	);
}
```
Inserendo il value nell'input il ho un control field / control input e il suo valore è basato sullo stato, quello che ottengo è un control component. Se andassi a togliere l'onChange, il mio input non riceverebbe nessun carattere. Quando lo stato cambia, il componente viene ri-renderizzato ogni volta.
Ogni volta che scrivo nell'input viene lanciata la funzione dell'onChange che cambia lo stato, quando questo cambia il render del componente viene rieseguito. Quando uno stato di un componente cambia, il render viene rieseguito e quindi il valore che scrivo nel pre viene aggiornato ;)

Finiamo togliendo il pre che non ci servirà successivamente.

(inizio lezione 19)


Andiamo a togliete la parte relativa all'onChange:
```
render(){
	return (
		<div>
			<input value={this.state.term} />
		</div>
	);
}
```
Se al mio input togliessi la parte dell'onChange e provassi a scrivere, non vedrei nulla, in quanto l'attributo value dell'input è impostato al valore di this.state.term che però non cambia mai ed è inizializzato a stringa vuota dal costruttore!!! Per cui imposto il mio stato con la chiamata alla funzione lanciata dall'evento onChange.

(review sezione)

Abbiamo utilizzato ES6 per creare una classe che estende Components, abbiamo usato la arrow function per dichiarare la funzione associata all'evento onChange ed inoltre abbiamo usato le istruzioni import ed export.
Abbiamo definito un componente base App con la parola chiave const, sempre ES6, in index.js e facciamo il render del componente di SearchBar, cioè produciamo/visualizziamo dell'HTML nel browser. App è un functional component in quanto privo di stato, a differenza di SearchBar che è un class base component.
Lo stato di SearchBar viene cambiato quando l'utente scriverà nel campo input, sfruttando l'evento onChange.

(lezione 21)

Dobbiamo inviare una richiesta a Youtube per la ricerca dei nostri video. Nella sezione precedente abbiamo importato con npm la libreria API di Youtube e creato la nostra API KEY.
Ogni singolo componente deve conoscere la lista dei video o comunque accedere ai dati che abbiamo ottenuto dalla ricerca, la domanda è? Dove faccio il fetch di questa lista, in quale componente?
In React si utilizza questa tecnica:
- Individuo i componenti che visualizzano qualcosa relativo a questo stato
- Trovo un componente comune a questi componenti che sia più in alto di questi (parent)

In questo caso il componente comune più alto è index.js ed è il candidato per fare il fetch dei dati.

Pertanto: Import YTSearch from 'youtube-api-search'. YTSearch è un alias, posso mettere ciò che voglio.
[Documentazione API](https://developers.google.com/youtube/v3/docs/search/list#parameters)

```
YTSearch({key: myAPIkey.API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
});
```

Di default ritorna 5 oggetti. La funzione di callback ritorna i dati della nostra ricerca. Passo un oggetto di configurazione. Nella lezione successiva cominciamo ad utilizzare questi dati :)

Facciamo il refactoring di App da una functional component ad un class component:

```
const App = function(){
  return (
    <div>
      <SearchBar />
    </div>
  );
}
```

con la struttura base:

```
class App extends Component {
	render(){
		return(

		);
	}
}
```

Andiamo a definire un costruttore di App, in cui creiamo l'oggetto stato che conterrà un elenco di video iniziali, pertanto spostiamo la nostra chiamata API all'interno del costruttore:

```
constructor(props){
	super(props);
	this.state = { videos: []};
	YTSearch({key: myAPIkey.API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({videos});
	});
}
```

dove ho messo la arrow function per la callback, dove ho usato la sintassi condensata nel definire l'oggetto KEY:VALUE videos:videos.
