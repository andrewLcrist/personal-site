import React from 'react';
import { MovieKeeper } from './projects/MovieKeeper'
import { PennyWise } from './projects/PennyWise'
import { WeatherForecast } from './projects/WeatherForecast'

export const Projects = () => {
  return (
      <div className="body-container">
        <h1 className="projects-header">Projects</h1>
        <MovieKeeper />
        <PennyWise />
        <WeatherForecast />
      </div>
    )
}
