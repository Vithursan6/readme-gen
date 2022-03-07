
# Professional README Generator
---
<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<br>

---
<br>
<br>

## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

<br>

---
<br>
<br>

## Acceptance Criteria

GIVEN a command-line application that accepts user input
- WHEN I am prompted for information about my application repository
  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- WHEN I enter my project title
  THEN this is displayed as the title of the README
- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- WHEN I choose a license for my application from a list of options
  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- WHEN I enter my GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- WHEN I enter my email address
  THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README

<br>

---
<br>
<br>

## Description:
A professional readme generator created to assit developers. It saves time by generating a readme with 7 sections.
The user prompts are inputted through inquirer prompts, then functions were created to to render the license badge, link, and contribution sections.
 Once the user inputs information, the generateMarkdown() function produces the readme which is then written to a readme file 
using the writeToFile() function.
<br>

---
<br>
<br>

## Usage and Installation

- Please download respository and run bash from the root of repository. 
- Type "npm install inquirer" in bash while still in root of repository.
- Type "node index" into bash terminal and answer prompts
- Your README will be in the "/dist" folder labeled "README.md"

<br>

---
<br>
<br>

## Built With:

- Node.js
- javaScript
- Markdown

<br>

---
<br>
<br>

## Screenshots

![Screenshot1](./assets/pic1.png)
<br>
![Screenshot2](./assets/pic1.png)
<br>
![Screenshot3](./assets//pic3.png)
<br>
![Screenshot4](./assets/pic4.png)
<br>

---
<br>
<br>

## Demonstration

[Demo](https://youtu.be/uCqbY7MUxSg)

<br>

---
<br>
<br>

## Links

Deployed Application:

 - https://vithursan6.github.io/readme-gen

Github Repository:

 - https://github.com/vithursan6/readme-gen
<br>

---
<br>
<br>

## License

MIT License

Copyright (c) 2022 Vithursan6

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
<br>

---

