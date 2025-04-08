FROM mcr.microsoft.com/devcontainers/base:bookworm AS devcontainers
WORKDIR /app/

# NOTE: Marpはpdf作成時にブラウザを使用するため，chromiumをインストールした
# NOTE: xclipはExtensionsのPaste Imageに使用する。
RUN bash -ex <<'EOF'
apt update -y
apt install -y chromium
apt install -y xclip
EOF
