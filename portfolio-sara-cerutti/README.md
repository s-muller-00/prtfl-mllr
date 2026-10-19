# Portfólio de Sara Cerutti

Site estático em HTML, CSS e JavaScript, sem build, com versões em inglês e português.

## Estrutura
- `index.html`: home com os cases
- `work/`: cases (Artemya, GPA, Career OS)
- `about/`, `experiments/`: páginas Sobre e Experimentos
- `og/`: imagens de prévia para LinkedIn e redes
- `v2.css`, `v2.js`, `styles.css`: estilos e troca de idioma

## Endereço do site
Os links de compartilhamento usam o marcador `__SITE_URL__`. Depois de saber o endereço final, rode na raiz:

    sh scripts/definir-dominio.sh https://seu-endereco.vercel.app

## Publicação
Hospedado na Vercel como site estático: Framework Preset "Other", sem comando de build, com a raiz do repositório como diretório de saída.
