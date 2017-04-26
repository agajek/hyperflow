#!/bin/bash

for lambda in `seq 768 64 1546`
do
  for size in `seq 10 10 100`
  do
    echo "Start workflow $size for $lambda"
    bin/hflow run examples/ParallelSleep/config/$lambda-$size.json > results/$lambda-$size
  done
done
