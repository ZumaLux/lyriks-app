import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArtistCard, Error, Loader } from "../components";

const TopArtists = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        <p className="text-white">API does not support it anymore</p>
      </div>
    </div>
  );
};

export default TopArtists;
