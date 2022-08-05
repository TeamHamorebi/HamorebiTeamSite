import styles from "../../styles/components/home/_Mv.module.scss";
import Button from "../common/Button";
import InnerLarge from "../common/InnerLarge";

export default function Mv() {
  return (
    <>
      <InnerLarge>
        <div className={styles.mv}>
          {/* image wrap */}
          <div className={styles.imagesWrap}>
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
            <div className={styles.pcImgWrap}>
              <img src="/img/top/MV_pc-mockup.png" />
            </div>
            {/* /pc image */}
          </div>
          {/* /image wrap */}
          {/* contents */}
          <div className={styles.mvContentsWrap}>
            <div className={styles.mvTitleWrap}>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="/img/top/MV_title--pc.png"
                />
                <img src="/img/top/MV_title--sp.png" alt="はもれびは 何がわからないか わからない に 寄り添うWeb制作チームです" />
              </picture>
            </div>
            <Button
              styles={styles.mvBtnWrap}
              text={"お問い合わせをする"}
              link={"/#contact"}
            ></Button>
          </div>
          {/* /contents */}
        </div>
      </InnerLarge>
    </>
  );
}
