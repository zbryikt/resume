 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, c, defer, hashfile, libLoader, md5, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/js/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
hashfile({type: "js", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", fn + libLoader._v, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/css/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
hashfile({type: "css", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", fn + libLoader._v, true, true)) + "\u003E";
}
};
pug_html = pug_html + "\u003Chtml lang=\"en\"\u003E\u003Chead prefix=\"og: http:\u002F\u002Fogp.me\u002Fns#\"\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Ctitle\u003ECurriculum Vitae - kirby\u003C\u002Ftitle\u003E";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "@loadingio/bootstrap.ext"},
      {name: "ldcover"}
    ]);
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{width:100%;height:100%;margin:0;padding:0}.date{float:right}#root{font-family:Palatino,Georgia,serif;max-width:1024px;margin:40px auto}@media(max-width:1024px){#root{width:80%}}.name{font-size:2em;text-align:center;font-weight:bold}.email{text-align:center;margin:5px 0 0}.phone{text-align:center;font-size:12px;margin:0 0 10px}.table-head{font-weight:bold;text-align:right}@media(max-width:768px){.table-head{margin-bottom:10px;text-decoration:underline}}.item{margin-bottom:11px}.title,.contest,.award{display:inline-block;margin-right:10px}.title,.award{font-style:italic}.proj,.tech,.contest{font-weight:bold;margin-right:10px}.inst{font-weight:bold;display:inline-block}.title{margin-left:10px}.desc{opacity:.9}.glyphicon{font-size:14px;vertical-align:text-top;margin-left:3px;opacity:.6}.section:before{content:\" \";display:block;width:90%;margin:auto;border-top:1px solid #eee;padding-top:15px;margin-top:10px}.summary{margin:0 auto 20px;width:95%;text-align:justify}a{color:#333}.hidden-xs-inline{display:inline}@media(max-width:640px){.hidden-xs-inline{display:none}}@media print{.no-print{display:none}.col-sm-3,.col-sm-8{float:left}.col-sm-3{width:25%}.col-sm-8{width:66.66666666666667%}.table-head{margin-bottom:auto;text-decoration:none}#root{width:95%;margin:25px auto 5px;font-size:.5em;line-height:.9em}.item{margin-bottom:5px}a[href]:after{content:none !important}.summary{line-height:14px;margin-bottom:10px}.section:before{padding-top:10px;margin-top:7px}}.has-tips{position:relative;overflow:visible}.has-tips .hover-tip{display:block;opacity:0;z-index:-1}.btn.has-tips:hover .hover-tip,.has-tips:hover .hover-tip,.has-tips.tip-on .hover-tip{display:block;opacity:1;z-index:10}.hover-tip{background:#000;border-radius:3px;position:absolute;left:50%;transform:translateX(-50%);min-width:100px;color:#fff;padding:5px 10px;text-align:center;z-index:;font-size:13px;top:auto;bottom:100%;margin-bottom:7px}.hover-tip a{color:#73baf7}.hover-tip:before{width:10px;height:10px;position:absolute;top:-5px;left:50%;margin-left:-7px;background:#000;display:block;content:\" \"}.hover-tip:before{top:auto;bottom:-5px}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv id=\"root\"\u003E\u003Cdiv class=\"name\"\u003ETai Hui Wu \u002F 吳泰輝\u003C\u002Fdiv\u003E\u003Cdiv class=\"summary\"\u003ECofounder of plotdb.com, g0v.tw and foundi.info.\nExpert in web technology and data visualization.\nInvited lecturer or consultant of media and communication domains in universities including NTU, SHU, NCTU, NCCU, PCCU, FJU, etc.\nAlso a professional photographer specialized in wedding and mountain photography.\u003C\u002Fdiv\u003E\u003Cdiv class=\"row section\"\u003E\u003Cdiv class=\"col-sm-3 table-head\"\u003EEXPERIENCE\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-8\"\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2017 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003E\u003Ca href=\"https:\u002F\u002Fjcs.tw\" target=\"_blank\"\u003EFu Jen Catholic University\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"title\"\u003E\u003Cspan\u003EAdjunct Instructor, in \u003C\u002Fspan\u003E\u003Cspan class=\"has-tips\"\u003Edept. of JCS\u003Cdiv class=\"hover-tip\" style=\"width:300px\"\u003EDept. of Journalism and Communication Studies\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EFocus on digital content design thinking. \u003Ca href=\"http:\u002F\u002Fxinmeti.co\u002F\" target=\"_blank\"\u003Ehttp:\u002F\u002Fxinmeti.co\u002F\u003C\u002Fa\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2017 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003E\u003Ca href=\"https:\u002F\u002Fwww.pts.org.tw\u002F\" target=\"_blank\"\u003EPublic Television Service Foundation\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"title\"\u003EAdvisory Committee Member\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ENew media advisory committee in Board of directors\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2016 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003E\u003Ca href=\"http:\u002F\u002Fhackshackers.taipei\" target=\"_blank\"\u003EHacks\u002FHackers Taipei\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"title\"\u003ECo-organizer\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EJournalist x Developer Community for rebooting journalism. Official Taipei Chapter.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2016 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003E\u003Ca href=\"http:\u002F\u002Fplotdb.com\" target=\"_blank\"\u003Eplotdb.com\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"title\"\u003EFounder\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EOnline visualization service for everyone\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2015 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003E\u003Ca href=\"http:\u002F\u002Finfographics.tw\" target=\"_blank\"\u003Einfographics.tw\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"title\"\u003EFounder\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EDedicated in promoting visualization technologies in Mandarin Community\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2014 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003E\u003Ca href=\"https:\u002F\u002Floading.io\u002F\" target=\"_blank\"\u003Eloading.io\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"title\"\u003EFounder\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EWeb service for loading icons and micro animation \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2013 ~ 2015\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003E\u003Ca href=\"http:\u002F\u002Ffoundi.info\" target=\"_blank\"\u003Efoundi.info\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"title\"\u003ECo-founder\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EInformation service for real estate industry.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2015\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003E\u003Ca href=\"http:\u002F\u002Fdbootcamp.taipei\" target=\"_blank\"\u003Ed|Bootcamp Taipei\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"title\"\u003ECo-organizer\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EData journalism workshop and crash courses for journalist and related industry\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2014\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003EGoogle Taiwan Digicamp\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003ETechnical Consultant\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EConsultant focused on web-baed technology and marketing campaign\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2012 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003E\u003Ca href=\"http:\u002F\u002Fg0v.tw\" target=\"_blank\"\u003Eg0v.tw\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003Cdiv class=\"title\"\u003ECo-founder\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ETaiwan open government community. Contributor and missionary\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2008 ~ 2013\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003EMediatek inc.\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003ESenior Software Engineer\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ELinux kernel, system automation \u002F optimization and building system\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row section\"\u003E\u003Cdiv class=\"col-sm-3 table-head\"\u003EEDUCATION\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-8\"\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E1999 ~ 2005\u003C\u002Fdiv\u003E\u003Cdiv class=\"inst\"\u003ENational Taiwan University\u003C\u002Fdiv\u003E\u003Cdiv class=\"dept\"\u003EDept. of Computer Science and Information Engineering\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003EMaster Degree\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row section\"\u003E\u003Cdiv class=\"col-sm-3 table-head\"\u003ESKILL\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-8\"\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2012 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"tech\"\u003EData Visualization\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EData crawling and analysis, interactive visualization in D3.js\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E1998 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"tech\"\u003EWeb Related Technology\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EHTML5, JavaScript, Node.js, Django\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2010 ~ 2013\u003C\u002Fdiv\u003E\u003Cdiv class=\"tech\"\u003EAndroid Open Platform\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EExperience in DVM, Android Framework, Building System\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2008 ~ 2012\u003C\u002Fdiv\u003E\u003Cdiv class=\"tech\"\u003ELinux Kernel Driver Development\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EExperience with Touch Panel Driver, I2C, AUXADC\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row section\"\u003E\u003Cdiv class=\"col-sm-3 table-head\"\u003EPORTFOLIO\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-8\"\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2015\u003C\u002Fdiv\u003E\u003Cdiv class=\"proj\"\u003E\u003Ca href=\"http:\u002F\u002F0media.tw\u002Fp\u002Fergame\u002F\" target=\"_blank\"\u003ELife in Emergency Room\u003C\u002Fa\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ENews Game about Issues of ER Violence and Abuse in Taiwan\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2013 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"proj\"\u003E \u003Ca href=\"http:\u002F\u002Fzbryikt.github.io\u002Fvisualize\u002F\" target=\"_blank\"\u003Ezbryikt.github.io\u002Fvisualize\u002F\u003C\u002Fa\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ESelected works of visualization projects\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item no-print\"\u003E\u003Cdiv class=\"date\"\u003E2013 ~ 2015\u003C\u002Fdiv\u003E\u003Cdiv class=\"proj\"\u003E \u003Ca href=\"http:\u002F\u002Ffoundi.info\" target=\"_blank\"\u003Efoundi.info\u003C\u002Fa\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EReal estate information platform\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2011 ~ now\u003C\u002Fdiv\u003E\u003Cdiv class=\"proj\"\u003E \u003Ca href=\"http:\u002F\u002Fwallpaper.tkirby.org\" target=\"_blank\"\u003Ewallpaper.tkirby.org\u003C\u002Fa\u003E\u003Ci class=\"glyphicon glyphicon-globe\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ESelected works of photography projects\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row section\"\u003E\u003Cdiv class=\"col-sm-3 table-head\"\u003EAWARD\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-8\"\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2016\u003C\u002Fdiv\u003E\u003Cdiv class=\"contest\"\u003EExcellent Journalism Award\u003C\u002Fdiv\u003E\u003Cdiv class=\"award\"\u003EFinalists\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E\"\u003Ca href=\"http:\u002F\u002F0media.tw\u002Fp\u002Fergame\u002F\" target=\"_blank\"\u003ELife in Emergency Room\u003C\u002Fa\u003E\", in \"Feature Report\" category\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2014\u003C\u002Fdiv\u003E\u003Cdiv class=\"contest\"\u003ENTU Public News Contest\u003C\u002Fdiv\u003E\u003Cdiv class=\"award\"\u003EFirst Prize \u002F Multimedia News Category\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E\u003Ca href=\"http:\u002F\u002F0media.tw\u002Fyslin\u002F\" target=\"_blank\"\u003EHistorical Review of Taiwan Democracy Activity and Yi-hsiung Lin\u003C\u002Fa\u003E\u003Ci class=\"glyphicon glyphicon-globe no-print\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2014\u003C\u002Fdiv\u003E\u003Cdiv class=\"contest\"\u003EOpen Data Contest\u003C\u002Fdiv\u003E\u003Cdiv class=\"award\"\u003EGrand Prize\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003EFoundi - the Environment Map for Real Estate Industry\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2013\u003C\u002Fdiv\u003E\u003Cdiv class=\"contest\"\u003EYahoo Hack Day 2013\u003C\u002Fdiv\u003E\u003Cdiv class=\"award\"\u003EHonorable Mention\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003ELegislative Yuan Cinema - Interactive streaming of congress sessions\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"item\"\u003E\u003Cdiv class=\"date\"\u003E2012\u003C\u002Fdiv\u003E\u003Cdiv class=\"contest\"\u003EYahoo Hack Day 2012\u003C\u002Fdiv\u003E\u003Cdiv class=\"award\"\u003EHonorable Mention\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E\u003Ca href=\"http:\u002F\u002Fbudget.g0v.tw\" target=\"_blank\"\u003EOpen Budget - Open + Visualization of Taiwan Government Budget\u003C\u002Fa\u003E\u003Ci class=\"glyphicon glyphicon-globe no-print\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]([
      {name: "bootstrap.native", path: "dist/bootstrap-native.min.js"},
      {name: "proxise"},
      {name: "@loadingio/debounce.js"},
      {name: "@loadingio/ldquery"},
      {name: "ldview"},
      {name: "ldcover"}
    ]);
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "hashfile" in locals_for_with ?
        locals_for_with.hashfile :
        typeof hashfile !== 'undefined' ? hashfile : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "md5" in locals_for_with ?
        locals_for_with.md5 :
        typeof md5 !== 'undefined' ? md5 : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 