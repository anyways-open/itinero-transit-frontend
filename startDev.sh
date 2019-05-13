#! /bin/bash

# Start all tools to develop the website.
# Works on my machine (TM)


sudo docker run -i --rm --volume `pwd`:/srv/jekyll/ --name transit-api-frontend jekyll/jekyll:3.8 jekyll build --watch &
cd _site
webfsd -p 8081
firefox http://127.0.0.1:8081/index.html?debug=true
