import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  constructor() { }

  public months = [
    {name: "January"},
    {name: "February"},
    {name: "March"},
    {name: "April"},
    {name: "May"},
    {name: "June"},
    {name: "July"},
    {name: "August "},
    {name: "September "},
    {name: "October"},
    {name: "November"},
    {name: "December"},
  ]

  ngOnInit() {
  }

}
