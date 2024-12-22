import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScoreTabComponent} from './score-tab/score-tab.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScoreTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eva-front';
}
