# itinero-transit-frontend
Small demo website which uses the itinero-transit-API

Build with jekyll:

docker run -d --volume /var/services/transit-api-frontend/git/trains-frontend/:/srv/jekyll/ --name transit-api-frontend jekyll/jekyll:3.8 jekyll build --watch