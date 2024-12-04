export interface IPerson {
  name: string;
  position: string;
  img: string; // images should have square dimensions
  link?: string;
}

const People: ReadonlyArray<IPerson> = [
  {
    name: "Branden Ghena",
    position: "Professor",
    img: "https://www.mccormick.northwestern.edu/images/research-and-faculty/directory/ghena-branden.jpg",
    link: "https://brandenghena.com/",
  },
  {
    name: "FirstName LastName",
    position: "Placeholder",
    img: "https://www.thispersondoesnotexist.com",
  },
  {
    name: "FirstName LastName",
    position: "Placeholder",
    img: "https://www.thispersondoesnotexist.com",
  },
  {
    name: "FirstName LastName",
    position: "Placeholder",
    img: "https://www.thispersondoesnotexist.com",
  },
  {
    name: "FirstName LastName",
    position: "Placeholder",
    img: "https://www.thispersondoesnotexist.com",
  },
  {
    name: "FirstName LastName",
    position: "Placeholder",
    img: "https://www.thispersondoesnotexist.com",
  },
  {
    name: "FirstName LastName",
    position: "Placeholder",
    img: "https://www.thispersondoesnotexist.com",
  },
];

export default People;
