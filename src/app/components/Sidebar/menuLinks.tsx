import HomeIcon from "@/assets/menu/home.svg";
import ChestIcon from "@/assets/menu/chest.svg";
import MoreIcon from "@/assets/menu/more.svg";
import ProfileIcon from "@/assets/menu/profile.svg";
import ShieldIcon from "@/assets/menu/shield.svg";
import ShopIcon from "@/assets/menu/shop.svg";
import PraticseIcon from "@/assets/menu/praticse.svg";

export const menuLinks = [
  {
    title: "APRENDER",
    icon: <HomeIcon />,
  },
  {
    title: "PRATICAR",
    icon: <PraticseIcon />,
  },
  {
    title: "LIGAS",
    icon: <ShieldIcon />,
  },
  {
    title: "MISSÕES",
    icon: <ChestIcon />,
  },
  {
    title: "LOJA",
    icon: <ShopIcon />,
  },
  {
    title: "PERFIL",
    icon: <ProfileIcon className="rounded-full" />,
  },

  {
    title: "MAIS",
    icon: <MoreIcon />,
  },
];
