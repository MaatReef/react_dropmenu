import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const Data = [
    {
        title: "Inicio",
        path: "/",
        cName: "nav-text",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "Reportes",
        path: "/reports",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: "Reporte Actual",
                path: "/reports/reports1",
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: "Reporte Pasado",
                path: "/reports/reports2",
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: "Productos",
        path: "/products",
        cName: "nav-text",
        icon: <FaIcons.FaCartPlus />,
    }
];