# Fit me up
===========================

How to run locally
-----
- cd to project

mvn clean install

How to deploy
-----

gcloud app create

- Deploy to Google App Engine app

mvn appengine:deploy

- Open in browser

gcloud app browse

- Update project

mvn appengine:deploy

Link to project
-----
[https://fmuf-212613.appspot.com/](https://fmuf-212613.appspot.com/)


gcloud useful commands
-----

- Get default project

gcloud config get-value project

- Get all projects under your account

gcloud projects list

- Change default project

gcloud config set project <PROJECT_ID>