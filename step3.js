const fs = require('fs')

function handleOutput (text, out) {
  if (out) {
    fs.writeFile(out, text, 'utf8', function (err) {
      if (err) {
        console.error(`Couldn't write ${out}: ${err}`)
        process.exit(1)
      }
    })
  } else {
    console.log(text)
  }
}

handleOutput('i am text two', 'two.txt')
