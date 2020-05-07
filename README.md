
<h1 align="center">
  MyFitness(英語)
</h1>

## 💫 DemoSiteのアドレス

[MyFitnessTopPage](https://myfitness-site.netlify.app/)  
[GoogleMapAPIを使用したページ](https://myfitness-site.netlify.app/map/index.html)  
[SnipcartAPIを使用したカートページ](https://myfitness-site.netlify.app/cart/index.html)  


## 💫 コード解説記事

[GoogleMap のマーカーと、HTMLのリストデータの連動（Vanilla JavaScript)](https://myfrontend.netlify.app/interactive-google-map-marker)

[外付けカート(snipcart）機能を追加しました](https://myfrontend.netlify.app/add-snipcart)


## 🧐 プログラム・フォルダ構成

シンプルにHTML/CSSで実装。
以下のページで外部APIを使用しています。
- Mapページ:Google Maps JavaScript API
- Cartページ:SnipcartAPI
- formページ:NetlifyForm

index.html
blog-post/
image/
style/
map/  
　├ images/  
　├ index.html  
　├ location.json  
　├ main.js  
　└ style.css  
cart/  
　├ images/  
　├ index.html  
　├ products.json  
　├ app.js  
　└ style.css  
form/  
　├ form.html  
　├ thankyou.html  
　├ form.js  
　└ form.css  
  
1.  **`index.html`**: トップページ
  
2.  **`blog-post`**: ブログポストファイル

3.  **`image/`**: 画像ファイルを保存するフォルダ。

4.  **`style/`**: CSSファイル

5.  **`map/`**: GooleMap関連フォルダ

6.  **`cart/`**: ショッピングカート関連フォルダ  

7.  **`form/`**: 問い合わせフォーム関連フォルダ

## References 

* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial?hl=ja)
* [Snipcart Documentation](https://docs.snipcart.com/v3/)
* [Netlify Forms](https://www.netlify.com/products/forms/)



## 🚀 Deploy

NetlifyをつかってDeployしています。





