import React from 'react';
import { ListItemButton, ListItemText, Box, Avatar } from '@mui/material';

interface SignInMenuProps {
    onClick?: () => void;
}

const SignInMenu: React.FC<SignInMenuProps> = ({ onClick }) => {
    return (
        <ListItemButton
            onClick={onClick}
            sx={{
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white'
                },
                color: 'rgba(255, 255, 255, 0.7)',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ marginRight: 2 }}>S</Avatar>
                <ListItemText
                    primary="Sign In"
                    primaryTypographyProps={{
                        sx: {
                            color: 'inherit',
                            '&:hover': {
                                color: 'white',
                            },
                        },
                    }}
                />
            </Box>
        </ListItemButton>
    );
};

export default SignInMenu;
