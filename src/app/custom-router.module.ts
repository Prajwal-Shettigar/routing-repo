import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { RoutingComponent } from './routing/routing.component';
import { AnotherPostComponent } from './another-post/another-post.component';


const routes: Routes = [
  {
    path: "routing",
    component: RoutingComponent
  },
  {
    path: "",
    component: HomeComponent
  }, 
  {
    path: "post/:id",
    component: PostComponent
  },
  {
    path: "another",
    component: AnotherPostComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports : [RouterModule]
})
export class CustomRouterModule { 

}
