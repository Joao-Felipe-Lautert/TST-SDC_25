# Aplicativo de Acessibilidade

Este é um aplicativo React Native desenvolvido para uso no ExpoSnack, focado em recursos de acessibilidade.

## Funcionalidades

O aplicativo possui 5 telas principais:

1. **Tela de Login** - Permite login com email/usuário e senha, além de opções de login social
2. **Tela de Cadastro** - Formulário de registro com validação de campos
3. **Tela Inicial** - Menu principal com opções de acessibilidade (narração e libras)
4. **Tela de Preferências** - Configurações específicas de acessibilidade
5. **Tela de Configurações** - Configurações gerais do aplicativo

## Como usar no ExpoSnack

1. Acesse [snack.expo.dev](https://snack.expo.dev)
2. Crie um novo projeto
3. Copie todos os arquivos deste projeto para o ExpoSnack
4. Instale as dependências necessárias (já listadas no package.json)
5. Execute o projeto

## Estrutura do Projeto

```
accessibility-app/
├── App.js                    # Arquivo principal com navegação
├── package.json              # Dependências do projeto
├── app.json                  # Configurações do Expo
├── babel.config.js           # Configurações do Babel
├── screens/                  # Telas do aplicativo
│   ├── LoginScreen.js
│   ├── CadastroScreen.js
│   ├── HomeScreen.js
│   ├── PreferenciasScreen.js
│   └── ConfiguracoesScreen.js
├── components/               # Componentes reutilizáveis (vazio por enquanto)
└── assets/                   # Imagens e outros recursos
```

## Dependências

- expo
- react-native
- @react-navigation/native
- @react-navigation/stack
- react-native-screens
- react-native-safe-area-context
- react-native-gesture-handler
- expo-vector-icons

## Navegação

O aplicativo utiliza React Navigation com Stack Navigator para navegação entre telas:

- Login → Home (após login bem-sucedido)
- Login ↔ Cadastro (alternância entre login e cadastro)
- Home → Preferências (botão de preferências)
- Home → Configurações (botão de menu)
- Configurações → Login (logout)

## Recursos de Acessibilidade

- Interface limpa e intuitiva
- Botões grandes e bem espaçados
- Cores contrastantes
- Opções de narração e linguagem de sinais
- Configurações de tamanho de texto
- Temas claro e escuro

## Observações

- O projeto está configurado para funcionar no ExpoSnack sem necessidade de instalações adicionais
- Todas as telas são responsivas e seguem as diretrizes de design mobile
- Os componentes utilizam SafeAreaView para compatibilidade com diferentes dispositivos

