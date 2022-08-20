import styles from "../../styles/components/home/_Member.module.scss";
import SectionTitle from "../common/SectionTitle";

export default function Member() {
  const data = [
    {
      memberImg: "img/top/member/gontaku.jpg",
      portfolioLink: "",
      memberName: "ごんたく",
      positionName: "ディレクター / エンジニア",
      tradeName: "",
      skills: "WordPress / Python / Shopify",
      twitterUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "",
    },
    {
      memberImg: "img/top/member/okadatomoya.jpg",
      portfolioLink: "https://o-kraft.com/",
      memberName: "岡田 智哉",
      positionName: "フロントエンジニア",
      tradeName: "KRAFT",
      skills:
        "HTML / CSS / Vue.js / github / ESLint webpack /PHP (WordPress) microcms",
      twitterUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "",
    },
    {
      memberImg: "",
      portfolioLink: "",
      memberName: "ほうせん",
      positionName: "フロントエンジニア",
      tradeName: "",
      skills: "HTML / CSS(Sass) / JavaScript / React / Next.js / GitHub etc…",
      twitterUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "",
    },
    {
      memberImg: "",
      portfolioLink: "",
      memberName: "",
      positionName: "",
      tradeName: "",
      skills: "",
      twitterUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "",
    },
    {
      memberImg: "",
      portfolioLink: "",
      memberName: "",
      positionName: "",
      tradeName: "",
      skills: "",
      twitterUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "",
    },
    {
      memberImg: "",
      portfolioLink: "",
      memberName: "",
      positionName: "",
      tradeName: "",
      skills: "",
      twitterUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "",
    },
    {
      memberImg: "",
      portfolioLink: "",
      memberName: "",
      positionName: "",
      tradeName: "",
      skills: "",
      twitterUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "",
    },
    {
      memberImg: "",
      portfolioLink: "",
      memberName: "",
      positionName: "",
      tradeName: "",
      skills: "",
      twitterUrl: "",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "",
    },
  ];

  return (
    <section className={styles.member}>
      <SectionTitle title={"チームメンバー"} />

      <div className={styles.leadWrap}>
        <p className={styles.leadTop}>
          Hamorebiは
          <span className={styles.leadBoldface}>
            ディレクター、エンジニア、デザイナー の８名
          </span>
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

      <ul className={styles.memberList}>
        {data.map((value, index) => {
          return (
            <li key={index} className={styles.memberItem}>
              <div className={styles.memberImgWrap}>
                <img src={value.memberImg} />
              </div>
              <p className={styles.memberName}>
                {value.portfolioLink !== "" ? (
                  <a href={value.portfolioLink}>{value.memberName}</a>
                ) : (
                  value.memberName
                )}
              </p>
              <p className={styles.positionName}>{value.positionName}</p>
              <p className={styles.tradeName}>{value.tradeName}</p>
              <p className={styles.skills}>{value.skills}</p>

              <ul className={styles.snsList}>
                {value.twitterUrl !== "" ? (
                  <li className={styles.snsItem}>
                    <a href={value.twitterUrl}>
                      <img src="img/top/twitter-icon.png" />
                    </a>
                  </li>
                ) : undefined}
                {value.instagramUrl !== "" ? (
                  <li className={styles.snsItem}>
                    <a href={value.instagramUrl}>
                      <img src="img/top/instagram-icon.png" />
                    </a>
                  </li>
                ) : undefined}
                {value.facebookUrl !== "" ? (
                  <li className={styles.snsItem}>
                    <a href={value.facebookUrl}>
                      <img src="img/top/facebook-icon.png" />
                    </a>
                  </li>
                ) : undefined}
                {value.mailAddress !== "" ? (
                  <li className={styles.snsItem}>
                    <a href={value.mailAddress}>
                      <img src="img/top/mail-icon.png" />
                    </a>
                  </li>
                ) : undefined}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
