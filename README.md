# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

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

# React

Faccio partire il React Simple Starter che fa uso di webpack come server. La mia app in index.html ha un file chiamato bundle.js che è il risultato della compilazione dei miei script fatti da babel e webpack.

Vado a modificare la scritta di saluto in app.js sotto src/components.

Ma ora partiamo dall'inizio e cancelliamo tutta la cartella src e creiamo un nuovo file src/index.js

React è una libreria JS per produrre HTML da usare nel nostro browser. Quando utilizziamo React creaiamo dei componenti che rappresentano la VIEW della mia applicazione web, ed un componente non è altro che uno snippet HTML. L'applicazione React sarà un insieme complesso di questi componenti. Un componente è una collezione di funzioni js o oggetti js che producono per l'appunto l'html della view.

I passi logici sono quelli di: 1) creare un componente React 2) visualizzare l'html generato a partire dal componente nel DOM.

In ES6 ho accesso al concetto di Moduli: l'idea è che il codice lo scriviamo in files separati e/o in librerie che carico nel momento del bisogno.
Rect è installato come dipendenza, grazie al package.json e la fatto di aver scaricato il tutto tramite npm init.

Nell'applicazione che andiamo a creare abbiamo vari componenti che rappresentano: la search bar, il video player, il box della descrizione e del titolo del video e i vari video proposti lateralmente, contenuti a loro volta in una lista. Infine abbiamo un unico componente che wrappa tutti questi altri. Abbiamo in totale 5 componenti. Quindi andiamo a dividere la nostra pagina web, il wireframe creato, in vari blocchi visivi che rappresentano il nostro componente.

Costruiamo un componente per file. Creiamo in src la cartella components e i files dei vari componenti.
Per caricare i video abbiamo bisogno di accedere alle API di youtube e ottenere una API Key.
Ottenuta la API Key installiamo la libreria. Dalla root del progetto scriverò:
npm install --save youtube-api-search

con il save inserisco la libreria nel package.json
