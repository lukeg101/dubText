#!/bin/bash
n=$RANDOM
((n%= 21))
echo ${n}

./source/${n} > ./sound/sound.txt
lame -r -s 8 --bitwidth 8 ./sound/sound.txt ./sound/sound.mp3