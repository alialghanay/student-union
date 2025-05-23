declare module "general" {
  import { ApiResponse as FeedResponse } from "feed";
  import { ApiResponse as DepartmentResponse } from "department";
  import { ApiResponse as ServiceResponse } from "services";
  import { ApiResponse as FAQResponse } from "questions";
  interface IPageContiner {
    children: React.ReactNode;
  }

  interface State {
    loading: boolean;
    error: string | undefined;
  }

  interface FeedState extends State {
    feeds: FeedResponse | null;
  }

  interface DepartmentState extends State {
    departments: DepartmentResponse | null;
  }

  interface ServiceState extends State {
    services: ServiceResponse | null;
  }

  interface FAQState extends State {
    faqs: FAQResponse | null;
  }
}
