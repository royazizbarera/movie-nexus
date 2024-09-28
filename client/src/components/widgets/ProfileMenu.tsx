import React, { useState } from 'react';
import { Box, Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProfileMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleClick} sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                <Avatar
                    src="/path/to/profile-pic.jpg"
                    alt="Profile"
                    sx={{ width: 32, height: 32 }}
                />
                <ArrowDropDownIcon
                    sx={{
                        transition: 'transform 0.3s ease',
                        color: 'white',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    mt: 1,
                    '& .MuiPaper-root': {
                        backgroundColor: 'rgba(14, 5, 4, 0.7)',
                        color: 'white',
                    },
                }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <MenuItem onClick={handleClose}>Sign In</MenuItem>
                <MenuItem onClick={handleClose}>Bantuan</MenuItem>
            </Menu>
        </Box>
    );
};

export default ProfileMenu;
