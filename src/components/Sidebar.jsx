import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction={{ xs: "row", md: "column" }}
    spacing={1}
    sx={{
      overflowX: "auto",
      overflowY: "hidden",
      height: { xs: "auto", md: "95%" },
      p: 1,
      bgcolor: "#121212",
    }}
  >
    {categories.map((category) => (
      <Button
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
        sx={{
          borderRadius: 20,
          backgroundColor: category.name === selectedCategory ? "#FC1503" : "transparent",
          color: category.name === selectedCategory ? "#fff" : "#f8bfbf",
          fontWeight: category.name === selectedCategory ? "bold" : "normal",
          textTransform: "none",
          py: 1,
          px: 2,
          justifyContent: "flex-start",
          alignItems: "center",
          '&:hover': {
            backgroundColor: category.name === selectedCategory ? "#e63e2e" : "rgba(0,0,0,0.1)",
          },
        }}
      >
        <Typography
          sx={{
            mr: 1.5,
            color: category.name === selectedCategory ? "#fff" : "#FC1503",
          }}
        >
          {category.icon}
        </Typography>
        <Typography
          sx={{
            opacity: category.name === selectedCategory ? 1 : 0.8,
          }}
        >
          {category.name}
        </Typography>
      </Button>
    ))}
  </Stack>
);

export default Categories;
