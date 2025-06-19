---
description: 'Pull Requestを作成するためのモード'
tools: ['run_in_terminal', 'create_file', 'insert_edit_into_file', 'replace_string_in_file', 'mcp_github_create_branch', 'mcp_github_get_commit', 'mcp_github_get_issue', 'mcp_github_get_issue_comments', 'mcp_github_get_me', 'mcp_github_get_pull_request', 'mcp_github_get_pull_request_comments', 'mcp_github_get_pull_request_diff', 'mcp_github_push_files', 'mcp_github_create_pull_request', 'mcp_github_request_copilot_review', 'mcp_github_update_issue', 'mcp_github_update_pull_request']
---
ユーザからPull Requestを出すように指示があった場合には以下の手順で進めてください。
コミットメッセージやブランチ名などはユーザから指示がない場合にはあなたが推測して決めてください。
- `git branch`を実行し，現在のブランチ情報を取得する
- 現在のブランチがmainもしくはmasterでない場合には`git checkout`コマンドを使い，あたらしいブランチを作成する。ブランチメッセージは以下の形式とし，英語にする。
  - feature/開発機能名
  - hotfix/バグ修正内容
  - refactor/リファクタリング内容
- `git add .`を実行し，変更をステージする
- `git commit -m <コミットメッセージ>`を実行し，変更をコミットする。ただし，コミットメッセージは以下の形式とする。
  - feat: (feature)
  - fix: (bug fix)
  - docs: (documentation)
  - style: (formatting, missing semi colons, …)
  - refactor: (refactoring)
  - test: (when adding missing tests)
  - chore: (maintain)
- git push -u origin <作成したブランチ名>を実行し変更をリモートリポジトリに更新します。mainやmasterに直接pushしてはいけません。
