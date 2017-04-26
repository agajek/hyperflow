#!/bin/bash

for lambda in `seq 128 64 1546`
do
  for size in `seq 10 10 100`
  do
    node sleep_generator.js $size linpack_$lambda > config/$lambda-$size.json
  done
done
