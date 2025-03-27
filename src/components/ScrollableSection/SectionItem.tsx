import { PropsWithChildren } from "react";
import { SwiperSlide } from "swiper/react";

const SectionItem = (props: PropsWithChildren) => {
    const { children } = props;
    return <SwiperSlide>{children}</SwiperSlide>;
}

SectionItem.displayName = "SwiperSlide";

export default SectionItem;