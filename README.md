






## Heroku の設定
- 新しいアプリ作る。
- API Key とアプリ名を控えとく。

## Circle CI の設定
- プロジェクト追加する。
- HEROKU_API_KEY, HEROKU_APP_NAME という名前の環境変数をセットする。

## 開発時
- ローカルの開発環境は docker-compose up で立ち上がる。yarn develop している。
- プログラム変更すると nodemon によって、自動的に再起動される。
- ホストから localhost:8500 で表示を確認できる。
- テストの実行は、コンテナに入って yarn test する。

## Circle CI の動作とデプロイ
- Circle CI 上では docker-compose.yml の内容を元にコンテナが立ち上がる。
- master 以外のブランチを GitHub にプッシュすると、Circle CI でテストが動く。
- master にマージすると、Dockerfile の内容を元に Heroku にデプロイされる。
