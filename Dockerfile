# Base image con Node.js
FROM node:22-alpine3.21 AS base

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias en una capa separada para optimizar la caché
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Eliminar dependencias de desarrollo
RUN npm prune --production

# Imagen final optimizada para producción
FROM node:22-alpine3.21 AS deploy

WORKDIR /app

# Copiar los archivos necesarios desde la etapa anterior
COPY --from=base /app/dist ./dist
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.env ./.env

# Exponer el puerto 3000
EXPOSE 3000

# Comando de inicio
CMD [ "node", "dist/main.js" ]
