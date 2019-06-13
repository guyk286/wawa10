import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locaux',
  templateUrl: './locaux.component.html',
  styleUrls: ['./locaux.component.scss']
})
export class LocauxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPhotoWavreURL(): string
  {
    return './public/assets/img/logo_wavre.gif';
  }

  getPhotoLocalURL(): string
  {
    return './public/assets/img/locaux/IMG_0592.JPG';
  }
}
