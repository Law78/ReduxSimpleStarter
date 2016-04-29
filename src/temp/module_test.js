var myObj = {
  myKey: 'chiave di test',
  valore: 100
}

var foo = "foo fighter";

export default foo;

export {myObj};

/*
Nel caso in cui esporto più cose, ho un default che verrà importato
se non specifico l'as:

import myObj from './temp/module_test';

in questo caso myObj sarà foo. Mentre:

import {myObj as myObj} from './temp/module_test';

in questo caso myObj sarà proprio myObj. Mentre:

import {myObj as obj} from './temp/module_test';

obj sarà proprio myObj. Mentre:

import {obj} from './temp/module_test';

sarà undefined.

Ed infine:

import obj from './temp/module_test';

sarà il default ovvero foo.
*/
