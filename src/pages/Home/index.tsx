import { useNavigate } from "react-router";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ContentCard from "../../components/ContentCard";
import ImageBanner from "../../components/ImageBanner";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/SectionItem";
import useFetch from "../../hook/useFetch";
import { API_KEY } from "../../constants";
import useGenres from "../../hook/useGenres";
import useMapGenreIdToName from "../../hook/useMapGenreIdToName";

const Home = () => {
  const navigate = useNavigate();
  const { loading, data } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );

  const { genres } = useGenres();

  const firstContent = data?.results?.[0] || {};

  // jadi tu genre_ids value nya id, diubah ke name menggunakan hook terpisah aje
  const genreNames = useMapGenreIdToName(firstContent.genre_ids, genres);

  return (
    <div>
      <ImageBanner
        alt={firstContent.title || firstContent.name}
        src={`https://image.tmdb.org/t/p/original/${firstContent.backdrop_path}`}
      />
      <BannerDetail
        title={firstContent.title || firstContent.name}
        overview={firstContent.overview}
        releaseDate={firstContent.release_date || firstContent.first_air_date}
        genres={genreNames}
        language={firstContent.original_language}
      />
      <BannerMask>
        <ScrollableSection title="Popular">
          {!loading &&
            data &&
            data.results.map((content: any) => (
              <SectionItem key={content.id}>
                <ContentCard
                  onClick={() =>
                    navigate(
                      `/${content.media_type === "movie" ? "movie" : "tv"}/${
                        content.id
                      }`
                    )
                  }
                  title={content.title || firstContent.name}
                  description={content.overview}
                  posterImage={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
                />
              </SectionItem>
            ))}
        </ScrollableSection>
      </BannerMask>
    </div>
  );
};

export default Home;
