 (function() { function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (lib, use) {
      if (use.og) {
pug_html = pug_html + "\u003Cmeta property=\"og:locale\" content=\"zh_TW\"\u003E\u003Cmeta property=\"og:image\" content=\"#{thumbnail}\"\u003E\u003Cmeta property=\"og:image:type\" content=\"image\u002Fpng\"\u003E\u003Cmeta property=\"og:image:width\" content=\"200\"\u003E\u003Cmeta property=\"og:image:height\" content=\"200\"\u003E";
}
if (use.favicon) {
pug_html = pug_html + "\u003Clink rel=\"icon\" type=\"image\u002Fx-icon\" href=\"#{favicon}\"\u003E";
}
if (use.cdn) {
if (lib.jquery) {
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002F\u002Fcodeorigin.jquery.com\u002Fjquery-1.10.2.min.js\"\u003E\u003C\u002Fscript\u003E";
}
if (lib.d3js) {
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002F\u002Fd3js.org\u002Fd3.v3.min.js\"\u003E\u003C\u002Fscript\u003E";
}
if (lib.angular) {
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002F\u002Fajax.googleapis.com\u002Fajax\u002Flibs\u002Fangularjs\u002F1.2.3\u002Fangular.min.js\"\u003E\u003C\u002Fscript\u003E";
}
if (lib.bootstrap) {
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"\u002F\u002Fnetdna.bootstrapcdn.com\u002Fbootstrap\u002F3.0.2\u002Fcss\u002Fbootstrap.min.css\"\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002F\u002Fnetdna.bootstrapcdn.com\u002Fbootstrap\u002F3.0.2\u002Fjs\u002Fbootstrap.min.js\"\u003E\u003C\u002Fscript\u003E";
}
if (lib.semantic) {
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fsemantic-ui\u002F0.9.3\u002Fcss\u002Fsemantic.min.css\"\u003E\u003Cscript type=\"Text\u002Fjavascript\" src=\"\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fsemantic-ui\u002F0.9.3\u002Fjavascript\u002Fsemantic.min.js\"\u003E\u003C\u002Fscript\u003E";
}
}
else {
if (lib.jquery) {
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"#{assets}\u002Fjquery\u002F1.10.2\u002Fjquery.min.js\"\u003E\u003C\u002Fscript\u003E";
}
if (lib.d3js) {
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"#{assets}\u002Fd3js\u002F3.3.11\u002Fd3.v3.min.js\"\u003E\u003C\u002Fscript\u003E";
}
if (lib.angular) {
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"#{assets}\u002Fangular\u002F1.2.3\u002Fangular.min.js\"\u003E\u003C\u002Fscript\u003E";
}
if (lib.bootstrap) {
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"#{assets}\u002Fbootstrap\u002F3.0.2\u002Fcss\u002Fbootstrap.min.css\"\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"#{assets}\u002Fbootstrap\u002F3.0.2\u002Fjs\u002Fbootstrap.min.js\"\u003E\u003C\u002Fscript\u003E";
}
if (lib.semantic) {
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"#{assets}\u002Fsemantic-ui\u002F0.9.5\u002Fcss\u002Fsemantic.min.css\"\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"#{assets}\u002Fsemantic-ui\u002F0.9.5\u002Fjs\u002Fsemantic.min.js\"\u003E\u003C\u002Fscript\u003E";
}
}
    }.call(this, "lib" in locals_for_with ?
        locals_for_with.lib :
        typeof lib !== 'undefined' ? lib : undefined, "use" in locals_for_with ?
        locals_for_with.use :
        typeof use !== 'undefined' ? use : undefined));
    ;;return pug_html;}; module.exports = template; })() 