export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MenuWave",
  description:
    "Effortlessly create stunning live menus and keep them updated in real-time with MenuWave.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/h4or/menu-wave",
  },
};
