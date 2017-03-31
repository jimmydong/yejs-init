#!/bin/sh
date=`date +%Y%m`

if [ $1 = 'debug' ] ; then
gulp
else
  echo 
  echo "run in deamon mode. rewrite log to log/$date.log"
  echo "if you want to run in debug mode, use: ./start.sh debug"
  echo 
  nohup gulp 2>&1 > log/$date.log &
fi
