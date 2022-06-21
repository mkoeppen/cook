FROM composer:2.0.8 as build

COPY ./composer.* /wordpress/
COPY ./wp-content /wordpress/wp-content
RUN cd /wordpress && \
    echo "========== COMPOSER INSTALL WORDPRESS ==========================" && \
    composer install

RUN rm -rf /wordpress/web/wp-content/plugins && \
    rm -rf /wordpress/web/wp-content/themes && \
    mv -f /wordpress/wp-content/* /wordpress/web/wp-content/

## FINAL IMAGE BUILD
FROM webdevops/php-nginx:7.4-alpine

## No xdebug integration by default
ARG XDEBUG

RUN \
    apk --update --no-cache add ca-certificates \
        tzdata dos2unix && \
	cp /usr/share/zoneinfo/Europe/Berlin /etc/localtime && echo "Europe/Brussels" >  /etc/timezone && \
    echo "date.timezone=Europe/Brussels" >> /usr/local/etc/php/conf.d/date.ini && \
	apk del tzdata

COPY --from=build /wordpress/web /app
COPY --from=build /wordpress/composer.lock /app/composer/composer.lock
COPY --from=build --chown=1000:1000 /wordpress/web/wp-content /app/wp-content
COPY ./wp-config.php /app/wp-config.php
COPY ./files/*.sh /usr/local/bin/
COPY ./files/nginx /opt/docker/etc/nginx
RUN dos2unix /usr/local/bin/*.sh
RUN chmod -R g+rw /app/wp-content


# XDEBUG
RUN \
if [ "$XDEBUG" = "1" ] ;\
then apk add --no-cache $PHPIZE_DEPS \
    && pecl install xdebug-2.9.8 \
    && docker-php-ext-enable xdebug ;\
fi
RUN \
if [ "$XDEBUG" = "1" ] ;\
then echo "xdebug.coverage_enable=0" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
    echo "xdebug.remote_enable=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
    echo "xdebug.remote_connect_back=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
    echo "xdebug.remote_log=/tmp/xdebug.log" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
    echo "xdebug.remote_autostart=true" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
    echo "xdebug.remote_port=9001" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && \
    echo "xdebug.idekey = PHPSTORM" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini ;\
fi


CMD /bin/sh /usr/local/bin/run.sh
