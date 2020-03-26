import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListeComponent } from './news-liste/news-liste.component';
import { NewsRoutingModule } from './news-routing.module';
import { AppCommonModule } from '../common/app-common.module';
import { NewsCreateComponent } from './news-create/news-create.component';
import { MdBootstrapProModule } from '../../modules.vendors/mdbootstrap/md-bootstrap-pro.module';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [ NewsListeComponent, NewsCreateComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    AppCommonModule,
    MdBootstrapProModule,
    AuthModule,
  ],
  exports: [
    NewsRoutingModule
  ]

})
export class NewsModule { }
