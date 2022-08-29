import styles from "../../styles/components/home/_Mv.module.scss";
import Button from "../common/Button";
import InnerLarge from "../common/InnerLarge";
import { useState } from "react";

export default function Mv() {
  // 読み込み後アニメーション発動
  const [isVisible, setIsVisible] = useState(false);
  const onLoadAnime = () => {
    if (isVisible) {
      return;
    }
    setIsVisible(true);
  };

  return (
    <InnerLarge>
      <div className={styles.mv} onLoad={onLoadAnime()}>
        {/* image wrap */}
        <div
          className={`${styles.imagesWrap}  ${
            isVisible ? styles.isFadeIn1 : undefined
          }`}
        >
          {/* people */}
          <div className={styles.peopleImgWrap}>
            <picture>
              <source
                media="(min-width: 640px)"
                srcSet="/img/top/MV_people--pc.png"
              />
              <img src="/img/top/MV_people--sp.png" />
            </picture>
          </div>
          {/* /people */}
          {/* pc image */}
          <div
            className={`${styles.pcImgWrap} ${
              isVisible ? styles.isFadeIn2 : undefined
            }`}
          >
            <img src="/img/top/MV_pc-mockup.png" />
          </div>
          {/* /pc image */}
        </div>
        {/* /image wrap */}

        {/* contents */}
        <div
          className={`${styles.mvContentsWrap} ${
            isVisible ? styles.isFadeIn3 : undefined
          }`}
        >
          <div className={styles.mvTitleWrap}>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/img/top/MV_title--pc.png"
              />
              <img
                src="/img/top/MV_title--sp.png"
                alt="はもれびは 何がわからないか わからない に 寄り添うWeb制作チームです"
              />
            </picture>
          </div>
          <Button
            styles={styles.mvBtnWrap}
            text={"お問い合わせをする"}
            link={"/#contact"}
          />
        </div>
        {/* /contents */}
      </div>
    </InnerLarge>
  );
}
