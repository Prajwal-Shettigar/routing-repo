import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
import { Observable, timeInterval, timeout } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    const observable$ = new Observable(()=>{
      console.log("first statement")

      setTimeout(()=>{
        console.log("after some timeout")
      },5000)

      console.log("second statement")
    }).subscribe()

    observable$.unsubscribe();

  }
  title = 'routing-test';

   posts= ["first post","second post","third post","fourth post","fifth post","sixth post"];

   constructor(private router:Router){

   }


  get Posts(){
    return this.posts
  }

  postEventTriggered(event:any){
    console.log("event has been emmitted from the post event")
    console.log(event)
  }

  callAnotherPost(){
    this.router.navigate(["/another"],{queryParams:{name:"somename",character:"some character"}})
  }

}
