#!/bin/sh
browser-sync start --host 0.0.0.0 --port 3080 --ui-port 3081 --no-ghost-mode --no-open --logLevel "debug" --proxy "test.iyishengyuan.com:81" --files "**/*.js, **/*.html, **/*.css"
 
