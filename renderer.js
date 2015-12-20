//Function that handles the reading of files and merge in value
var fs = require("fs");




function mergeValues(values, content) {
  //Cycle over the keys
  for (var key in values) {
    content = content.replace("{{" + key + "}}", values[key]);
  }
    //Replace all {{key}} with the value from the values object
  
  //return merged content
  return content;
}

function view(templateName, values, response) {
  //Read from the template files
  var fileContents = fs.readFileSync("./views/" + templateName + '.html', {encoding: "utf8"});
    //Insert values into the content
  fileContents = mergeValues(values, fileContents);
    //Write out to the response
  response.write(fileContents);
}
  

module.exports.view = view;