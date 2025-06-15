FROM alpine:3.22.0
RUN apk update
RUN apk add nginx python3 bash

RUN mkdir /opt/http-cache
RUN mkdir /opt/http-cache/persistent-cache
RUN mkdir /opt/http-cache/ram-cache

COPY ./init.sh /opt/http-cache/
COPY ./download.py /opt/http-cache/
COPY ./nginx.conf /etc/nginx/

CMD ["/opt/http-cache/init.sh"]
