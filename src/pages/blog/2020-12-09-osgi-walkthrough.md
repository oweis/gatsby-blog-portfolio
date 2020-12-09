---
templateKey: blog-post
title: "OSGI Walkthrough "
date: 2017-01-04T15:04:00.000Z
description: OSGi is a modularization technique (rather than a framework). It
  gives you the ability to separate your software in independent modules that
  can co-exist in different versions, with and without other modules
featuredpost: true
featuredimage: /img/osgi-image.png
tags:
  - AEM
  - Java
  - Backend
  - OSGI
---
## Open Services Gateway Initiative

OSGi bundles can be managed as they can be installed, started, and stopped individually and interdependencies between these modules are automatically handled. Each of the OSGi components is contained in one of the bundles.

OSGi is used to control the composite bundles of AEM and their configuration.

OSGi is a set of specifications that create a development model where applications are composed of different reusable components. This also means that the components can hide their implementations from other components and communicate through services. These services are objects that are shared between components.

To summarize, an OSGi application is a collection of bundles that interact using service interfaces. Bundles can be independently developed and deployed, and they're associated services may appear or disappear at any time.

## Advantages

* Adding an OSGi service platform to a network device enables you to manage that lifecycle of the software components in the device from anywhere in the network.
* OSGi simplifies the process of the development and maintenance of a large number of configurations.
* Multiple Java-based components can work efficiently within a single JVM. This technology provides an extensive security model so components can run in a shielded environment.
* A few other advantages of note would be remote component management, secure execution environment, cooperation between applications, as well as commercial off-the-shelf components just to name a few.

## Architecture

![OSGI structure](/img/osgi-image.png)



Bundles are the OSGi components made by developers. 
The service layer connects bundles in a dynamic way of offering a publish, find, bind model for plain old Java objects. 
The lifecycle which has an API to install, start, stop, update, and uninstall bundles. 
Modules are the layers that define how a bundle can import and export code. 
Wrapped along all of this is the security layer that handles the security aspects. 

![OSGI Bundles](/img/osgi-bundles-image.png)



When working with OSGi, the bundles are the real meat as these are the components made by developers. Bundles are built on Java's existing standard way of packaging together classes and resources. The JAR file--an OSGi bundle is just a JAR file with additional metadata added to the manifest file. The OSGi metadata is provided as header information in the metainf/manifest. mffile. Let's take a closer look at this additional meta information. The first piece of information is the bundle name. This consists of a symbolic name used by OSGi to determine the bundle's unique identity. You can also provide an optional, human readable, more descriptive name. Also in the meta information is the bundle version. Other meta information will include a list of services that are imported and exported by the particular bundle. The manifest header file also lists optional meta information like the minimum Java version the bundle requires, vendor of the bundle, a copyright statement, contact addresses, and other information of that nature. It is important to note the bundles are loosely coupled by design. As they include package imports and exports with the different versions. Dependencies are independent from the bundle organization, and OSGi provides error management for unresolved bundles. OSGi requires a module thinking process during application design, and all of this requires proper metadata and consistent version management. In the next clip, we'll talk about OSGi's dependency management resolution.



//TO BE CONTINUED