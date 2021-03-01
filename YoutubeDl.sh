#!/bin/sh

cd $(readlink -f $0)
node app.js $*
