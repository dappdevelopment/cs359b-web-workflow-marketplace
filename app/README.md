# workflow

> web workflow token

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Starting the Server:

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

```
npm install
```

3. Start your app

```
npm start
```

## Starting the Client:

Make sure you've installed [leiningen](https://leiningen.org/)

```
cd client
lein repl
```

and when the prompt comes up, run

```
(fig-start)
```

This will begin auto-compiling the code in dev mode. Any changes to the files
under `client/src` will automatically be reflected in the app.


## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Help

Server side docs on feathers JS: [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

