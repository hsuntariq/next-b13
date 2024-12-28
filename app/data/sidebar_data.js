import { FaShoppingBasket, FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BsCashCoin, BsDoorClosed, BsGear, BsShield } from "react-icons/bs";
import { IoReceiptSharp } from "react-icons/io5";
import { BsMicrosoftTeams } from "react-icons/bs";

export const sidebar_data = [
  {
    id: 1,
    title: "pages",
    items: [
      {
        id: 1,
        title: "dashboard",
        icon: <MdDashboard />,
        link: "/dashboard",
      },
      {
        id: 2,
        title: "Show Users",
        icon: <FaUsers />,
        link: "/dashboard/users/show-users",
      },
      {
        id: 243,
        title: "Add Users",
        icon: <FaUsers />,
        link: "/dashboard/users/add-users",
      },
      {
        id: 3,
        title: "Products",
        icon: <FaShoppingBasket />,
        link: "/",
      },
      {
        id: 4,
        title: "Transactions",
        icon: <GrTransaction />,
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Analytics",
    items: [
      {
        id: 1,
        title: "revenue",
        icon: <BsCashCoin />,
        link: "/",
      },
      {
        id: 2,
        title: "reports",
        icon: <IoReceiptSharp />,
        link: "/",
      },
      {
        id: 3,
        title: "teams",
        icon: <BsMicrosoftTeams />,
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "user",
    items: [
      {
        id: 1,
        title: "Settings",
        icon: <BsGear />,
        link: "/",
      },
      {
        id: 2,
        title: "help",
        icon: <BsShield />,
        link: "/",
      },
      {
        id: 3,
        title: "logout",
        icon: <BsDoorClosed />,
        link: "/",
      },
    ],
  },
];
