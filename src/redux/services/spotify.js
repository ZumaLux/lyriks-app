import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_X_RAPID_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({ query: () => "/charts/track" }),
    getSongDetails: builder.query({
      query: (songKey) => `/songs/get-details/?key=${songKey}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/get-details?id=${artistId}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopTracksQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery,
} = spotifyApi;
