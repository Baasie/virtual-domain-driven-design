# Virtual Domain-Driven Design

An online Domain-Driven Design meetup and conference for the community by the community. Help us develop this worldwide community further!
We are continuously updating the website and functionality, if you have any ideas or bugs you want to share please feel free to add a ticket!

## Contribute

There are two ways to contribute:

- directly through github, creating a fork and create a PR.
- If you don't want all the Forking and PR hassle, all you need is a github account and go to the Netlify CMS on [the website](https://virtualddd.com/admin/).

The CMS now supports the following contribution:

- Communities
- Books
- Videos
- DDD Europe Videos
- KanDDDinsky Videos
- ExploreDDD Videos

More will be added later!

## Github Contribution

### Communities

The communities on the site are sources from `src/content/communities.yaml`
Fill in your own based on the following template:

```
- name: "Name of your community"
  country: "COuntry of the community"
  city: "(optional) the city the community is in"
  url: "The url to the website of the community"
  img: "An external image for your community"
```

### Books

The books on the site are sources from `src/content/books.yaml`
You must put the image of the book in `src/images/book/` and point to it in the entry img.
Fill in your own based on the following template:

```
- title: "The title of the book"
  author: "The Author of the book"
  img: "location "../images/books/" + image name
  level: "Select one: all, beginner, intermediate or advanced"
  tags: "list of tags free to fill in, examples:"
    - essential
    - collaborative-modelling
```

### Videos

The videos on the site are sources from `src/content/videos.yaml` except for DDD Europe `src/content/dddeu.yaml`, KanDDDinsky `src/content/kandddinsky.yaml` and ExploreDDD `src/content/exploreddd.yaml`.
Fill in your own based on the following template:

```
- title: "The title of the book"
  video: "Embedded link to the video, Example for youtube: https://youtube.com/embed/{id}"
  level: "Select one: all, beginner, intermediate or advanced"
  tags: "list of tags free to fill in, examples:"
    - essential
    - collaborative-modelling
```

### Note for no upcoming session:

Remove the old upcoming session and replace the content of the file with
```yaml
- id: "none"
  img: ../images/kandddinsky.jpg
```

or some existing image. Important is that the id is not a number but also not empty

## Help develop the website

We love community contribution so we built the site Virtual Domain-Driven Design with Gatsby to make it flexible and hopefully easy enough so that people can contribute on building the website.
There are a lot of Gatsby plugins already used, but don't shy away from adding any of your own.

Also included is frontawesome:

- fortawesome/fontawesome-svg-core
- fortawesome/free-brands-svg-icons
- fortawesome/free-solid-svg-icons
- fortawesome/react-fontawesome

Requirements to build:

- Node
- NPM or Yarn

### Start developing

Fork and check-out the master branch.
Install the Gatsby CLI:

```sh
npm i --global gatsby-cli
```

Then do a Yarn install and Gatbsy develop to get you started

```sh
yarn
gatsby develop
```
or

```sh
npm install
gatsby develop
# or
npm run develop
```

You should be able to go to [localhost:8000](https://localhost:8000) to see the site or to [http://localhost:8000/_graphql](http://localhost:8000/_graphql) to explore the graphQl scheme

Before you commit your changes build the project

```sh
gatsby build
# or
npm run build
```
You will see graphql errors with a hint where they occur if any content is incorrect.
