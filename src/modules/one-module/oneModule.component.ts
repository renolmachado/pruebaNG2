import { Component } from '@angular/core';

@Component({
    selector: 'sample-component',
    template: `<h1 class="example"> Example with multiples components</h1>`,
    styleUrls: [`./oneModule.css`],
})

export class OneModuleComponent {

    constructor() {
    }

}