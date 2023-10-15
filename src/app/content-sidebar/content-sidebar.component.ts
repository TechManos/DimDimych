import {Component, OnInit} from '@angular/core';
import {TopicsService} from "../topics.service";
import {Topic} from "../topics";

@Component({
  selector: 'app-content-sidebar',
  templateUrl: './content-sidebar.component.html',
  styleUrls: ['./content-sidebar.component.css']
})
export class ContentSidebarComponent implements OnInit {

  topics: Topic[] = [];

  constructor(private topicsService: TopicsService) {
  }

  ngOnInit() {
    this.topics = this.topicsService.getItems();
  }
}
