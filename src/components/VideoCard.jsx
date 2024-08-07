import React from 'react';
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const videoUrl = videoId ? `/video/${videoId}` : demoVideoUrl;
  const channelUrl = snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl;

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: 2,
        bgcolor: '#1E1E1E',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to={videoUrl}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: '100%',
            height: 180,
            borderRadius: '4px 4px 0 0',
            objectFit: 'cover'
          }}
        />
      </Link>
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Link to={videoUrl} style={{ textDecoration: 'none' }}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
            sx={{ mb: 1 }}
          >
            {snippet?.title?.length > 60 ? `${snippet.title.slice(0, 60)}...` : snippet?.title || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={channelUrl} style={{ textDecoration: 'none' }}>
          <Typography
            variant="subtitle2"
            color="gray"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: 14, color: 'gray', ml: 0.5 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
