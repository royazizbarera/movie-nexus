import React, { useState } from "react";
import { Box, Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useAuth } from "../../context/useAuth"; // Pastikan path ini sesuai dengan struktur proyek Anda
import { useNavigate } from "react-router-dom"; // Untuk navigasi ke halaman lain

const ProfileMenu: React.FC = () => {
  const { isLoggedIn, user, logoutUser } = useAuth();
  const navigate = useNavigate(); // Untuk navigasi ke halaman login jika belum login
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logoutUser(); // Panggil logoutUser untuk menghapus sesi login
    navigate("/"); // Redirect pengguna ke halaman login
  };

  const handleSignIn = () => {
    handleClose();
    navigate("/sign-in"); // Navigasi ke halaman Sign In
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={handleClick}
        sx={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <Avatar
          src={"default-profile-pic.jpg"}
          alt={user?.username || "Profile"}
          sx={{ width: 32, height: 32 }}
        />
        <ArrowDropDownIcon
          sx={{
            transition: "transform 0.3s ease",
            color: "white",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          mt: 1,
          "& .MuiPaper-root": {
            backgroundColor: "rgba(14, 5, 4, 0.7)",
            color: "white",
          },
        }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {isLoggedIn() ? (
          <>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        ) : (
          <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
        )}
        <MenuItem onClick={handleClose}>Help</MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
