import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-liste',
  templateUrl: './news-liste.component.html',
  styleUrls: ['./news-liste.component.scss']
})
export class NewsListeComponent implements OnInit {

  viewPdf=false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void 
  {
  }

  onTestPdfViewer()
  {
    this.viewPdf=true;
  }

  onCreateNews()
  {
    this.router.navigate(['news', 'create']);
  }
}
