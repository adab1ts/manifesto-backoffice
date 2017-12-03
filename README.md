# Manifesto Backoffice

[![license: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg?style=flat-square)](https://choosealicense.com/licenses/agpl-3.0/)

Manifesto's backoffice microservice.

## Requirements

 + NodeJS 6+

## Setup

This microservice has been generated using [lumber](https://www.forestadmin.com/lumber/)

```bash
npm install -g lumber-cli
lumber generate -c
```

## ENV

Following variables are needed to correctly boot the microserver
```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/manifesto
DATABASE_SCHEMA=public
#SSL_DATABASE=true
#ENCRYPT_DATABASE=true
FOREST_AUTH_SECRET=Random signing secret
FOREST_ENV_SECRET=Forest environment secret
```
You can provision them using an `.env` file

## Production server

```bash
npm start
```

## Contact

Email:    info[@]adabits[.]org  
Twitter:  [@adab1ts](https://twitter.com/adab1ts)  
Facebook: [Adab1ts](https://www.facebook.com/Adab1ts)  
LinkedIn: [adab1ts](https://www.linkedin.com/company/adab1ts)  


## Contributors

Designed, developed and maintained by

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
[<img alt="laklau" src="https://avatars.githubusercontent.com/u/6210292?v=3&s=117" width="117">]((https://github.com/adab1ts/www.pareudepararme.org/commits?author=laklau)) |[<img alt="zuzust" src="https://avatars.githubusercontent.com/u/351530?v=3&s=117" width="117">](https://github.com/adab1ts/www.pareudepararme.org/commits?author=zuzust) |
:---: |:---: |
[Klaudia Alvarez](https://github.com/laklau) |[Carles Muiños](https://github.com/zuzust)
<!-- ALL-CONTRIBUTORS-LIST:END -->


## License

The code of this app is &copy; 2017 [Adab1ts](http://www.adabits.org) under the terms of the [GNU AGPLv3 License](https://choosealicense.com/licenses/agpl-3.0/).
