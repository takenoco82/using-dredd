# using-dredd
## 前提条件
- Node.jsがインストールされていること
- Dockerがインストールされていること


## Dreddのインストール
``` sh
# Dreddのインストール
npm install -g dredd

# ↑でエラーが出るかもしれないけど、↓のコマンドが動いたらインストールは成功しているらしい...
dredd --version

# フックスクリプトに必要なライブラリをインストール
pip install dredd_hooks
```
[Installation — Dredd 5.1.11 documentation](https://dredd.readthedocs.io/en/latest/installation.html#why-i-m-seeing-node-gyp-or-python-errors)

## このサンプルの使い方

### モックサーバの起動
``` sh
make run
```

### API仕様の確認
``` sh
open http://localhost:8080/docs
```

### Dreddの実行
``` sh
make dredd
```
