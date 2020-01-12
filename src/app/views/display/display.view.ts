import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SettingsService } from 'src/app/services/settings.service';

@Component({
    selector: 'app-display',
    templateUrl: './display.view.html',
    styleUrls: ['./display.view.scss']
})
export class DisplayView implements OnInit, OnDestroy {

    // The current images in the local folder
    contents: any = [];
    // The current slide to show
    current = 0;
    // Interval reference for the contents
    intervalContents: any;
    // Interval reference for the slide change
    intervalSlideChange: any;
    // The path to the images
    path = this.settingsService.data.folder + '/assets/';

    constructor(
        private http: HttpClient,
        private settingsService: SettingsService
    ) {}

    // Gets the next slide, if at end it starts list again
    nextSlide() {
        this.current = this.current + 1 >= this.contents.length ? 0 : this.current + 1;
    }

    // Gets the folder contents from the localhost
    // removes any non-image files and any souvenir cards
    getContents() {
        this.http.get(this.settingsService.data.node + '/contents').subscribe( (contents: any) => {
            this.contents = contents.files.filter( (file: any) => {
                return (/\.(jpg|jpeg|png)$/i).test(file);
            }).filter( (file: any) => {
                return !file.match('souvenir');
            });
        }, (err) => console.log('error', err));
    }

    // Start interval to look for new contents every 20 seconds
    // Change slide every 5 seconds
    ngOnInit() {
        this.intervalContents = setInterval( () => {
            this.getContents();
        }, 20000);

        this.intervalSlideChange = setInterval( () => {
            this.nextSlide();
        }, 5000);

        this.getContents();
    }

    ngOnDestroy() {
        clearInterval(this.intervalContents);
        clearInterval(this.intervalSlideChange);
    }

}
