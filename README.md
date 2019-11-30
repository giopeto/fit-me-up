# Fit me up
> Women’s fitness website

## How to deploy

Create gcloud app

`gcloud app create`

Deploy to Google Cloud

`mvn appengine:deploy`

Open in browser

`gcloud app browse`

Update project

`mvn appengine:deploy`

## Link to test project

[https://fmuf-212613.appspot.com/](https://fmuf-212613.appspot.com/)


## gcloud useful commands

Get default project

`gcloud config get-value project`

Get all projects under your account

`gcloud projects list`

Change default project

`gcloud config set project <PROJECT_ID>`