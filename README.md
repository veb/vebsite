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