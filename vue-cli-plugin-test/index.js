const getEntries=require('./service/getEntries')
const mergeUserOption=require('./service/mergeUserOption')
const setOutput=require('./service/setOutput')
module.exports = (api,options)=>{
  const { serve, build } = api.service.commands
  const serveFn = serve.fn
  const buildFn = build.fn
  options.pages=getEntries()
  options = mergeUserOption(options)
 // setOutput(api)

  serve.fn = function (args) {
    serveFn(args)
  }
  build.fn = function (args) {
    buildFn(args)
  }
}
