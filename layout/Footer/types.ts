export type Foot = {
  policy: string;
  home: string;
  created: string;
  links: Links;
};

type Links = {
  goit: Link;
  ryzen: Link;
};

type Link = {
  href: string;
  aria: string;
};
