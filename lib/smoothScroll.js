export function smoothScroll() {
  /**
   * ヘッダーの高さ分だけ移動をずらすのはCSSで対処
   * 詳しくはcomponents/home/ScrollPosition.jsとCSS参照
   */
  // ブラウザ側にしか存在しないグローバルオブジェクト（windowやdocument）を参照したい場合
  if (typeof window !== "undefined") {
    const anchorLinks = document.querySelectorAll('a[href*="#"]'); //href*で、指定した値を含む要素
    // 上記で取得した要素群を配列に格納（”配列風オブジェクト”から配列に変換）
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

    // スムーススクロール
    anchorLinksArr.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // #以降を取得＆変数に格納
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        // idが指定された要素がページ内にない場合（下層ページ等）
        if (targetElement === null) {
          // topページの該当要素に飛ばす
          location = `/${targetId}`;
        } else {
          // 該当要素があった場合はスムーススクロール
          const targetOffsetTop =
            window.pageYOffset + targetElement.getBoundingClientRect().top;

          window.scrollTo({
            top: targetOffsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }
}
