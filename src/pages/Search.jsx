import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/spotify";

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: searchedData,
    isFetching: isSearchedDataFetching,
    error,
  } = useGetSongsBySearchQuery(searchTerm);

  if (isSearchedDataFetching)
    return <Loader title={`Searching for ${searchTerm}`} />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>{" "}
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {searchedData
          ? searchedData?.tracks?.hits?.map((song, i) => (
              <SongCard
                key={song.track?.key}
                song={song.track}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={searchedData}
                i={i}
              />
            ))
          : "No songs found!"}
      </div>
    </div>
  );
};

export default Search;
