import { Component, OnInit } from '@angular/core';

import { BackendService} from '../services/backend/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ip;

  constructor( private backend: BackendService) {
    this.backend.getter().subscribe(res => {
      console.log(res);
      this.ip = JSON.parse(JSON.stringify(res));
    });
   }

  ngOnInit() {
  }

}
