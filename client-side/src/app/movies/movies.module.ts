import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CloseMovieComponent } from './close-movie/close-movie.component';
import { OpenMovieComponent } from './open-movie/open-movie.component';
import { MoviesStatisticsComponent } from './movies-statistics/movies-statistics.component';
import { DesignModule } from '../design/design.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ToolbarModule} from 'primeng/toolbar';
import {DropdownModule} from 'primeng/dropdown'; 


@NgModule({
  declarations: [MoviesListComponent, CloseMovieComponent, OpenMovieComponent, MoviesStatisticsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DesignModule,
    ButtonModule,
    RippleModule,
    ScrollPanelModule,
    ToolbarModule,
    DropdownModule
  ],
  exports: [MoviesListComponent, CloseMovieComponent, OpenMovieComponent, MoviesStatisticsComponent]
})
export class MoviesModule { }
