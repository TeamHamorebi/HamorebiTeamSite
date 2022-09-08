import styles from "../../styles/components/home/_Member.module.scss";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import AnimationTrigger from "../common/AnimationTrigger";
import ScrollPosition from "./ScrollPosition";

export default function Member(props) {
  const memberData = props.data;

  return (
    <AnimationTrigger animation={styles.isFadeIn} rootMargin="-10%" triggerOnce>
      <ScrollPosition id={"member"}>
        <section className={styles.member}>
          <AnimationTrigger
            animation={styles.isFadeUp}
            rootMargin="-15%"
            triggerOnce
          >
            <SectionTitle title={"チームメンバー"} />

            <div className={styles.leadWrap}>
              <p className={styles.leadTop}>
                Hamorebiは
                <br />
                <span className={styles.leadBoldface}>
                  ディレクター、エンジニア、
                </span>
                <br className={styles.leadBoldfaceBr} />
                <span className={styles.leadBoldface}>
                  デザイナー <span className={styles.leadSmallFace}>の</span>
                  ８名
                </span>
                <br />
                で制作を行っております
              </p>
              <p className={styles.leadBottom}>
                日本各地に住む、様々な就業経験がある個性豊かなクリエーター達が揃っています
                <br />
                「何かあればHamorebiに聞こう」「Hamorebiに頼めば安心だ」
                <br />
                困ったことや聞きたいことが出てきた時に、あの人達に聞けば大丈夫だ！
                <br />
                と思っていただけるようなチームを目指しています
              </p>
            </div>
          </AnimationTrigger>

          <AnimationTrigger
            animation={styles.isFadeUp}
            rootMargin="-150px"
            triggerOnce
          >
            <ul className={styles.memberList}>
              {memberData.map((value, index) => {
                return (
                  <li key={index} className={styles.memberItem}>
                    <div className={styles.memberImgWrap}>
                      <img src={value.memberImg.url} alt="" />
                    </div>
                    <p className={styles.memberName}>
                      {value.portfolioLink !== undefined ? (
                        <a
                          className={styles.portfolioLink}
                          href={value.portfolioLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {value.memberName}
                        </a>
                      ) : (
                        value.memberName
                      )}
                    </p>
                    <p className={styles.positionName}>{value.positionName}</p>
                    <p className={styles.tradeName}>{value.tradeName}</p>
                    <div
                      className={styles.skills}
                      dangerouslySetInnerHTML={{
                        __html: `${value.skills}`,
                      }}
                    />

                    {/* sns */}
                    {value.twitterUrl !== undefined ||
                    value.instagramUrl !== undefined ||
                    value.facebookUrl !== undefined ||
                    value.mailAddress !== undefined ? (
                      <ul className={styles.snsList}>
                        {value.twitterUrl !== undefined ? (
                          <li className={styles.snsItem}>
                            <a
                              className={styles.snsItemLink}
                              href={value.twitterUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <picture>
                                <source srcSet="/img/top/twitter-icon.webp" />
                                <img src="img/top/twitter-icon.png" alt="" />
                              </picture>
                            </a>
                          </li>
                        ) : undefined}
                        {value.instagramUrl !== undefined ? (
                          <li className={styles.snsItem}>
                            <a
                              className={styles.snsItemLink}
                              href={value.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <picture>
                                <source srcSet="/img/top/instagram-icon.webp" />
                                <img src="img/top/instagram-icon.png" alt="" />
                              </picture>
                            </a>
                          </li>
                        ) : undefined}
                        {value.facebookUrl !== undefined ? (
                          <li className={styles.snsItem}>
                            <a
                              className={styles.snsItemLink}
                              href={value.facebookUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <picture>
                                <source srcSet="/img/top/facebook-icon.webp" />
                                <img src="img/top/facebook-icon.png" alt="" />
                              </picture>
                            </a>
                          </li>
                        ) : undefined}
                        {value.mailAddress !== undefined ? (
                          <li className={styles.snsItem}>
                            <a
                              className={styles.snsItemLink}
                              href={`mailto:${value.mailAddress}?subject=%E3%81%AF%E3%82%82%E3%82%8C%E3%81%B3%E3%82%B5%E3%82%A4%E3%83%88%E3%81%8B%E3%82%89%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B&body=%E4%B8%8B%E8%A8%98%E9%A0%85%E7%9B%AE%E3%82%92%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E3%81%94%E8%A8%98%E5%85%A5%E3%81%AE%E4%B8%8A%E3%80%81%E9%80%81%E4%BF%A1%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%0D%0A%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0D%0A%0D%0A%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0D%0A%0D%0A%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%EF%BC%9A%0D%0A%0D%0A%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E5%86%85%E5%AE%B9%EF%BC%9A%0D%0A%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <picture>
                                <source srcSet="/img/top/mail-icon.webp" />
                                <img src="img/top/mail-icon.png" alt="" />
                              </picture>
                            </a>
                          </li>
                        ) : undefined}
                      </ul>
                    ) : undefined}
                    {/* /sns */}
                  </li>
                );
              })}
            </ul>

            <Button
              styles={styles.btnWrap}
              text={"お問い合わせをする"}
              link={"#contact"}
            />
          </AnimationTrigger>
        </section>
      </ScrollPosition>
    </AnimationTrigger>
  );
}
