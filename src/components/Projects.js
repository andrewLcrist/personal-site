import React from 'react';
import { MovieKeeper } from './MovieKeeper'
import { PennyWise } from './PennyWise'
import { WeatherForecast } from './WeatherForecast'

export const Projects = () => {
  return (
      <div className="projects-container">
        <MovieKeeper />
        <PennyWise />
        <WeatherForecast />
      </div>
    )
}
