import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BloggerRoutingModule } from './blogger-app-routing.module';
import {BloggerContentComponent} from './components/blogger-content/blogger-content.component';
import { BloggerHeaderComponent } from './components/blogger-header/blogger-header.component';
import { BloggerFooterCompoennt } from './components/blogger-footer/blogger-footer.component';
import { BloggerDetails } from './services/blogger-details.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { BloggerHeaderBlogComponent } from './components/blogger-header-blog/bloggerHeaderBlog.component';
import { Blogger } from './components/blogger-header-blog/blogger.component';
import { NotFound } from './components/not-found/not-found.component';



@NgModule({
    declarations:[BloggerContentComponent,BloggerHeaderComponent,BloggerFooterCompoennt,BloggerHeaderBlogComponent,Blogger,NotFound],
    imports:[BrowserModule, BrowserAnimationsModule,MatButtonModule,BloggerRoutingModule],
    providers:[BloggerDetails],
    bootstrap:[BloggerContentComponent]
})
export class BloggerAppModule {

}