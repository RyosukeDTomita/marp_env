
- 使用するMCPサーバに悪意のある実装が含まれている場合
  - Tool Poisoning Attack: MCP Client設定ファイル等。権限は最小にしてOAuthでトークンのローテーションをする
  - 機密情報の漏洩。特に複数のMCPサーバ利用時
  - プロンプトインジェクション的な

- MCPサーバに通常のWebアプリケーションの脆弱性がある場合
  - 入力値のサニタイズ
    - OSコマンドインジェクション
    - プロンプトインジェクション
  - 通信経路
  - アクセス制御
  - フィッシングに近い観点
    - FQDNのタイプミス
    - インストーラーのなりすまし


ローカルMCP ServerとリモートMCP Serverを使い分ける

- ローカルMCP Server
  - MCP Serverの実装を確認できる
  - 一人ずつセットアップが必要

- リモートMCP Server(社内運用)
  - ツールの内容を確認できる
  - 複数人での利用が容易
  - 誰かが運用しないといけない

- リモートMCP Server(公式運用)
  - 環境のセットアップが不要
  - 複数人での利用が容易
  - 動いているサーバの実装を確認できない
  - Webアプリケーションとして脆弱な場合，被害が大きい
  - 予期せず更新される可能性
