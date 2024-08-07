import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from ".";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const { items } = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
        setVideos(items);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };

    loadVideos();
  }, [selectedCategory]);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{ minHeight: '100vh' }}
    >
      <Box
        sx={{
          flexBasis: { xs: "auto", md: "20%" },
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 1, md: 2 },
          py: 2,
          backgroundColor: "#121212",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: "#fff",
            textAlign: "center",
            fontSize: "0.875rem",
          }}
        >
          &copy; 2024 RaghuWorks
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          p: 2,
          overflowY: "auto",
          backgroundColor: "#121212",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#fff", mb: 2 }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
