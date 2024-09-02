import React, { useState, useRef,  useEffect } from 'react';
import { InputBase, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const searchBarRef = useRef<HTMLDivElement>(null);

    const handleSearchClick = () => {
        setExpanded(!expanded);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
            setExpanded(false);
        }
    };

    useEffect(() => {
        if (expanded) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [expanded]);

    return (
        <>
            <Box
                ref={searchBarRef}
                sx={{
                    display: {xs: 'none', md: 'flex'},
                    alignItems: 'center',
                    backgroundColor: expanded ? '#1C1C1C' : 'transparent',
                    borderRadius: 1,
                    border: expanded ? '1px solid #ffffff' : 'none',
                    padding: expanded ? '4px 8px' : '0px',
                    transition: 'background-color 0.3s ease, border 0.3s ease, padding 0.3s ease',
                    paddingRight: expanded ? 3 : 0,
                    marginRight: 2,
                    overflow: 'hidden',
                }}
            >
                <IconButton onClick={handleSearchClick} sx={{ color: 'white', padding: 0, transition: 'transform 0.3s ease', fontSize: '1.75rem' }}>
                    <SearchIcon sx={{ fontSize: 'inherit' }}/>
                </IconButton>
                <InputBase
                    placeholder="Judul, orang, genre"
                    sx={{
                        ml: 1,
                        flex: 1,
                        color: 'white',
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none',
                        width: expanded ? '300px' : '0px',
                        transition: 'width 0.4s ease',
                    }}
                />
            </Box>
            <Box sx={{
                display: {xs: 'flex', md: 'none'},
                alignItems: 'center',
                backgroundColor: '#1C1C1C',
                borderRadius: 1,
                border: '1px solid #ffffff',
            }}>
                <InputBase
                    placeholder="Cari"
                    sx={{
                        ml: 1,
                        flex: 1,
                        color: 'white',
                        backgroundColor: 'transparent',
                        width: '7rem',
                        transition: 'width 0.4s ease',
                    }}
                />
            </Box>
        </>
    );
};

export default SearchBar;
