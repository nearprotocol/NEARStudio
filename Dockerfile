FROM phusion/baseimage:0.11

RUN curl -o /tmp/node_setup.sh "https://deb.nodesource.com/setup_11.x"
RUN bash /tmp/node_setup.sh
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo 'deb https://dl.yarnpkg.com/debian/ stable main' | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y \
    jq \
    nodejs \
    nginx \
    git \
    rsync


# studio
RUN mkdir /studio
COPY . /studio/
WORKDIR /studio
RUN yarn
RUN yarn build
RUN mkdir -p /var/www/html/studio
RUN rsync -ar \
    --exclude node_modules \
    --exclude .git \
    --exclude ops \
    ./ /var/www/html/studio

# nginx
RUN rm /etc/nginx/sites-enabled/default
COPY /scripts/studio.nginx /etc/nginx/sites-enabled/studio
COPY /scripts/init_nginx.sh /etc/my_init.d/