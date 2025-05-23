import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const navbar = {
  ar: {
    pages: [
      {
        title: "الرئيسية",
        url: "/",
      },
      {
        title: "الشكاوى",
        url: "/complaints",
      },
      {
        title: "انضم لنا",
        url: "/join-us",
      },
      {
        title: "من نحن؟",
        url: "/about-us",
      },
    ],
  },
  en: {
    pages: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Scientific Materials",
        url: "/scientific-materials",
      },
      {
        title: "Events",
        url: "/events",
      },
      {
        title: "Support Us",
        url: "https://gofund.me/d2913bef",
      },
      {
        title: "About Us",
        url: "/about-us",
      },
    ],
  },
  socials: [
    {
      title: "Telegram",
      url: "https://t.me/IDPAT1",
      icon: FaTelegram,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61563074465999&mibextid=ZbWKwL",
      icon: FaFacebook,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/prof_abdelraouf_elmanama?igsh=MTFqcnVzaHlkcDN6OA==",
      icon: FaInstagram,
    },
    {
      title: "Tiktok",
      url: "https://WWW.tiktok.com/@id_pat_palestine",
      icon: FaTiktok,
    },
  ],
};

export default navbar;
