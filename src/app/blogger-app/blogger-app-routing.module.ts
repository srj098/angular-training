import { NgModule } from '@angular/core';
import { BloggerHeaderComponent } from './components/blogger-header/blogger-header.component';
import { BloggerHeaderBlogComponent } from './components/blogger-header-blog/bloggerHeaderBlog.component';
import {RouterModule, Routes} from '@angular/router';
import { Blogger } from './components/blogger-header-blog/blogger.component';
import { NotFound } from './components/not-found/not-found.component';


const routes:Routes = [
    {path:'',component:Blogger},
    {path:'header', component:BloggerHeaderComponent},
{path:'headerBlog', component:BloggerHeaderBlogComponent},
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class BloggerRoutingModule {

}