FROM node:18.17.1

## Copy source code
COPY . .

## Start the application
CMD ["node", "dist/contasoft/server/server.mjs"]