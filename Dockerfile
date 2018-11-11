FROM node:9.11.1-alpine

# Should be using a non root user but currently causing problems
# RUN groupadd -r nodejs \
#     && useradd -m -r -g nodejs nodejs

# Create app directory

WORKDIR /src

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

# Using root user to avoid permissions issues in th mounted volume
# USER nodejs

# COPY . /usr/src/app

# runs *after* the container is created (not during build)
# CMD [ "npm", "start" ]
CMD ["npm", "run", "gulp", "start-live"]

# EXPOSE 8000


