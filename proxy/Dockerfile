FROM anroe/nginx-geoip2:1.19.2-geoip2-3.3

RUN apt-get update -y && \
    apt-get install git wget -y

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 8081

COPY ./conf.d /etc/nginx/conf.d
COPY dbip-country-lite-2022-01.mmdb /etc/nginx
COPY nginx.conf /etc/nginx
