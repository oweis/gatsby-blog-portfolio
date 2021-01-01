---
templateKey: blog-post
title: "Heroku - Deploy a web application with backend for free ... including
  your backend "
date: 2021-01-01T02:34:21.569Z
description: For the sake of your portfolio or to share your with your team …
  Heroku will help you
featuredpost: true
featuredimage: /img/download.jfif
tags:
  - Deploy
  - Heroku
  - TODO
  - Spring
  - thymeleaf
  - deployement
---
<!--StartFragment-->

![Heroku banner](https://cdn-images-1.medium.com/max/2560/1*FSkUtK8pYPBSNeaVotU4Ug.png "Heroku: our deployment savior")

\
Deploying your first application can be a mystery, but what if we can do this so easily that we move from **DEV** to **PROD**  quickly.

Let get straight to the point, step by step:

The first thing to do is to create your Heroku account: <https://www.heroku.com/>

Open your dashboard, click ‘New’, and choose ‘create new app’:

![](https://cdn-images-1.medium.com/max/800/1*vxswjDuunTmVnMqVE7YNPw.png)

Choose an available app name and the convenient region, in my case Europe:

![](https://cdn-images-1.medium.com/max/800/1*5DnpzlcWh6XcjPgjJ9QOqw.png)

You will have multiple deployment methods, let use Github, I created a simple TODO app, using Spring and Thymeleaf (you can use whatever technology you want).

Choose Github, search for your repository, and click “Connect”

![](https://cdn-images-1.medium.com/max/800/1*33co9Yd3Rvq9PWrDw_gVNg.png)

Click Deploy Branch,

![](https://cdn-images-1.medium.com/max/800/1*dKJXqXbO3ODpbg7PCApbNQ.png)

If there is no issue, go to \[APP_NAME].herokuapp.com, and you will find your application UP and RUNNING.

Check the TODO app we deployed in this application here: <https://heroku-oweis-app.herokuapp.com/>

<!--EndFragment-->