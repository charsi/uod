FROM node:boron

RUN echo 'Docker doing its thing...'

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g gulp --save
RUN npm install -g bower --save

RUN groupadd -r nodejs \
    && useradd -m -r -g nodejs nodejs

USER nodejs

# Bundle app source
# COPY . /usr/src/app

EXPOSE 3000

CMD [ "gulp", "start" ]

