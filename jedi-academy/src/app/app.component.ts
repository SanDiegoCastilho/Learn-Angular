import { Component } from '@angular/core';

import {Student} from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students = [
    {name: 'Luke', isJedi: true, temple: 'Courusant'},
    {name: 'Han Solo', isJedi: false},
    {name: 'Luke', isJedi: false}
  ]
}
