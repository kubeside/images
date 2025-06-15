FROM alpine:
RUN apk update
RUN apk add nginx python3
RUN mkdir /opt/http-cache
RUN mkdir /opt/http-cache/persistent-cache
RUN mkdir /opt/http-cache/ram-cache
COPY ./init.sh /opt/http-cache/
COPY ./download.py /opt/http-cache/
CMD ["/opt/http-cache/init.sh"]
