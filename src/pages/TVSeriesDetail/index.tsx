import { useParams } from "react-router";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";

import ImageBanner from "../../components/ImageBanner";
import styles from "./index.module.css";
import EpisodeItem from "./EpisodeItem";
import { API_KEY } from "../../constants";
import useFetch from "../../hook/useFetch";
import { useState } from "react";

const TVSeriesDetail = () => {
  const [activeSeason, setActiveSeason] = useState(0);

  const { id } = useParams();
  const { data } = useFetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`
  );

  const { data: seasonData } = useFetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${activeSeason}?api_key=${API_KEY}`
  );

  console.log({
    data,
    seasonData,
  });

  return (
    <div>
      <ImageBanner
        alt={data?.name}
        src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
      />
      <BannerDetail
        title={data?.name}
        overview={data?.overview}
        releaseDate={data?.first_air_date}
        genres={data?.genres?.map((genre: any) => ({
          id: genre.id,
          name: genre.name,
        }))}
        language={data?.original_language}
      />
      <BannerMask>
        <h1 className={styles.seasonTitle}>Seasons</h1>
        <div className={styles.tabsSection}>
          {data?.seasons?.map((seasonItem: any) => {
            return (
              <span
                data-active={seasonItem.season_number === activeSeason}
                onClick={() => setActiveSeason(seasonItem.season_number)}
                key={seasonItem.id}
              >
                {seasonItem.name}
              </span>
            );
          })}
        </div>
        <div>
          {seasonData?.episodes?.map((episode: any) => {
            return (
              <EpisodeItem
                key={episode.id}
                imageUrl={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
                title={episode.name}
                season={episode.season_number}
                episode={episode.episode_number}
                duration={episode.runtime + "m"}
                date={episode.air_date}
                desc={episode.overview}
              />
            );
          })}
          <EpisodeItem
            imageUrl=""
            title="Episode Title"
            season={1}
            episode={1}
            duration="32m"
            date="01-01-2024"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla"
          />
        </div>
      </BannerMask>
    </div>
  );
};

export default TVSeriesDetail;
