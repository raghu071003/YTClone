import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm.trim()}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: 25,
        border: '1px solid #e3e3e3',
        boxShadow: 'none',
        width: { xs: '100%', sm: 400 },
        maxWidth: '100%',
        bgcolor: '#fff',
        mr: { sm: 3 },
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton
        type="submit"
        sx={{
          p: '10px',
          color: '#FC1503',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
