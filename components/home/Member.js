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
      twitterUrl: "https://twitter.com/tanusen",
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

              {/* sns */}
              {value.twitterUrl !== "" ||
              value.instagramUrl !== "" ||
              value.facebookUrl !== "" ||
              value.mailAddress !== "" ? (
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
              ) : undefined}
              {/* /sns */}
            </li>
          );
        })}
      </ul>

      <Button
        styles={styles.BtnWrap}
        text={"お問い合わせをする"}
        link={"#contact"}
      />
    </section>
  );
}
