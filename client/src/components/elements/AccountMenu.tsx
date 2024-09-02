import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';

const AccountMenu: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <ListItemButton
            onClick={onClick}
            sx={{
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                color: 'rgba(255, 255, 255, 0.7)',
            }}
        >
            <ListItemText
                primary="Bantuan"
                primaryTypographyProps={{
                    sx: {
                        color: 'inherit',
                        '&:hover': {
                            color: 'white',
                        },
                    },
                }}
            />
        </ListItemButton>
    );
};

export default AccountMenu;
