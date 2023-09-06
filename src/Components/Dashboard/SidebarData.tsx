import React from 'react'
import { MdViewQuilt } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { MdAdminPanelSettings
} from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";





export const SidebarData = [

    {
        title: "Overview",
        icon: <MdViewQuilt />,
        link: "/dashboard"
    },
    {
        title: "Users",
        icon: <FiUsers />,
        link: "/dashboard/user"
    },
    {
        title: "Admins",
        icon: <MdAdminPanelSettings />,
        link: "/dashboard/admin"
    },
    {
        title: "Logout",
        icon: <RiLogoutBoxRLine />,
        link: "/login"
    },
]
