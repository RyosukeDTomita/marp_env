# 類似ドメイン調査レポート: api.githubcopilot.com

## 1. 調査目的

`api.githubcopilot.com` に類似したドメインが存在し、フィッシングなどの詐欺行為に悪用されている可能性がないか調査する。

## 2. 調査内容と結果

### 2.1. 類似ドメインの存在確認

`dig`コマンドを使用し、よくあるタイプミスや異なるトップレベルドメイン（TLD）を持つ類似ドメインの存在を確認した。

#### 実行コマンド

```bash
dig api.githabcopilot.com +short; dig api.githubcopilot.net +short; dig api.github-copilot.com +short; dig api.githubcopilot.org +short; dig api.githubcopil0t.com +short
```

#### 実行結果

```
13.82.179.67
sp.gname.net.
172.65.185.109
```

#### 所見

- `api.githabcopilot.com` (gith**a**b) は `13.82.179.67` に解決された。
- `api.githubcopilot.net` は `sp.gname.net.` と `172.65.185.109` に解決された。
- `api.github-copilot.com`, `api.githubcopilot.org`, `api.githubcopil0t.com` (oが0) は存在しない。

### 2.2. ドメイン所有者情報の確認

`whois`コマンドを使用し、存在が確認されたドメインの所有者情報を調査した。

#### 実行コマンド

```bash
whois githabcopilot.com; whois githubcopilot.net
```

#### 実行結果（抜粋）

**githabcopilot.com:**
```
No match for domain "GITHABCOPILOT.COM".
```

**githubcopilot.net:**
```
   Domain Name: GITHUBCOPILOT.NET
   Registrant Organization: GitHub, Inc.
   Registrant Country: US
```

#### 所見

- `githabcopilot.com` のWHOIS情報は見つからなかった。
- `githubcopilot.net` の所有者は `GitHub, Inc.` であり、正規のドメインであることが確認された。

### 2.3. IPアドレスの所有者情報の確認

`api.githabcopilot.com` が解決されたIPアドレス `13.82.179.67` の所有者情報を `whois` コマンドで調査した。

#### 実行コマンド

```bash
whois 13.82.179.67
```

#### 実行結果（抜粋）

```
NetRange:       13.64.0.0 - 13.107.255.255
CIDR:           13.64.0.0/11, 13.96.0.0/13, 13.104.0.0/14
NetName:        MSFT
Organization:   Microsoft Corporation (MSFT)
```

#### 所見

IPアドレス `13.82.179.67` の所有者は **Microsoft Corporation** であることが判明した。

## 3. 結論

- **`api.githabcopilot.com` は、Microsoft が所有するIPアドレスに解決されるものの、WHOIS情報が確認できないため、依然として注意が必要なドメインです。** Microsoftがタイポスクワッティング対策として取得している可能性も考えられますが、公式な情報がない限り、アクセスは避けるべきです。
- **`githubcopilot.net` は、GitHub, Inc. が所有する正規のドメインです。**
- その他の類似ドメインは、現時点では存在しません。

以上の調査から、`api.githabcopilot.com` というドメインは、フィッシングサイト等の悪意のある目的で利用される可能性を否定できません。ユーザーは、`api.githubcopilot.com` のドメインを正確に入力するように注意する必要があります。
