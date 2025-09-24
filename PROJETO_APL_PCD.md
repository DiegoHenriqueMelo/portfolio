# Página do Projeto APL PCD API

## Mudanças Implementadas

### 1. Instalação do React Router
```bash
npm install react-router-dom
```

### 2. Estrutura de Navegação
- **App.js**: Configurado com HashRouter para compatibilidade com GitHub Pages
- **Header.js**: Atualizado para navegação entre páginas
- **Projects.js**: Adicionado botão "Ver Detalhes" para o projeto APL PCD API

### 3. Nova Página Criada
- **AplPcdProject.js**: Página dedicada com todas as informações do projeto

### 4. Rotas Configuradas
- `/` - Página principal do portfólio
- `/projeto/apl-pcd-api` - Página dedicada do projeto APL PCD API

### 5. Conteúdo da Página
A página inclui todas as informações do README.md do projeto:

#### Seções Implementadas:
- **Header**: Título, descrição e links
- **Objetivo do Projeto**: Missão e propósito
- **Funcionalidades**: 6 principais funcionalidades com ícones
- **Stack Tecnológico**: Todas as tecnologias utilizadas
- **Arquitetura Enterprise**: Clean Architecture e padrões
- **Segurança**: Medidas de segurança implementadas
- **Banco de Dados**: Estrutura das 14 tabelas
- **Sistema de IDs**: Prefixos semânticos únicos
- **Testes e Qualidade**: Estatísticas de cobertura
- **Desenvolvimento**: Conventional Commits e estrutura de branches
- **Status do Projeto**: Métricas e avaliações

#### Informações Destacadas:
- ✅ **3 branches principais**: main, develop, feature/*
- ✅ **Conventional Commits**: Padrão rigoroso seguido
- ✅ **110+ testes**: 60 unitários + 50 integração
- ✅ **99%+ cobertura**: Funções críticas testadas
- ✅ **Nota 8.7/10**: Production-Ready
- ✅ **Enterprise-Grade**: Arquitetura profissional

### 6. Navegação
- Botão "Ver Detalhes" no card do projeto APL PCD API
- Header adaptativo (mostra navegação normal na home, botão "Voltar" nas páginas internas)
- Links para GitHub e LinkedIn

### 7. Estilização
- Mantém o padrão visual do portfólio
- Responsivo para todos os dispositivos
- Animações e transições suaves
- Gradientes e cores consistentes

## Como Acessar
1. Na página principal, vá até a seção "Projetos"
2. Clique em "Ver Detalhes" no card "APL PCD API"
3. Ou acesse diretamente: `/#/projeto/apl-pcd-api`

## Tecnologias Adicionadas
- React Router DOM v6
- HashRouter (para GitHub Pages)
- Navegação programática com useNavigate
- Detecção de rota com useLocation