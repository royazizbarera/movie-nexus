import Link from "@mui/joy/Link";
import { useNavigate } from "react-router-dom";

export default function BreadcrumbsDashboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/dashboard");
  };
  return (
    <Link
      underline="hover"
      color="neutral"
      onClick={handleClick}
      aria-label="Home"
    >
      Dashboard
    </Link>
  );
}
