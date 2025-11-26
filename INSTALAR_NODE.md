# Como Instalar Node.js no macOS

Você precisa instalar o Node.js para executar o projeto Vite + React. Siga um dos métodos abaixo:

## Método 1: Instalar via Homebrew (Recomendado)

### Passo 1: Instalar Homebrew (se ainda não tiver)
Execute no terminal:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Passo 2: Instalar Node.js
```bash
brew install node
```

### Passo 3: Verificar instalação
```bash
node --version
npm --version
```

## Método 2: Instalar via Site Oficial

1. Acesse: https://nodejs.org/
2. Baixe a versão LTS (Long Term Support)
3. Execute o instalador .pkg
4. Siga as instruções do instalador

## Método 3: Instalar via NVM (Node Version Manager)

### Passo 1: Instalar NVM
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

### Passo 2: Recarregar o terminal ou executar:
```bash
source ~/.zshrc
```

### Passo 3: Instalar Node.js
```bash
nvm install --lts
nvm use --lts
```

## Após Instalar

Depois de instalar o Node.js, volte para a pasta do projeto e execute:

```bash
cd /Users/fabioribeiro/Documents/Teste42
npm install
npm run dev
```

O servidor de desenvolvimento será iniciado e você verá uma URL (geralmente http://localhost:5173) para acessar no navegador.

