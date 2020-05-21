# path_2_adventure
Javascript application for creating and organizing Pathfinder 2 characters

# Installation

1) Clone the repo:
`git clone git@github.com:KalMegati/path_2_adventure.git`

2) Enter the backend directory:
`cd path_2_adventure/path-2-backend`

3) Install the bundle to ensure your system has all the necessary extensions:
`bundle install`

4) Seeding (Optional)
If you would like some starter elements to see how the site displays, enter the command:

`rake db:seed`

This will provide you with content for testing.

# Execution

1) In the terminal, while in the backend directory, start the rails server:
`rails s`
This server must be running while you are using the application.

2) Exit the backend and enter the frontend:
`cd ../path-2-frontend/`

3) Obtain the path of the index.html file. Using the `pwd` while in the frontend should return a file path similar to this:
`/home/kalmegati/code/labs/path_2_adventure/path-2-frontend/index.html`

4) Go to the following path in an internet browser, preferably Google Chrome:
`file://wsl%24/Ubuntu/<file path obtained from the last step>`

The slash after `Ubuntu` should overlap with the slash at the beginning of the obtained file path. Given the sample file path, the path to go to in Chrome would be:
`file://wsl%24/Ubuntu/home/kalmegati/code/labs/path_2_adventure/path-2-frontend/index.html`

# Usage

The rails server must remain running while using the application, or changed made to players and characters will not persist and the app may crash. Making a new character requires the user to select a player that character will belong to as well as an Ancestry, Background, and Class from the dropdown menus. If these dropdown menus do not populate within several seconds of the page loading, reloading the page should populate the menus.
