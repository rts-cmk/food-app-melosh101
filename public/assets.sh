#! /usr/bin/env bash
echo '[0;32m⚡️ Figma File Sources are downloading...[0m'
mkdir -p ./images/burgers;
cd images/burgers;

curl -O -L https://www.figma.com/file/RLKCcizqo0O08tacJlSy5m/image/4220fb92bf671034d097529e025ae8b0859dd1c8
curl -O -L https://www.figma.com/file/RLKCcizqo0O08tacJlSy5m/image/9ab8bdcbea7d52024fac428da92fb4b98c7fdbbb
curl -O -L https://www.figma.com/file/RLKCcizqo0O08tacJlSy5m/image/e2fc379b8bc1ce4e56845fb6c9ad32c843fa3aa7
curl -O -L https://www.figma.com/file/RLKCcizqo0O08tacJlSy5m/image/ecd240ce7c550720ab20af0840548a832e0f9a28
curl -O -L https://www.figma.com/file/RLKCcizqo0O08tacJlSy5m/image/0745c70d3068a0f5765d73c874827d409c9f37b6

for f in ./*; do
    type=$(file --mime-type -b "$f")
    type=${type%%;*}
    base=${f}
    final=
    case "$type" in
        image/gif)       final="$base".gif ;;
        image/png)       final="$base".png ;;
        image/jpeg)       final="$base".jpeg ;;
        image/jpg)       final="$base".jpg ;;
    esac
    if [ "$final" ]; then
      mv -f "$f" "$final"
    fi
done
echo ''
echo '[0;32m5 images downloaded[0m'
echo ''
echo '[0;32mFolder with sources:[0m'
pwd
echo ''
echo '[0;32mFiles:[0m'
ls
echo ''
echo '[0;32mDone![0m'