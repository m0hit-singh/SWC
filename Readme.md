# watch-compile 
swc src -w -d(or --out-dir) dist  // src input directory dist output directory

# watch-dev

nodemon --watch \"dist/**/*\" -e js ./dist/index.js // watch mode using nodemon, -e extension to watch like js, ./dist/index.js entry point for nodemon, --watch for watching files changes in dist folder

