import { PropsWithChildren } from "react";
import styles from "./index.module.css";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

// Impor CSS tetap seperti ini
import "swiper/css";
import "swiper/css/navigation";
// Hapus impor ini karena sudah ditangani di atas
// import "./swiper.css";

interface Props {
  title: string;
}

const ScrollableSection = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <div>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={7.5}
        slidesPerGroup={7}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default ScrollableSection;