# About
本アプリは、事前に所有しているアイテムを登録しておくと、釣行時の持ち物をリストアップしてくれる釣具管理アプリです。  
所有アイテムを一元管理することで余剰在庫回避によるコスト削減と釣行先で気づいてしまった忘れ物によるストレス軽減が期待できます。
# Install
本アプリをローカル環境で動作するには次のステップが必要です。
1. このリポジトリをクローンします。  
```
$ git clone (your clone code)
```
2. カレントディレクトリをbackendディレクトリに変更します。  
```
$ cd my-fishing-item/backend
```
3. backendに必要な依存関係をインストールします。  
```
$ npm install
```
4. ローカルのPostgresDBを指定し、マイグレーションを実行します。
```
$ npm run migrate
```
5. ローカルサーバーを立ち上げます。
```
$ npm run start
```
6. カレントディレクトリをfrontendディレクトリに変更します。
```
$ cd ../frontend
```
7. frontendに必要な依存関係をインストールします。
```
$ npm install
```
8. Reactアプリを起動させます。
```
$ npm start
```
# Technology
* Express.js
* React.js
* Knex.js
* Postgres
* Render
* Mocha, Chai
