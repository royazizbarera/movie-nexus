import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { Avatar, Divider } from "@mui/joy";
import { useState } from "react";
import { useAuthStore } from "../../contexts/authStore";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { signInWithEmailAndPassword, user, isLoading, error } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const currentUrl = window.location.href; // Dapatkan URL halaman saat ini
    window.open(
      `http://localhost:3005/api/v1/auth/google?redirectUrl=${encodeURIComponent(
        currentUrl
      )}`,
      "_self"
    );
  };

  const handleEmailPasswordLogin = async () => {
    console.log(user);
    try {
      await signInWithEmailAndPassword(email, password);
      navigate("/", { replace: true });
    } catch (error: any) {}
  };

  return (
    <Sheet
      sx={{
        width: 300,
        mx: "auto", // margin left & right
        my: 4, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
      variant="outlined"
    >
      <div>
        <Typography level="h4" component="h1">
          <b>Welcome!</b>
        </Typography>
        <Typography level="body-sm">Login to continue.</Typography>
      </div>

      {error && (
        <Typography color="danger" sx={{ fontSize: "sm", mb: 2 }}>
          {error}
        </Typography>
      )}

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)} // Update state
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          type="password"
          placeholder="password"
          value={password} // Controlled input
          onChange={(e) => setPassword(e.target.value)} // Update state
        />
      </FormControl>

      <Button
        onClick={handleEmailPasswordLogin}
        sx={{ mt: 1 }}
        disabled={isLoading} // Disable button ketika isLoading
      >
        {isLoading ? "Logging in..." : "Login"} {/* Indikasi isLoading */}
      </Button>

      <Typography
        endDecorator={<Link href="/sign-up">Sign up</Link>}
        sx={{ fontSize: "sm", alignSelf: "center" }}
      >
        Don&apos;t have an account?
      </Typography>

      <Divider />

      <Button
        variant="outlined"
        onClick={handleGoogleLogin}
        sx={{
          borderColor: "common.black",
          backgroundColor: "common.white",
          color: "common.black",
        }}
        startDecorator={
          <Avatar
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
            sx={{
              backgroundColor: "common.white",
              height: "1.5rem",
              width: "1.5rem",
            }}
          />
        }
      >
        Login with Google
      </Button>
    </Sheet>
  );
}
