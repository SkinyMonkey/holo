#!/bin/sh

i=0;
FILES=`ls *.gif`;
for f in $FILES
do
  echo "renaming to : $i.gif";
  mv $f $i".gif";
  i=$((i+1));
done
