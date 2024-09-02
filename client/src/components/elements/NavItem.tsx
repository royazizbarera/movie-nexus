import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface NavItemProps {
    href: string;
    label: string;
    isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, isActive }) => {
    const theme = useTheme();

    return (
        <ListItemButton
            component="a"
            href={href}
            sx={{
                borderLeft: isActive ? '4px solid' + theme.palette.primary.main : 'none',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
            }}
        >
            <ListItemText
                primary={label}
                sx={{
                    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.7)',
                    fontWeight: isActive ? 'bold' : 'normal',
                    '&:hover': {
                        color: 'white',
                    },
                }}
            />
        </ListItemButton>
    );
};

export default NavItem;
