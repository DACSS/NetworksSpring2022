<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">

<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
  <meta name="generator" content="distill" />

  <style type="text/css">
  /* Hide doc at startup (prevent jankiness while JS renders/transforms) */
  body {
    visibility: hidden;
  }
  </style>

 <!--radix_placeholder_import_source-->
 <!--/radix_placeholder_import_source-->

<style type="text/css">code{white-space: pre;}</style>
<style type="text/css" data-origin="pandoc">
pre > code.sourceCode { white-space: pre; position: relative; }
pre > code.sourceCode > span { display: inline-block; line-height: 1.25; }
pre > code.sourceCode > span:empty { height: 1.2em; }
code.sourceCode > span { color: inherit; text-decoration: inherit; }
div.sourceCode { margin: 1em 0; }
pre.sourceCode { margin: 0; }
@media screen {
div.sourceCode { overflow: auto; }
}
@media print {
pre > code.sourceCode { white-space: pre-wrap; }
pre > code.sourceCode > span { text-indent: -5em; padding-left: 5em; }
}
pre.numberSource code
  { counter-reset: source-line 0; }
pre.numberSource code > span
  { position: relative; left: -4em; counter-increment: source-line; }
pre.numberSource code > span > a:first-child::before
  { content: counter(source-line);
    position: relative; left: -1em; text-align: right; vertical-align: baseline;
    border: none; display: inline-block;
    -webkit-touch-callout: none; -webkit-user-select: none;
    -khtml-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;
    padding: 0 4px; width: 4em;
    color: #aaaaaa;
  }
pre.numberSource { margin-left: 3em; border-left: 1px solid #aaaaaa;  padding-left: 4px; }
div.sourceCode
  {   }
@media screen {
pre > code.sourceCode > span > a:first-child::before { text-decoration: underline; }
}
code span.al { color: #ad0000; } /* Alert */
code span.an { color: #5e5e5e; } /* Annotation */
code span.at { } /* Attribute */
code span.bn { color: #ad0000; } /* BaseN */
code span.bu { } /* BuiltIn */
code span.cf { color: #007ba5; } /* ControlFlow */
code span.ch { color: #20794d; } /* Char */
code span.cn { color: #8f5902; } /* Constant */
code span.co { color: #5e5e5e; } /* Comment */
code span.cv { color: #5e5e5e; font-style: italic; } /* CommentVar */
code span.do { color: #5e5e5e; font-style: italic; } /* Documentation */
code span.dt { color: #ad0000; } /* DataType */
code span.dv { color: #ad0000; } /* DecVal */
code span.er { color: #ad0000; } /* Error */
code span.ex { } /* Extension */
code span.fl { color: #ad0000; } /* Float */
code span.fu { color: #4758ab; } /* Function */
code span.im { } /* Import */
code span.in { color: #5e5e5e; } /* Information */
code span.kw { color: #007ba5; } /* Keyword */
code span.op { color: #5e5e5e; } /* Operator */
code span.ot { color: #007ba5; } /* Other */
code span.pp { color: #ad0000; } /* Preprocessor */
code span.sc { color: #5e5e5e; } /* SpecialChar */
code span.ss { color: #20794d; } /* SpecialString */
code span.st { color: #20794d; } /* String */
code span.va { color: #111111; } /* Variable */
code span.vs { color: #20794d; } /* VerbatimString */
code span.wa { color: #5e5e5e; font-style: italic; } /* Warning */
</style>


  <!--radix_placeholder_meta_tags-->
<title>Football Networks: Introduction to Football Networks</title>

<meta property="description" itemprop="description" content="In this blog, We&#39;ll be referring to soccer as football -- since it&#39;s played with a foot."/>


<!--  https://schema.org/Article -->
<meta property="article:published" itemprop="datePublished" content="2022-05-08"/>
<meta property="article:created" itemprop="dateCreated" content="2022-05-08"/>
<meta name="article:author" content="Isha Akshita Mahajan, Ankit Kumar"/>

<!--  https://developers.facebook.com/docs/sharing/webmasters#markup -->
<meta property="og:title" content="Football Networks: Introduction to Football Networks"/>
<meta property="og:type" content="article"/>
<meta property="og:description" content="In this blog, We&#39;ll be referring to soccer as football -- since it&#39;s played with a foot."/>
<meta property="og:locale" content="en_US"/>
<meta property="og:site_name" content="Football Networks"/>

<!--  https://dev.twitter.com/cards/types/summary -->
<meta property="twitter:card" content="summary"/>
<meta property="twitter:title" content="Football Networks: Introduction to Football Networks"/>
<meta property="twitter:description" content="In this blog, We&#39;ll be referring to soccer as football -- since it&#39;s played with a foot."/>

<!--/radix_placeholder_meta_tags-->
  <!--radix_placeholder_rmarkdown_metadata-->

<script type="text/json" id="radix-rmarkdown-metadata">
{"type":"list","attributes":{"names":{"type":"character","attributes":{},"value":["title","description","author","date","output"]}},"value":[{"type":"character","attributes":{},"value":["Introduction to Football Networks"]},{"type":"character","attributes":{},"value":["In this blog, We'll be referring to soccer as football -- since it's played with a foot."]},{"type":"list","attributes":{},"value":[{"type":"list","attributes":{"names":{"type":"character","attributes":{},"value":["name","affiliation"]}},"value":[{"type":"character","attributes":{},"value":["Isha Akshita Mahajan, Ankit Kumar"]},{"type":"character","attributes":{},"value":["UMass Amherst"]}]}]},{"type":"character","attributes":{},"value":["05-08-2022"]},{"type":"list","attributes":{"names":{"type":"character","attributes":{},"value":["distill::distill_article"]}},"value":[{"type":"list","attributes":{"names":{"type":"character","attributes":{},"value":["self_contained"]}},"value":[{"type":"logical","attributes":{},"value":[false]}]}]}]}
</script>
<!--/radix_placeholder_rmarkdown_metadata-->
  
  <script type="text/json" id="radix-resource-manifest">
  {"type":"character","attributes":{},"value":["welcome_files/anchor-4.2.2/anchor.min.js","welcome_files/bowser-1.9.3/bowser.min.js","welcome_files/distill-2.2.21/template.v2.js","welcome_files/header-attrs-2.14/header-attrs.js","welcome_files/jquery-3.6.0/jquery-3.6.0.js","welcome_files/jquery-3.6.0/jquery-3.6.0.min.js","welcome_files/jquery-3.6.0/jquery-3.6.0.min.map","welcome_files/popper-2.6.0/popper.min.js","welcome_files/tippy-6.2.7/tippy-bundle.umd.min.js","welcome_files/tippy-6.2.7/tippy-light-border.css","welcome_files/tippy-6.2.7/tippy.css","welcome_files/tippy-6.2.7/tippy.umd.min.js","welcome_files/webcomponents-2.0.0/webcomponents.js"]}
  </script>
  <!--radix_placeholder_navigation_in_header-->
<meta name="distill:offset" content="../.."/>

<script type="application/javascript">

  window.headroom_prevent_pin = false;

  window.document.addEventListener("DOMContentLoaded", function (event) {

    // initialize headroom for banner
    var header = $('header').get(0);
    var headerHeight = header.offsetHeight;
    var headroom = new Headroom(header, {
      tolerance: 5,
      onPin : function() {
        if (window.headroom_prevent_pin) {
          window.headroom_prevent_pin = false;
          headroom.unpin();
        }
      }
    });
    headroom.init();
    if(window.location.hash)
      headroom.unpin();
    $(header).addClass('headroom--transition');

    // offset scroll location for banner on hash change
    // (see: https://github.com/WickyNilliams/headroom.js/issues/38)
    window.addEventListener("hashchange", function(event) {
      window.scrollTo(0, window.pageYOffset - (headerHeight + 25));
    });

    // responsive menu
    $('.distill-site-header').each(function(i, val) {
      var topnav = $(this);
      var toggle = topnav.find('.nav-toggle');
      toggle.on('click', function() {
        topnav.toggleClass('responsive');
      });
    });

    // nav dropdowns
    $('.nav-dropbtn').click(function(e) {
      $(this).next('.nav-dropdown-content').toggleClass('nav-dropdown-active');
      $(this).parent().siblings('.nav-dropdown')
         .children('.nav-dropdown-content').removeClass('nav-dropdown-active');
    });
    $("body").click(function(e){
      $('.nav-dropdown-content').removeClass('nav-dropdown-active');
    });
    $(".nav-dropdown").click(function(e){
      e.stopPropagation();
    });
  });
</script>

<style type="text/css">

/* Theme (user-documented overrideables for nav appearance) */

.distill-site-nav {
  color: rgba(255, 255, 255, 0.8);
  background-color: #0F2E3D;
  font-size: 15px;
  font-weight: 300;
}

.distill-site-nav a {
  color: inherit;
  text-decoration: none;
}

.distill-site-nav a:hover {
  color: white;
}

@media print {
  .distill-site-nav {
    display: none;
  }
}

.distill-site-header {

}

.distill-site-footer {

}


/* Site Header */

.distill-site-header {
  width: 100%;
  box-sizing: border-box;
  z-index: 3;
}

.distill-site-header .nav-left {
  display: inline-block;
  margin-left: 8px;
}

@media screen and (max-width: 768px) {
  .distill-site-header .nav-left {
    margin-left: 0;
  }
}


.distill-site-header .nav-right {
  float: right;
  margin-right: 8px;
}

.distill-site-header a,
.distill-site-header .title {
  display: inline-block;
  text-align: center;
  padding: 14px 10px 14px 10px;
}

.distill-site-header .title {
  font-size: 18px;
  min-width: 150px;
}

.distill-site-header .logo {
  padding: 0;
}

.distill-site-header .logo img {
  display: none;
  max-height: 20px;
  width: auto;
  margin-bottom: -4px;
}

.distill-site-header .nav-image img {
  max-height: 18px;
  width: auto;
  display: inline-block;
  margin-bottom: -3px;
}



@media screen and (min-width: 1000px) {
  .distill-site-header .logo img {
    display: inline-block;
  }
  .distill-site-header .nav-left {
    margin-left: 20px;
  }
  .distill-site-header .nav-right {
    margin-right: 20px;
  }
  .distill-site-header .title {
    padding-left: 12px;
  }
}


.distill-site-header .nav-toggle {
  display: none;
}

.nav-dropdown {
  display: inline-block;
  position: relative;
}

.nav-dropdown .nav-dropbtn {
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 16px 10px;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  margin: 0;
  margin-top: 1px;
  z-index: 2;
}

.nav-dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 200px;
  border: 1px solid rgba(0,0,0,0.15);
  border-radius: 4px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
  margin-top: 2px;
  white-space: nowrap;
  padding-top: 4px;
  padding-bottom: 4px;
}

.nav-dropdown-content hr {
  margin-top: 4px;
  margin-bottom: 4px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.nav-dropdown-active {
  display: block;
}

.nav-dropdown-content a, .nav-dropdown-content .nav-dropdown-header {
  color: black;
  padding: 6px 24px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.nav-dropdown-content .nav-dropdown-header {
  display: block;
  padding: 5px 24px;
  padding-bottom: 0;
  text-transform: uppercase;
  font-size: 14px;
  color: #999999;
  white-space: nowrap;
}

.nav-dropdown:hover .nav-dropbtn {
  color: white;
}

.nav-dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.nav-right .nav-dropdown-content {
  margin-left: -45%;
  right: 0;
}

@media screen and (max-width: 768px) {
  .distill-site-header a, .distill-site-header .nav-dropdown  {display: none;}
  .distill-site-header a.nav-toggle {
    float: right;
    display: block;
  }
  .distill-site-header .title {
    margin-left: 0;
  }
  .distill-site-header .nav-right {
    margin-right: 0;
  }
  .distill-site-header {
    overflow: hidden;
  }
  .nav-right .nav-dropdown-content {
    margin-left: 0;
  }
}


@media screen and (max-width: 768px) {
  .distill-site-header.responsive {position: relative; min-height: 500px; }
  .distill-site-header.responsive a.nav-toggle {
    position: absolute;
    right: 0;
    top: 0;
  }
  .distill-site-header.responsive a,
  .distill-site-header.responsive .nav-dropdown {
    display: block;
    text-align: left;
  }
  .distill-site-header.responsive .nav-left,
  .distill-site-header.responsive .nav-right {
    width: 100%;
  }
  .distill-site-header.responsive .nav-dropdown {float: none;}
  .distill-site-header.responsive .nav-dropdown-content {position: relative;}
  .distill-site-header.responsive .nav-dropdown .nav-dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}

/* Site Footer */

.distill-site-footer {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 3;
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
}

/* Headroom */

d-title {
  padding-top: 6rem;
}

@media print {
  d-title {
    padding-top: 4rem;
  }
}

.headroom {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.headroom--transition {
  transition: all .4s ease-in-out;
}

.headroom--unpinned {
  top: -100px;
}

.headroom--pinned {
  top: 0;
}

/* adjust viewport for navbar height */
/* helps vertically center bootstrap (non-distill) content */
.min-vh-100 {
  min-height: calc(100vh - 100px) !important;
}

</style>

<script src="../../site_libs/jquery-3.6.0/jquery-3.6.0.min.js"></script>
<link href="../../site_libs/font-awesome-5.1.0/css/all.css" rel="stylesheet"/>
<link href="../../site_libs/font-awesome-5.1.0/css/v4-shims.css" rel="stylesheet"/>
<script src="../../site_libs/headroom-0.9.4/headroom.min.js"></script>
<script src="../../site_libs/autocomplete-0.37.1/autocomplete.min.js"></script>
<script src="../../site_libs/fuse-6.4.1/fuse.min.js"></script>

<script type="application/javascript">

function getMeta(metaName) {
  var metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }
  return '';
}

function offsetURL(url) {
  var offset = getMeta('distill:offset');
  return offset ? offset + '/' + url : url;
}

function createFuseIndex() {

  // create fuse index
  var options = {
    keys: [
      { name: 'title', weight: 20 },
      { name: 'categories', weight: 15 },
      { name: 'description', weight: 10 },
      { name: 'contents', weight: 5 },
    ],
    ignoreLocation: true,
    threshold: 0
  };
  var fuse = new window.Fuse([], options);

  // fetch the main search.json
  return fetch(offsetURL('search.json'))
    .then(function(response) {
      if (response.status == 200) {
        return response.json().then(function(json) {
          // index main articles
          json.articles.forEach(function(article) {
            fuse.add(article);
          });
          // download collections and index their articles
          return Promise.all(json.collections.map(function(collection) {
            return fetch(offsetURL(collection)).then(function(response) {
              if (response.status === 200) {
                return response.json().then(function(articles) {
                  articles.forEach(function(article) {
                    fuse.add(article);
                  });
                })
              } else {
                return Promise.reject(
                  new Error('Unexpected status from search index request: ' +
                            response.status)
                );
              }
            });
          })).then(function() {
            return fuse;
          });
        });

      } else {
        return Promise.reject(
          new Error('Unexpected status from search index request: ' +
                      response.status)
        );
      }
    });
}

window.document.addEventListener("DOMContentLoaded", function (event) {

  // get search element (bail if we don't have one)
  var searchEl = window.document.getElementById('distill-search');
  if (!searchEl)
    return;

  createFuseIndex()
    .then(function(fuse) {

      // make search box visible
      searchEl.classList.remove('hidden');

      // initialize autocomplete
      var options = {
        autoselect: true,
        hint: false,
        minLength: 2,
      };
      window.autocomplete(searchEl, options, [{
        source: function(query, callback) {
          const searchOptions = {
            isCaseSensitive: false,
            shouldSort: true,
            minMatchCharLength: 2,
            limit: 10,
          };
          var results = fuse.search(query, searchOptions);
          callback(results
            .map(function(result) { return result.item; })
          );
        },
        templates: {
          suggestion: function(suggestion) {
            var img = suggestion.preview && Object.keys(suggestion.preview).length > 0
              ? `<img src="${offsetURL(suggestion.preview)}"</img>`
              : '';
            var html = `
              <div class="search-item">
                <h3>${suggestion.title}</h3>
                <div class="search-item-description">
                  ${suggestion.description || ''}
                </div>
                <div class="search-item-preview">
                  ${img}
                </div>
              </div>
            `;
            return html;
          }
        }
      }]).on('autocomplete:selected', function(event, suggestion) {
        window.location.href = offsetURL(suggestion.path);
      });
      // remove inline display style on autocompleter (we want to
      // manage responsive display via css)
      $('.algolia-autocomplete').css("display", "");
    })
    .catch(function(error) {
      console.log(error);
    });

});

</script>

<style type="text/css">

.nav-search {
  font-size: x-small;
}

/* Algolioa Autocomplete */

.algolia-autocomplete {
  display: inline-block;
  margin-left: 10px;
  vertical-align: sub;
  background-color: white;
  color: black;
  padding: 6px;
  padding-top: 8px;
  padding-bottom: 0;
  border-radius: 6px;
  border: 1px #0F2E3D solid;
  width: 180px;
}


@media screen and (max-width: 768px) {
  .distill-site-nav .algolia-autocomplete {
    display: none;
    visibility: hidden;
  }
  .distill-site-nav.responsive .algolia-autocomplete {
    display: inline-block;
    visibility: visible;
  }
  .distill-site-nav.responsive .algolia-autocomplete .aa-dropdown-menu {
    margin-left: 0;
    width: 400px;
    max-height: 400px;
  }
}

.algolia-autocomplete .aa-input, .algolia-autocomplete .aa-hint {
  width: 90%;
  outline: none;
  border: none;
}

.algolia-autocomplete .aa-hint {
  color: #999;
}
.algolia-autocomplete .aa-dropdown-menu {
  width: 550px;
  max-height: 70vh;
  overflow-x: visible;
  overflow-y: scroll;
  padding: 5px;
  margin-top: 3px;
  margin-left: -150px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #999;
  border-top: none;
}

.algolia-autocomplete .aa-dropdown-menu .aa-suggestion {
  cursor: pointer;
  padding: 5px 4px;
  border-bottom: 1px solid #eee;
}

.algolia-autocomplete .aa-dropdown-menu .aa-suggestion:last-of-type {
  border-bottom: none;
  margin-bottom: 2px;
}

.algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item {
  overflow: hidden;
  font-size: 0.8em;
  line-height: 1.4em;
}

.algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item h3 {
  font-size: 1rem;
  margin-block-start: 0;
  margin-block-end: 5px;
}

.algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item-description {
  display: inline-block;
  overflow: hidden;
  height: 2.8em;
  width: 80%;
  margin-right: 4%;
}

.algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item-preview {
  display: inline-block;
  width: 15%;
}

.algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item-preview img {
  height: 3em;
  width: auto;
  display: none;
}

.algolia-autocomplete .aa-dropdown-menu .aa-suggestion .search-item-preview img[src] {
  display: initial;
}

.algolia-autocomplete .aa-dropdown-menu .aa-suggestion.aa-cursor {
  background-color: #eee;
}
.algolia-autocomplete .aa-dropdown-menu .aa-suggestion em {
  font-weight: bold;
  font-style: normal;
}

</style>


<!--/radix_placeholder_navigation_in_header-->
  <!--radix_placeholder_distill-->

<style type="text/css">

body {
  background-color: white;
}

.pandoc-table {
  width: 100%;
}

.pandoc-table>caption {
  margin-bottom: 10px;
}

.pandoc-table th:not([align]) {
  text-align: left;
}

.pagedtable-footer {
  font-size: 15px;
}

d-byline .byline {
  grid-template-columns: 2fr 2fr;
}

d-byline .byline h3 {
  margin-block-start: 1.5em;
}

d-byline .byline .authors-affiliations h3 {
  margin-block-start: 0.5em;
}

.authors-affiliations .orcid-id {
  width: 16px;
  height:16px;
  margin-left: 4px;
  margin-right: 4px;
  vertical-align: middle;
  padding-bottom: 2px;
}

d-title .dt-tags {
  margin-top: 1em;
  grid-column: text;
}

.dt-tags .dt-tag {
  text-decoration: none;
  display: inline-block;
  color: rgba(0,0,0,0.6);
  padding: 0em 0.4em;
  margin-right: 0.5em;
  margin-bottom: 0.4em;
  font-size: 70%;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 500;
}

d-article table.gt_table td,
d-article table.gt_table th {
  border-bottom: none;
}

.html-widget {
  margin-bottom: 2.0em;
}

.l-screen-inset {
  padding-right: 16px;
}

.l-screen .caption {
  margin-left: 10px;
}

.shaded {
  background: rgb(247, 247, 247);
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.shaded .html-widget {
  margin-bottom: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.shaded .shaded-content {
  background: white;
}

.text-output {
  margin-top: 0;
  line-height: 1.5em;
}

.hidden {
  display: none !important;
}

d-article {
  padding-top: 2.5rem;
  padding-bottom: 30px;
}

d-appendix {
  padding-top: 30px;
}

d-article>p>img {
  width: 100%;
}

d-article h2 {
  margin: 1rem 0 1.5rem 0;
}

d-article h3 {
  margin-top: 1.5rem;
}

d-article iframe {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2.0em;
  width: 100%;
}

/* Tweak code blocks */

d-article div.sourceCode code,
d-article pre code {
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
}

d-article pre,
d-article div.sourceCode,
d-article div.sourceCode pre {
  overflow: auto;
}

d-article div.sourceCode {
  background-color: white;
}

d-article div.sourceCode pre {
  padding-left: 10px;
  font-size: 12px;
  border-left: 2px solid rgba(0,0,0,0.1);
}

d-article pre {
  font-size: 12px;
  color: black;
  background: none;
  margin-top: 0;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

d-article pre a {
  border-bottom: none;
}

d-article pre a:hover {
  border-bottom: none;
  text-decoration: underline;
}

d-article details {
  grid-column: text;
  margin-bottom: 0.8em;
}

@media(min-width: 768px) {

d-article pre,
d-article div.sourceCode,
d-article div.sourceCode pre {
  overflow: visible !important;
}

d-article div.sourceCode pre {
  padding-left: 18px;
  font-size: 14px;
}

d-article pre {
  font-size: 14px;
}

}

figure img.external {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  padding: 18px;
  box-sizing: border-box;
}

/* CSS for d-contents */

.d-contents {
  grid-column: text;
  color: rgba(0,0,0,0.8);
  font-size: 0.9em;
  padding-bottom: 1em;
  margin-bottom: 1em;
  padding-bottom: 0.5em;
  margin-bottom: 1em;
  padding-left: 0.25em;
  justify-self: start;
}

@media(min-width: 1000px) {
  .d-contents.d-contents-float {
    height: 0;
    grid-column-start: 1;
    grid-column-end: 4;
    justify-self: center;
    padding-right: 3em;
    padding-left: 2em;
  }
}

.d-contents nav h3 {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 1em;
}

.d-contents li {
  list-style-type: none
}

.d-contents nav > ul {
  padding-left: 0;
}

.d-contents ul {
  padding-left: 1em
}

.d-contents nav ul li {
  margin-top: 0.6em;
  margin-bottom: 0.2em;
}

.d-contents nav a {
  font-size: 13px;
  border-bottom: none;
  text-decoration: none
  color: rgba(0, 0, 0, 0.8);
}

.d-contents nav a:hover {
  text-decoration: underline solid rgba(0, 0, 0, 0.6)
}

.d-contents nav > ul > li > a {
  font-weight: 600;
}

.d-contents nav > ul > li > ul {
  font-weight: inherit;
}

.d-contents nav > ul > li > ul > li {
  margin-top: 0.2em;
}


.d-contents nav ul {
  margin-top: 0;
  margin-bottom: 0.25em;
}

.d-article-with-toc h2:nth-child(2) {
  margin-top: 0;
}


/* Figure */

.figure {
  position: relative;
  margin-bottom: 2.5em;
  margin-top: 1.5em;
}

.figure img {
  width: 100%;
}

.figure .caption {
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  line-height: 1.5em;
}

.figure img.external {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  padding: 18px;
  box-sizing: border-box;
}

.figure .caption a {
  color: rgba(0, 0, 0, 0.6);
}

.figure .caption b,
.figure .caption strong, {
  font-weight: 600;
  color: rgba(0, 0, 0, 1.0);
}

/* Citations */

d-article .citation {
  color: inherit;
  cursor: inherit;
}

div.hanging-indent{
  margin-left: 1em; text-indent: -1em;
}

/* Citation hover box */

.tippy-box[data-theme~=light-border] {
  background-color: rgba(250, 250, 250, 0.95);
}

.tippy-content > p {
  margin-bottom: 0;
  padding: 2px;
}


/* Tweak 1000px media break to show more text */

@media(min-width: 1000px) {
  .base-grid,
  distill-header,
  d-title,
  d-abstract,
  d-article,
  d-appendix,
  distill-appendix,
  d-byline,
  d-footnote-list,
  d-citation-list,
  distill-footer {
    grid-template-columns: [screen-start] 1fr [page-start kicker-start] 80px [middle-start] 50px [text-start kicker-end] 65px 65px 65px 65px 65px 65px 65px 65px [text-end gutter-start] 65px [middle-end] 65px [page-end gutter-end] 1fr [screen-end];
    grid-column-gap: 16px;
  }

  .grid {
    grid-column-gap: 16px;
  }

  d-article {
    font-size: 1.06rem;
    line-height: 1.7em;
  }
  figure .caption, .figure .caption, figure figcaption {
    font-size: 13px;
  }
}

@media(min-width: 1180px) {
  .base-grid,
  distill-header,
  d-title,
  d-abstract,
  d-article,
  d-appendix,
  distill-appendix,
  d-byline,
  d-footnote-list,
  d-citation-list,
  distill-footer {
    grid-template-columns: [screen-start] 1fr [page-start kicker-start] 60px [middle-start] 60px [text-start kicker-end] 60px 60px 60px 60px 60px 60px 60px 60px [text-end gutter-start] 60px [middle-end] 60px [page-end gutter-end] 1fr [screen-end];
    grid-column-gap: 32px;
  }

  .grid {
    grid-column-gap: 32px;
  }
}


/* Get the citation styles for the appendix (not auto-injected on render since
   we do our own rendering of the citation appendix) */

d-appendix .citation-appendix,
.d-appendix .citation-appendix {
  font-size: 11px;
  line-height: 15px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 18px;
  border: 1px solid rgba(0,0,0,0.1);
  background: rgba(0, 0, 0, 0.02);
  padding: 10px 18px;
  border-radius: 3px;
  color: rgba(150, 150, 150, 1);
  overflow: hidden;
  margin-top: -12px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* Include appendix styles here so they can be overridden */

d-appendix {
  contain: layout style;
  font-size: 0.8em;
  line-height: 1.7em;
  margin-top: 60px;
  margin-bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0,0,0,0.5);
  padding-top: 60px;
  padding-bottom: 48px;
}

d-appendix h3 {
  grid-column: page-start / text-start;
  font-size: 15px;
  font-weight: 500;
  margin-top: 1em;
  margin-bottom: 0;
  color: rgba(0,0,0,0.65);
}

d-appendix h3 + * {
  margin-top: 1em;
}

d-appendix ol {
  padding: 0 0 0 15px;
}

@media (min-width: 768px) {
  d-appendix ol {
    padding: 0 0 0 30px;
    margin-left: -30px;
  }
}

d-appendix li {
  margin-bottom: 1em;
}

d-appendix a {
  color: rgba(0, 0, 0, 0.6);
}

d-appendix > * {
  grid-column: text;
}

d-appendix > d-footnote-list,
d-appendix > d-citation-list,
d-appendix > distill-appendix {
  grid-column: screen;
}

/* Include footnote styles here so they can be overridden */

d-footnote-list {
  contain: layout style;
}

d-footnote-list > * {
  grid-column: text;
}

d-footnote-list a.footnote-backlink {
  color: rgba(0,0,0,0.3);
  padding-left: 0.5em;
}



/* Anchor.js */

.anchorjs-link {
  /*transition: all .25s linear; */
  text-decoration: none;
  border-bottom: none;
}
*:hover > .anchorjs-link {
  margin-left: -1.125em !important;
  text-decoration: none;
  border-bottom: none;
}

/* Social footer */

.social_footer {
  margin-top: 30px;
  margin-bottom: 0;
  color: rgba(0,0,0,0.67);
}

.disqus-comments {
  margin-right: 30px;
}

.disqus-comment-count {
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

#disqus_thread {
  margin-top: 30px;
}

.article-sharing a {
  border-bottom: none;
  margin-right: 8px;
}

.article-sharing a:hover {
  border-bottom: none;
}

.sidebar-section.subscribe {
  font-size: 12px;
  line-height: 1.6em;
}

.subscribe p {
  margin-bottom: 0.5em;
}


.article-footer .subscribe {
  font-size: 15px;
  margin-top: 45px;
}


.sidebar-section.custom {
  font-size: 12px;
  line-height: 1.6em;
}

.custom p {
  margin-bottom: 0.5em;
}

/* Styles for listing layout (hide title) */
.layout-listing d-title, .layout-listing .d-title {
  display: none;
}

/* Styles for posts lists (not auto-injected) */


.posts-with-sidebar {
  padding-left: 45px;
  padding-right: 45px;
}

.posts-list .description h2,
.posts-list .description p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;
}

.posts-list .description h2 {
  font-weight: 700;
  border-bottom: none;
  padding-bottom: 0;
}

.posts-list h2.post-tag {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 12px;
}
.posts-list {
  margin-top: 60px;
  margin-bottom: 24px;
}

.posts-list .post-preview {
  text-decoration: none;
  overflow: hidden;
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px 0;
}

.post-preview-last {
  border-bottom: none !important;
}

.posts-list .posts-list-caption {
  grid-column: screen;
  font-weight: 400;
}

.posts-list .post-preview h2 {
  margin: 0 0 6px 0;
  line-height: 1.2em;
  font-style: normal;
  font-size: 24px;
}

.posts-list .post-preview p {
  margin: 0 0 12px 0;
  line-height: 1.4em;
  font-size: 16px;
}

.posts-list .post-preview .thumbnail {
  box-sizing: border-box;
  margin-bottom: 24px;
  position: relative;
  max-width: 500px;
}
.posts-list .post-preview img {
  width: 100%;
  display: block;
}

.posts-list .metadata {
  font-size: 12px;
  line-height: 1.4em;
  margin-bottom: 18px;
}

.posts-list .metadata > * {
  display: inline-block;
}

.posts-list .metadata .publishedDate {
  margin-right: 2em;
}

.posts-list .metadata .dt-authors {
  display: block;
  margin-top: 0.3em;
  margin-right: 2em;
}

.posts-list .dt-tags {
  display: block;
  line-height: 1em;
}

.posts-list .dt-tags .dt-tag {
  display: inline-block;
  color: rgba(0,0,0,0.6);
  padding: 0.3em 0.4em;
  margin-right: 0.2em;
  margin-bottom: 0.4em;
  font-size: 60%;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 500;
}

.posts-list img {
  opacity: 1;
}

.posts-list img[data-src] {
  opacity: 0;
}

.posts-more {
  clear: both;
}


.posts-sidebar {
  font-size: 16px;
}

.posts-sidebar h3 {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0.5em;
  font-weight: 400;
  text-transform: uppercase;
}

.sidebar-section {
  margin-bottom: 30px;
}

.categories ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.categories li {
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 0;
}

.categories li>a {
  border-bottom: none;
}

.categories li>a:hover {
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}

.categories .active {
  font-weight: 600;
}

.categories .category-count {
  color: rgba(0, 0, 0, 0.4);
}


@media(min-width: 768px) {
  .posts-list .post-preview h2 {
    font-size: 26px;
  }
  .posts-list .post-preview .thumbnail {
    float: right;
    width: 30%;
    margin-bottom: 0;
  }
  .posts-list .post-preview .description {
    float: left;
    width: 45%;
  }
  .posts-list .post-preview .metadata {
    float: left;
    width: 20%;
    margin-top: 8px;
  }
  .posts-list .post-preview p {
    margin: 0 0 12px 0;
    line-height: 1.5em;
    font-size: 16px;
  }
  .posts-with-sidebar .posts-list {
    float: left;
    width: 75%;
  }
  .posts-with-sidebar .posts-sidebar {
    float: right;
    width: 20%;
    margin-top: 60px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
}


/* Improve display for browsers without grid (IE/Edge <= 15) */

.downlevel {
  line-height: 1.6em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;
  margin: 0;
}

.downlevel .d-title {
  padding-top: 6rem;
  padding-bottom: 1.5rem;
}

.downlevel .d-title h1 {
  font-size: 50px;
  font-weight: 700;
  line-height: 1.1em;
  margin: 0 0 0.5rem;
}

.downlevel .d-title p {
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.55em;
  margin-top: 0;
}

.downlevel .d-byline {
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  font-size: 0.8rem;
  line-height: 1.8em;
}

.downlevel .section-separator {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.downlevel .d-article {
  font-size: 1.06rem;
  line-height: 1.7em;
  padding-top: 1rem;
  padding-bottom: 2rem;
}


.downlevel .d-appendix {
  padding-left: 0;
  padding-right: 0;
  max-width: none;
  font-size: 0.8em;
  line-height: 1.7em;
  margin-bottom: 0;
  color: rgba(0,0,0,0.5);
  padding-top: 40px;
  padding-bottom: 48px;
}

.downlevel .footnotes ol {
  padding-left: 13px;
}

.downlevel .base-grid,
.downlevel .distill-header,
.downlevel .d-title,
.downlevel .d-abstract,
.downlevel .d-article,
.downlevel .d-appendix,
.downlevel .distill-appendix,
.downlevel .d-byline,
.downlevel .d-footnote-list,
.downlevel .d-citation-list,
.downlevel .distill-footer,
.downlevel .appendix-bottom,
.downlevel .posts-container {
  padding-left: 40px;
  padding-right: 40px;
}

@media(min-width: 768px) {
  .downlevel .base-grid,
  .downlevel .distill-header,
  .downlevel .d-title,
  .downlevel .d-abstract,
  .downlevel .d-article,
  .downlevel .d-appendix,
  .downlevel .distill-appendix,
  .downlevel .d-byline,
  .downlevel .d-footnote-list,
  .downlevel .d-citation-list,
  .downlevel .distill-footer,
  .downlevel .appendix-bottom,
  .downlevel .posts-container {
  padding-left: 150px;
  padding-right: 150px;
  max-width: 900px;
}
}

.downlevel pre code {
  display: block;
  border-left: 2px solid rgba(0, 0, 0, .1);
  padding: 0 0 0 20px;
  font-size: 14px;
}

.downlevel code, .downlevel pre {
  color: black;
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

.downlevel .posts-list .post-preview {
  color: inherit;
}



</style>

<script type="application/javascript">

function is_downlevel_browser() {
  if (bowser.isUnsupportedBrowser({ msie: "12", msedge: "16"},
                                 window.navigator.userAgent)) {
    return true;
  } else {
    return window.load_distill_framework === undefined;
  }
}

// show body when load is complete
function on_load_complete() {

  // add anchors
  if (window.anchors) {
    window.anchors.options.placement = 'left';
    window.anchors.add('d-article > h2, d-article > h3, d-article > h4, d-article > h5');
  }


  // set body to visible
  document.body.style.visibility = 'visible';

  // force redraw for leaflet widgets
  if (window.HTMLWidgets) {
    var maps = window.HTMLWidgets.findAll(".leaflet");
    $.each(maps, function(i, el) {
      var map = this.getMap();
      map.invalidateSize();
      map.eachLayer(function(layer) {
        if (layer instanceof L.TileLayer)
          layer.redraw();
      });
    });
  }

  // trigger 'shown' so htmlwidgets resize
  $('d-article').trigger('shown');
}

function init_distill() {

  init_common();

  // create front matter
  var front_matter = $('<d-front-matter></d-front-matter>');
  $('#distill-front-matter').wrap(front_matter);

  // create d-title
  $('.d-title').changeElementType('d-title');

  // create d-byline
  var byline = $('<d-byline></d-byline>');
  $('.d-byline').replaceWith(byline);

  // create d-article
  var article = $('<d-article></d-article>');
  $('.d-article').wrap(article).children().unwrap();

  // move posts container into article
  $('.posts-container').appendTo($('d-article'));

  // create d-appendix
  $('.d-appendix').changeElementType('d-appendix');

  // flag indicating that we have appendix items
  var appendix = $('.appendix-bottom').children('h3').length > 0;

  // replace footnotes with <d-footnote>
  $('.footnote-ref').each(function(i, val) {
    appendix = true;
    var href = $(this).attr('href');
    var id = href.replace('#', '');
    var fn = $('#' + id);
    var fn_p = $('#' + id + '>p');
    fn_p.find('.footnote-back').remove();
    var text = fn_p.html();
    var dtfn = $('<d-footnote></d-footnote>');
    dtfn.html(text);
    $(this).replaceWith(dtfn);
  });
  // remove footnotes
  $('.footnotes').remove();

  // move refs into #references-listing
  $('#references-listing').replaceWith($('#refs'));

  $('h1.appendix, h2.appendix').each(function(i, val) {
    $(this).changeElementType('h3');
  });
  $('h3.appendix').each(function(i, val) {
    var id = $(this).attr('id');
    $('.d-contents a[href="#' + id + '"]').parent().remove();
    appendix = true;
    $(this).nextUntil($('h1, h2, h3')).addBack().appendTo($('d-appendix'));
  });

  // show d-appendix if we have appendix content
  $("d-appendix").css('display', appendix ? 'grid' : 'none');

  // localize layout chunks to just output
  $('.layout-chunk').each(function(i, val) {

    // capture layout
    var layout = $(this).attr('data-layout');

    // apply layout to markdown level block elements
    var elements = $(this).children().not('details, div.sourceCode, pre, script');
    elements.each(function(i, el) {
      var layout_div = $('<div class="' + layout + '"></div>');
      if (layout_div.hasClass('shaded')) {
        var shaded_content = $('<div class="shaded-content"></div>');
        $(this).wrap(shaded_content);
        $(this).parent().wrap(layout_div);
      } else {
        $(this).wrap(layout_div);
      }
    });


    // unwrap the layout-chunk div
    $(this).children().unwrap();
  });

  // remove code block used to force  highlighting css
  $('.distill-force-highlighting-css').parent().remove();

  // remove empty line numbers inserted by pandoc when using a
  // custom syntax highlighting theme
  $('code.sourceCode a:empty').remove();

  // load distill framework
  load_distill_framework();

  // wait for window.distillRunlevel == 4 to do post processing
  function distill_post_process() {

    if (!window.distillRunlevel || window.distillRunlevel < 4)
      return;

    // hide author/affiliations entirely if we have no authors
    var front_matter = JSON.parse($("#distill-front-matter").html());
    var have_authors = front_matter.authors && front_matter.authors.length > 0;
    if (!have_authors)
      $('d-byline').addClass('hidden');

    // article with toc class
    $('.d-contents').parent().addClass('d-article-with-toc');

    // strip links that point to #
    $('.authors-affiliations').find('a[href="#"]').removeAttr('href');

    // add orcid ids
    $('.authors-affiliations').find('.author').each(function(i, el) {
      var orcid_id = front_matter.authors[i].orcidID;
      if (orcid_id) {
        var a = $('<a></a>');
        a.attr('href', 'https://orcid.org/' + orcid_id);
        var img = $('<img></img>');
        img.addClass('orcid-id');
        img.attr('alt', 'ORCID ID');
        img.attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1N0NEMjA4MDI1MjA2ODExOTk0QzkzNTEzRjZEQTg1NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozM0NDOEJGNEZGNTcxMUUxODdBOEVCODg2RjdCQ0QwOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozM0NDOEJGM0ZGNTcxMUUxODdBOEVCODg2RjdCQ0QwOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZDN0YxMTc0MDcyMDY4MTE5NUZFRDc5MUM2MUUwNEREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU3Q0QyMDgwMjUyMDY4MTE5OTRDOTM1MTNGNkRBODU3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+84NovQAAAR1JREFUeNpiZEADy85ZJgCpeCB2QJM6AMQLo4yOL0AWZETSqACk1gOxAQN+cAGIA4EGPQBxmJA0nwdpjjQ8xqArmczw5tMHXAaALDgP1QMxAGqzAAPxQACqh4ER6uf5MBlkm0X4EGayMfMw/Pr7Bd2gRBZogMFBrv01hisv5jLsv9nLAPIOMnjy8RDDyYctyAbFM2EJbRQw+aAWw/LzVgx7b+cwCHKqMhjJFCBLOzAR6+lXX84xnHjYyqAo5IUizkRCwIENQQckGSDGY4TVgAPEaraQr2a4/24bSuoExcJCfAEJihXkWDj3ZAKy9EJGaEo8T0QSxkjSwORsCAuDQCD+QILmD1A9kECEZgxDaEZhICIzGcIyEyOl2RkgwAAhkmC+eAm0TAAAAABJRU5ErkJggg==');
        a.append(img);
        $(this).append(a);
      }
    });

    // hide elements of author/affiliations grid that have no value
    function hide_byline_column(caption) {
      $('d-byline').find('h3:contains("' + caption + '")').parent().css('visibility', 'hidden');
    }

    // affiliations
    var have_affiliations = false;
    for (var i = 0; i<front_matter.authors.length; ++i) {
      var author = front_matter.authors[i];
      if (author.affiliation !== "&nbsp;") {
        have_affiliations = true;
        break;
      }
    }
    if (!have_affiliations)
      $('d-byline').find('h3:contains("Affiliations")').css('visibility', 'hidden');

    // published date
    if (!front_matter.publishedDate)
      hide_byline_column("Published");

    // document object identifier
    var doi = $('d-byline').find('h3:contains("DOI")');
    var doi_p = doi.next().empty();
    if (!front_matter.doi) {
      // if we have a citation and valid citationText then link to that
      if ($('#citation').length > 0 && front_matter.citationText) {
        doi.html('Citation');
        $('<a href="#citation"></a>')
          .text(front_matter.citationText)
          .appendTo(doi_p);
      } else {
        hide_byline_column("DOI");
      }
    } else {
      $('<a></a>')
         .attr('href', "https://doi.org/" + front_matter.doi)
         .html(front_matter.doi)
         .appendTo(doi_p);
    }

     // change plural form of authors/affiliations
    if (front_matter.authors.length === 1) {
      var grid = $('.authors-affiliations');
      grid.children('h3:contains("Authors")').text('Author');
      grid.children('h3:contains("Affiliations")').text('Affiliation');
    }

    // remove d-appendix and d-footnote-list local styles
    $('d-appendix > style:first-child').remove();
    $('d-footnote-list > style:first-child').remove();

    // move appendix-bottom entries to the bottom
    $('.appendix-bottom').appendTo('d-appendix').children().unwrap();
    $('.appendix-bottom').remove();

    // hoverable references
    $('span.citation[data-cites]').each(function() {
      var refs = $(this).attr('data-cites').split(" ");
      var refHtml = refs.map(function(ref) {
        return "<p>" + $('#ref-' + ref).html() + "</p>";
      }).join("\n");
      window.tippy(this, {
        allowHTML: true,
        content: refHtml,
        maxWidth: 500,
        interactive: true,
        interactiveBorder: 10,
        theme: 'light-border',
        placement: 'bottom-start'
      });
    });

    // clear polling timer
    clearInterval(tid);

    // show body now that everything is ready
    on_load_complete();
  }

  var tid = setInterval(distill_post_process, 50);
  distill_post_process();

}

function init_downlevel() {

  init_common();

   // insert hr after d-title
  $('.d-title').after($('<hr class="section-separator"/>'));

  // check if we have authors
  var front_matter = JSON.parse($("#distill-front-matter").html());
  var have_authors = front_matter.authors && front_matter.authors.length > 0;

  // manage byline/border
  if (!have_authors)
    $('.d-byline').remove();
  $('.d-byline').after($('<hr class="section-separator"/>'));
  $('.d-byline a').remove();

  // remove toc
  $('.d-contents').remove();

  // move appendix elements
  $('h1.appendix, h2.appendix').each(function(i, val) {
    $(this).changeElementType('h3');
  });
  $('h3.appendix').each(function(i, val) {
    $(this).nextUntil($('h1, h2, h3')).addBack().appendTo($('.d-appendix'));
  });


  // inject headers into references and footnotes
  var refs_header = $('<h3></h3>');
  refs_header.text('References');
  $('#refs').prepend(refs_header);

  var footnotes_header = $('<h3></h3');
  footnotes_header.text('Footnotes');
  $('.footnotes').children('hr').first().replaceWith(footnotes_header);

  // move appendix-bottom entries to the bottom
  $('.appendix-bottom').appendTo('.d-appendix').children().unwrap();
  $('.appendix-bottom').remove();

  // remove appendix if it's empty
  if ($('.d-appendix').children().length === 0)
    $('.d-appendix').remove();

  // prepend separator above appendix
  $('.d-appendix').before($('<hr class="section-separator" style="clear: both"/>'));

  // trim code
  $('pre>code').each(function(i, val) {
    $(this).html($.trim($(this).html()));
  });

  // move posts-container right before article
  $('.posts-container').insertBefore($('.d-article'));

  $('body').addClass('downlevel');

  on_load_complete();
}


function init_common() {

  // jquery plugin to change element types
  (function($) {
    $.fn.changeElementType = function(newType) {
      var attrs = {};

      $.each(this[0].attributes, function(idx, attr) {
        attrs[attr.nodeName] = attr.nodeValue;
      });

      this.replaceWith(function() {
        return $("<" + newType + "/>", attrs).append($(this).contents());
      });
    };
  })(jQuery);

  // prevent underline for linked images
  $('a > img').parent().css({'border-bottom' : 'none'});

  // mark non-body figures created by knitr chunks as 100% width
  $('.layout-chunk').each(function(i, val) {
    var figures = $(this).find('img, .html-widget');
    if ($(this).attr('data-layout') !== "l-body") {
      figures.css('width', '100%');
    } else {
      figures.css('max-width', '100%');
      figures.filter("[width]").each(function(i, val) {
        var fig = $(this);
        fig.css('width', fig.attr('width') + 'px');
      });

    }
  });

  // auto-append index.html to post-preview links in file: protocol
  // and in rstudio ide preview
  $('.post-preview').each(function(i, val) {
    if (window.location.protocol === "file:")
      $(this).attr('href', $(this).attr('href') + "index.html");
  });

  // get rid of index.html references in header
  if (window.location.protocol !== "file:") {
    $('.distill-site-header a[href]').each(function(i,val) {
      $(this).attr('href', $(this).attr('href').replace("index.html", "./"));
    });
  }

  // add class to pandoc style tables
  $('tr.header').parent('thead').parent('table').addClass('pandoc-table');
  $('.kable-table').children('table').addClass('pandoc-table');

  // add figcaption style to table captions
  $('caption').parent('table').addClass("figcaption");

  // initialize posts list
  if (window.init_posts_list)
    window.init_posts_list();

  // implmement disqus comment link
  $('.disqus-comment-count').click(function() {
    window.headroom_prevent_pin = true;
    $('#disqus_thread').toggleClass('hidden');
    if (!$('#disqus_thread').hasClass('hidden')) {
      var offset = $(this).offset();
      $(window).resize();
      $('html, body').animate({
        scrollTop: offset.top - 35
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  if (is_downlevel_browser())
    init_downlevel();
  else
    window.addEventListener('WebComponentsReady', init_distill);
});

</script>

<!--/radix_placeholder_distill-->
  <script src="../../site_libs/header-attrs-2.14/header-attrs.js"></script>
  <script src="../../site_libs/jquery-3.6.0/jquery-3.6.0.min.js"></script>
  <script src="../../site_libs/popper-2.6.0/popper.min.js"></script>
  <link href="../../site_libs/tippy-6.2.7/tippy.css" rel="stylesheet" />
  <link href="../../site_libs/tippy-6.2.7/tippy-light-border.css" rel="stylesheet" />
  <script src="../../site_libs/tippy-6.2.7/tippy.umd.min.js"></script>
  <script src="../../site_libs/anchor-4.2.2/anchor.min.js"></script>
  <script src="../../site_libs/bowser-1.9.3/bowser.min.js"></script>
  <script src="../../site_libs/webcomponents-2.0.0/webcomponents.js"></script>
  <script src="../../site_libs/distill-2.2.21/template.v2.js"></script>
  <!--radix_placeholder_site_in_header-->
<!--/radix_placeholder_site_in_header-->


</head>

<body>

<!--radix_placeholder_front_matter-->

<script id="distill-front-matter" type="text/json">
{"title":"Introduction to Football Networks","description":"In this blog, We'll be referring to soccer as football -- since it's played with a foot.","authors":[{"author":"Isha Akshita Mahajan, Ankit Kumar","authorURL":"#","affiliation":"UMass Amherst","affiliationURL":"#","orcidID":""}],"publishedDate":"2022-05-08T00:00:00.000-04:00","citationText":"Kumar, 2022"}
</script>

<!--/radix_placeholder_front_matter-->
<!--radix_placeholder_navigation_before_body-->
<header class="header header--fixed" role="banner">
<nav class="distill-site-nav distill-site-header">
<div class="nav-left">
<a href="../../index.html" class="title">Football Networks</a>
<input id="distill-search" class="nav-search hidden" type="text" placeholder="Search..."/>
</div>
<div class="nav-right">
<a href="../../index.html">Home</a>
<a href="../../about.html">About</a>
<a href="javascript:void(0);" class="nav-toggle">&#9776;</a>
</div>
</nav>
</header>
<!--/radix_placeholder_navigation_before_body-->
<!--radix_placeholder_site_before_body-->
<!--/radix_placeholder_site_before_body-->

<div class="d-title">
<h1>Introduction to Football Networks</h1>
<!--radix_placeholder_categories-->
<!--/radix_placeholder_categories-->
<p><p>In this blog, We’ll be referring to soccer as football – since it’s played with a foot.</p></p>
</div>

<div class="d-byline">
  Isha Akshita Mahajan, Ankit Kumar  (UMass Amherst)
  
<br/>05-08-2022
</div>

<div class="d-article">
<h2 id="transfer-of-players-in-european-football">Transfer of players in European Football</h2>
<p>This blog is an attempt to examine a social network of football transfers in major football leagues. The data was extracted using web scraping techniques from transfermarket.co.uk which is known to be a reliable source for data on players and their movement in various sports.</p>
<p>Unlike American sports, where players transfer from one team to another either through contracts or through their agents. It is more like a trade. However, in the football transfer system, the players move from one team to another by the selling and buying process. The transaction that is made during the process is considered to be a transfer fee and is the amount that one team is paying to another while transferring the player. Usually 5 or 10 percent of this fee goes to the player themself.</p>
<p>These transactions happen during transfer windows which are similar to trade deadlines in the NBA. However, unlike a specific date, it is a window of time during which football clubs buy and sell players. These transfer windows in most European leagues are during the summer summer and winter.</p>
<p>In addition to transfers by paying money, players also move from one club to another on loans where they can temporally play for a team for which they dont have a contract. There is no transaction between the clubs however the club is still responsible for paying the player’s fee.</p>
<h2 id="webscraping">Webscraping</h2>
<p>The data was scraped using python and is attached to this blog. We extracted data from the year 2018-2021 which is 4 years and 8 transfer windows. We removed the free and loan transfers because they don’t show a transaction between the club.</p>
<div class="sourceCode" id="cb1"><pre class="sourceCode r distill-force-highlighting-css"><code class="sourceCode r"></code></pre></div>
<!--radix_placeholder_article_footer-->
<!--/radix_placeholder_article_footer-->
</div>

<div class="d-appendix">
</div>


<!--radix_placeholder_site_after_body-->
<!--/radix_placeholder_site_after_body-->
<!--radix_placeholder_appendices-->
<div class="appendix-bottom"></div>
<!--/radix_placeholder_appendices-->
<!--radix_placeholder_navigation_after_body-->
<!--/radix_placeholder_navigation_after_body-->

</body>

</html>
