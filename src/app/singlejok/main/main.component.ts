import { Component, OnInit } from '@angular/core';
import { Logger } from '../../utils/logger';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  logger:Logger = Logger.getInstance();

  constructor() {
    
  }

  ngOnInit() {
    this.logger.debug("test");
  }

}
