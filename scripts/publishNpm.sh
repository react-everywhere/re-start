#!/usr/bin/env sh

(cd templates/re-base  && npm publish) && \
(cd templates/re-dux   && npm publish) && \
(cd templates/re-route && npm publish) && \
(cd templates/re-start && npm publish) || exit $?
