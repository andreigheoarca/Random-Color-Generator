# Random Color Generator

A simple HEX color generator and one of my first projects that I created, inspired by John Smilga's tutorial.

## Link

https://genuine-crisp-c86a6b.netlify.app/

## Usage

Please press on the "Generate" button in order to display a random HEX color in the box.

## Project lookback and future considerations 

This was quite a small and simple project so I can't say that I encountered any major challenges. The only issue that I encountered was when looping through the array of the values used in order the generate the final HEX value. 

By multiplying the randomly generated number with length of the HEX array the final HEX value would eventually returned undefined but weirdly enough the HEX value would still display a color correctly on the screen. 

I assumed that it was related to arrays being 0 index based and therefore exiting the loop when reaching the end so I subtracted 1 from the HEX array length and that fixed the issue.

As far as further functionality, I was planning of adding a way to save or store a HEX value for future uses if the user desires.
