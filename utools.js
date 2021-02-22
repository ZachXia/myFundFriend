utools.onPluginReady(() => {
  app.onCreated()
})
utools.onPluginEnter(({ code, type, payload, optional }) => {
  app.onEnter({ code, type, payload, optional })
})
utools.onPluginOut(() => {
  utools.outPlugin()
})