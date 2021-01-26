const upload_s3 = require('../../CoCreate-tools/upload_s3');
const minify_files = require('../../CoCreate-tools/minify_js');

const pkg = require('./package.json');
const name = pkg.name;

const folderOutput = './dist/'
const fileOutput = folderOutput + name + '.min.js'
const src = 'src/';
console.log("Compiling and minifying...")

const cocreate_files = [
    './'+src+name+'.js',
    ]

minify_files(cocreate_files,fileOutput)
/// Upload to S3
upload_s3(fileOutput);
/// Upload to S3 src
upload_s3('./'+src+name+'.js');
