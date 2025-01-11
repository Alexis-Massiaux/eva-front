import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreTabComponent } from '@components/score-tab/score-tab.component';
import { EvaHeaderComponent } from 'eva-library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScoreTabComponent, EvaHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eva-front';
}
