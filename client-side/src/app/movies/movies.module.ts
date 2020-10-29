import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CloseMovieComponent } from './close-movie/close-movie.component';
import { OpenMovieComponent } from './open-movie/open-movie.component';
import { MoviesStatisticsComponent } from './movies-statistics/movies-statistics.component';
import { DesignModule } from '../design/design.module'


@NgModule({
  declarations: [MoviesListComponent, CloseMovieComponent, OpenMovieComponent, MoviesStatisticsComponent],
  imports: [
    CommonModule,
    DesignModule
  ],
  exports: [MoviesListComponent, CloseMovieComponent, OpenMovieComponent, MoviesStatisticsComponent]
})
export class MoviesModule { }
