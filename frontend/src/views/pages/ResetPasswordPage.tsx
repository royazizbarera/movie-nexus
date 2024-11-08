import { Box } from "@mui/joy";
import AppAppBar from "../components/AppAppBar";
import MainLayout from "../layouts/MainLayout";
import ResetPasswordForm from "../components/forgot-password/ResetPasswordForm";
import InsertEmailForgotPasswordForm from "../components/forgot-password/InsertEmailForgotPasswordForm";
import React from "react";
import VerificationResetPasswordCode from "../components/forgot-password/VerificationResetPasswordCode";
import { useNavigate } from "react-router-dom";

type StateSteps =
  | "InsertEmailForgotPasswordForm"
  | "VerificationCodeForm"
  | "ResetPasswordForm";

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  const [resetPasswordProps, setResetPasswordProps] = React.useState<{
    email: string;
    code: string;
  }>({ email: "", code: "" });

  const [stateSteps, setStateSteps] = React.useState<StateSteps>(
    "InsertEmailForgotPasswordForm"
  );

  return (
    <>
      <AppAppBar />
      <MainLayout giveSpace pt={10}>
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          {stateSteps === "InsertEmailForgotPasswordForm" && (
            <InsertEmailForgotPasswordForm
              onSubmit={(email) => {
                setResetPasswordProps({ email, code: "" });
                setStateSteps("VerificationCodeForm");
              }}
            />
          )}
          {stateSteps === "VerificationCodeForm" && (
            <VerificationResetPasswordCode
              onSubmit={(code) => {
                setResetPasswordProps({
                  email: resetPasswordProps.email,
                  code,
                });
                setStateSteps("ResetPasswordForm");
              }}
              onBack={() => {
                setStateSteps("InsertEmailForgotPasswordForm");
              }}
              email={resetPasswordProps.email}
            />
          )}
          {stateSteps === "ResetPasswordForm" && (
            <ResetPasswordForm
              code={resetPasswordProps.code}
              email={resetPasswordProps.email}
              onSubmit={() => {
                navigate("/sign-in");
              }}
            />
          )}
        </Box>
      </MainLayout>
    </>
  );
}
