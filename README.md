# bmo-site
The website for the Brown Men's Club Ultimate Team

## User Guide
To test changes on the development server, run `npm run dev`. (*Note: the development server can have very poor performance, but most issues should go away on the production server.*)

The Brown Club Sports website platform only supports static sites, so to export the site run `npm run export` (which does `next build` plus an image optimization step), and the resulting files will be available in the `out` directory.
To test the production site, launch an HTTP server in the `out` directory (this can be easily done by globally installing `http-server` from npm).

## Updating content
The site can be driven off of a series of JSON files found in the `public/content` folders. Most files should be straightforward, but here are instructions for some of the trickier ones:
#### `roster`:
Each year can either have an image or a roster list with player bios. 
- For just an image, put the image file in the corresponding year folder and set the JSON entry in `rosters.json` to the file name.
- For the bios, add the JSON data in `rosters.json` (the same structure as used for 2022), and in the corresponding year folder, put an image for each player with the name `<id>.jpg`, where `<id>` is replaced with that player's `id` field from the JSON file.