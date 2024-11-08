export const FROM = "moviesimple12@gmail.com";

export const mailVerivicationOptions = (to: string, code: string) => {
  return {
    from: FROM,
    to: to,
    subject: "Movie Nexus Account Verification",
    html: `
      <h1>Movie Nexus</h1>
      <p>Thank you for creating an account with Movie Nexus. Your verification code is:</p>
      <h2>${code}</h2>
      <p>Enter this code in the verification form to complete the registration process.</p>
    `,
  };
};


export const mailResetPasswordOptions = (to: string, code: string) => {
  return {
    from: FROM,
    to: to,
    subject: "Movie Nexus Reset Password",
    html: `
      <h1>Movie Nexus</h1>
      <p>You have requested to reset your password. Your reset code is:</p>
      <h2>${code}</h2>
      <p>Enter this code in the reset password form to complete the process.</p>
    `,
  };
};