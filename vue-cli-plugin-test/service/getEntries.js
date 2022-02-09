const path = require('path')
const glob = require('glob')


module.exports = function () {
  const getEntryAndHtmlPluginJs = () => {
    let entry = {}
    let pages = {}

    const entryFiles = glob.sync(path.join(process.cwd(), './src/views/*/index.js'));
    Object.keys(entryFiles).map(item => {
      const entryFile = entryFiles[item];
      const match = entryFile.match(/src\/views\/(.*)\/index.js/);
      const pageName = match && match[1];
      entry[pageName] = entryFile;
      pages[pageName] = {
        entry: entryFile,
        template: './src/views/home/index.html',
        filename: `${pageName}.html`,
      }
    })
    return {
      pages
    }
  }

  const {pages} = getEntryAndHtmlPluginJs()
  console.log('pages')
  console.log(pages)

  return pages
}
