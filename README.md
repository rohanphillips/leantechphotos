# Lean Techology Photo's Techical Project

The objective of this project was to take an album of photos whose data was supplied via a JSON request to https://jsonplaceholder.typicode.com/photos

For my project, I decided to download the whole image set and work with the albums after the data was stored in a Redux Store.  The https://jsonplaceholder.typicode.com/photos?albumId=3 hint provided in the document was not utilized, but provision for making that useable was made.

# Technology Used
* Redux
* React

As part of the Redux build out, createSlice was also used to facilitate a better experience.  I'd previously written a [blog post](https://rohanphillipscoding.com/redux-toolkit-createslice/) about this for another project that I had worked on.

# Installation Requirements
nodeJS - v14.13.1

# Installation
```
cd lean-photos
npm install
```

# App Review
```
npm start
```

# Overview
For this project, I focused most on everything behind the UI.  

# Project Layout
In the `/src` folder, I like to lay my projects out by separating each component into it's own folder.

In this instance, I did leave the main `App` component in the base `src` directory.

## Redux Store
When building a project like this in React, I like to use Redux as a way to store and use data globally.  The implementation is simple yet powerful.  Protection and encryption of data was not implemented

### What's stored and implemented?
* An action was created, `getPhotos`.  This action makes an http GET request to retrieve the JSON photo data.  Upon successful retrieval of data, a `dispatch` request is made to send that data to the Redux Store

   The basic framework in is place to handle errors from this request.  No functionality was connected to display to the user at the time of this writing.

   When data was sent to the store, a function was also run by the action to generate and store data that grouped the images by album.

## React Router/Switch
This application is considered a single page application.  Functionality using `Router` and `Switch` was implemented to provision for two pages.

A Welcome screen and Console for displaying the photos have been provided

## Photo Dashboard `/photos`
The photo dashboard in a simple console that provides the following functionality

* A banner to indicate if data is currently loading or has been loaded
* A Statistics Panel that lists the total number of `Albums` available and also the total number of `Photos`
* A selection row consisiting of 4 different options for displaying photos

   `Images to Display`, `Select Album` and `Search for` all interact with the results being displayed.
   
   * Columns: Use this control to define how many columns will be used for laying out the photo thumbnails
   * Images to Display: Use this control to display/filter the number of images you'd like to display.  To save with load time, current default is 5.
   * Select Albumn: Use this control to display the specific album to be viewed.  Selecting `Not Filtered` will allow results from all albums to be displayed
   * Search for: Use this field to search `albumId`, `id` and `title` for any combination of numbers and letters.  `Currently showing` will automatically be adjusted as the search is conducted.

All photo's were provided with a thumbnail URL and a regular URL.  To demonstrate the ability of being able to use data sent to the `Photo` component, a photo can be clicked on and it will toggle between the two URL's provided

## Pagination Component
Included in the project is a `Pagination` element that I designed from scratch.  At its core, the pagination comprises of a placeholder on each end that represents the first and last pages.

Functionality was then added to handle what happens in between.  The center item, which will start off as the center of the pages recordset has the option to include `neighbor` placeholders.  This gives the user more flexibility to find pages.  Navigation buttons exist and change behavior depending on the status of the `center and neighbors` element.

The current page selected will be highlighted when it is visible in the `center/neighbors` area.

Further functionality will be added to this in the future.

## React Hooks
`useState` and `useEffect` were both used in this project to help with management of state inside multiple components

## Testing
In the lead up to this techincal, I'd spend more time doing `Rspec` testing in a Ruby on Rails environment.

I did add some unit testing to the Redux Store that tested the photos reducers
```
npm test
```

## CSS
I did spend a little time illustrating the connection of classes with different formatting to demonstrate an ability to integrate and work with CSS

# Review

I enjoyed putting this project together for your review.  I look forward to speaking with you soon!

# Connect
<div>
  <div style="height: 30px">
    📫 How to reach me, rohan@rohanphillipscoding.com
  </div>
  <div>
    <a href="https://www.linkedin.com/in/coderbluey/">
      LinkedIn: coderbluey
     </a>
  </div>
  <div>
   <a href="https://twitter.com/coderbluey">
      Twitter: @CoderBluey</a>      
  </div>
  <div>
   <a href="https://rohanphillipscoding.com">
      Blog: Rohan Phillips Coding</a>      
  </div>
</div>


