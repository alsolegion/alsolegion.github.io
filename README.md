# Portfolio Website

This repository contains the source files for my personal portfolio website. The site is built as a simple static website using HTML, CSS, and JavaScript.

## About

This website is designed to showcase:
- About Me
- My projects and documentation
- My Resume
- Contact Information / Profile

## Pages

The site includes the following main pages:
- Home page
- About page
- Projects page
- Resume page
- Contact page

## Technologies Used

- HTML
- CSS
- JavaScript
- GitHub Pages for deployment

## Project Structure

- assets/css/style.css — shared site styling
- assets/js/main.js — interactive behavior and theme handling
- assets/documents/ — downloadable documents seen within pages (i.e. resume)
- index.html — landing page with the directory-style file explorer
- about.html — about me page
- projects.html — projects landing page
- resume.html — embedded resume page
- contact.html — contact information page
- projects/
  - ids-project.html — Intrusion Detection System project page
  - client-server-communication.html — Client-Server Communication project page
  - network-labs.html — currently listed as WIP in the site
  - active-directory.html — currently listed as WIP in the site

## Run Locally

You can preview the site locally by opening the main HTML file in a browser, or by serving the folder with a simple local server such as:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## Deployment

This site is published through GitHub Pages.
