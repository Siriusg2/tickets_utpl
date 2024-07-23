# Usa una imagen base de Node.js
FROM oven/bun:latest


# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json .

# Instala las dependencias de la aplicación
RUN bun install

# Copia el resto de los archivos de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000
# Comando para ejecutar la aplicación

CMD [ "bun", "dev"]
