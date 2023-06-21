import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    //api call
  }, [country]);

  if (loading) return <Loader title={"Loading songs around you..."} />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        <p className="text-white">API does not support it anymore</p>
      </div>
    </div>
  );
};

export default AroundYou;
