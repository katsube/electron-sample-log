# Electron Sample - log
electron-logでログをファイルに記録する簡単なサンプルです。
## 解説ページ
* [[Electron] ログをファイルに記録する – electron-log](https://blog.katsubemakito.net/nodejs/electron/electron-log)

## 準備
Gitでリポジトリを取得します。
```shellsession
$ git clone https://github.com/katsube/electron-sample-log.git
```

Node.jsがインストールされている環境で以下のコマンドを実行し、必要なライブラリを取得します。
```shellsession
$ cd electron-sample-log
$ npm install
```

## 実行方法
以下でプレビューを行います。
```shellsession
$ npm start
```

ビルドは以下の通り。各OS用のインストーラーが作成されます。
```shellsession
$ npm run build-win
$ npm run build-mac
```
