# bmo-site
The website for the Brown Men's Club Ultimate Team

## Updating content
The site can be driven off of a series of JSON files found in the `public/content` folders. Most files should be straightforward, but here are instructions for some of the trickier ones:
#### `roster`:
Each year can either have an image or a roster list with player bios. 
- For just an image, put the image file in the corresponding year folder and set the JSON entry in `rosters.json` to the file name.
- For the bios, add the JSON data in `rosters.json` (the same structure as used for 2022), and in the corresponding year folder, put an image for each player with the name `<id>.jpg`, where `<id>` is replaced with that player's `id` field from the JSON file. Try to get the images to be the same aspect ratio (generally 16:9) per year, since the grid will look misaligned if not.

## Updating website code
To test changes on the development server, run `npm run dev`. (*Note: the development server can have very poor performance, but most issues should go away on the production server.*)

The Brown Club Sports website platform only supports static sites, so to export the site run `npm run export` (which does `next build` plus an image optimization step), and the resulting files will be available in the `out` directory.
To test the production site, launch an HTTP server (this can be easily done by globally installing `http-server` from npm).

Since we are in the `/Athletics/Mens_Ultimate` directory on the production server, and the `/out` directory here, the `basePath` will need to be updated in config files-- change it in `.env.local` before you push to production. (No big deal if you mess it up since everything is very recoverable but the site won't work till you update it so try to keep it in sync.)

## Web publishing
For future reference, here are the instructions for updating the production server with any website updates:
1. Get access to the webpub.brown.edu server. Currently [@andyburris](https://github.com/andyburris) and [@cnightin](https://github.com/cnightin) have access and can get you access if you want it, but in case this document gets out of date, contact the Office of Information Technology to regain access.
2. Download and run the Brown VPN using the instructions [here](https://ithelp.brown.edu/kb/articles/connect-to-brown-s-vpn-pc-mac). Despite what the OIT says, it seems like you need this even if you're on the Brown wifi network.
3. In a command line, connect to the webpub server with the command `ssh <username>@webpub.brown.edu`. If it errors with `no matching host key type found`, try running the command with `ssh -oHostKeyAlgorithms=+ssh-rsa <username>@webpub.brown.edu`. Your password should be in the message sent to you by OIT.
4. From the home directory (`~`), run `. deploy.sh`. (If something errors, see older versions of this README for more detailed instructions.)
5. At this point, you should see the updated site at https://brown.edu/Athletics/Mens_Ultimate/