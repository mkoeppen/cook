#!/bin/sh

if [ "$IP_WHITELIST_ENABLED" = 1 ] ;\
then sed -i "s~###IP_WHITELIST###~###IP_WHITELIST###\n deny all;\n access_log off; \n log_not_found off;~g" /opt/docker/etc/nginx/$STAGE.conf && \
    echo 'ip whitelisting enabled' && \
    ips=$(echo $IP_WHITELIST | tr " " "\n") && \
    for ip in $ips
    do
        sed -i "s~###IP_WHITELIST###~###IP_WHITELIST###\n allow '${ip}'; ~g" /opt/docker/etc/nginx/$STAGE.conf
    done ;\
fi