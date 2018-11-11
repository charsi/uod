FROM node:9.11.1-alpine

# Should be using a non root user but currently causing problems
# RUN groupadd -r nodejs \
#     && useradd -m -r -g nodejs nodejs

# Create app directory

WORKDIR /src

# Install app dependencies
COPY package.json .
RUN npm install

COPY . .
#RUN npm install -g gulp --save
#RUN npm install -g bower --save

# Using root user to avoid permissions issues in th mounted volume
# USER nodejs

# Bundle app source
# COPY . /usr/src/app

# EXPOSE 8000
