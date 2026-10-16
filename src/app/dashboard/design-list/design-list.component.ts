import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-design-list',
    templateUrl: './design-list.component.html',
    styleUrls: ['./design-list.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DesignListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
