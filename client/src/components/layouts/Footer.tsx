import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#000000",
                color: "white",
                padding: "2rem 0",
                fontSize: "1rem",
                borderTop: "1px solid #333",
                marginTop: { xs: "3rem", md: "-2rem" },
                paddingLeft: "1rem",
            }}
        >
            <Grid container spacing={3} justifyContent="center">
                {/* Footer Links */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 1 }}>About Us</Typography>
                    <Link href="https://youtu.be/dQw4w9WgXcQ?si=Urt22yRLPYOHML5u" color="inherit" target="_blank" rel="noopener noreferrer" underline="none" sx={{ display: "block", mb: 0.5 }}>
                        Company Info
                    </Link>
                    <Link href="https://youtu.be/dQw4w9WgXcQ?si=Urt22yRLPYOHML5u" color="inherit" target="_blank" rel="noopener noreferrer" underline="none" sx={{ display: "block", mb: 0.5 }}>
                        Privacy Policy
                    </Link>
                    <Link href="https://youtu.be/dQw4w9WgXcQ?si=Urt22yRLPYOHML5u" color="inherit" underline="none" target="_blank" rel="noopener noreferrer" sx={{ display: "block", mb: 0.5 }}>
                        Terms of Service
                    </Link>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 1 }}>Help</Typography>
                    <Link href="https://youtu.be/dQw4w9WgXcQ?si=Urt22yRLPYOHML5u" color="inherit" underline="none" target="_blank" rel="noopener noreferrer" sx={{ display: "block", mb: 0.5 }}>
                        Contact Us
                    </Link>
                    <Link href="https://youtu.be/dQw4w9WgXcQ?si=Urt22yRLPYOHML5u" color="inherit" underline="none" target="_blank" rel="noopener noreferrer" sx={{ display: "block", mb: 0.5 }}>
                        Support Center
                    </Link>
                    <Link href="https://youtu.be/dQw4w9WgXcQ?si=Urt22yRLPYOHML5u" color="inherit" underline="none" target="_blank" rel="noopener noreferrer" sx={{ display: "block", mb: 0.5 }}>
                        FAQ
                    </Link>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ mb: 1 }}>Follow Us</Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Link href="https://youtu.be/dQw4w9WgXcQ?si=Urt22yRLPYOHML5u" color="inherit" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </Link>
                        <Link href="https://youtu.be/dQw4w9WgXcQ?si=Urt22yRLPYOHML5u" color="inherit" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </Link>
                        <Link href="https://youtu.be/dQw4w9WgXcQ?si=Urt22yRLPYOHML5u" color="inherit" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                        </Link>
                        <Link href="https://youtu.be/dQw4w9WgXcQ?si=Urt22yRLPYOHML5u" color="inherit" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                            <YouTubeIcon />
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            {/* Copyright */}
            <Box
                sx={{
                    textAlign: "center",
                    paddingTop: "2rem",
                    borderTop: "1px solid #333",
                    marginTop: "2rem",
                    fontSize: "0.875rem"
                }}
            >
                <Typography>© 2024 MovieNexus. All rights reserved.</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
