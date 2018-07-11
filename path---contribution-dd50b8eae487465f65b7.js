webpackJsonp([0xec4d6e12d5a1],{621:function(a,e){a.exports={data:{markdownRemark:{html:'<h1 id="contribution-guidelines"><a href="#contribution-guidelines" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribution Guidelines</h1>\n<h2 id="naming-blocks"><a href="#naming-blocks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Naming Blocks</h2>\n<p>Components, layouts, and demos (blocks) should be in individual folders named using Pascal case (AaaBbb). This is the name that will appear in the navigation of the workspace.\nExample: <code>Button</code>, <code>SecondaryNav</code></p>\n<h3 id="component-example"><a href="#component-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Component Example</h3>\n<p>Examples require a parent javascript class in the component/examples folder (PatternFly uses React for building the example application). These files should be named with Pascal case: ComponentExample.js</p>\n<p>The example component will refer to example handlebars files. These should be named with kebab-case, including the block name plus the example name: <code>component-name-type-of-example.hbs</code></p>\n<p>Inside of the React component, we use JavaScript naming standards, naming the imports with Pascal case and properties or constants with camelCase.</p>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html">import BoxBasicExample from "./box-basic-example.hbs";\n...\nconst boxBasicExample = BoxBasicExample();\n...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Example</span> <span class="token attr-name">heading</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Box with no footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{boxNoHeaderExample}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Example</span><span class="token punctuation">></span></span>;\n</code></pre>\n      </div>\n<h3 id="handlebars-names"><a href="#handlebars-names" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Handlebars names</h3>\n<p>The main handlebars file for a block should be named using kebab case. For example, the secondary navigation would be made up of <code>secondary-nav.hbs</code> with elements defined in <code>secondary-nav-item.hbs</code> and <code>secondary-nav-link.hbs</code>.</p>\n<h3 id="modifier-parameter"><a href="#modifier-parameter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Modifier parameter</h3>\n<p>Every block and element should have a parameter allowing for modifier classes to be passed in. These should be named in kebab case with the block/element name plus <code>--modifier</code>.\nFor example:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html"><span class="token comment">&lt;!-- Component definition --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pf-c-card {{ pf-c-card--modifier }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  {{> @partial-block}}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n---\n<span class="token comment">&lt;!-- Using the component in handlebars --></span>\n{{#> card pf-c-card--modifier="pf-m-3xl pf-m-margin"}}\n  {{> @partial-block}}\n{{/card}}\n</code></pre>\n      </div>\n<p>When including a partial within a partial, by default, Handlebars will pass along the parent context to it\'s children. This would mean the value of any property specified by the parent is also used by the children.</p>\n<p>If there is a possibility of a block nested inside another block of the same type and you want to isolate that nested block, add a new context. For example - see how the nested box is defined below with \'newcontext\' added as an attribute:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html">{{#> card pf-c-card--modifier="pf-m-3xl pf-m-margin"}}\n  {{> @partial-block}}\n  {{#> card newcontext pf-c-card--modifier="pf-m-3xl pf-m-margin"}}\n    {{> @partial-block}}\n  {{/card}}\n{{/card}}\n</code></pre>\n      </div>\n<h2 id="common-modifier-class-names"><a href="#common-modifier-class-names" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Common Modifier Class Names</h2>\n<p>Modifier classes help us to create variations of blocks. Reuse names as much as possible to avoid confusion.</p>\n<table>\n<thead>\n<tr>\n<th>Modifier Class Name</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>pf-m-gutter</code></td>\n<td>Adds vertical (if applicable) and horizontal gutters to the element</td>\n</tr>\n</tbody>\n</table>',fields:{path:"/contribution",type:"page",contentType:"page"}}},pathContext:{pagePath:"/contribution",type:"page",contentType:"page"}}}});
//# sourceMappingURL=path---contribution-dd50b8eae487465f65b7.js.map