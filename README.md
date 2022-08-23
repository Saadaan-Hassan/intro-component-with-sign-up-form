# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

- Desktop Preview
![Desktop Preview](./screen-shots/Desktop-Invalid-Preview.png)

- Desktop Preview Invalid
![Desktop Invalid Preview](./screen-shots/Desktop-Invalid-Preview.png)

- Mobile Preview

![Mobile Preview](./screen-shots/Mobile-Preview.png)

- Mobile Preview Invalid

![Mobile Invalid Preview](./screen-shots/Mobile-Invalid-Preview.png)

### Links

- Solution URL: [Front-End Mentor](https://your-solution-url.com)
- Live Site URL: [Github](https://saadaan-hassan.github.io/intro-component-with-sign-up-form/?fname=ads&lname=asdf&email=saadaanhs%40gmail.com&password=asd#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Making this project was fun. I enjoyed and learned a lot from this project. I understand how to show error messages if the field is empty or invalid data is entered. 

This is a code snippet which checks, if the fields are empty or not. If they are empty, it will show the error message.

```js
function validateInput(input) {
  if (!input.value) {
    input.classList.add("error-icon");
    input.nextElementSibling.classList.add("display");

    return false;
  } else {
    input.classList.remove("error-icon");
    input.nextElementSibling.classList.remove("display");

    return true;
  }
}
```

### Continued development
Javascript is pretty much fun. I am still learning javascript. Almost at every new project, I learn a new concept of javascript. This was my second project of JS on Front-End Mentor. I hope of getting better in javascript in the future.

## Author

- Frontend Mentor - [@Saadaan Hassan](https://www.frontendmentor.io/profile/Saadaan-Hassan)