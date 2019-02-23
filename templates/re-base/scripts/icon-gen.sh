#!/usr/bin/env sh

TMP_DIR=/tmp

icon-gen -i resources/icon.svg -o $TMP_DIR      || exit $?
cp $TMP_DIR/favicon-228.png $OUTPUT_DIR/app.png || exit $?
mv $TMP_DIR/favicon* public                     || exit $?
