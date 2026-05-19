PolizasOfflineApp/

├── App.js
├── package.json
│
└── src/
    ├── database/
    │   └── database.js
    │
    ├── services/
    │   └── polizaService.js
    │
    └── screens/
        └── HomeScreen.js
        
  > Instalar herramientas necesarias
Instalar Node.js
https://nodejs.org/es/download
Instala versión: LTS
> Verifica:
-       node -v
-       npm -v
 
  > Instalar Expo CLI
Instalación global: npm install -g expo-cli
> Verifica: expo - -version

  > Crear proyecto Expo
Esto genera un proyecto limpio SIN router
- npx create-expo-app PolizasOfflineApp --template blank 
- cd PolizasOfflineApp
  
  > Iniciar Expo 
- npx expo start --clear
  
  > Instalar SQLite 
- npx expo install expo-sqlite 
