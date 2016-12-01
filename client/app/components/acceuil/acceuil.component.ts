/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-acceuil',
    templateUrl: './app/components/acceuil/acceuil.component.html',
    styleUrls: [
        "./app/components/acceuil/acceuil.component.css",
        "https://unpkg.com/@salesforce-ux/design-system@^2.1.3/assets/styles/salesforce-lightning-design-system.min.css",
        "./style.css"
    ],
})

export class AcceuilComponent implements OnInit {
    ngOnInit() {
    }
}