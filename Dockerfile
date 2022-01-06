FROM oryd/kratos:v0.8.2-alpha.1

ENV USER=ory
ENV HOME=/home/ory
WORKDIR $HOME

COPY ./entrypoint.sh ./
COPY ./static ./

ENTRYPOINT ["./entrypoint.sh"]
