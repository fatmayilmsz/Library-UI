import { Category } from "./Category";

export interface Author {
    id: number | null;
    name: string | null;
    lastName: string | null;
    category: Category | null;
    image: string | null;
}