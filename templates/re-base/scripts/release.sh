#!/usr/bin/env sh

npm run android:release  || exit $?
npm run electron:release || exit $?
npm run ios:release      || exit $?
npm run web:release      || exit $?
npm run windows:release  || exit $?
