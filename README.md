# AppPot-AngularJS-HandsOn

## ハンズオン用テキスト
https://speakerdeck.com/apppot/angularjsto-batukuendosabisuapppotdezuo-ruye-wu-sisutemu

## ディレクトリ構成
```
AppPot-AngularJS-HandsOn  
├── exerciseXX                            ... 各エクササイズの回答コード  
└── work                                  ... 今回のハンズオンで作業してもらうディレクトリ  
　　└── www                               ... Webサーバーのドキュメントルート  
        ├── components                    ... 実装モジュールを配置するルート  
        │   ├── app.js                    ... AngularJSのエントリポイント  
        │   ├── auth                      ... 認証機能のモジュールを配置  
        │   │   ├── login.css             ... ログイン画面用のCSS  
        │   │   └── login.html            ... ログイン画面  
        │   ├── config.js                 ... AppPot接続とSDK利用のための設定  
        │   ├── helper.js                 ... 軽微な処理用のヘルパー関数郡  
        │   └── simple-crud               ... DBをCRUDする機能のモジュールを配置  
        │       ├── customerDetail.html   ... 登録・編集画面  
        │       └── customerList.html     ... 一覧表示画面  
        ├── index.html                    ... アクセスするルートページ  
        └── lib                           ... 外部ライブラリを配置 
            ├── angular                   ... AngularJSに関するライブラリを配置  
            ├── apppot                    ... AppPotに関するライブラリを配置  
            ├── bootstrap                 ... Bootstrapに関するライブラリを配置  
            └── ui-bootstrap              ... AngularJSにBootstrapを組み込むためのライブラリを配置
```
