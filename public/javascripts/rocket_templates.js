templates = {}


// * * * * * Dump of templates.example * * * * *


templates.example = {}


// * * * * * Dump of templates.example.index * * * * *


templates.example.index = function anonymous(locals) {
var __ = { lineno: 1, input: "!= link_to(\"O hai, server!\", {\"Example.say_hello\": {name: \"actsasbuffoon\"}})", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
var __val__ = link_to("O hai, server!", {"Example.say_hello": {name: "actsasbuffoon"}})
buf.push(null == __val__ ? "" : __val__);}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}