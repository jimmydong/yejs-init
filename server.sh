#!/bin/sh
browser-sync start --host 0.0.0.0 --port 3080 --no-open --logLevel "debug" --server --directory --files "**/*.js, **/*.html, **/*.css"
 
