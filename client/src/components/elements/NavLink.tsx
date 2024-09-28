import React from 'react';
import { Typography } from '@mui/material';

interface NavLinkProps {
    label: string;
    to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, to }) => {
    const isActive = window.location.pathname === to;

    return (
        <a href={to} style={{ textDecoration: 'none' }}>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.7)',
                    marginRight: 3,
                    fontSize: '0.8rem',
                    '&:hover': {
                        color: 'white',
                    },
                }}
            >
                {label}
            </Typography>
        </a>
    );
};

export default NavLink;
