
Confirm/index.js

  O problema que estava tendo no Confirm (React Native Camera).

  Fala @Marcelo Augusto, cara eu tive exatemente esse problema, exatamente com a lib para tirar foto, eu resolvi no meu projeto removendo a pasta android/app/src/debug e adicionei o trecho 'android:usesCleartextTraffic="true" ' dentro da tag application no arquivo android/app/src/main/AndroidManifest.xml
  Depois que eu fiz isso minha requisição funcionou.

Icons:

  from: GoStack > Iniciando aplicativo mobile > Input & Button

  add to Android > app > build.gradle

  project.ext.vectoricons = [
    iconFontNames: ['Feather.ttf']
  ];

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
