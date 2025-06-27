---
marp: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
  @import "custom.css";
  section {
    font-family: 'Noto Sans JP', 'Hiragino Sans', 'Meiryo', sans-serif;
  }

paginate: true
footer: Qiita Bash 2025/07/02
---

<center>

#### MCPで広がる生成AI活用の可能性!  2025/07/02 Qiita Bash

</center>

# MCPのセキュリティ

<!-- iconを絶対配置することで文字の位置がずれる現象を防ぐ -->
<style>
.icon-absolute {
  position: absolute;
  right: 20px;
  z-index: 10;
}
</style>

<div class="icon-absolute">

![w:170](./assets/icon.png)
</div>

<center>Ryosuke Tomita(sigma)</center>

---

## MCPとは

- MCP(Model Context Protocol)は，アプリケーションがLLMにコンテキストを提供するためのオープンプロトコル

- MCPにより，AI AgentがLLMと接続するAPIが統一化され，データソースやツールとの連携が容易になる

---

## JSON-RPCの例

```json
{
  "jsonrpc": "2.0",
  "method": "profile",
  "params": ["富田涼介"],
  "id": 1
}

```

```json
{
  "jsonrpc": "2.0",
  "result": {
    "年齢": 27,
    "所属": "NRI→NRIセキュアに出向(2022/04~)",
    "業務内容": "認証基盤のSI開発/保守，脆弱性診断，シフトレフト活動",
  }
  "id": 1
}
```

---

## まとめ

※発言はすべて個人の見解であり，所属組織を代表するものではありません
