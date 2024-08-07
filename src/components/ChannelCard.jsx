import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  const { id, snippet, statistics } = channelDetail || {};
  const channelId = id?.channelId;
  const title = snippet?.title;
  const thumbnailUrl = snippet?.thumbnails?.high?.url || demoProfilePicture;
  const subscriberCount = statistics?.subscriberCount;

  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: { xs: 356, md: 320 },
        height: 326,
        margin: 'auto',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`} style={{ textDecoration: 'none' }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            image={thumbnailUrl}
            alt={title}
            sx={{
              borderRadius: '50%',
              height: 180,
              width: 180,
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
            <CheckCircleIcon sx={{ fontSize: 16, color: 'gray', ml: 1 }} />
          </Typography>
          {subscriberCount && (
            <Typography sx={{ fontSize: 14, fontWeight: 500, color: 'gray', mt: 1 }}>
              {parseInt(subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
