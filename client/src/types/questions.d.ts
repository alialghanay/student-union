declare module "questions" {
  type FAQ = {
    id: number;
    documentId: string;
    question: string;
    answer: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };

  type Pagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };

  type Meta = {
    pagination: Pagination;
  };

  interface ApiResponse {
    data: FAQ[];
    meta: Meta;
  }
}
