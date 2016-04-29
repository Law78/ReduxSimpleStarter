// Lo scopo di questo componente è quello di creare una SearchBar
// Devo importare React per tradurre JSX in JS
import React, { Component } from 'react';

// Creo il mio componente con l'uso delle funzioni in stile ES6
/*
const SearchBar = () => {
  return <input />; // JSX viene tradotto nell'istruzione Reac.createElement...
};
*/
// Questo componente è detto functional component in quanto "nasce" da una
// funzione. Ovviamente posso passare dei parametri.
// Un altro tipo di componente è detto Class component.
class SearchBar extends Component{
  // Ogni classe ha il metodo constructor, chiamato come "costruisco" il mio
  // componente.
  constructor(props){
    // super chiama il costruttore della classe che estende (Component)
    super(props);
    // Inizializzo term ad una stringa vuota
    this.state = { term: ''};
    console.log('Ho inizializzato lo STATE:', this.state);
  }

  render(){

    // Per una lista degli Eventi di Sistema:
    //https://facebook.github.io/react/docs/events.html#form-events
    return (
      <div>
        <input
          value     = {this.state.term}
          onChange  = {event => this.setState({term:event.target.value})} />
      </div>
    );
  }

  // definisco un handler di evento. E' buona pratica chiamarlo con:
  // onElementoEvento o handleElementoEvento. Il parametro dell'evento
  // solitamente si chiama e, event o eventObject.
  //onInputChange(event){
    // La proprietà target punta al nostro elemento input
    //console.log(event.target.value)
  //}
}

// Esporto il mio componente in modo da usarlo in altri componenti
export default SearchBar;

/*
Da un file posso esportare più oggetti/proprietà ma solo una può
essere l'export di default

You can have multiple exports in a file, but only 1 'export default'.
So, in your import statement:

import React from 'react'; <= You are importing the default, you can name it anything,
that variable name 'React' will hold the default export.

import { Component } from 'react' <= You are importing the Component export from react,
which is not the default. You have to name it the same as what you are trying to import,
otherwise it won't know what you are trying to import.

If you do not have a 'default' in your file, then you will only be able to import components
from that file using the second syntax, not the first.
*/
