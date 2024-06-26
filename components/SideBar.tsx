"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from "./Library";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface SideBarProps {
    children: React.ReactNode;
    songs: Song[]
}

const SideBar: React.FC<SideBarProps> = ({
    children,
    songs
}) => {

    const pathname = usePathname();
    const player = usePlayer()

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: "Home",
            active: pathname !== "/search",
            href: "/",
        },
        {
            icon: BiSearch,
            label: "Search",
            active: pathname === "/search",
            href: "/search",
        }
    ], [pathname]);

    const mainHeightClass = player.activeId ? "h-[calc(100vh-80px)]" : "h-screen";

    return (
        <div className={twMerge(`
            flex
            ${mainHeightClass}
        `)}>
            <div
                className="
                    hidden
                    md:flex
                    flex-col
                    gap-y-2
                    bg-black
                    h-full
                    w-[300px]
                    p-2
                "
            >
                <Box>
                    <div
                        className="
                            flex
                            flex-col
                            gap-y-4
                            px-5
                            py-4
                        "
                    >
                        {routes.map((item)=>(
                            <SideBarItem
                                key={item.label}
                                {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library songs={songs}/>
                </Box>
            </div>
            <main className="
                h-full
                flex-1
                overflow-y-auto
                py-2
                bg-black
            ">
                {children}
            </main>
        </div>
    );
}

export default SideBar;