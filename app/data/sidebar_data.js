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
      },
      {
        id: 2,
        title: "Users",
        icon: <FaUsers />,
      },
      {
        id: 3,
        title: "Products",
        icon: <FaShoppingBasket />,
      },
      {
        id: 4,
        title: "Transactions",
        icon: <GrTransaction />,
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
      },
      {
        id: 2,
        title: "reports",
        icon: <IoReceiptSharp />,
      },
      {
        id: 3,
        title: "teams",
        icon: <BsMicrosoftTeams />,
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
      },
      {
        id: 2,
        title: "help",
        icon: <BsShield />,
      },
      {
        id: 3,
        title: "logout",
        icon: <BsDoorClosed />,
      },
    ],
  },
];
