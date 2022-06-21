#!/bin/sh

echo 'Setting up environment'
# write env's to file
env | sed "s/\(.*\)=\(.*\)/env['\1']='\2'/" | sed "/.*=''.*/d" >> /opt/docker/etc/php/fpm/pool.d/env.conf
sed -ie 's/##SERVERNAME##/'$WP_SERVERNAME'/g' /opt/docker/etc/nginx/$STAGE.conf

. basic_auth.sh

. ip_whitelist.sh

ln -sf /opt/docker/etc/nginx/$STAGE.conf /opt/docker/etc/nginx/vhost.conf

supervisord