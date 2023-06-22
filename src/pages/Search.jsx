import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/spotify";
import { useEffect } from "react";

const Search = () => {
  const { searchTerm } = useParams();
  // const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { searchedData, isFetching, error } =
    useGetSongsBySearchQuery(searchTerm);

  useEffect(() => {
    console.log(searchedData);
    console.log(searchTerm);
  }, [searchedData, searchTerm]);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>{" "}
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        <p className="text-white">API does not support it anymore</p>
        <p>
          {searchedData
            ? searchedData?.tracks?.hits[0]?.track?.title
            : "cringe"}
        </p>
      </div>
    </div>
  );
};

export default Search;
