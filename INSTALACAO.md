# Como Instalar Node.js no macOS

Você precisa instalar o Node.js para poder executar o projeto Vite + React.

## Opção 1: Instalar via Homebrew (Recomendado)

### Passo 1: Instalar o Homebrew
Cole este comando no terminal:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Passo 2: Instalar o Node.js
Depois que o Homebrew estiver instalado, execute:
```bash
brew install node
```

### Passo 3: Verificar a instalação
```bash
node --version
npm --version
```

## Opção 2: Baixar do site oficial (Mais fácil)

1. Acesse: https://nodejs.org/
2. Baixe a versão LTS (Long Term Support)
3. Execute o instalador .pkg
4. Siga as instruções do instalador
5. Reinicie o terminal

## Opção 3: Usar NVM (Node Version Manager)

### Instalar NVM:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

### Depois, reinicie o terminal e instale o Node.js:
```bash
nvm install --lts
nvm use --lts
```

---

## Após instalar o Node.js:

1. **Instale as dependências do projeto:**
   ```bash
   npm install
   ```

2. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no navegador:**
   O terminal mostrará uma URL (geralmente http://localhost:5173)

---

## Verificação rápida:

Se você já instalou o Node.js, verifique com:
```bash
node --version
npm --version
```

Se aparecerem números de versão, está tudo certo! 🎉

