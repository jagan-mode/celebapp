import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.css']
})
export class CelebrityComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  change(){
    this.route.navigateByUrl('/celebrity_detail');
  }
}
