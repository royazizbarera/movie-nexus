import React, { useState } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from '../widgets/DrawerMenu';
import NavLink from '../elements/NavLink';

const Navigation: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const currentPath = window.location.pathname;

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                ModalProps={{
                    keepMounted: true,
                    BackdropProps: {
                        sx: {
                            position: 'absolute',
                            backgroundColor: 'transparent',
                        },
                    },
                }}
                PaperProps={{
                    sx: {
                        position: 'absolute',
                        top: '3.8rem',
                        width: 250,
                        backgroundColor: '#141414',
                        color: 'white',
                    },
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <DrawerMenu currentPath={currentPath} />
                </Box>
            </Drawer>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <NavLink label="Beranda" to="/" />
                <NavLink label="Acara TV" to="/tv-shows" />
                <NavLink label="Film" to="/movies" />
                <NavLink label="Baru & Populer" to="/new-popular" />
                <NavLink label="Daftar Saya" to="/my-list" />
            </Box>
        </Box>
    );
};

export default Navigation;
