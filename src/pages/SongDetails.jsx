import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader } from "../components";
import { useGetSongDetailsQuery } from "../redux/services/spotify";

const SongDetails = () => {
  const { songKey } = useParams();
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error,
  } = useGetSongDetailsQuery(songKey);

  if (isFetchingSongDetails)
    return <Loader title={"Searching song details..."} />;
  if (error) <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader songData={songData} artistId={""} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>
        <div className="mt-5">
          {songData?.sections && songData.sections[1].type === "LYRICS" ? (
            songData?.sections &&
            songData.sections[1].text.map((line, i) => (
              <p key={i} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <>
              <p className="text-gray-400 text-base my-1">
                Sorry, no lyrics found!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
