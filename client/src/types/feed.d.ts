declare module "feed" {
  /**
   * @description This is a type definition for the feed page
   * @typedef {Object} TextNode
   * @property {string} type - The type of the node
   * @property {string} text - The text of the node
   */

  type ImageFormats = {
    thumbnail: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      url: string;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
    };
    medium: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      url: string;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
    };
    small: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      url: string;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
    };
    large?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      url: string;
      width: number;
      height: number;
      size: number;
      sizeInBytes: number;
    };
  };

  type Poster = {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };

  type Paragraph = {
    type: "paragraph";
    children: {
      type: "text";
      text: string;
    }[];
  };

  type Document = {
    id: number;
    documentId: string;
    headline: string;
    pargraph: Paragraph[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    poster: Poster;
  };

  interface ApiResponse {
    data: Document[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
}
