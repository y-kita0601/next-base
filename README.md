# 環境構築手順

## 事前に準備するもの
- node.js20系以上
- dockerのインストール
- supabaseのアカウントインストール

### node.jsのインストール
node.js 20系以上


### supabase cliのインストール
- brew install supabase/tap/supabase
- supabase login

### supabaseの初期化
```
supabase init
Generate VS Code settings for Deno? [y/N] N
Generate IntelliJ Settings for Deno? [y/N] y
Generated IntelliJ settings in .idea/deno.xml. Please install the Deno plugin!
Finished supabase init.
```

### supabase の立ち上げ
supabase start

### supabase の停止
supabase stop

