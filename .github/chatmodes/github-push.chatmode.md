---
description: 'Pull Requestを作成するためのモード'
tools: ['run_in_terminal', 'create_file', 'insert_edit_into_file', 'replace_string_in_file', 'mcp_github_create_branch', 'mcp_github_get_commit', 'mcp_github_get_issue', 'mcp_github_get_issue_comments', 'mcp_github_get_me', 'mcp_github_get_pull_request', 'mcp_github_get_pull_request_comments', 'mcp_github_get_pull_request_diff', 'mcp_github_push_files', 'mcp_github_create_pull_request', 'mcp_github_request_copilot_review', 'mcp_github_update_issue', 'mcp_github_update_pull_request']
---
ユーザからPull Requestを出すように指示があった場合には以下の手順で進めてください。

<IMPORTANT>Shell Scriptが記載されていますが，これはあくまで誤解なく認識合わせをするためのものなので，git，GitHubのMCP Serverを使用して同様の内容を実行しても構いません。また，Shell Scriptに含まれる「TO LLM:」というキーワードはあなたへのメッセージです。ユーザに確認を求めずにあなた自信が判断してください。</IMPORTANT>

1. 現在のブランチ名を取得してください。
  ```bash
  current_branch=$(git rev-parse --abbrev-ref HEAD)
  if [[ "$current_branch" == "main" || "$current_branch" == "master" ]]; then
  ```
2. <IMPORTANT>現在のブランチが`main`または`master`の場合には処理を中断して，ブランチ名の提案だけを行ってください。3番移行の処理は実行してはいけません。</IMPORTANT>
  ```bash
  if [[ "$current_branch" == "main" || "$current_branch" == "master" ]]; then
    git diff
    echo "TO LLM: 今回の変更内容をもとにbranch_prefixを選択してください:"
    echo "1) feature/"
    echo "2) hotfix/"
    echo "3) docs/"
    read -rp "TO LLM: 番号を入力してください (1-3): " branch_prefix_num
    case "$branch_prefix_num" in
      1) new_branch_prefix="feature/$(date +%Y%m%d%H%M%S)";;
      2) new_branch_prefix="hotfix/$(date +%Y%m%d%H%M%S)";;
      3) new_branch_prefix="docs/$(date +%Y%m%d%H%M%S)";;
      *) echo "無効な入力です"; exit 1;;
    esac
    read -rp "TO LLM: 新しいブランチ名を決定するために，変更内容を簡潔に文章にしてください。ただし，ブランチ名は英数字とハイフンのみを使用してください: " new_branch_suffix
    echo "新しいbranch_prefixは: ${new_branch_prefix}-${new_branch_suffix}"
  fi
  ```
3. リポジトリトップに戻り，変更をステージングします。
  ```bash
  cd "$(git rev-parse --show-toplevel)"
  git add .
  ```
4. 変更内容をもとに，コミットタイプを選択し、コミットメッセージを入力します。
  ```bash
  echo "TO LLM: コミットタイプを選択してください:"
  echo "1) feat"
  echo "2) fix"
  echo "3) docs"
  echo "4) style"
  echo "5) refactor"
  echo "6) test"
  echo "7) chore"
  read -rp "番号を入力してください (1-7): " commit_type_num
  case "$commit_type_num" in
    1) commit_type="feat";;
    2) commit_type="fix";;
    3) commit_type="docs";;
    4) commit_type="style";;
    5) commit_type="refactor";;
    6) commit_type="test";;
    7) commit_type="chore";;
    *) echo "無効な入力です"; exit 1;;
  esac
  read -rp "TO LLM: コミットメッセージを入力してください。（例: add login form)" commit_msg
  ```
5. コミットを作成します。
  ```bash
  git commit -m "${commit_type}: ${commit_msg}"
  ```
6. 新しいブランチをリモートにプッシュします。
  ```bash
  git push -u origin "$new_branch"
  ```

7. GitHubのMCPサーバを使用して，PRを作成してください。PRは.github/pull_request_template.mdにしたがって作成してください。


