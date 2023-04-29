import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/spotify";

const SongDetails = () => {
  const { songKey } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songKey);

  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={songData?.artists && songData?.artists[0].adamid}
        songData={songData && songData}
      />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>
        <div className="mt-5">
          {/* missing API lyrics */}
          {songData?.sections && songData.sections[1].type === "LYRICS" ? (
            songData?.sections &&
            songData.sections[1].text.map((line, i) => (
              <p key={i} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <>
              <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>
              {/* <p className="text-gray-400 text-base my-1">
                Lyrics are unavailable due to an API change!
              </p> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
