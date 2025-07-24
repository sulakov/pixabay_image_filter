import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ImageResults from '../image-results/ImageResults';
import axios from 'axios';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [amount, setAmount] = useState(15);
  const [images, setImages] = useState([]);

  const apiUrl = 'https://pixabay.com/api';
  const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;

  const onTextChange = async (e) => {
    const val = e.target.value;
    setSearchText(val);

    if (val === '') {
      setImages([]);
    } else {
      try {
        const res = await axios.get(
          `${apiUrl}/?key=${apiKey}&q=${val}&image_type=photo&per_page=${amount}&safesearch=true`
        );
        setImages(res.data.hits);
      } catch (err) {
        console.error('Error fetching data from Pixabay API:', err);
      }
    }
  };

  
  const onAmountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setAmount(value);

    if (searchText.trim() !== '') {
        axios
        .get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${value}&safesearch=true`)
        .then((res) => setImages(res.data.hits))
        .catch((err) => console.log(err));
    }
    };
  

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Search For Images"
        value={searchText}
        onChange={onTextChange}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        select
        label="Amount"
        value={amount}
        onChange={onAmountChange}
        variant="outlined"
        sx={{ width: 150 }}
      >
        {[5, 10, 15, 30, 50].map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </TextField>

      {images.length > 0 && <ImageResults images={images} />}
    </div>
  );
};

export default Search;