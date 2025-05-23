declare module "services" {
  type Icon = {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: null;
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

  type DataItem = {
    id: number;
    documentId: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    icon: Icon;
  };

  type Pagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };

  interface ApiResponse {
    data: DataItem[];
    meta: {
      pagination: Pagination;
    };
  }
}
