
# Rick and Morty App

A simple Angular application used for web graduate projects.

[![CircleCI](https://circleci.com/gh/nmngadi/rick-and-morty-app/tree/enhancement%2Fci-cd-integration.svg?style=svg)](https://circleci.com/gh/nmngadi/rick-and-morty-app/tree/enhancement%2Fci-cd-integration)

App URL: https://rmproject-76c19.firebaseapp.com
  
 
# API

The application fetches characters Rick & Morty characters from [The Rick And Morty API](https://rickandmortyapi.com/). The Rick and Morty API is open (i.e. no need for authentication & authorization setup) however, a daily limit of 10000 requests is imposed.

# CI/CD
Circle CI has been used for building the application, performing static code analysis with TSLint as well as deploying to firebase.

####  *Setting up Circle CI*

The blog post below will help you setup continuous integration with Circle CI
 [https://dev.to/obinnaogbonnajoseph/circle-ci-test-configuration-for-angular-projects-1o2p](https://dev.to/obinnaogbonnajoseph/circle-ci-test-configuration-for-angular-projects-1o2p)

#### *Firebase Deployment*

To deploy your application on the Firebase Hosting platform follow this tutorial
[https://circleci.com/blog/automatically-deploy-a-gatsby-site-to-firebase-hosting/](https://circleci.com/blog/automatically-deploy-a-gatsby-site-to-firebase-hosting/)