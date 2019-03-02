import { Component } from '@angular/core';

@Component({
  selector: 'app-dot-divider',
  template: `
    <svg class="dot-divider" width="3px" height="3px" viewBox="0 0 3 3" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Movies" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="1920x1200" transform="translate(-1836.000000, -316.000000)" fill="#707070">
          <g id="Right-Infoview" transform="translate(1511.000000, 0.000000)">
            <g id="Genres" transform="translate(261.000000, 309.000000)">
              <path
                d="M65.5,7 L65.5,7 C66.3284271,7 67,7.67157288 67,8.5 L67,8.5 C67,9.32842712 66.3284271,10 65.5,10 L65.5,10 C64.6715729,10 64,9.32842712 64,8.5 L64,8.5 C64,7.67157288 64.6715729,7 65.5,7 Z"
                id="Rectangle"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `,
  styles: [
      `
      .dot-divider {
        margin-left: 6px;
        margin-right: 6px;
      }
    `,
  ],
})
export class DotDividerComponent {

}
