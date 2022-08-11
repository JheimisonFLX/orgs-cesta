# Curso de React Native

# Instalando o EXPO
npm install --global expo-cli

# Rodando projeto
expo start
npm start

# Using a Google Font
expo install expo-font @expo-google-fonts/montserrat

# AppLoading serve como tela de aguarde enquanto carrega a font
instalado o appLoad
expo install expo-app-loading

# Revisão

Nesta aula, aprendemos:

Reutilizar componentes:
Aprendemos a criar um componente reutilizável que encapsula a lógica de trocar a fonte do texto automaticamente.
Usar parâmetros:
Aprendemos a passar e resgatar parâmetros nos componentes.
Desconstruir objetos:
Conseguimos remover a camada externa dos objetos para que possamos passar cada parâmetro do objeto como um parâmetro do componente, simplificando a declaração desses parâmetros.
Estender o tempo da splash screen:
Usando a biblioteca do Expo para chamar o AppLoading, podemos fazer a splash screen ser exibida por mais tempo enquanto as funções do nosso app são carregadas antes de exibir o conteúdo de fato.