import * as React from "react";
import AspectRatio, { AspectRatioProps } from "@mui/joy/AspectRatio";
import Logo from "../../../assets/logo.png";

export default function MovieNexusLogo(props: AspectRatioProps) {
  const { sx, ...other } = props;
  return (
    <AspectRatio
      ratio="1"
      variant="plain"
      {...other}
      sx={[
        {
          width: 36,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <div>
        <img src={Logo} alt='Logo' />
      </div>
    </AspectRatio>
  );
}
