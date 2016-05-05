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
In React si utilizza questa tecnica (downwards data flow):
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
import React, from 'react'; // CORE LIBRARY
import ReactDOM from 'react-dom'; // DOM LIBRARY
import YTSearch from 'youtube-api-search'; // YOUTUBE API_KEY
import myAPIkey from '../keys';
import SearchBar from './components/search_bar';

YTSearch({key: myAPIkey.API_KEY, term: 'surfboards'}, function(data){
		console.log(data)
});

const App = () => {
	return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
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
In cui dovrò fare anche l'import in questo modo, in modo da usare Component anzichè React.Component:
```
import React, { Component } from 'react'; // CORE LIBRARY
```
Andiamo a definire un costruttore di App, in cui creiamo l'oggetto stato che conterrà un elenco di video iniziali, pertanto spostiamo la nostra chiamata API all'interno del costruttore e mettiamo la notazione arrow di ES6 per definire la funzione di callback. Il valore {videos: videos} diventa {videos} in quanto in ES6 quando la KEY e la VALUE hanno lo stesso valore posso scriverlo in maniera sintetica:

```
constructor(props){
	super(props);
	this.state = { videos: []};
	YTSearch({key: myAPIkey.API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
	});
}
```
Lo stato avrà un array di oggetti, cioè i video (di default da API YOUTUBE sono 5).
RICORDA: dove ho messo la arrow function per la callback, dove ho usato la sintassi condensata nel definire l'oggetto KEY:VALUE videos:videos.

(inizio lezione 23)

In questa lezione andiamo a focalizzare la nostra attenzione su video_list e video_list_item, ovvero i due componenti che rappresentano il mio oggetto video (video_list_item) e l'elenco di questi oggetti nel loro completto (video_list).

Iniziamo con l'elemento più alto (radice/parent) e cioè video_list. Questo componente sarà prettamente visuale e quindi senza stato, pertanto andiamo a creare un componente React di tipo functional e non di tipo class, dove invece prevede uno stato.

Il nostro progetto userà BOOTSTRAP ed infatti l'index.html ha già una sua inclusione, pertanto andiamo a pensare a delle classi css per cominciare a dare uno stile al tutto. Per cui useremo le classi built-in della V4 di Bootstrap.
Dobbiamo fare attenzione, in JSX anzichè usare class per il CSS utilizzeremo className per identificare la classe CSS, questo per non creare un potenziale equivoco con la parola chiave class di ES6 per creare una base-class component.

Infine facciamo l'export del componente, che ovviamente importerò in index.js come fatto già per SearchBar:

```
import React from 'react';

const VideoList = () => {
  return(
    <ul className="col-md-4 list-group">
    </ul>
  );
}

export default VideoList;
```

Il render di App mi diventerà:

```
render(){
	console.log('APP avviata con YOUTUBE API KEY', myAPIkey.API_KEY);
	return (
		<div>
			<SearchBar />
			<VideoList />
		</div>
	);
}
```

App è parent di VideoList e VideoList deve poter accedere ai dati scaricati da youtube e quindi allo stato di App. Devo passare dei dati dal parent al child e per farlo devo creare una proprietà nel child. Devo però passare la proprietà alla mia dichiarazione del functional component:

```
...
			<SearchBar />
			<VideoList videos={ this.state.videos }/>
...
```
e in video_list.js:
```
...
const VideoList = (props) => {
	return(
    <ul className="col-md-4 list-group">
      {props.videos.length}
...
```
Al posto di props potevo scrivere qualsiasi altra cosa (?). Se faccio il refresh della pagina posso notare che per un istante il valore è 0 e poi 5. Questo perchè nel costruttore di App, il mio array è inizialmente vuoto e la richiesta verso la API di Youtube non è certamente istantanea ma può richiedere del tempo, non possiamo sapere quanto tempo richiede.
La lezione finisce dicendo che props nel class components si accede con this.props. Ci servirà nel momento di un refactoring.

(inizio lezione 24)
Ora ci basta fare un loop dei videos per accedere agli elementi. Per ogni elemento andiamo a generare una istanza di video_list_item.
In generale stai lontano dal for-loop e cerca di usare un iteratore:
```
var array = [1,2,3];
for(var i=0; i<array.length;i++){...} //EVITA
array.map(function(number){
	return number * 2;
});
/*
map mi richiama la funzione per ogni elemento dell'array e mi ritorna il valore del number attuale moltiplicato per 2.
array = [2,4,6]
map è fantastico da usare per creare liste in React:
array.map(function(number){
	return '<div>' + number + '</div>';
});
*/
```

Andiamo a creare il nostro video_list_item:

```
import React from 'react';

const VideoListItem = (props) =>{
  return(
    <li>
      Video
    </li>
  );
};

export default VideoListItem;
```

Il nostro singolo video è un functional component, la cui funzione ritorna un elemento li, per ora.
Ora il nostro video_list, importa il video_list_item e crea un array di elementi video, che inserisco nella return:

```
...
const videoItems = props.videos.map( (video) => {
	return <VideoListItem video={video} />;
});

return(
	<ul className="col-md-4 list-group">
		{videoItems}
	</ul>
);
...
```

Tutto ciò funziona MA con un bel WARNING.

(inizio lezione 25)

Il WARNING dice che ogni figlio deve avere una unique "key" prop. Quando creo un elenco di elementi dello stesso tipo, React assume che stiamo creando una lista, e questo processo viene ottimizzato da React perchè se dovessi accedere ad uno specifico elemento della pila, avendo una chiave univoca il processo sarà più veloce. Nel nostro caso, aprendo nel dev console la network e abilitando tutti i messaggi di comunicazione, possiamo notare dalla risposta della API di youtube, che ogni elemento ha un campo univoco chiamato etag:

```
...
const videoItems = props.videos.map( (video) => {
	return <VideoListItem key={video.etag} video={video} />;
});
...
```
Avendo fornito una 'key' ora non abbiamo più il warning. Il componente VideoListItem ha una proprietà video in cui passiamo il nostro i-esimo video iterato. Questo arriva al componente VideoListItem tramite l'utilizzo dell'oggetto props.

(inizio lezione 26)

In VideoListItem abbiamo l'oggetto props, andiamo a definire una costante video per prelevare l'oggetto video dall'ogetto props. Ricorda che dal VideoList, passiamo il video ad ogni elemento VideoListItem e per accederlo dovrò fare props.video:

```
const video = props.video;
```

Ma per avere una sintassi più sintetica posso sfruttare un altra feature di ES6. Dichiarando l'argomento del mio functional component in questo modo, mi evito la dichiarazione di const e mi ritrovo gratis la const video (prova a fare una console.log(video)), ovviamente vale il discorso se KEY e VALUE hanno lo stesso nome:

```
const VideoListItem = ({video}) =>{
  return(
    <li>
      Video
    </li>
  );
};
```

Se avessi avuto:
```
<VideoListItem key={video.etag} movie={video} />;
```

allora dovevo fare:
```
const VideoListItem = ({movie=video}) =>{
  console.log(movie);
  return(
    <li>
      {movie.etag}
    </li>
  );
};
```

Dell'oggetto ricevuto, ci servirà la proprietà snippets.
Andiamo a modificare la struttura della return di VideoListItem così:
```
const VideoListItem = ({video}) =>{
  return(
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading"></div>
        </div>
      </div>
    </li>
  );
};
```

Adesso mi basta prendere alcune informazioni da video e il gioco è fatto:

```
const VideoListItem = ({video}) =>{
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
```
(inizio lezione 27)

Il componente video_detail utilizzerà il player di youtube e il suo stato dovrà tener conto solo del titolo, della descrizione e dell'URL del video. Anche qui ci basta un semplice functional component.
Definiamo la struttura di questo componente:

```
import React from 'react';

const VideoDetail = (props) => {
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embode-responsive-16by9">
        <iframe className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default VideoDetail;
```

Sapendo che i 2 div centrali mi servono per il titolo e la descrizione, che l'argomento props è inutile in quanto mi serve solamente accedere al video, posso fare delle modifiche. Inoltre tieni a mente che un video youtube cambia nell'url solo l'ID:

```
const VideoDetail = ({video}) => {
	const videoId = video.id.videoId;
	const url = 'https://www.youtube.com/embed/' + videoId;
	...
		<div>{video.snippet.title}</div>
		<div>{video.snippet.description}</div>
...
```

L'iframe punterà all'URL del video. Facciamo uso di un altra feature di ES6, cioè l'interpolazione di stringa o template string, in modo tale che scrivo una sola stringa in cui inietto una variabile javascript:

```
const url = `https://www.youtube.com/embed/${videoId}`;
```

Faccio le virgolette con ALT+\ sul mac.
Infine nell'iframe vado a puntare al mio url:

```
<iframe className="embed-responsive-item" src={url}></iframe>
```

(inizio lezione 28)

Andiamo a fare l'import del video_detail nell'index.js e poi il render subito dopo il video_list:

```
...
<SearchBar />
<VideoList videos={this.state.videos}/>
<VideoDetail video={this.state.videos[0]}/>
...
```
Dove ho passato il primo video dell'array alla proprietà video di VideoDetail.
Refresh della pagina e boom...errore! Non posso leggere l'id di undefined, mentre il secondo errore deriva dal primo.
Questo perchè, all'inizio ho un array videos vuoto e la mia API ci metterà qualche millisecondo per riempirlo ma nel frattempo io sto costruendo il resto e quindi il mio componente fa il render con un array vuoto. Passo un valore undefined a VideoDetail, da qui provo a prendere la proprietà id di un oggetto undefined, da qui l'errore.
