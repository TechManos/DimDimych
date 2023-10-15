import { Injectable } from '@angular/core';
import {Topic, topics} from "./topics";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  items: Topic[] = [...topics];

  constructor(
    private http: HttpClient
  ) { }

  addTopic(topic: Topic) {
    this.items.push(topic);
  }

  getItems() {
    console.log("Logging items in service before GET:");
    console.log(this.items);
    return this.items;
  }
}
