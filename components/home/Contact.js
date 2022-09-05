import React from "react";
import styles from "../../styles/components/home/_Contact.module.scss";
import SectionTitle from "../common/SectionTitle";
import { useState } from "react";
import AnimationTrigger from "../common/AnimationTrigger";
// contact送信関連に必要
import { useForm } from "react-hook-form";
import { ContactGoogleForm } from "../../lib/ContactGoogleForm";
import axios from "axios";

export default function Contact() {
  // テキストエリアのplaceholderの改行対応
  const [isActive, setIsActive] = useState(false);

  // inputの入力値更新
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [radio, setRadio] = useState("");
  const [textarea, setTextarea] = useState("");
  // 送信ボタンクリック後、テキストを「送信中・・・」に変更
  const [btnText, setBtnText] = useState("この内容でお問い合わせをする");

  const changeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeMail = (e) => {
    setMail(e.target.value);
  };
  const changeRadio = (e) => {
    setRadio(e.target.value);
  };
  const changeTextarea = (e) => {
    setTextarea(e.target.value);
    // placeholderの改行対応
    if (e.target.value.length !== 0) {
      if (isActive === true) {
        return;
      }
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // 送信ボタンクリック後「送信中・・・」にテキストを変更
  const changeBtnText = () => {
    if (name === "" || mail === "") {
      return;
    }
    setBtnText("送信中・・・");
  };

  // useForm
  const { handleSubmit } = useForm({
    mode: "onChange",
  });

  const submit = () => {
    const GOOGLE_FORM_ACTION = ContactGoogleForm.action;
    // CORS対策
    const CORS_PROXY = "https://floating-bayou-34569.herokuapp.com/";

    // PostのParam生成
    const submitParams = new FormData();
    submitParams.append(ContactGoogleForm.companyName, companyName);
    submitParams.append(ContactGoogleForm.name, name);
    submitParams.append(ContactGoogleForm.mail, mail);
    submitParams.append(ContactGoogleForm.radio, radio);
    submitParams.append(ContactGoogleForm.textarea, textarea);

    // 実行
    axios
      .post(`/api`, submitParams, {
      })
      .then(() => {
        window.location.href = "/thanks"; // 成功時
        // console.log("成功");
      })
      .catch((error) => {
        console.log(error.response); // 失敗時
      });

    // axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams);
  };

  return (
    <AnimationTrigger animation={styles.isFadeIn} rootMargin="-10%" triggerOnce>
      <section id="contact" className={styles.contact}>
        <AnimationTrigger
          animation={styles.isFadeUp}
          rootMargin="-15%"
          triggerOnce
        >
          <SectionTitle title={"お問い合わせ"} />

          <p className={styles.lead}>
            この度は「Hamorebi」チームサイトをご覧いただきましてありがとうございます
            <br />
            お問い合わせはフォームへご入力ください
            <br />
            3営業日以内に担当者よりご連絡いたします
            <br />
            どうぞお気軽にお問い合わせくださいませ
          </p>
        </AnimationTrigger>

        <AnimationTrigger
          animation={styles.isFadeUp}
          rootMargin="-150px"
          triggerOnce
        >
          <form onSubmit={handleSubmit(submit)} className={styles.form}>
            <dl className={styles.formList}>
              {/* 社名 */}
              <div className={styles.formItem}>
                <dt className={`${styles.formLabel} ${styles.optionalLabel}`}>
                  <label htmlFor="companyName">貴社名</label>
                </dt>
                <dd className={styles.formInputWrap}>
                  <input
                    id="companyName"
                    type={"text"}
                    name={"companyName"}
                    placeholder="株式会社ハモレビ"
                    className={styles.input}
                    value={companyName}
                    onChange={changeCompanyName}
                  />
                </dd>
              </div>
              {/* /社名 */}

              {/* 名前 */}
              <div className={styles.formItem}>
                <dt className={`${styles.formLabel} ${styles.requiredLabel}`}>
                  <label htmlFor="name">お名前</label>
                </dt>
                <dd className={styles.formInputWrap}>
                  <input
                    id="name"
                    type={"text"}
                    name={"name"}
                    required
                    placeholder="山田 太郎"
                    className={styles.input}
                    value={name}
                    onChange={changeName}
                  />
                </dd>
              </div>
              {/* /名前 */}

              {/* メールアドレス */}
              <div className={styles.formItem}>
                <dt className={`${styles.formLabel} ${styles.requiredLabel}`}>
                  <label htmlFor="mail">メールアドレス</label>
                </dt>
                <dd className={styles.formInputWrap}>
                  <input
                    id="mail"
                    type={"email"}
                    name={"mail"}
                    required
                    placeholder="000000000@gmail.com"
                    className={styles.input}
                    value={mail}
                    onChange={changeMail}
                  />
                </dd>
              </div>
              {/* /メールアドレス */}

              {/* お問い合わせの種類 */}
              <div className={styles.formItem}>
                <dt className={`${styles.formLabel} ${styles.optionalLabel}`}>
                  <label>お問い合わせの種類</label>
                </dt>
                <dd className={styles.formRadioWrap}>
                  <label>
                    <input
                      type={"radio"}
                      name={"radio"}
                      value="Webサイト制作について"
                      onChange={changeRadio}
                      checked={radio === "Webサイト制作について"}
                    />
                    <span>Webサイト制作について</span>
                  </label>
                  <label>
                    <input
                      type={"radio"}
                      name={"radio"}
                      value="LPについて"
                      onChange={changeRadio}
                      checked={radio === "LPについて"}
                    />
                    <span>LPについて</span>
                  </label>
                  <label>
                    <input
                      type={"radio"}
                      name={"radio"}
                      value="ECサイトについて"
                      onChange={changeRadio}
                      checked={radio === "ECサイトについて"}
                    />
                    <span>ECサイトについて</span>
                  </label>
                  <label>
                    <input
                      type={"radio"}
                      name={"radio"}
                      value="UIデザインについて"
                      onChange={changeRadio}
                      checked={radio === "UIデザインについて"}
                    />
                    <span>UIデザインについて</span>
                  </label>
                  <label>
                    <input
                      type={"radio"}
                      name={"radio"}
                      value="その他"
                      onChange={changeRadio}
                      checked={radio === "その他"}
                    />
                    <span>その他</span>
                  </label>
                </dd>
              </div>
              {/* /お問い合わせの種類 */}

              {/* お問い合わせ内容 */}
              <div className={styles.formItem}>
                <dt
                  className={`${styles.formLabel} ${styles.optionalLabel} ${styles.formLabelTextarea}`}
                >
                  <label htmlFor="textarea">お問い合わせ内容</label>
                </dt>
                <dd className={styles.formTextareaWrap}>
                  <div className={styles.dedicatedTextareaAndPlaceholderWrap}>
                    <textarea
                      id="textarea"
                      name={"textarea"}
                      placeholder=""
                      className={`${styles.textarea} ${
                        isActive ? styles.isActive : undefined
                      }`}
                      value={textarea}
                      onChange={changeTextarea}
                    />
                    <p className={styles.placeholderText}>
                      新しく飲食店をオープンするのでホームページを作りたい
                      <br className={styles.placeholderTextareaBr} />
                      ネットショップを開店したい
                      <br className={styles.placeholderTextareaBr} />
                      コーポレートサイトの詳しい料金を知りたい
                    </p>
                  </div>
                </dd>
              </div>
              {/* /お問い合わせ内容 */}
            </dl>

            {/* 送信ボタン */}
            <div
              className={`${styles.contactBtnWrap} ${styles.contactBtnArrow}`}
            >
              <input
                type={"submit"}
                className={styles.contactBtn}
                value={btnText}
                onClick={changeBtnText}
              />
              <div className={styles.contactBtnDecoration}></div>
            </div>
            {/* /送信ボタン */}
          </form>
        </AnimationTrigger>
      </section>
    </AnimationTrigger>
  );
}
