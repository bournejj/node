const fs = require('fs')
const axios = require('axios')

function cat (path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.log('error', err)
      process.kill(1)
    }

    console.log(data)
  })
}

cat('one.txt')

async function webCat (url) {
  try {
    const res = await axios.get(url)
    console.log(res.data)
  } catch (_) {
    console.log('no')
  }
}

webCat('http://google.com')

function catWrite (path, line) {
  fs.writeFile(path, line, { encoding: 'utf8', flag: 'a'}, (err, data) => {
    if (err) {
      console.log('error', err)
      process.kill(1)
    }

    console.log(data)
  })
}

catWrite('one.txt', 'where is file 2?')
