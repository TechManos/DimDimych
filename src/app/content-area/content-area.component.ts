import {Component, Input, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Topic} from "../topics";
import {TopicsService} from "../topics.service";
import {ActivatedRoute} from "@angular/router";
import {TextContentElement} from "../model/TextContentElement";
import {ContentElement} from "../model/ContentElement";
import {ImageContentElement} from "../model/ImageContentElement";

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentAreaComponent implements OnInit, OnDestroy {
  // topicId ?: number;
  topic ?: Topic;
  topicElementsToImages ?: any[];
  // private sub: any;
  // @Input() topicId: number;

  //TODO:
  // 1. Take whole HTML and split to array where the images were placed.
  // 2.
  //
  //
  //
  //

  constructor(
    private route: ActivatedRoute,
    private topicsService: TopicsService
  ) {}

  @Input()
  set topicId(id: string) {
    // this.topicId = id;
    this.topic = this.topicsService.getItems().find(topic => topic.id === +id);
  }

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   this.topicId = +params['topicId']; // (+) to convert into number
    //
    //   // In a real app: dispatch action to load the details here.
    //     // Find the topic that correspond with the id provided in route.
    //     this.topic = this.topicsService.getItems().find(topic => {
    //       console.log(topic);
    //       console.log(this.topicId);
    //       console.log(typeof this.topicId);
    //       return topic.id === this.topicId;
    //     });
    // });
    console.log("Content's ngOnInit running...");
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
    // console.log('COMPONENT DESTROYED: Content-Area')
  }



  // @Input()
  // set id(topicId: number) {
  //   // Find the topic that correspond with the id provided in route.
  //   this.topic = this.topicsService.getItems().find(topic => {
  //     console.log(topic);
  //     console.log(topicId);
  //     return topic.id === topicId;
  //   });
  // }

  //@Input()
  // set id(heroId: string) {
  //   this.hero$ = this.service.getHero(heroId);
  // }

  isElementTextContent(element: ContentElement) {
    return element instanceof TextContentElement;
  }

  getTextElementHtml(element: ContentElement) {
    return element instanceof TextContentElement ? element.getHtml() : '';
  }

  isElementImageContent(element: ContentElement) {
    return element instanceof ImageContentElement;
  }

  getImageElementSrc(element: ContentElement) {
    if (!(element instanceof  ImageContentElement)) {
      return '';
    }

    return element.href ?? element.path;
  }

  getImageElementHref(element: ContentElement) {
    return element instanceof ImageContentElement ? element.href : '';
  }

  getImageElementPath(element: ContentElement) {
    return element instanceof ImageContentElement ? element.path : '';
  }

  getImageElementAlt(element: ContentElement) {
    return element instanceof ImageContentElement ? element.alt : '';
  }
}
