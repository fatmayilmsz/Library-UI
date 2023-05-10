import { Author } from "./Author";
import { Category } from "./Category";

export interface BookPeriodicElement {
  position: number | null;
  kitapGorseli: string | null;
  kitapAdi: string | null;
  kitapYazari: Author | null;
  kitapOzeti: string | null;
  yayinEvi: string | null;
  basim: string | null;
  kitapTuru: Category | null;
  kitabinDurumu: string | null;
}

export interface AuthorPeriodicElement {
  position: number | null;
  yazarGorseli: string | null;
  yazarAdi: string | null;
  yazilanTur: Category | null;
}