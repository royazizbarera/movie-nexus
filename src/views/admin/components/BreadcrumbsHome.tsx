
import Link from "@mui/joy/Link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";


export default function BreadcrumbsHome() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/home");
  }
  return (
    <Link
      underline="hover"
      color="neutral"
      onClick={handleClick}
      aria-label="Home"
    >
      <HomeRoundedIcon />
    </Link>
  );
}