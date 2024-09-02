import React, { useState, useEffect, useRef } from 'react';
import {AppBar, Toolbar, Box, useTheme} from '@mui/material';
import Logo from '../elements/Logo';
import Navigation from '../modules/Navigation';
import SearchBar from '../elements/SearchBar';
import ProfileMenu from '../widgets/ProfileMenu';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (headerRef.current) {
            document.documentElement.style.setProperty('--header-height', `${headerRef.current.clientHeight}px`);
        }
    }, []);


    return (
        <AppBar
            ref={headerRef}
            position="fixed"
            sx={{
                backgroundColor: {
                    xs: '#141414',
                    md: scrolled ? '#141414' : 'transparent',
                },
                transition: 'background-color 0.3s ease',
                padding: '0 0.5rem',
                boxShadow: 'none',
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ display: {xs: 'none', md: 'flex'}, alignItems: 'center' }}>
                    <Logo />
                    <Box sx={{ marginLeft: 3.5, padding: 0.8 }}>
                        <Navigation />
                    </Box>
                </Box>
                <Box sx={{ display: {xs: 'flex', md: 'none'}, alignItems: 'center' }}>
                    <Navigation />
                    <Logo />
                </Box>
                <Box sx={{ display: {xs: 'none', md: 'flex'}, alignItems: 'center' }}>
                    <SearchBar />
                    <ProfileMenu />
                </Box>
                <Box sx={{ display: {xs: 'flex', md: 'none'}, alignItems: 'center' }}>
                    <SearchBar />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
