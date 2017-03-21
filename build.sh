#!/bin/sh
echo '#####################################################'
echo '# require.js build'
echo '# usage:  ./build.sh [_c] [_a] [debug]'
echo '# eg: ./build.sh index index true'
echo
 
file="$1/build_$2_profile.js"
if [ -f $file ]; then
  if [ -n $3 ]; then
    node r.js -o $file optimize=none  
    echo Done!
  else
    node r.js -o $file
    echo Done!
  fi
else
  echo "Error: Can't find $file "
fi


