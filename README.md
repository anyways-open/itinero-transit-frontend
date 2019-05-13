# itinero-transit-frontend
Small demo website which uses the itinero-transit-API

Build with jekyll:

sudo docker run -i --rm --volume /var/services/transit-api-frontend/git/trains-frontend/:/srv/jekyll/ --name transit-api-frontend jekyll/jekyll:3.8 jekyll build --watch

Build with the local directory:

     sudo docker run -i --rm --volume `pwd`:/srv/jekyll/ --name transit-api-frontend jekyll/jekyll:3.8 jekyll build --watch


