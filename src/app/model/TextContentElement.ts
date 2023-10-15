import {ContentElement} from "./ContentElement";

export type TextContentParams = {
  htmlElement ?: string,
  value : string,
}

export class TextContentElement extends ContentElement {

  htmlElement: string;
  value : string;

  constructor(
    params: TextContentParams
  ) {
    super();
    this.htmlElement = params.htmlElement ?? '<p>';
    this.value = params.value;
  }

  getHtml() {
    return this.htmlElement + this.value + '</' + this.htmlElement.slice(1, -1) + '>';
  }

}
