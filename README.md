# LangScan — Detector de Idioma

> Extensão para Chrome que identifica o idioma da página atual, detecta palavras estrangeiras e permite buscar e navegar pelo conteúdo diretamente no browser.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=flat&logo=googlechrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-brightgreen?style=flat)
![Licença MIT](https://img.shields.io/badge/Licença-MIT-blue?style=flat)

---

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Instalação (modo desenvolvedor)](#instalação-modo-desenvolvedor)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias](#tecnologias)
- [Limitações Conhecidas](#limitações-conhecidas)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## Visão Geral

**LangScan** é uma extensão leve para Google Chrome que analisa qualquer página da web e entrega, em segundos, um relatório completo sobre o idioma do conteúdo. Ideal para profissionais de SEO, tradutores, desenvolvedores e qualquer pessoa que trabalhe com conteúdo multilíngue.

A extensão roda 100% no navegador — sem servidores externos, sem coleta de dados, sem dependências de APIs pagas.

---

## Funcionalidades

### 🌐 Detecção de Idioma
- Analisa atributos HTML (`lang`, `og:locale`, `content-language`) e o texto da página para identificar o idioma com uma pontuação de confiança
- Suporte a mais de 30 idiomas, incluindo português, inglês, espanhol, francês, alemão, japonês, árabe, russo e outros
- Permite selecionar o idioma manualmente via dropdown para forçar a análise em um idioma específico

### 🔎 Busca na Página (estilo Ctrl+F)
- Campo de busca integrado ao popup que localiza e destaca qualquer texto na página
- Navegação entre ocorrências com botões ↑ ↓ e contador `X / Y ocorrências`
- Botão **"↗ Ver"** que rola a página até a ocorrência selecionada
- Atalho de teclado: `Enter` para buscar, `Ctrl+Enter` para navegar

### 🟡 Detecção de Palavras Estrangeiras
- Identifica palavras que pertencem a outros idiomas com base em listas de palavras comuns (pt, en, es, fr, de, it)
- Exibe as palavras encontradas como tags clicáveis — ao clicar, a busca é disparada automaticamente na página
- Botão **"Ver na página →"** aparece após selecionar uma palavra, rolando até a primeira ocorrência
- Toggle para destacar visualmente todas as palavras estrangeiras diretamente no conteúdo da página

### 📊 Composição de Escrita
- Gráfico de barras mostrando a distribuição percentual de scripts (Latino, Cirílico, Árabe, CJK, Hangul, Hebraico, Devanagari, Tailandês, Grego)

### 📋 Informações SEO da Página
- Exibe título, meta description, meta keywords, URL, canonical e alertas de abreviações de países (ex: `Samsung BR` → sugestão de usar `Samsung Brasil`)

---

## Instalação (modo desenvolvedor)

> A extensão ainda não está publicada na Chrome Web Store. Siga os passos abaixo para instalar localmente.

**1. Clone o repositório**

```bash
git clone https://github.com/gabermc/langscan.git
cd langscan
```

**2. Abra a página de extensões do Chrome**

Digite na barra de endereço:
```
chrome://extensions
```

**3. Ative o Modo do Desenvolvedor**

Habilite o toggle **"Modo do desenvolvedor"** no canto superior direito da página.

**4. Carregue a extensão**

Clique em **"Carregar sem compactação"** e selecione a pasta raiz do projeto (onde está o `manifest.json`).

**5. Pronto!**

O ícone do LangScan aparecerá na barra de ferramentas do Chrome. Acesse qualquer site e clique no ícone para começar.

---

## Como Usar

### Escanear uma página
1. Navegue até qualquer site
2. Clique no ícone **LangScan** na barra de ferramentas
3. Escolha o idioma esperado no dropdown (ou deixe em "Detectar automaticamente")
4. Clique em **Escanear**

### Buscar texto na página
1. Digite o termo desejado no campo **"Buscar texto na página"**
2. Clique em **Buscar** ou pressione `Enter`
3. Use as setas ↑ ↓ para navegar entre as ocorrências
4. Clique em **"↗ Ver"** para rolar até a ocorrência atual

### Localizar palavras estrangeiras
1. Após escanear, a seção **"Palavras estrangeiras"** lista as palavras detectadas
2. Clique em qualquer palavra para buscá-la automaticamente na página
3. Use o toggle **"Destacar na página"** para realçar todas as ocorrências de uma vez

---

## Estrutura do Projeto

```
langscan/
├── manifest.json       # Configuração da extensão (Manifest V3)
├── popup.html          # Interface do popup
├── popup.js            # Lógica da interface e comunicação com a aba
├── content.js          # Script injetado na página para escanear o conteúdo
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### Responsabilidades dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `manifest.json` | Declara permissões, scripts e ícones da extensão |
| `popup.html` | Estrutura e estilos da interface (dark mode, design system próprio) |
| `popup.js` | Detecção de idioma, busca na página, destaque de palavras, renderização de resultados |
| `content.js` | Extração de texto da página, análise de caracteres e scripts |

---

## Tecnologias

- **Manifest V3** — padrão mais recente da Chrome Extension API
- **Chrome Scripting API** — para injetar e executar funções na aba ativa
- **TreeWalker API** — para percorrer o DOM e extrair texto com precisão
- **CSS puro** — interface construída sem frameworks, com design system próprio em dark mode
- **Fontes**: [Syne](https://fonts.google.com/specimen/Syne) + [DM Mono](https://fonts.google.com/specimen/DM+Mono) via Google Fonts

Nenhuma dependência externa de runtime. Nenhuma requisição a servidores de terceiros.

---

## Limitações Conhecidas

- A detecção de palavras estrangeiras está disponível apenas para idiomas com script latino (pt, en, es, fr, de, it). Idiomas como árabe, japonês, coreano etc. não possuem banco de palavras na versão atual.
- Páginas protegidas (ex: `chrome://`, `chrome-extension://`, PDFs nativos do Chrome) não podem ser escaneadas por restrições da plataforma.
- A análise de script é feita sobre os primeiros 2.000 caracteres do texto extraído, o que pode gerar imprecisões em páginas com conteúdo misto extenso.
- A extensão não persiste resultados entre sessões — cada abertura do popup começa do zero.

---

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona suporte a idioma X'`
4. Push para a branch: `git push origin feature/minha-feature`
5. Abra um Pull Request

### Ideias para contribuição
- Adicionar suporte a novos idiomas no detector de palavras estrangeiras
- Melhorar a heurística de detecção de idioma via análise estatística de n-gramas
- Adicionar exportação dos resultados (JSON / CSV)
- Suporte a Firefox (WebExtensions API)

---

## Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

<p align="center">
  Feito com ♥ — nenhum servidor, nenhum dado coletado, 100% local.
</p>
