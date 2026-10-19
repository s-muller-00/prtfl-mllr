#!/bin/sh
# Uso (na raiz do repositório): sh scripts/definir-dominio.sh https://seu-endereco.vercel.app
# Troca __SITE_URL__ pelo endereço final nos links de compartilhamento, no sitemap e no robots.
set -e
[ -z "$1" ] && { echo "Informe o endereço, por exemplo: sh scripts/definir-dominio.sh https://saracerutti.vercel.app"; exit 1; }
URL="${1%/}"
cd "$(dirname "$0")/.."
grep -rl --exclude-dir=.git --exclude-dir=scripts "__SITE_URL__" . | while read -r f; do
  sed -i '' "s#__SITE_URL__#${URL}#g" "$f"
done
echo "Pronto: endereço definido como ${URL}"
