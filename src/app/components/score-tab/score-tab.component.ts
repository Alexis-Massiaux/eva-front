import { CommonModule} from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { Player } from '@models/player';
import { ScoreTabColumn } from '@models/score-tab-column';
import { StringEnumUtil } from '@shared/string-enum-util';

const ELEMENT_DATA: Player[] = [
  {pseudo: 'Azoy', seasonPass: true, level: "50", gameNumber: 100, wins: 90, defeats: 9, ties: 1,
    gameTime: '05:45:00', kills: 103, deaths: 52, supports: 0, percentKills: 0.67896542, killsForDeaths: 0.8,
    distance: 1654789.75, averageDistance: 256.87, maxSeriesKills: 8, maxDamage: 2808, totalDamage: 56987},
  {pseudo: '2023', seasonPass: true, level: "41", gameNumber: 88, wins: 44, defeats: 44, ties: 0,
    gameTime: '04:59:59', kills: 81, deaths: 60, supports: 15, percentKills: 0.45896542, killsForDeaths: 0.49,
    distance: 1054789, averageDistance: 250, maxSeriesKills: 13, maxDamage: 2456, totalDamage: 49321},
];

@Component({
  selector: 'app-score-tab',
  imports: [MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, CommonModule, MatSlideToggleModule, FormsModule],
  templateUrl: './score-tab.component.html',
  styleUrl: './score-tab.component.scss'
})
export class ScoreTabComponent implements AfterViewInit {

  displayedColumns: string[] = Object.keys(ScoreTabColumn);
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  checked = false;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onToggleValueChange(newValue: boolean) {
    if (newValue) {
      this.displayedColumns = [
        StringEnumUtil.getEnumKeyByValue(ScoreTabColumn, ScoreTabColumn.pseudo),
        StringEnumUtil.getEnumKeyByValue(ScoreTabColumn, ScoreTabColumn.level),
        StringEnumUtil.getEnumKeyByValue(ScoreTabColumn, ScoreTabColumn.gameNumber),
        StringEnumUtil.getEnumKeyByValue(ScoreTabColumn, ScoreTabColumn.wins),
        StringEnumUtil.getEnumKeyByValue(ScoreTabColumn, ScoreTabColumn.defeats),
        StringEnumUtil.getEnumKeyByValue(ScoreTabColumn, ScoreTabColumn.ties),
        StringEnumUtil.getEnumKeyByValue(ScoreTabColumn, ScoreTabColumn.killsForDeaths),
        StringEnumUtil.getEnumKeyByValue(ScoreTabColumn, ScoreTabColumn.kills),
        StringEnumUtil.getEnumKeyByValue(ScoreTabColumn, ScoreTabColumn.deaths),
        StringEnumUtil.getEnumKeyByValue(ScoreTabColumn, ScoreTabColumn.supports)
      ]
    } else {
      this.displayedColumns = Object.keys(ScoreTabColumn);
    }
  }


  getColumnName(column: string): string {
    return StringEnumUtil.getEnumValueByKey(ScoreTabColumn, column);
  }
}
