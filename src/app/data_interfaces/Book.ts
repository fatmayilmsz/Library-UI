import { Author } from "./Author";
import { Category } from "./Category";

export interface Book {
  id: number | null;
  name: string | null;
  author: Author | null;
  publishing: string | null;
  category: Category | null;
  summary: string | null;
  readCount: number | null;
  image: string | null;
}