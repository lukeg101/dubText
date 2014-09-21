#!/bin/bash
n=$RANDOM
n=$n%21+1
./source/$n > ./sound/sound.txt
lame -r -s 8 --bitwidth 8 ./sound/sound.txt ./sound/sound.mp3