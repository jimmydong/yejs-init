#!/bin/sh
if [ "$1" == "" ]; then
  echo "Error: Without ver"
  echo "Usage: ./update.sh [ver]"
  echo ""
  exit
fi

ver=`expr $1 - 1`
svn="svn://127.0.0.1/yejs/"
files=`svn diff -r $ver:HEAD --summarize --no-auth-cache --username root --password YS2015yisheng --config-dir /WORK/SVN/.subversion $svn`

for line in $files ; do
  file=${line//$svn//}
  if [ $file != $line ]; then
    echo "svn update $file" >> /tmp/commit.log
    svn update --no-auth-cache --username root --password YS2015yisheng --config-dir /WORK/SVN/.subversion ./$file
    chown www.www ./$file
  fi
done

