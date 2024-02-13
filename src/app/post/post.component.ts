import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  id !:number;
  title!:string;
  content!:string;
  post!:string;
  pageNo!:string;

  constructor(private activatedRoute : ActivatedRoute){
  }

  @Output() postEventEmitter  = new EventEmitter<Post>();




  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value=>{

      console.log("event has been triggered..")
      let index  = value.get('id') as unknown as number;
      console.log("event has been triggered.."+index)
      let post = this.posts[index]

      this.id = post.id;
      this.title = post.title;
      this.content = post.content;

      // this.postEventEmitter.emit(post)
    })

    this.activatedRoute.queryParamMap.subscribe(value=>{

      console.log("event has been triggered for query param..")
      let title  = value.get('title') as string
      let pageNo = value.get('pageNo') as string

      this.post = title;
      this.pageNo = pageNo;

      console.log("event has been triggered.. for title "+title+"   & page No : "+pageNo)

    })



  }


  posts :Array<Post> = [
    {
      id: 1,
      title: "first post",
      content: "this is the firs post"
    },
    {
      id: 2,
      title: "second post",
      content: "this is the second post"
    },
    {
      id: 3,
      title: "third post",
      content: "this is the third post"
    },
    {
      id: 4,
      title: "fourth post",
      content: "this is the fourth post"
    },
    {
      id: 5,
      title: "fifth post",
      content: "this is the fifth post"
    },
    {
      id: 6,
      title: "sixth post",
      content: "this is the sixth post"
    },
  ]


}
