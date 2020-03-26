import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {

  loc=location.protocol+'//'+location.host;
  pdfDocument=this.loc+'/assets/news/docs/pdf/communication-covid-19.pdf';

  withDetails=false;

  constructor() { }

  ngOnInit(): void 
  {
  }

  onSwitchWithDetails()
  {
    this.withDetails= ! this.withDetails;
  }
}
