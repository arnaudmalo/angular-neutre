import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';

@Component({
    templateUrl: './colors.component.html'
})
export class ColorsComponent implements OnInit{

    colors: any[] = ['blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'red', 'teal', 'orange', 'bluegray', 'purple', 'gray', 'primary'];

    shades: any[] = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    constructor(private layoutService: LayoutService) { }

    ngOnInit(): void {
    }

    get colorScheme() {
        return this.layoutService.config.colorScheme === 'light' ? false : true;
    }
}
