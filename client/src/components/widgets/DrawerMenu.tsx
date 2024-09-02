import React from 'react';
import { List, Divider } from '@mui/material';
import SignInMenu from '../elements/SignInMenu';
import AccountMenu from "../elements/AccountMenu";
import NavItem from '../elements/NavItem';

const DrawerMenu: React.FC<{ currentPath: string }> = ({ currentPath }) => {
    return (
        <List>
            <SignInMenu />
            <AccountMenu />

            <Divider sx={{ my: 2, backgroundColor: 'gray' }} />

            <NavItem href="/" label="Beranda" isActive={currentPath === '/'} />
            <NavItem href="/tv-shows" label="Acara TV" isActive={currentPath === '/tv-shows'} />
            <NavItem href="/movies" label="Film" isActive={currentPath === '/movies'} />
            <NavItem href="/new-popular" label="Baru & Populer" isActive={currentPath === '/new-popular'} />
            <NavItem href="/my-list" label="Daftar Saya" isActive={currentPath === '/my-list'} />
        </List>
    );
};

export default DrawerMenu;
