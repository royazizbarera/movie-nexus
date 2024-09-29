import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import TotalCard  from "../components/TotalCard";
import React from "react";

import axios from "axios";
import { ResponseApiProps } from "../../../config/ResponseApi";
import { API_URL } from "../../../config/constants";
import formatNumber from "../utils/formatNumber";

export default function Dashboard() {
  const [totalMovies, setTotalMovies] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const totalM = await axios.get<ResponseApiProps>(
        `${API_URL}/movies/totals`
      );
      setTotalMovies(totalM.data.data);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" }, p: 1 }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        justifyContent={"center"}
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <TotalCard
            title="Movies"
            value={formatNumber(totalMovies || 0)}
            interval=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}
