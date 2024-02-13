import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { CustomRouterModule } from './custom-router.module';
import { AnotherPostComponent } from './another-post/another-post.component';




@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HomeComponent,
    AnotherPostComponent
  ],
  imports: [
    BrowserModule, CustomRouterModule,CustomRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
