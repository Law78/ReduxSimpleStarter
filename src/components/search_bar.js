import React from 'react';

// Creo il mio componente
const SearchBar = () => {
  return <input />; // JSX viene tradotto nell'istruzione Reac.createElement...
};

export default SearchBar;

/*
Anyone correct me if I'm wrong, but I believe it's like this:

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
