# APP NAME

![un license](https://img.shields.io/github/license/RyosukeDTomita/marp_env)

## INDEX

- [ABOUT](#about)
- [PREPARING](#preparing)
- [HOW TO USE](#how-to-use)

---

## ABOUT

WSL2でMarpを使った時にブラウザが入っておらず，Exportがうまくいかなかったので毎度やらなくて良いようにDev Containersにした。
今後Marpで作成する自分の発表資料等もここで管理する。

---

## PREPARING

1. install VSCode, Docker
2. install VSCode Extensions *Dev Containers*
3. On the VSCode, `Ctrl shift p` and run `Dev Containers: Rebuild Containers`

## HOW TO USE

- mdを編集する
  - `Ctrl Alt v`でクリップボードからの画像の貼り付け時に名前を決められて便利。
- Marpを使用するには以下を冒頭に記載する。

    ```md
    ---
    marp: true
    ---
    ```

  - previewは`Ctrl Shift v`
  - コマンドパレットから，Export Slide dockを使うとスライドになる。

---
