export type Foot = {
  privacy: string;
  home: string;
  created: string;
  links: Links;
};

type Links = {
  goit: Goit;
  ryzen: Ryzen;
};

type Goit = {
  href: string;
  aria: string;
};
type Ryzen = {
  href: string;
  aria: string;
};
