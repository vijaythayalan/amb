FROM node:10.16.3-alpine as nodebuild
RUN mkdir -p /media/sf_VBoxShare/amb
WORKDIR /media/sf_VBoxShare/amb
ENV PATH /media/sf_VBoxShare/amb/node_modules/.bin:$PATH
COPY package.json /media/sf_VBoxShare/amb/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /media/sf_VBoxShare/amb
RUN npm run build

FROM nginx:1.16.1-alpine
COPY --from=nodebuild /media/sf_VBoxShare/amb/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
