import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss']
})
export class ApprovalsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  change(){
    this.route.navigateByUrl('/celebrity_detail');
  }
}
