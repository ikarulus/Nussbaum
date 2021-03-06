# BountyDesk

[![Build Status](https://travis-ci.org/ikarulus/BountyDesk.svg?branch=master)](https://travis-ci.org/ikarulus/BountyDesk)

**This is currently not meant to be used in production.**

BountyDesk aims to be a simplistic solution for (IT-) Helpdesk systems where Jira, Redmine and others seem too big. With this I aim for the IT-departments of e.g. schools.

Instead of admin/user privilege management, access/edit privileges are reputation based. It does *only* support ticket management and nearly nothing else.
With the first stable release it may provide these features:

* Public ticket endpoint
* RESTful API and Backend
* Email notification
* Public/Private comments on support tickets
* Seamless wiki integrations (as it provides no wiki)

## Demo
[bountydesk.herokuapp.com](https://bountydesk.herokuapp.com)

Use admin/admin for an account with 100000 reputation.

## Installation (using npm):
1. `git clone https://github.com/ikarulus/BountyDesk.git`
2. `cd` in your "BountyDesk" directory
3. `npm install`
4. Install [MongoDB](https://docs.mongodb.com/manual/installation/) and [Redis](https://redis.io/topics/quickstart)
5. Wire up MongoDB and Redis database connection in the configuration file
6. (Optional, for arch users) Start databases with `./start_dbs.sh`. Must be executable. For other distros you have to find your own way.
7. Launch via `node app.js` or `npm start`

## Docker
Find the prebuilt Docker image on Dockerhub: [https://hub.docker.com/r/ikarulus/dountydesk/](https://hub.docker.com/r/ikarulus/bountydesk/)
### docker-compose
This project provides a docker-compose-yml.
Use `docker-compose up` to pull and start the stack.

## Security
**I wouldn't deploy this in a large scale. As I'm not an experienced JS developer I can't guarantee for anything including slain kitten.**
I try to integrate several security best practises. See TODO. Please consider using SLL/TLS - e.g. via nginx reverse proxy and letsencrypt's free certificates.

## TODO
### first release
:key:: Security
- [x] ticket endpoint
    - [x] integrate rate limiting for Public ticket endpoint :key:
- [ ] tickets
    - [x] assignment
    - [x] reward distribution
    - [x] blocked
    - [ ] improve API
        - [ ] dont send archived by default
- [x] node multithreading
- [ ] security checklist :key:
    - [x] xss
    - [x] packages
    - [ ] intercept errors
- [x] rename application
- [x] validate forms
- [x] error/success messages
- [ ] disable forms by reputation
- [ ] search
- [ ] status comments
- [x] email

### later releases
- [ ] wiki integration
- [x] Docker
    - [x] Container
    - [x] Compose
- [ ] blocked diagram
- [ ] backend tests :key:
- [ ] status comments
    - [ ] public/internal
- [ ] statistics endpoint
    - [ ] grafana integration

## Screenshots
![Screenshot](https://user-images.githubusercontent.com/20602537/38381227-6dae4584-3906-11e8-92e6-c8740a6319cd.png)