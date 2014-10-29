VEBsite
=======

## Prerequisites
### gems
##### Assuming all commands are run as sudo
	gem install sass
	gem install bourbon
	gem install bitters
	gem install refills
	gem install neat
	gem install font-awesome-sass
	gem install jekyll

## Running
	jekyll build --destination <destination>

Where `<destination>` is the folder where the site will be rendered to.  
Without the `--destination` flag, the site is rendered into `_site`

## Rendered site
Rendered site location is under `_site`.  Upload that folder to the webserver, and the vebsite will be ready.  No further configurations necessary

## Project Folders
### SASS
VEB uses SASS for stylesheet generation. For more information, visit the [sass guide](http://sass-lang.com/guide)

SASS files are located under `_sass`.
Most of these don't need to be messed around with, any custom sass code are placed in `_layout.sass`

If you need to separate the code into another file (for readability), do add an import statement in `css/main.sass`

#### Example
Add a new file named `new.sass` in the `_sass` directory.
In `css/main.sass` add 

	@import "new"

below

	@import "layout"

Note how the import statement doesnt contain extensions.  You can also add plain css with the extension `.scss` instead of `.sass`

### Static pages
Any folder/file without an underscore will be copied into the root of the `_site` directory.  **You should not** edit anything in `_site` as the contents are dynamically generated.

Links to static pages/assets are *relative*

#### Creating a new page
The basic template for a new page is like this

	---
	layout: page
	title: 
	---
	<!-- html content -->

The first three lines are frontmatter, and more information can be found in the [Jekyll Docs page](http://jekyllrb.com/docs/frontmatter/)

Do note that the HTML content is placed between the site header and footer, no need for head tags, etc.

If the `title` frontmatter is left empty, no title is displayed.  If not empty, an `<h1>` tag is placed before the page content.

##### Example
Lets say we save this under `projects/test.html`.  After executing `jekyll build` , the page can be accessed via 
	http://localhost:4000/projects/test.html

Further information on [page creation](http://jekyllrb.com/docs/pages/)

### Javascript
Javascript and library dependencies are autoloaded using [Require.js](http://requirejs.org).  The relevant RequireJS script file is `assets/js/app.js`
#### JQuery
jQuery functions/methods can be added to the `assets/js/app/main.js` file inside the line

	require(["jquery"], function($) {
	});

### Images/Assets
Images are found under `assets/images`


### ProductGrid
To add an item to the product grid, create a page in `products` folder with the following template
	
	---
	layout: page
	title: <product title>
	description: <short description>
	thumbnail: <path to image (relative to page root)>
	background: <OPTIONAL: hexcolor of tile>
	type: <web|android|ios|other>
	---
	<!-- html content -->

Product title is the name of the product in the thumbnail.
Description is the short blurb under the product title.

Thumbnail would both be the thumbnail AND the background image of a tile in the product grid. (ex: `/assets/images/gridicons/sherlock.jpg`)

Background: you can specify a fallback color for the tile in lieu of a background image

Type is the banner type for the tile (the ribbon thing)