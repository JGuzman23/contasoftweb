# Usa una imagen base de Node.js
FROM node:latest AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación Angular
RUN npm run build

# ---------------

# Inicia un nuevo contenedor basado en Nginx
FROM nginx:alpine

# Copia los archivos construidos de la fase anterior a la carpeta de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia la configuración personalizada de Nginx (si es necesario)
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80
EXPOSE 8080

# Comando para iniciar Nginx cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]
