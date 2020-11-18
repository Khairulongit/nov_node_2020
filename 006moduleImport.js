var myimport = require('./library/utilites')

function usingImportedLibrary(){
    console.log(myimport.getCurrentDate())
    console.log(myimport.getCurrentDay())
    console.log(myimport.getCurrentTime())

}

usingImportedLibrary()

