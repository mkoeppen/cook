#!/bin/sh

if [ "$BASIC_AUTH_ENABLED" = 1 ] ;\
then echo 'basic auth enabled' && \
    apk add --no-cache apache2-utils && \
    htpasswd -b -c /opt/docker/etc/nginx/.htpasswd $BASIC_AUTH_USER $BASIC_AUTH_PW && \
    DESCRIPTION=${BASIC_AUTH_DESCRIPTION:-Restricted} && \
    sed -i "s~###BASIC_AUTH_FILE###~auth_basic_user_file /opt/docker/etc/nginx/.htpasswd;~g" /opt/docker/etc/nginx/$STAGE.conf && \
    sed -i "s~###BASIC_AUTH###~auth_basic '${DESCRIPTION}';~g" /opt/docker/etc/nginx/$STAGE.conf ;\
fi