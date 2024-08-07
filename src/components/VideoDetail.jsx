import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videoResponse = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`);
        setVideoDetail(videoResponse.items[0]);

        const relatedVideosResponse = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`);
        setVideos(relatedVideosResponse.items);
      } catch (error) {
        console.error("Error fetching video details or related videos:", error);
      }
    };

    fetchVideoData();
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box sx={{ minHeight: "95vh", bgcolor: "#121212" }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: 0, bgcolor: "#1E1E1E", borderBottom: "1px solid #333" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              width="100%"
              height="auto"
            />
            <Typography variant="h5" fontWeight="bold" color="#fff" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ color: "#fff", px: 2, py: 1 }}>
              <Link to={`/channel/${channelId}`} style={{ textDecoration: "none", color: "#fff" }}>
                <Typography variant={{ xs: "subtitle2", sm: "subtitle1", md: 'h6' }} sx={{ display: "flex", alignItems: "center" }}>
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "14px", color: "gray", ml: 1 }} />
                </Typography>
              </Link>
              <Stack direction="row" spacing={3}>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ px: 2, py: { xs: 5, md: 1 }, bgcolor: "#1E1E1E" }}>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
