    # Build project on Gulp 4
    Quickly build your Gulp project and write code in:
    - HTML, PUG
    - CSS, SCSS, SASS, LESS, STYLUS
    - Java Script, Type Script, Coffee Script

    ## Assembly functionality
    - compiling the PUG preprocessor
    - HTML minification
    - compilation of preprocessors LESS, SASS, STYLUS
    - CSS minification
    - automatic addition of CSS prefixes
    - transpilation of Type Script and Coffee Script languages
    - Converting ECMAScript 2015+ code to a backward compatible JavaScript version with Babel
    - JavaScript minification
    - merging multiple JavaScript files into one
    - image compression
    - keeping track of new images that haven't been compressed yet
    - track changes in files and automatically start reprocessing
    - generating sourcemaps
    - display file sizes in terminal
    - local server with automatic page refresh when files change


    ## Input
    || HTML | Styles | Scripts | Images |
    |:---|:------:|:-----:|:----:|:-----:|
    | **Catalog** | src/ | src/styles/ | src/scripts/ | src/img/ |
    | **Extension** | .html, .pug | .css, .sass, .scss, .less, .styl | .js, .ts, .coffee | .jpg, .png, .gif |

    ## Output
    || HTML | CSS | JavaScript | Images |
    |:---|:------:|:-----:|:----:|:-----:|
    | **Source** | dist/ | dist/css/style.min.css | dist/js/main.min.js | dist/img/ |


    ## Run:
    1. Download all project files
    2. In the terminal, go to the project directory
    3. Run command: npm i (must have node.js installed)
    4. Create directories and files
    5. Run the command: gulp (run the default task)
    6. Write your own code and enjoy the automatic build of the project.


    ## NPM packages to use
    [gulp](https://www.npmjs.com/package/gulp) Gulp assembler
    [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) Minification of HTML files
    [gulp-pug](https://www.npmjs.com/package/gulp-pug) Pug HTML code preprocessor
    [gulp-less](https://www.npmjs.com/package/gulp-less)Compiling Less Files
    [gulp-stylus](https://www.npmjs.com/package/gulp-stylus) Compiling Styl Files
    [sass](https://www.npmjs.com/package/sass) Sass Compiler
    [gulp-sass](https://www.npmjs.com/package/gulp-sass)Compiling Sass and Scss Files
    [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)Compression and optimization of Java Script code
    [gulp-coffee](https://www.npmjs.com/package/gulp-coffee)Converts Coffee Script to Java Script
    [gulp-typescript](https://www.npmjs.com/package/gulp-typescript)Converts Type Script to Java Script
    [typescript](https://www.npmjs.com/package/typescript)Type Script language
    [gulp-babel](https://www.npmjs.com/package/gulp-babel)Converts Java Script to old standard
    [@babel/core](https://www.npmjs.com/package/@babel/core)Babel core
    [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) Babel compilation preset
    [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Minification and optimization of CSS files
    [del](https://www.npmjs.com/package/del) Removing directories and files
    [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Line of code map for developer tools
    [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)Automatic prefixing in CSS
    [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)Image Compression
    [gulp-concat](https://www.npmjs.com/package/gulp-concat)Combining multiple files into one
    [gulp-newer](https://www.npmjs.com/package/gulp-newer)Tracking only new files
    [gulp-rename](https://www.npmjs.com/package/gulp-rename)Renames files
    [gulp-size](https://www.npmjs.com/package/gulp-size)Display file size information in terminal
    [browser-sync](https://browsersync.io/docs/gulp)Automatic site update when files change



