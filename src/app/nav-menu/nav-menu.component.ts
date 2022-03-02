/** core imports */
import { Component, OnInit } from '@angular/core';

/** external imports */
import { CONFIGURATION } from 'zencode-configuration-manager';

/** internal imports */
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  /**
   * Determines whether expanded is
   */
  isExpanded = false;

  /**
   * Determines whether production is
   */
  isProduction: any = false;

  /**
   * Api url of nav menu component
   */
  apiUrl = `${CONFIGURATION.get<string>('client_configuration_url')}/api`;

  /**
   * on init
   */
  ngOnInit() : void {
    this.isProduction = environment.production;
  }

  /**
   * Collapses nav menu component
   */
  collapse() {
    this.isExpanded = false;
  }

  /**
   * Toggles nav menu component
   */
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
