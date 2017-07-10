#HyperFlow: a distributed workflow execution engine

##Description

HyperFlow provides a model of computation, workflow description language and enactment engine for complex, distributed workflows.

Browse the [wiki pages](https://github.com/balis/hyperflow/wiki) to learn more about the HyperFlow workflow model. 

##Getting started

The latest release of HyperFlow is 1.1.0

###Installation
* Install Node.js (http://nodejs.org)
* Install Redis (http://redis.io) 
* Install HyperFlow:<br>`npm install https://github.com/dice-cyfronet/hyperflow/archive/1.1.0.tar.gz`

###Running
* Start the redis server: `redis-server`
* Go to hyperflow directory: `cd node_modules/hyperflow`
* Run example workflows using command `hflow run <wf_directory>`, for example:<br>```./bin/hflow run ./examples/Sqrsum```
* Optionally, you can add directory `<hyperflow_root_dir>/bin` to your system `PATH`

### Running Linpack benchmark
* Generate workflows using script `examples/ParallelSleep/generate_workflows.sh` which loops over range of function types and workflow sizes generating workflow definition which is placed in `examples/ParallelSleep/config` 
* Generated workflows have specified `lambdaCommand` function placed in `functions/lambdaCommand.js` which responsibility is to provide connection to AWS Lambda instance (defined in generated config files) through AWS cli
* Benchmarks for a range of functions and workflow sizes can be run using `run_benchmarks.sh` script