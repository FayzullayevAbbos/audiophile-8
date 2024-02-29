import earphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headPhon from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
interface NavItem {
  icon: any;
  title: string;
  href: string;
}
("app/assets/home/mobile/image- ,app/assets/home/mobile/image- , app/assets/home/mobile/image- ");
export const navData: NavItem[] = [
  {
    icon: headPhon,
    title: "headphones",
    href: "/category/headphones",
  },
  {
    icon: speaker,
    title: "speakers",
    href: "/category/speakers",
  },
  {
    icon: earphone,
    title: "earphones",
    href: "/category/earphones",
  },
];
