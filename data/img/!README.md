### Important
Most galleries have thumbnails associated with each image, which are intended to be compressed versions of the full-size images. These are designed to greatly improve load time on the gallery pages for those with slower Internet connections. Therefore, when adding new photos to a gallery, two copies of each image must be added-- a full-size .jpg image in the main gallery directory, as well as a compressed .jpg image in the thumb directory within the gallery directory.

To compress an entire directory of **new** photos, first make a copy of a directory containing them (and only them), enter this copy of the directory, and run `mogrify -quality 30% -resize 1024 *.jpg`. This will irreversibly compress the images in the directory to an acceptable standard for the website.

*-ail*