# Personal Portfolio Website

This repository is to show the creation process of my website portfolio project for semester 3 ICT & Media Design

## Project Idea

For this project I wanted to try and use React. I have heard about this framework from a lot of experienced developers and it has always sounded intimidating to me but it was about time to use it. 

I have already tried using React for one of my assignments, although, despite the effort I didn't manage to finish the website to my liking.
Since this is a portfolio I would use to apply for internships, I'd be changing some of my portfolio content after having some more finish and Front-End oriented projects ready.

I wanted this Portfolio to have some of my Graphic Design skills showcased having an Animated feature in the homepage which is currently the Parralax Card. I wanted the UX/UI on my portfolio ot showcase my knowledge on the matter and have a color palette representing some of my passions. 

## How to set up and run the project ?

The project is not hosted as of now (check the readme again in the future, because the project will be hosted online), so you have to install packages and run the project from terminal. 

Below you will see what packages you have to install in order to make this work

```bash
npm i @emailjs/browser --save  react-icons --save swiper  react-parallax-card --save
```

After you install the packages you have to run the project with ***npm start***

***Known issues: 1.After shrinking the website to Responsive states, when you go back to a non-responsive state, the Parallax Card tends to bug, but its fixed after refreshing the apge 2.The QuoteAPI was done last minute because the API I planned to use was for WhatsApp API that redirects you automatically to a chat, but I did not work so I implemented the QuoteAPI, therefore it looks a little out of place.***

***Fixed issues: Directory issues, that caused the project to not run smoothly.***
***Debuggind SliderJs,removes everything from the screen when I replace SwiperSlide with article and Swiper with div***
***Fixed bugs regarding the project pages and their responsiveness.***


## Commits

Unfortunately I have experienced some issues with my GitLab account and I am going to upload this project on GitHub, in only one go without possibilities of show-casing my progress.

## TODO
- [X] Create the project structure
- [X] Implement the installed packages
- [X] Create the necessary components for the website (for now)
- [X] Implement floating nav bar
- [X] Responsive design
- [X] Homepage 
- [X] Animated Homepage
- [X] Animated About me apge
- [X] Have my portfolio section with screenshots
- [X] Add links to each of them for Drive and GitHub
- [X] Add contact page with social medias
- [X] Add EmailJs so people can contact me directly 
- [X] Implement my (not-yet finished)CV on the homepage for quick-download
- [X] Implement an API, either WhatsApp API or a Quote API
- [X] Create a smooth transition for hovering over divs, buttons and others
- [X] Implement a Parallax Card on the homepage for Interactive design
- [X] Fix directory issues, that affect the performance of the website
- [] Comment the remaining code and structure the contents of the project folder properly 
- [] Fix bugs and issues that may pop during production
- [] Host

## Project structure

The project structure: 
```
$PROJECT_ROOT
│   # Page files
├── pages
│   # React component files
├── components
│   # Non-react modules
├── lib
│   # Static files for images and translation + favicon, documents and parallax model
└── public
```
