const mymodule = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, (err, filteredList) => {
    if(err){return console.error(err);}
    filteredList.forEach((file) => {
        console.log(file);
    });
});