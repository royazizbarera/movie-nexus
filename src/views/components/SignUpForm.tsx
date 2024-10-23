import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { Avatar, Divider } from "@mui/joy";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../contexts/authStore";

export default function SignUpForm() {
  const { signUpWithEmailAndPassword, error, isLoading } = useAuthStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailPasswordSignUp = async () => {
    try {
      await signUpWithEmailAndPassword(username, email, password);
      navigate("/verify-email");
    } catch (error: any) {
      console.error(error);
    }
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
      <Typography level="h4" component="h1">
        <b>Sign up!</b>
      </Typography>
      {error && (
        <Typography color="danger" sx={{ fontSize: "sm", mb: 2 }}>
          {error}
        </Typography>
      )}
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          // html input attribute
          name="text"
          type="text"
          value={username}
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          // html input attribute
          name="email"
          type="email"
          value={email}
          placeholder="johndoe@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          // html input attribute
          name="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      {/* Button with loading state */}
      <Button
        onClick={handleEmailPasswordSignUp}
        loading={isLoading}
        disabled={isLoading}
      >
        Sign up
      </Button>
      <Divider />
      <Typography
        endDecorator={<Link href="/sign-in">Login</Link>}
        sx={{ fontSize: "sm", alignSelf: "center" }}
      >
        Have an account?
      </Typography>
      <Divider />
      <Button
        variant="outlined"
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
        Sign up with Google
      </Button>
    </Sheet>
  );
}
