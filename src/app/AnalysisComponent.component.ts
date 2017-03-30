/**
 * Created by jakeclose on 3/15/17.
 */
/**
 * Created by jakeclose on 3/15/17.
 */

import {Component, Input, ViewChild} from '@angular/core';

@Component({
    selector: 'relative-path',
    templateUrl: './app/pages/page3.component.html',
    styleUrls: ['./app/pages/css/bootstrap-slider.css']
})

export class AnalysisComponent {

    title = 'Analysis Page';
    featuresArray = ['QRS Interval', 'S Amplitude', 'PR Interval', 'T Amplitude', 'QT Interval', 'Q Amplitude', 'T Interval', 'P Amplitude', 'P Interval', 'R Amplitude'];
    selection: any[];
    idx = -1;

    public toggleSelection(featureName: string) {
        this.idx = this.selection.indexOf(featureName);

        // is currently selected
        if (this.idx > -1) {
            this.selection.splice(this.idx, 1);
        }

        // is newly selected
        else {
            this.selection.push(featureName);
        }
    };

}











