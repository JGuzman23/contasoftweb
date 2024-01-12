# Etapa 1: Construir la aplicación Angular
FROM node:18.17.1 as build
WORKDIR /app

# Copia los archivos de definición de paquetes y instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos de la aplicación y construye la aplicación
COPY . .
RUN npm run build:ssr

# Etapa 2: Ejecutar la aplicación Angular con SSR en un servidor Node.js
FROM node:18.17.1
WORKDIR /app

# Copia los archivos de construcción y los node_modules desde la etapa de construcción
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Exponer el puerto que tu servidor Node.js utiliza
EXPOSE 4000

# Comando para ejecutar el servidor Node.js con SSR
CMD ["node", "dist/contasoft/server/server.mjs"]
