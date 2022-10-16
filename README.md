# Pokemon Dashboard

The purpose of this project was to create an application that would act as a prototype for future development of a more complex dashboard based pokemon application.

This project was created using the `create-react-app` boilerplate with additional libraries such as `tremor`, a [UI component library](https://github.com/tremorlabs/tremor) with TailwindCSS-like styling (Apache License 2.0) and `pokedex-promise-v2`, a Javascript wrapper library for the [PokeAPI](https://pokeapi.co/).

The project currently display a dashboard interface to the user where they can click on a card to display information about the pokemon on the screen. The data shown was requested and cached within local files through the use of scripts. The layout was created with responsiveness in mind for both mobile and desktop displays through the use of an event listener that would update the React state.

For future development, I hope to learn about backend technologies to create a database with data pulled from the PokeAPI to be able to handle GET requests without fear of being rate-limited. Furthermore, this would allow for additional data (typing matchups, encounter regions, etc.) to be shown about each specific pokemon relevant to the games.

## Installation and Usage

Installation:

`npm install`

Start Local Server:

`npm start`

To Visit Locally:

`http://localhost:3000`
