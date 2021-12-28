# Olivio del Toro website

Skeleton for a crypto project website

## Dependencies

- npm

## Start

First time, run `npm install`.

To star developing, run `npm run dev`, the website will be available in http://localhost:3000.

## Code formatting

Install the `prettier` extension in your IDE, or run `npm run format` before pushing your changes to the repo.

## Production build

We use static website generation with NextJS to produce a static version of the website that we upload to a service provider such as AWS. This deployment is managed as infrastructure as code in the infrastructure submodule.

To test this locally, follow these two steps:

1. Run `npm run build` to produce a production-optimised version of the website.
1. Run `docker-compose up` in the root folder of the project to start nginx pointing to the output dir, serving all files statically when accessing http://localhost:8080.
