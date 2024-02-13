import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-another-post',
  templateUrl: './another-post.component.html',
  styleUrl: './another-post.component.css'
})
export class AnotherPostComponent implements OnInit{

  name !:string;

  charcater !:string;

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(value=>{
      let name = value.get('name') as string

      let character = value.get('character') as string

      this.name = name;
      this.charcater = character;

    })
  }

  constructor(private activatedRoute:ActivatedRoute){

  }

}
