<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">Un framework progresivo <a href="http://nodejs.org" target="_blank">Node.js</a> para construir aplicaciones del lado del servidor eficientes y escalables.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versión NPM" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licencia del Paquete" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Descargas NPM" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Cobertura" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Patrocinadores en Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors en Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donar"/></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Síguenos en Twitter"></a>
</p>

## Descripción

Repositorio de inicio para proyectos en TypeScript utilizando el framework [Nest](https://github.com/nestjs/nest).

## Configuración del proyecto

```bash
$ pnpm install
```

## Compilar y ejecutar el proyecto

```bash
# desarrollo
$ pnpm run start

# modo watch
$ pnpm run start:dev

# modo producción
$ pnpm run start:prod
```

## Ejecutar pruebas

```bash
# pruebas unitarias
$ pnpm run test

# pruebas e2e
$ pnpm run test:e2e

# cobertura de pruebas
$ pnpm run test:cov
```

## Despliegue

Cuando estés listo para desplegar tu aplicación NestJS a producción, hay algunos pasos clave que puedes seguir para asegurarte de que funcione de la manera más eficiente posible. Consulta la [documentación de despliegue](https://docs.nestjs.com/deployment) para más información.

Si estás buscando una plataforma basada en la nube para desplegar tu aplicación NestJS, revisa [Mau](https://mau.nestjs.com), nuestra plataforma oficial para desplegar aplicaciones NestJS en AWS. Mau hace que el despliegue sea sencillo y rápido, requiriendo solo unos pocos pasos simples:

```bash
$ pnpm install -g mau
$ mau deploy
```

Con Mau, puedes desplegar tu aplicación en solo unos clics, permitiéndote enfocarte en construir características en lugar de gestionar la infraestructura.
