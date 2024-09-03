import { Box, Typography } from "@mui/material";

interface LabelInfoProps {
  title: string,
}

const CustomLabel: React.FC<LabelInfoProps> = ({ title }) => {
  return (
    <Box pb={1}>
      <Typography variant="h5">
        <strong>{title}</strong>
      </Typography>
    </Box>
  );
};

export default CustomLabel;