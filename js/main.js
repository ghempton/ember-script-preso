(function() {
  $(function() {
    return $('.example').each(function() {
      var $emberscript, $javascript, editor, output, updateJS;

      $emberscript = $(this).find('.emberscript');
      $javascript = $(this).find('.javascript');
      updateJS = function() {
        var e, js;

        try {
          js = EmberScript.em2js(editor.getValue(), {
            bare: true,
            optimise: false
          });
          output.setValue(js);
          return output.selection.clearSelection();
        } catch (_error) {
          e = _error;
        }
      };
      editor = ace.edit($emberscript[0]);
      editor.renderer.setShowGutter(false);
      editor.setHighlightActiveLine(false);
      editor.getSession().setMode("ace/mode/coffee");
      editor.session.setUseWorker(false);
      editor.getSession().on('change', function() {
        return updateJS();
      });
      output = ace.edit($javascript[0]);
      output.renderer.setShowGutter(false);
      output.setHighlightActiveLine(false);
      output.getSession().setMode("ace/mode/javascript");
      output.setReadOnly(true);
      return updateJS();
    });
  });

}).call(this);
