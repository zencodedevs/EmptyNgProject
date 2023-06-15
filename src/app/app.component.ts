/** core imports */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent   implements OnInit{
 
  /**
   * Title  of app component
   */
  title = 'app';

  ngOnInit(): void {
     
  }

  
  /**
   * Determines whether started progress bar on
   */
  onStartedProgressBar(): void { }

  /**
   * Determines whether completed progress bar on
   */
  onCompletedProgressBar(): void { }
}
