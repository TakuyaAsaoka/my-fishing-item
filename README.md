# About
本アプリは、事前に所有しているアイテムを登録しておくと、釣行時の持ち物を表示してくれる釣具管理アプリです。所有アイテムの一元管理とストレスのない釣行が期待できます。
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
