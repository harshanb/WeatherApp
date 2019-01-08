## Welcome to WeatherApp
This application will give you a brief weather report with the latitude and longitude values ,it makes use of the OpenWeatherMap service to gather information.


## Start server
        npm start
To be run from the project root directory(..\WeatherApp) to start the application  and to listen the live development server in the browser.

## Run Unit tests and Code Coverage
        npm test
To execute the unit tests which should open the karma page in the browser showing the test specs summary and to see the brief coverage for the project , a detailed view of the code coverage summary can be seen by launching this page (..\WeatherApp\coverage\index.html).


### weather-app component
    This structure is for subscribing/fetching the weather details from the openWeatherApi service by passing the models.


### displaydetails component
    This component does fetch the weather details as observables from the weather-app component, to display them in the front-end.

### OpenWeatherAPIservice
    The OpenWeatherMAP api resource is consumed here.