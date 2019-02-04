[![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

[](https://github.com/ironhack-labs/lab-intro-node#intro-to-nodejs)Intro to NodeJS
==================================================================================

[](https://github.com/ironhack-labs/lab-intro-node#introduction)Introduction
----------------------------------------------------------------------------

Today is our first day using NodeJS, so we will practice doing some basic operations. Ready to start?

[](https://github.com/ironhack-labs/lab-intro-node#requirements)Requirements
----------------------------------------------------------------------------

-   Fork this repo
-   Clone this repo

[](https://github.com/ironhack-labs/lab-intro-node#submission)Submission
------------------------------------------------------------------------

-   Upon completion, run the following commands:

    ```
    git add .
    git commit -m "done"
    git push origin master

    ```

-   Create Pull Request so your TAs can check up your work.

[](https://github.com/ironhack-labs/lab-intro-node#testing-introduction)Testing Introduction
--------------------------------------------------------------------------------------------

This exercise will be completed through a series of tests. You should be familiar with testing from previous lessons, but if you aren't, here is a kind Introduction to testing :)

### [](https://github.com/ironhack-labs/lab-intro-node#what-is-testing)What is testing?

Software testing is a process of executing an application to validate and verify that it meets the business and technical requirements and works as expected.

Testing is a process, not a single activity. So the process of designing tests early at the beginning of the development and the product's life-cycle can help to prevent deficiencies in the code or product design.

In this exercise, we have created all the tests you need to create the solution, and you have to execute them all and create the code to accomplish all the requirements.

Tests prove that your code actually works in every situation in which it's designed to work. Even when you are improving the design or creating new features, you can change your current code without breaking what already works.

### [](https://github.com/ironhack-labs/lab-intro-node#testing-with-mocha)Testing with Mocha

[![](https://camo.githubusercontent.com/919b81115d194d34418195dccc8813dcc1095274/68747470733a2f2f73332d65752d776573742d312e616d617a6f6e6177732e636f6d2f69682d6d6174657269616c732f75706c6f6164732f75706c6f61645f39396536666665636531303233633066653134313531323439336663366164322e706e67)](https://camo.githubusercontent.com/919b81115d194d34418195dccc8813dcc1095274/68747470733a2f2f73332d65752d776573742d312e616d617a6f6e6177732e636f6d2f69682d6d6174657269616c732f75706c6f6164732f75706c6f61645f39396536666665636531303233633066653134313531323439336663366164322e706e67)

[Mocha](https://mochajs.org/) is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

We have already included Mocha in the project you just forked, so let's see how to use it to implement our code.

### [](https://github.com/ironhack-labs/lab-intro-node#usage)Usage

To start using mocha, you have to install it as a global package in your system. Remember that we should always use the Node Package Manager (NPM) to manage all the packages in our projects.

We will do so by running:

```
$ npm install -g mocha

```

We can check that Mocha is correctly installed by running:

```
$ mocha --version
3.4.2

```

[](https://github.com/ironhack-labs/lab-intro-node#project-structure)Project Structure
--------------------------------------------------------------------------------------

Before start coding, we will explain the provided project structure:

```
starter-code/
├── test
│   └── test.js
└─ package.json
└─ index.js

```

We are going to be working with the `index.js` file. Here we will write the implementation of our `SortedList` class.

The `test` folder contains all the tests we will execute with Mocha.

### [](https://github.com/ironhack-labs/lab-intro-node#running-the-tests)Running the tests

Run the tests with Mocha is super easy, you just have to run `npm test`.

```
$ npm test

> lab-intro-node@1.0.0 test ~~/lab-intro-node/starter-code
> mocha

  SortedList
    Constructor
      ✓ should have the properties length and items
    #add(x)
      ✓ should add a single value to SortedList
      ✓ should add a third value to SortedList
    #get(pos)
      ✓ should return the nth element from the array
      ✓ should return an OutOfBounds exception if there is no element in that position
    #max()
      ✓ should return the highest value of the array
      ✓ should return an EmptySortedList exception if there is a empty list
    #min()
      ✓ should return the lowest value of the array
      ✓ should return an EmptySortedList exception if there is a empty list
    #sum()
      ✓ should return the sum of all the elements in the array
      ✓ should return 0 for an empty sorted list
    #avg()
      ✓ should return the average of the elements in the array

  12 passing (9ms)

```



[](https://github.com/ironhack-labs/lab-intro-node#sortedlist-class)SortedList Class
------------------------------------------------------------------------------------


The class will have the following methods:

### [](https://github.com/ironhack-labs/lab-intro-node#constructor)Constructor

`new SortedList` should create a new object from the `SortedList` class.

The object should have a `items` and `length` property.

-   `items` should be an array.
-   `length` should be the number of elements in the array.

### [](https://github.com/ironhack-labs/lab-intro-node#add)Add

The `add(x)` method will add `x` to the items array.

### [](https://github.com/ironhack-labs/lab-intro-node#get)Get

The method will get the `nth` value in the list.

You should also provide a length property that gives the length of the list.

### [](https://github.com/ironhack-labs/lab-intro-node#max)Max

The `max()` method should return the highest value of the array.

In the case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList". For this, you can use:

```js
return new Error("EmptySortedList")
```

### [](https://github.com/ironhack-labs/lab-intro-node#min)Min

The `min()` method should return the lowest value of the array.

In the case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList". For this, you can use:

```js
return new Error("EmptySortedList")
```

### [](https://github.com/ironhack-labs/lab-intro-node#sum)Sum

The `sum()` method should return the sum value of the array.

### [](https://github.com/ironhack-labs/lab-intro-node#average)Average

The `average()` method should return the average value of the array.

In the case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList".

Happy Coding! ❤️

By: DiuriVJ :octocat: