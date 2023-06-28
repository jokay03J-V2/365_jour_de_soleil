# vite template

## Use

click on "use this template"

## Install dependencies

```
npm i
```

## Start project

```
npm run dev
```

## Build project

```
npm run build
```

## Run builded project

> You must [build](#build-project) before run this command

```
npm run preview
```

## Validate project using w3c-validator

There docs are [here](https://jokay03j-v2.github.io/w3c-validator/)

### With file

```
npx @jokay03j-v2/w3c-validator check path/to/your/html/file
```

### With url

Before check with w3c-validator you need to [build](#build-project)

```
npm run preview
```

```
npx @jokay03j-v2/w3c-validator <your url> -t
```
