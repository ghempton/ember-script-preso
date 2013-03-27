$ ->
  $('.example').each ->
    $emberscript = $(this).find('.emberscript')
    $javascript = $(this).find('.javascript')

    updateJS = ->
      try
        js = EmberScript.em2js(editor.getValue(), bare: true, optimise: false)
        output.setValue(js)
        output.selection.clearSelection()
      catch e

    editor = ace.edit($emberscript[0])
    editor.renderer.setShowGutter(false)
    editor.setHighlightActiveLine(false)
    editor.getSession().setMode("ace/mode/coffee")
    editor.session.setUseWorker(false) # removes errors
    editor.getSession().on 'change', ->
      updateJS()

    output = ace.edit($javascript[0])
    output.renderer.setShowGutter(false)
    output.setHighlightActiveLine(false)
    output.getSession().setMode("ace/mode/javascript")
    output.setReadOnly(true)

    updateJS()