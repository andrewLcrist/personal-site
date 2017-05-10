import React from 'react';
import { MovieKeeper } from './projects/MovieKeeper'
import { PennyWise } from './projects/PennyWise'
import { WeatherForecast } from './projects/WeatherForecast'

export const Projects = () => {
  return (
      <div className="body-container">
        <MovieKeeper />
        <PennyWise />
        <WeatherForecast />
      </div>
    )
}
