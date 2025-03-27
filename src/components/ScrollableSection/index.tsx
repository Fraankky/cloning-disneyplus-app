import { PropsWithChildren } from "react";
import styles from "./index.module.css";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

import "./swiper.css"

interface Props {
  title: string;
}

const ScrollableSection = (props: PropsWithChildren<Props>) => {
  const { title, children } = props;

  return (
    <div>
      <h2 className={styles.sectionTitle}>{title}</h2>

      {/* ScrollableSection  */}

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={7.5}
        spaceBetween={24}
        slidesPerGroup={7}>
        {children}
      </Swiper>
    </div>
  );
};

export default ScrollableSection;
