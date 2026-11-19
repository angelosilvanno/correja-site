# CorreJa — Treinador Digital de Corrida

Landing page oficial e vitrine interativa do **CorreJa**, plataforma de treinamento de corrida estruturado que guia corredores do primeiro passo até a meia maratona (21 km), direto no celular.

## 🔥 Introdução

O **CorreJa** foi desenvolvido para apresentar o aplicativo e facilitar o acesso imediato dos corredores aos seus planos de treino personalizados. A aplicação destaca a proposta de valor da plataforma, explica o funcionamento das zonas de intensidade cardíaca/esforço e permite a instalação rápida como **PWA (Progressive Web App)** sem ocupar memória do aparelho.

### Principais funcionalidades:
* **Mockup interativo do app:** Visualização fiel da tela inicial do corredor com progresso semanal, plano ativo e treino do dia.
* **Explicação da metodologia em 3 passos:** Definição de objetivo, treino no ritmo certo e acompanhamento de evolução na nuvem.
* **Guia visual de zonas de treino (Z1 a Z5):** Demonstração clara das faixas de intensidade (Recuperação, Leve/Base, Moderado, Forte e Máximo).
* **Catálogo de planos:** Planos estruturados para **5K** (Iniciante - 8 semanas), **10K** (Intermediário - 10 semanas) e **21K** (Avançado - 12 semanas).
* **Modal de instalação PWA multiplataforma:** Instruções dinâmicas por abas para **Android**, **iPhone (iOS)** e **Computador** (com QR Code integrado).

### ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

* **Node.js** (versão 18.19 ou superior)
* **npm** (gerenciador de pacotes que acompanha o Node.js)
* **Angular CLI** (versão 17 ou superior)

Para verificar se já possui as ferramentas instaladas, execute no terminal:

```bash
node -v
npm -v
ng version

```

Caso precise instalar o Angular CLI globalmente:

```bash
npm install -g @angular/cli

```

### 🔨 Guia de instalação

Siga o passo a passo abaixo para clonar e executar o projeto localmente em ambiente de desenvolvimento:

**Passo 1:** Clone este repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/angelosilvanno/correja-site.git
cd correja-site

```

**Passo 2:** Instale todas as dependências do projeto:

```bash
npm install

```

**Passo 3:** Inicie o servidor de desenvolvimento local:

```bash
npm start

```

## 📦 Tecnologias usadas:

* **Angular** (Standalone Components & Signals)
* **TypeScript**
* **HTML5** (Semântico e acessível)
* **SCSS / CSS3** (CSS Grid, Flexbox, variáveis CSS e design responsivo)
* **SVG Inline** (Ícones, gráficos de progresso circular e elementos vetoriais)

