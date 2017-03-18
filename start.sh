#!/bin/sh
date=`date +%Y%m`
echo 
echo "rewrite log to gulp_$date.log"
echo 
nohup gulp 2>&1 > gulp_$date.log &
