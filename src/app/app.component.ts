import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public name: string = 'Angular!';
  public index: number = 0;
  public data: any[] = [ // example test data
    {
      "id": 4942781522903040,
      "weather_state_name": "Heavy Cloud",
      "weather_state_abbr": "hc",
      "wind_direction_compass": "SW",
      "created": "2020-02-03T12:57:40.512599Z",
      "applicable_date": "2020-02-03",
      "min_temp": 5.955,
      "max_temp": 20.79,
      "the_temp": 18.715,
      "wind_speed": 4.377592782502187,
      "wind_direction": 218.66544858796595,
      "air_pressure": 1018.5,
      "humidity": 57,
      "visibility": 15.973899924441262,
      "predictability": 71
    },
    {
      "id": 6380371878871040,
      "weather_state_name": "Light Rain",
      "weather_state_abbr": "lr",
      "wind_direction_compass": "SSW",
      "created": "2020-02-03T12:57:43.638579Z",
      "applicable_date": "2020-02-04",
      "min_temp": 11.27,
      "max_temp": 18.455,
      "the_temp": 18.47,
      "wind_speed": 7.179410362970916,
      "wind_direction": 212.3079472898039,
      "air_pressure": 1016.0,
      "humidity": 79,
      "visibility": 14.48043426389883,
      "predictability": 75
    },
    {
      "id": 6579270631555072,
      "weather_state_name": "Heavy Rain",
      "weather_state_abbr": "hr",
      "wind_direction_compass": "SSW",
      "created": "2020-02-03T12:57:46.625388Z",
      "applicable_date": "2020-02-05",
      "min_temp": 15.115,
      "max_temp": 20.229999999999997,
      "the_temp": 19.42,
      "wind_speed": 7.8528873912829065,
      "wind_direction": 191.8288597456957,
      "air_pressure": 1012.5,
      "humidity": 87,
      "visibility": 8.062291219279409,
      "predictability": 77
    },
    {
      "id": 5435044501913600,
      "weather_state_name": "Heavy Rain",
      "weather_state_abbr": "hr",
      "wind_direction_compass": "SW",
      "created": "2020-02-03T12:57:49.619127Z",
      "applicable_date": "2020-02-06",
      "min_temp": 7.85,
      "max_temp": 17.215,
      "the_temp": 16.84,
      "wind_speed": 8.883143786969432,
      "wind_direction": 233.91358052020468,
      "air_pressure": 1000.5,
      "humidity": 92,
      "visibility": 5.287868845939712,
      "predictability": 77
    }
  ];

  public onClick(): void {
    // Have this fuction called when clicking on an app-button component
    if (this.index === this.data.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }
}
