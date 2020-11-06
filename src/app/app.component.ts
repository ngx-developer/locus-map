import { Component } from '@angular/core';
import LMInit from 'locusmaps-sdk';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'locus-map';

  constructor() {
      const config = {
        venueId: 'lax',
        accountId: 'A11F4Y6SZRXH4X',
        headless: false,
        uiHide: { sidebar: true, controls: true, levelSelector: true }
      };
      LMInit.newMap('.myLocusMap', config)
        .then(mapReady)
        .catch(e => console.error('Error initializing map: ', e));

      function mapReady(map) {
        // Your map is ready to use here!
      }

    }
}
