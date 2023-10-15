import {ContentElement} from "./ContentElement";

export type ImageContentParams = {
  href ?: string,
  path ?: string,
  alt ?: string
}

export class ImageContentElement extends ContentElement {

  href ?: string;
  path ?: string;
  alt: string;

  constructor(
    // TODO: make some placeholder image for the ones without source defined
    params: ImageContentParams
  ) {
    super();
    this.href = params?.href;
    this.path = params?.path;
    this.alt = params?.alt ?? 'Image';
  }

}
