'use client'
import { NavigationTabs } from "./NavigationTabs"
import { Link } from "@nextui-org/react"
import Image from "next/image"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const pages = ['solutions', 'about', 'contact']

export function Navbar() {
    return (
        <div className="w-full flex items-center justify-between bg-white px-5 shadow-lg">
            <Link href="/">
                <div className="h-14 w-24 relative">
                    <Image
                        src="/Logo.png"
                        fill
                        className="object-contain"
                        alt="Seek Logo"
                    />
                </div>
            </Link>
            <div className="hidden sm:block">
                <NavigationTabs pages={pages} />
            </div>
            <div className="sm:hidden">
                <MobileMenu />
            </div>
        </div>
    )
}

function MobileMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const onItemClick = (item) => {
        setAnchorEl(null);
        console.log(item)
    };


    return (
        <div>
            <IconButton
                id="mobile-menu-icon"
                aria-controls={open ? 'mobile-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
                id="mobile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'mobile-menu-button',
                }}
            >
                {pages.map(page => <MenuItem key={page} onClick={() => onItemClick(page)}>{page}</MenuItem>)}
            </Menu>
        </div>
    );
}