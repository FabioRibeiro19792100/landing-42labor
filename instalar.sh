#!/bin/bash

echo "🚀 Instalando Node.js para o projeto Vite + React"
echo ""

# Verificar se Homebrew está instalado
if ! command -v brew &> /dev/null; then
    echo "📦 Homebrew não encontrado. Instalando Homebrew..."
    echo "   (Você precisará inserir sua senha de administrador)"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # Adicionar Homebrew ao PATH (para Apple Silicon Macs)
    if [ -f /opt/homebrew/bin/brew ]; then
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
else
    echo "✅ Homebrew já está instalado"
fi

# Instalar Node.js
echo ""
echo "📦 Instalando Node.js..."
brew install node

# Verificar instalação
echo ""
echo "✅ Verificando instalação..."
node --version
npm --version

echo ""
echo "🎉 Node.js instalado com sucesso!"
echo ""
echo "Agora você pode executar:"
echo "  cd /Users/fabioribeiro/Documents/Teste42"
echo "  npm install"
echo "  npm run dev"

