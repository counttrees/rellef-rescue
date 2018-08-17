/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component,OnInit, OnDestroy } from "@angular/core";
import { NgModel} from '@angular/forms';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
    value:string;
    self:boolean = false;
    manLoc:boolean = true;

    rescue:boolean = true;
    water:boolean = true;
    food:boolean = true;
    medical:boolean = true;
    clothing:boolean = true;
    
    ngOnInit()
    {
        this.value = 'test';
    }
    toSubmit()
    {
        alert('data submitted successfully');
    }

}
