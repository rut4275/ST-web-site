import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupesListComponent } from './groupes-list/groupes-list.component';
import { GroupesEditComponent } from './groupes-edit/groupes-edit.component';
import { GroupesStatisticsComponent } from './groupes-statistics/groupes-statistics.component';
import { DesignModule } from '../design/design.module'
import {ScrollPanelModule} from 'primeng/scrollpanel';
@NgModule({
  declarations: [GroupesListComponent, GroupesEditComponent, GroupesStatisticsComponent],
  imports: [
    CommonModule,
    DesignModule,
    ScrollPanelModule
  ],
  exports: [GroupesListComponent, GroupesEditComponent, GroupesStatisticsComponent]
})
export class GroupesModule { }
