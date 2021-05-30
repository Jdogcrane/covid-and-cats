<h1 style="text-align: center;">🦠Covid & Cats🐈</h1>

[[Deployed-Site]](https://jdogcrane.github.io/covid-and-cats/)

[[Site-Preview]](#Site-Preview)

[[Andrew's Github - JavaScript Specialist]](https://github.com/morrisbianco)

[[Joshua's Github - HTML-CSS-Framework Specialist]](https://github.com/Jdogcrane)

## General overview: 
---
<p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"> 
In this project, Andrew and I worked on building a website using a new framework and two new API's. Our goal was to present a user with a site that not only had meaningful data and heartbreaking news, but also comforting sights. We achieved this by supplying covid data from any state in the USA, while also supplying gifs of cats at the click of a button. For this project I mostly focused on using the new framework and building the HTML & CSS. Andrew worked on the script side and collecting api data.
<p>

---
## Table of Contents:

HTML Features/Additions
- [Head](#Head)
- [Nav/Header](#Nav/Header)
- [Body](#Body)
- [Footer](#Footer)

CSS Changes
- [CSSNav/Header](#CSSNav/Header)
- [CSSBody](#CSSBody)
- [CSSFooter](#CSSFooter)

JavaScript Features/Additions
- [JSNav/Header](#JSNav/Header)
- [JSBody](#JSBody)
---
<h3 style="text-align:center;">HTML-Features/Additions</h3>

---
### Head:
* Added Google icon font link
* Added materialize.css framework links
* Added link to style sheet
* Added title
### Nav/Header:
* Added Nav bar
* Added responsive side nav button framework
* Added responsive side nav bar using framework
* Added Home, Search, Stats & Relax to Nav
### Body:
* Added slider using framework
* Added slider images
* Added text over slider
* Added input field
* Added search button
* Added data cards
* Added relax section
* Added cat button for gifs
* Added cat gallery
* Added placeholder img until cats are fetched
### Footer:
* Added footer section
* Added signature
* Added github link
---
<h3 style="text-align:center;">CSS-Changes</h3>

---
### CSSNav/Header:
* Added hover style to links
* Changed border radius of links
### CSSBody:
* Added smooth scroll behavior for site
* Added slower transition for site for smoother look
* Changed overwrite the framework styling
* Added styling to card hover
* Added styling to button hover
* Fixed autocomplete bug by forcing transition none
* Changed button styling
* Changed card styling
* Changed row settings
* Changed h3, h5 styling
* Changed btn class setting

>Notes: I had a great time learning this new framework and I'm looking forward to using more on future projects.
---
<h3 style="text-align:center;">JavaScript-Features/Additions</h3>

---
### JSNav/Header:
* Created the side nav bar button when screen size is reduced to mobile view

### JSBody:
* Added a slider effect to the hero image to transition between different images
* Added an init function that calls the render history function
* Added an event listener on the search button to run the button handler function
* Added the button handler function that reads the search inputs value and sends it to the covid state api and clears the search input.
* Added a search history array that takes the search input and logs it to local storage
* Added a render history function that displays the locally stored search history
* Added the get state function that runs the covid state api with the corresponding state from the search input, or does nothing if the input isn't a state
* Added a display state function that takes the state's covid data and updates the text content in the corresponding container
* Added a fetch that pulls the USA covid data from the api and runs the display USA function
* Added a display USA function that takes the USA covid data and updates the text content in the corresponding container
* Added a function that runs a fetch that pulls the cat gifs from the giphy api and runs the display cats function
* Added a display cats function that removes a display none style from the gif container and adds a display none style to the placeholder image, as well as updates image source for the corresponding gif containers
* Added an event listener to the cat button that will run the get cats function
* Added an autofill feature to help the user type out each state name
* Added a zoom feature to the gifs

>Notes: I had a lot of fun navigating these different api's and following the pathing to get the exact items that I wanted.

# Site Preview
![image_url](./assets/images/preview.gif "Site preview")