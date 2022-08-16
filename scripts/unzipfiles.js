const decompress = require("decompress");
var source;
var destination;

const opn = require("opn");

function setpaths(_source, _destination) {
  source = _source;
  destination = _destination;
  unzip();
}

// ("C:Users/Bhaskar/Downloads/QmZeUzx1sw7PsArnSv1exYfAHk3bCwzgDQbVn8wWcfDe8d.zip");
//"C:\Users\Bhaskar\Desktop\unzipped_folder"

async function unzip() {
  try {
    const files = await decompress(source, destination);
    console.log("This is done");
    //This means that the file has been zipped and now its time to open the vs code application

    await opn("https://vscode.dev/");
  } catch (error) {
    console.log(error);
  }
}

setpaths(
  "C:/Users/Bhaskar/Downloads/QmZeUzx1sw7PsArnSv1exYfAHk3bCwzgDQbVn8wWcfDe8d.zip",
  "C:/Users/Bhaskar/Desktop/unzipped_folder"
);
