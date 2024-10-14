import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorageKey } from "../../configs/LocalStorage";
import {
  Card,
  Typography,
  Button,
  Input,
  Alert,
  CircularProgress,
  Box,
  Link,
} from "@mui/joy";
import { useAuthStore } from "../../contexts/authStore";

const VerificationCodeForm: React.FC = () => {
  const { verifyEmail, isLoading, error, resendLoading } = useAuthStore();

  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [success, setSuccess] = useState<boolean>(false);

  const navigate = useNavigate();

  // Define types for event handlers
  const handleChange = (value: string, index: number) => {
    if (value.length <= 1 && !isNaN(Number(value))) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value) {
        // Move to the next input if the current one is filled
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      } else if (!value && index > 0) {
        // Move to the previous input if current input is empty (on delete)
        const prevInput = document.getElementById(`code-input-${index - 1}`);
        if (prevInput) prevInput.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem(LocalStorageKey.TOKEN);

      if (!token) {
        throw new Error("Token not found");
      }

      await verifyEmail(code.join(""));
      navigate("/user-profile");
    } catch (error: unknown) {}
  };

  const handleResend = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    event.preventDefault();

    try {
      const token = localStorage.getItem(LocalStorageKey.TOKEN);

      if (!token) {
        throw new Error("Token not found");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error: unknown) {}
  };

  return (
    <Card
      variant="outlined"
      color="primary"
      invertedColors
      sx={{ padding: 4, maxWidth: 400, margin: "auto", boxShadow: "md" }}
    >
      <Typography level="h4" color="primary">
        Verification Code
      </Typography>
      <Typography level="body-sm" color="primary" mb={1}>
        Please enter the verification code sent to your email.
      </Typography>

      <Box display="flex" justifyContent="center" gap={1} mb={1}>
        {code.map((digit, index) => (
          <Input
            key={index}
            id={`code-input-${index}`}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            type="text"
            variant="solid"
            required
            // maxLength={1}
            sx={{
              // backgroundColor: "primary.solidColor",
              // color: "primary.solidDisabledBg",
              width: 40,
              textAlign: "center",
              fontSize: "1.5rem",
            }}
          />
        ))}
      </Box>

      {error && (
        <Alert variant="soft" color="danger" invertedColors sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert color="success" invertedColors sx={{ mb: 2 }}>
          Code verified successfully! Redirecting...
        </Alert>
      )}

      <Button
        onClick={handleSubmit}
        fullWidth
        variant="solid"
        color="primary"
        disabled={isLoading}
        endDecorator={isLoading && <CircularProgress size="sm" />}
      >
        {isLoading ? "Verifying..." : "Verify Email"}
      </Button>
      {/* Tidak menerima kode? */}
      <Box textAlign="center">
        <Link
          component="button"
          underline="none"
          onClick={handleResend}
          disabled={resendLoading}
          sx={{ fontSize: "0.875rem" }}
        >
          {resendLoading ? "Resending..." : "Didn't receive the code? Resend"}
        </Link>
      </Box>
    </Card>
  );
};

export default VerificationCodeForm;
