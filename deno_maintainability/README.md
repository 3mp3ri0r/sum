# Deno Maintanability

This apps build using deno with focus on maintainability

# How to run

## Docker

This is prefered as you don't need to install deno on your machine as long as you're a docker user

### Run the apps

```shell
docker run -it --rm -v $PWD:/app -w /app hayd/alpine-deno:1.1.1 run src/main.ts 10 20 30
```

### Run the tests

```shell
docker run -it --init -v $PWD:/app hayd/alpine-deno:1.1.1 test
```

## Installed deno

### Run the apps

```shell
deno run src/main.ts 10 20 30
```

### Run the tests

```shell
deno run test
```

# TODO

- [x] Stub dependency so main flow can be tested
