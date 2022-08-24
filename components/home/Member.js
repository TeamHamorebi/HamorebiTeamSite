import styles from "../../styles/components/home/_Member.module.scss";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export default function Member() {
  const data = [
    {
      memberImg: "img/top/member/gontaku.jpg",
      portfolioLink: "",
      memberName: "ごんたく",
      positionName: "ディレクター / エンジニア",
      tradeName: "",
      skills: "WordPress / Python / Shopify",
      twitterUrl: "https://twitter.com/gontadev",
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
      twitterUrl: "https://twitter.com/create_toom",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "t.design@linkrec.net",
    },
    {
      memberImg: "img/top/member/hosen.jpg",
      portfolioLink:
        "https://azure-sundae-d3f.notion.site/6a535ffaa2fa48d0bf86b94f4bbb1723",
      memberName: "ほうせん",
      positionName: "フロントエンジニア",
      tradeName: "",
      skills: "HTML / CSS(Sass) / JavaScript / React / Next.js / GitHub etc…",
      twitterUrl: "https://twitter.com/tanusen17",
      instagramUrl: "https://www.instagram.com/asukahosen",
      facebookUrl: "",
      mailAddress: "araaiko.122@gmail.com",
    },
    {
      memberImg: "img/top/member/mayumelon.jpg",
      portfolioLink: "",
      memberName: "まゆめろん",
      positionName: "エンジニア",
      tradeName: "夢彩tech",
      skills: [
        "Next.js(TypeScript) + Tailwind CSS + headless CMS etc.",
        <br key="br" />,
        "塾講師・ヘルプデスク経験で培った「わかりやすく伝える技術」",
      ],
      twitterUrl: "https://twitter.com/mayoumelon",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "mayoumelon@gmail.com",
    },
    {
      memberImg: "img/top/member/ayasai.jpg",
      portfolioLink: "",
      memberName: "あやさい",
      positionName: "Webデザイナー",
      tradeName: "Ayasai Design",
      skills: "Figma / Photoshop /STUDIO",
      twitterUrl: "https://twitter.com/ayasai27",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "",
    },
    {
      memberImg: "img/top/member/shimadamana.jpg",
      portfolioLink: "",
      memberName: "島田 愛",
      positionName: "Webデザイナー",
      tradeName: "たおやかでざいん",
      skills: "Figma / Photoshop",
      twitterUrl: "https://twitter.com/taoyaka_design",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "taoyaka.design@gmail.com",
    },
    {
      memberImg: "img/top/member/su-gi.jpg",
      portfolioLink: "https://design-libero.studio.site/",
      memberName: "杉本 崇幸",
      positionName: "UIデザイナー",
      tradeName: "Design Libero",
      skills: "Figma / AdobeXD / STUDIO",
      twitterUrl: "https://twitter.com/sugi_1127",
      instagramUrl: "https://z-p15.www.instagram.com/sugi_uidesign/",
      facebookUrl: "https://www.facebook.com/profile.php?id=100066533881012",
      mailAddress: "sugi.libero@gmail.com",
    },
    {
      memberImg: "img/top/member/yanaginatsu.jpg",
      portfolioLink: "https://72-webdesign.com/",
      memberName: "ヤナギナツ",
      positionName: "Webデザイナー",
      tradeName: "フチドルデザイン",
      skills: "Figma / Photoshop / Illustrator",
      twitterUrl: "https://twitter.com/natsu_design",
      instagramUrl: "",
      facebookUrl: "",
      mailAddress: "yanagi.natsu86@gmail.com",
    },
  ];

  return (
    <section id="member" className={styles.member}>
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
            デザイナー <span className={styles.leadSmallFace}>の</span>８名
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

      <ul className={styles.memberList}>
        {data.map((value, index) => {
          return (
            <li key={index} className={styles.memberItem}>
              <div className={styles.memberImgWrap}>
                <img src={value.memberImg} />
              </div>
              <p className={styles.memberName}>
                {value.portfolioLink !== "" ? (
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
              <p className={styles.skills}>{value.skills}</p>

              {/* sns */}
              {value.twitterUrl !== "" ||
              value.instagramUrl !== "" ||
              value.facebookUrl !== "" ||
              value.mailAddress !== "" ? (
                <ul className={styles.snsList}>
                  {value.twitterUrl !== "" ? (
                    <li className={styles.snsItem}>
                      <a
                        className={styles.snsItemLink}
                        href={value.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="img/top/twitter-icon.png" />
                      </a>
                    </li>
                  ) : undefined}
                  {value.instagramUrl !== "" ? (
                    <li className={styles.snsItem}>
                      <a
                        className={styles.snsItemLink}
                        href={value.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="img/top/instagram-icon.png" />
                      </a>
                    </li>
                  ) : undefined}
                  {value.facebookUrl !== "" ? (
                    <li className={styles.snsItem}>
                      <a
                        className={styles.snsItemLink}
                        href={value.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="img/top/facebook-icon.png" />
                      </a>
                    </li>
                  ) : undefined}
                  {value.mailAddress !== "" ? (
                    <li className={styles.snsItem}>
                      <a
                        className={styles.snsItemLink}
                        href={`mailto:${value.mailAddress}?subject=%E3%81%AF%E3%82%82%E3%82%8C%E3%81%B3%E3%82%B5%E3%82%A4%E3%83%88%E3%81%8B%E3%82%89%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B&body=%E4%B8%8B%E8%A8%98%E9%A0%85%E7%9B%AE%E3%82%92%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E3%81%94%E8%A8%98%E5%85%A5%E3%81%AE%E4%B8%8A%E3%80%81%E9%80%81%E4%BF%A1%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%0D%0A%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0D%0A%0D%0A%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0D%0A%0D%0A%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%A2%E3%83%89%E3%83%AC%E3%82%B9%EF%BC%9A%0D%0A%0D%0A%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E5%86%85%E5%AE%B9%EF%BC%9A%0D%0A%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="img/top/mail-icon.png" />
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
    </section>
  );
}
