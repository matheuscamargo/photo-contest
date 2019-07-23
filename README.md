# Photo Contest

## Introduction

This project is comprised by an Angular static page which uses Google Forms as a backend to store votes for a photo contest. The Angular app helps the voter by presenting a face-off between 2 pictures multiple times until an order can be defined for all pictures. Two algorithms can be chosen by each voter:

- **Merge sort:** takes nlogn or less votes
- **Elimination:** takes n-1 votes, but not all pictures are distinguished

The intention of this project is to provide very low friction for creating another photo contest, as it is only a single page application hosted as a static page, which uses Google Forms as the backend.

## Running locally

This project was generated with the [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2. You can use these out-of-the-box commands and others, after running `npm install`:

- `ng serve` to run a dev server at `http://localhost:4200/`
- `ng test` to run unit tests via [Karma](https://karma-runner.github.io)

## Forking and creating your own contest

Follow the steps below:

1. Fork the GitHub project.
2. Add your pictures to the `src/assets/` folder, using ordered numbers, such as `0.jpg`, `1.jpg`, `2.jpg` and so on.
3. Change 2 parameters in `src/environments/environment.ts`:
   1. `numberOfPhotos`: self explanatory
   2. `formsUrl`: steps for generating a Google Forms link will be explained below.
4. That's it. Build and deploy your app to some static pages host. You can use [GitHub Pages](https://pages.github.com/), more instructions below.

### Google Forms URL

There are 2 requirements for the Forms URL and they're based on the parameters for each input:

1. Values should be all `0`
2. Number of entries (URL params) should be the same as the number of photos.

#### Sample URL

Let's see a sample URL:

```
https://docs.google.com/forms/d/e/SOME_ID/viewform?usp=pp_url&entry.468832349=0&entry.18502918=1&entry.1240903544=2
```

Each URL parameter has en entry number and a value after `=`, which is 0, 1 and 2, respectively, in this example.

#### Creating a Google Forms

Create a Google Forms and include one question for each photo, since it will take the score for that specific photo. In the top-right hamburger menu, choose "Get pre-filled link", fill all answers with zeroes and you should have a link like the one in the repo (in this case for 12 photos):

```
https://docs.google.com/forms/d/e/SOME_ID/viewform?usp=pp_url&entry.468832349=0&entry.18502918=0&entry.1240903544=0&entry.2024966849=0&entry.1128203190=0&entry.1650137116=0&entry.407929624=0&entry.805346303=0&entry.307472477=0&entry.1709423003=0&entry.1115811744=0&entry.218112430=0
```

#### Seeing the voting results

Don't forget you can see the results as a spreadsheet in Google Sheets and you can also enforce Google login to avoid duplicate votes.

### Deploying to GitHub pages

Install [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages) globally:

```
$ npm install -g angular-cli-ghpages
```

Build the project:

```
$ ng build --base-href "https://USERNAME.github.io/REPOSITORY_NAME/"
```

The output should be in the `dist` folder, publish using:

```
$ ngh --dir=dist/[PROJECT_NAME]
```

That's it! Your project should be available on "https://USERNAME.github.io/REPOSITORY_NAME/" and the Google Forms link should be working.
