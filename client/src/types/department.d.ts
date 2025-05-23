declare module "department" {
  /**
   * @description This is a type definition for the department page
   * @typedef {Object} Avatar
   * @property {number} id - The id of the avatar
   * @property {string} documentId - The document id of the avatar
   * @property {string} name - The name of the avatar
   * @property {string} alternativeText - The alternative text of the avatar
   * @property {string} caption - The caption of the avatar
   * @property {number} width - The width of the avatar
   * @property {number} height - The height of the avatar
   * @property {any} formats - The formats of the avatar
   * @property {string} hash - The hash of the avatar
   * @property {string} ext - The ext of the avatar
   * @property {string} mime - The mime of the avatar
   * @property {number} size - The size of the avatar
   * @property {string} url - The url of the avatar
   * @property {string} previewUrl - The preview url of the avatar
   * @property {string} provider - The provider of the avatar
   * @property {any} provider_metadata - The provider metadata of the avatar
   * @property {string} createdAt - The created at of the avatar
   * @property {string} updatedAt - The updated at of the avatar
   * @property {string} publishedAt - The published at of the avatar
   * @typedef {Object} Office
   * @property {number} id - The id of the office
   * @property {string} documentId - The document id of the office
   * @property {string} name - The name of the office
   */

  type Avatar = {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any | null; // Adjust this if formats contain specific properties
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };

  type Office = {
    id: number;
    documentId: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    avatar: Avatar;
  };

  type Pagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };

  interface ApiResponse {
    data: Office[];
    meta: {
      pagination: Pagination;
    };
  }
}
