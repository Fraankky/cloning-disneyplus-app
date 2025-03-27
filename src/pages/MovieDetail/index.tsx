import { useNavigate, useParams } from "react-router";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ContentCard from "../../components/ContentCard";
import ImageBanner from "../../components/ImageBanner";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItem from "../../components/ScrollableSection/SectionItem";
import useFetch from "../../hook/useFetch";
import { API_KEY } from "../../constants";

const MovieDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  const { data: similarMovieData } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
  );

  console.log(similarMovieData);

  return (
    <div>
      <ImageBanner
        alt={data?.title}
        src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
      />
      <BannerDetail
        title={data?.title}
        overview={data?.overview}
        releaseDate={data?.release_date}
        genres={data?.genres?.map((genre: any) => ({
          id: genre.id,
          name: genre.name,
        }))}
        language={data?.original_language}
      />
      <BannerMask>
      <ScrollableSection title="Similar Movies">
          {similarMovieData?.results.map((movieItem: any) => (
              <SectionItem key={movieItem.id}>
                <ContentCard
                  onClick={() => navigate(`/movie/${movieItem.id}`)}
                  title={movieItem.title}
                  description={movieItem.overview}
                  posterImage={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w500/${movieItem.backdrop_path}`}
                />
              </SectionItem>
            ))}
        </ScrollableSection>
      </BannerMask>
    </div>
  );
};

export default MovieDetail;
