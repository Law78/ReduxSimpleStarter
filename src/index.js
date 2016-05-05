// Importo il modulo di React caricato tramite la dipendenza specificata in package.json
// React ha 2 librerie separate.

import React, { Component } from 'react'; // CORE LIBRARY
import ReactDOM from 'react-dom'; // DOM LIBRARY

import YTSearch from 'youtube-api-search'; // YOUTUBE API_KEY

// Qui riporto varie prove di import:
import myAPIkey from '../keys';
//import {API_KEY, HOST, PORT} from '../keys';
//import youtubeKey from '../keys';
//import obj from './temp/module_test';
//const URL = `http://${HOST}:${PORT}/user?${API_KEY}`;

// Importo il mio componente, ma devo specificare il path in quanto
// lo abbiamo sviluppato noi e non è un modulo di node_modules installato
// con npm.
import SearchBar    from './components/search_bar';
import VideoList    from './components/video_list';
import VideoDetail  from './components/video_detail';

// 1. Creo un nuovo componente: deve produrre HTML :)

/*
const è una keyword di ES6 - EcmaScript 2015. Posso usare anche var ;)
ma in questo caso const è più sensato in quanto il nostro componente non varierà.
assegno ad App la funzione.
La return è un pò strana. Ho delle tag HTML dentro la mia funzione!!! Questo è JSX,
la return mi ritorna JSX ed è la porzione di codice che viene visualizzata nella pagina
e cioè nel DOM!
JSX è un dialetto JS in cui scrivo HTML dentro il codice JS, non è un template engine
come può esserlo Handlebars.

Il VIRTUAL DOM: React crea componenti per un DOM virtuale, elementi che di fatto sono
oggetti JSON e la funzione React.createElement e ciò che trasforma questi oggetti
virtuali in oggetti adatti al DOM

Webpack e Babel traducono il tutto in codice JS. Posso scrivere tutto in formato JS ma scrivere in JSX sarà più
semplice. Questà è la versione JS (vai su babeljs.io):

var App = function App() {
  return React.createElement( <--- metodo per creare oggetti JSON adatti al DOM
    "div", <---l'elemento HTML
    null, <--- proprietà dell'elemento HTML
    "Hi!" <--- il testo o meglio ciò che è dentro il tag (children)
  );
};

La parte della proprietà è espressa con un oggetto. Ad es:
{
    id: "greeting",
    className: "container"
}

Fai attenzione a className, servirà ricordalo in quanto in React per specificare una
classe CSS all'interno di un tag HTML, dovrò sostituire class con className. (class
è una keyword di ES6).

La nostra funzione deve ritornare una istanza di un componente prima di fare il rendering
dello stesso sul DOM. Se passassi:
ReactDOM.render(App);
Passerei la classe del mio componente e ottengo un errore che mi dirà che non posso passare
la classe ma che ReactDOM.render si aspetta una istanza del componente.
E la cosa è abbastanza facile. Ci basterà usare una self-closing
tag con il nome della costante: <App />
*/



class App extends Component{
  // Definisco l'unico costruttore della classe App in cui inizializzo lo stato del componente,
  // che è un oggetto plain. In questo caso inseriamo l'elenco dei video, tramite un array,
  // per contenere una lista di oggetti.
  constructor(props){
    super(props);
    this.state = { videos: []};
    YTSearch({key: myAPIkey.API_KEY, term: 'surfboards'}, (videos) => {
      // In ES6 se ho KEY:VALUE hanno lo stesso nome di variabile posso scrivere in maniera condensata
        this.setState({ videos }); // equivale a this.setState({videos: videos});
    });
  }

  // Per espressioni JSX multilinea devo usare le parentesi!
  // Se non volessi usare le parentesi fai si che il <div> sia subito dopo il
  // return e non a capo!

  render(){
    console.log('APP avviata con YOUTUBE API KEY', myAPIkey.API_KEY);
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
        <VideoDetail video={this.state.videos[0]}/>
      </div>
    );
  }

}

/* PILLOLE DI ES6:
Si toglie la keyword function e si inserisce la arrow =>. Cambia il this (Da approfondire!)
const p = (array) => {
	array.map(function(v){
		console.log(v);
	});
}

p([1,2,3]);
*/
const MessageBox = () => {
  var nome = "Lorenzo";
  console.log('Obj =>', obj);
  return <h1>Hello, {nome} {API_KEY}</h1>;
};

// Super condensata Arrow Function:
const App2 = () => <div>Hi!{youtubeKey.API_KEY}</div>;


// Abbiamo molti modi per creare classi e istanze dei componenti ;)

// 2. Visualizza il componente nel DOM, ovvero l'HTML generato a partire dal componente
// ReactDom.render(App);    <---DEPRECATO
// ReactDOM.render(App);    <---ERRORE: devo passare una istanza
// ReactDOM.render(<App />);<----ERRORE: devo dare un tag HTML dove "appendere" (render target)
// il mio componente. Lo specifico con un secondo parametro.
ReactDOM.render(<App />, document.querySelector('.container'));
//ReactDOM.render(<MessageBox />, document.getElementById('MessageBox'));
//ReactDOM.render(<SearchBar />, document.getElementById('MessageBox'));
