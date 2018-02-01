This is the code for the site [uberordrive.com](https://uberordrive.com)

The site compares cost of driving against the same journey with Uber. It can also estimate long term cost of commuting with uber vs cost of ownership and driving your own car.

The app is built as a single page app(no page reloads) however it is done without a front-end framework such as Angular or Ember. I am happy with the final outcome but the code is not exactly easy to maintain or extend. In hindsight I probably should have spent a couple of days learning a front-end framework before working on this project.

This was still a great learning exercise but not something I would recommend other people to fork unless you want to laugh at my mistakes.

The project uses the following --

* [Nodejs](https://nodejs.org/)
* [Express](https://www.docker.com/)
* [Docker](https://www.docker.com/)
* [Google-MDL](https://getmdl.io/)
* API's from Google Maps and Uber


Currently hosted on DigitalOcean with an nginx instance running in another docker container.

To run the program clone this repo and run the following commands - 


````
npm install

docker build . --name charsi/uod

docker network create dockernet

cp .env.sample .env

(add your api keys to .env)

./run.sh`
````

