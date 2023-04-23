import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_X_RAPID_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query({ query: () => "/chart/tracks/top" }),
  }),
});

export const { useGetTopTracksQuery } = spotifyApi;
