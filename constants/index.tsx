import TwitterIcon from "../assets/icons/twitter";
import InstagramIcon from "../assets/icons/instagram";
import GithubIcon from "../assets/icons/github";
import LinkedInIcon from "../assets/icons/linkedIn";
import { ICard } from "../components/cards";

interface INavigation {
  name: string;
  link: string;
}

export const NAVIGATIONS: INavigation[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "About Me",
    link: "/about-me",
  },
];

interface ISocialMedia {
  icon: React.FC;
  link: string;
}

export const SOCIALMEDIAS: ISocialMedia[] = [
  {
    icon: TwitterIcon,
    link: "https://twitter.com",
  },
  {
    icon: InstagramIcon,
    link: "https://instagram.com",
  },
  {
    icon: GithubIcon,
    link: "https://twitter.com",
  },
  {
    icon: LinkedInIcon,
    link: "https://twitter.com",
  },
];

export const CARDS: ICard[] = [];
