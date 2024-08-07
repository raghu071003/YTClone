import { Stack, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from ".";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      backdropFilter: "blur(10px)",
      justifyContent: "space-between",
      borderBottom: "1px solid #3d3d3d",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#181818",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography variant="h6" sx={{ color: "#fff", ml: 1 }}>
        YouTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
