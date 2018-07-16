# Weather TV 
A fictional cable weather channel web app that I thought about one night while flipping through channels. I saw a design on the Weather Channel and thought I'd like to try building that in CSS.

![](./docs/weather-mock.png)

## Getting Up and Running
1. Clone this repo
2. Install dependencies `npm install`
3. Go to [Weather Bit IO](https://www.weatherbit.io/) and sign up for a free account. You will need an api key for the next step.
4. Create a config.js file. (DO NOT CHECK this into source control). Quick was is to just duplicate config.default.js and add your api key.
5. Run dev server `npm start`

## Technologies used:
* [React 16](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Ducks Pattern](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)
* [Redux Actions](https://redux-actions.js.org/)
* [Sass](https://sass-lang.com/)
* [Webpack 4](https://webpack.js.org/concepts/)
* [Weather Bit api](https://www.weatherbit.io/)
* [Weather Icons](https://erikflowers.github.io/weather-icons/)
* [Font Awesome - Brands](https://fontawesome.com/icons?d=gallery&s=brands)

## Webpack setup
* Enabled jsx for React
* Enabled Sass
* Enabled font loading for Weather Icons fonts.
* Enabled Hot Reloading out of the /dist folder.
* Set dev server to serve out of the /dist folder.

## Babel
* Enabled the use of decorators to more easily interact with Redux. see babel-plugin-transform-decorators-legacy

```javascript
@connect((state) => {
  const {
    forecast
  } = state;
  return {
    forecast
  }
})
export default class App extends Component { }
```

## Redux
This project uses a simplified abstraction of the 'Ducks Pattern'. 

```markdown
src/redux (This would be 'ducks' in other implementations)
    /modules
        reducer.js (combines all reducers to be loaded by the store)
        books.js (books reducer)
        library.js (library reducer)
        /utils
            globals.js (loading values from config)
            base.js (creating a setReducer)
            api.js  (centralizes reducer functions and api calls with axios)
```

## The Final Result
![](docs/Finished_Weather_TV.png)

## Challenges 
* Open Weather data is a little more work to get what I wanted so I switched to Weather Bit, which actually has Swagger docs so you can test different calls from within swagger. Also able to set the number of days to 5 which is exactly what I wanted.

## Todos
* Wire up unit tests using Jest.
 