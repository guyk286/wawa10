import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListeComponent } from './news-liste/news-liste.component';
import { NewsCreateComponent } from './news-create/news-create.component';


export const NEWS_ROUTES: Routes =
[
    { path: 'news',  children: [
        { path: 'liste', component: NewsListeComponent },
        { path: 'create', component: NewsCreateComponent },
        ] }
];

@NgModule({
  imports: [RouterModule.forChild(NEWS_ROUTES)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
