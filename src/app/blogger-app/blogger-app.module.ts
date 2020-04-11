import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BloggerContentComponent} from './components/blogger-content/blogger-content.component';
import { BloggerHeaderComponent } from './components/blogger-header/blogger-header.component';
import { BloggerFooterCompoennt } from './components/blogger-footer/blogger-footer.component';


@NgModule({
    declarations:[BloggerContentComponent,BloggerHeaderComponent,BloggerFooterCompoennt],
    imports:[BrowserModule],
    providers:[],
    bootstrap:[BloggerContentComponent]
})
export class BloggerAppModule {

}