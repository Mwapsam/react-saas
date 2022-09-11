import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getTracks = createAsyncThunk(
  'tracks/getTracks',
  async () => {
    const getTrack = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/tracks`);
    const res = await getTrack.data;
    return res;
  },
);

export const createTracks = createAsyncThunk(
  'tracks/createTracks',
  async (track) => {
    const createTrack = await axios.post(`${process.env.REACT_APP_SERVER}/api/v1/categories`, track);
    const res = await createTrack.data;
    return res;
  },
);

export default getTracks;
