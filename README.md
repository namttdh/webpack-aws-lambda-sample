# Webpack for aws lambda sample
Using webpack to bundle multiple file to one, to easy upload and manage with lambda, without upload whole node_module, or many files.
This project build for support typescript.

Prop:
- Only 1 file (bundle.js)
- Ez to manage source code and testing

Cons:
- Not working with several package with native modules like: Sharp with libvip, bcrypt,... But have some simalar package without any native modules like Jimp, BcryptJs
- Need knowlage to custom or optimize bundle size.
- Performance issue (Trade off)

## Project folder
- build: Script build for webpack include both environments
- dist: contains `bundle.js` and `bundle.dev.js`
- other: include prettier config, tsconfig, eslint,....

## Script
### Start and debug for development enviroment
This command support build to dev bundle and watch change to rerun application
```
npm run start:dev
```
### Build bundle file for production
combined multiple file to single file (bundle.js) include file in `node_modules` to make everything work with aws lambda
```
npm run build:prod
```
### Build bundle file for development environment
combined multiple file to single file (bundle.dev.js) not include file in `node_modules` this thing not work with lambda except some application simple not using any package. Just only Nodejs.
```
npm run build:prod
```


### Happy codding!!!
