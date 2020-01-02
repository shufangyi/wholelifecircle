FROM node:8.16.1-slim as build

COPY ./ /app

WORKDIR /app
RUN npm install
RUN npm run build
RUN rm -rf .git


FROM node:8.16.1-slim

COPY --from=build /app /

EXPOSE 3000
WORKDIR /app

CMD ["npm"， "start"]
