(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),l=a.n(i),r=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),m=a.n(s),d=a("QH2O"),u=a.n(d),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(p.b)("div",{className:m()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,l=o.subDirectory,b=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("9Hrx"),x=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0,strict:!0}),i=o===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,o);return Object(p.b)("li",{key:e,className:m()((t={},t[x.selectedItem]=i,t),x.listItem)},Object(p.b)(r.Link,{className:x.link,to:""+c},e))}));return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:x.list},o))))))},t}(o.a.Component),N=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,m=t.relativePagePath,d=t.titleType,u=s.tabs,j=s.title,f=s.theme,x=s.description,v=s.keywords,k=Object(y.a)().interiorTheme,w=Object(r.useStaticQuery)("2456312558").site.pathPrefix,P=w?n.pathname.replace(w,""):n.pathname,C=u?P.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",I=f||k;return Object(p.b)(c.a,{tabs:u,homepage:!1,theme:I,pageTitle:j,pageDescription:x,pageKeywords:v,titleType:d},Object(p.b)(g,{title:o?Object(p.b)(o,null):j,label:"label",tabs:u,theme:I}),u&&Object(p.b)(T,{slug:P,tabs:u,currentTab:C}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:m})),Object(p.b)(h.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:C}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},YAWK:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return O}));var n=a("k1TG"),o=a("8o2o"),i=(a("q1tI"),a("7ljp")),l=a("013z"),r=a("T0C+"),b=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=c("PageDescription"),m=c("Tabs"),d=c("Tab"),u=c("Accordion"),p=c("AccordionItem"),g={_frontmatter:b},j=l.a;function O(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(j,Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"Steps to prepare an environment using the ",Object(i.b)(r.a,{name:"shortName",mdxType:"Globals"})," in an existing OpenShift cluster.")),Object(i.b)(m,{mdxType:"Tabs"},Object(i.b)(d,{label:"Default",open:"true",mdxType:"Tab"},Object(i.b)("h3",null,"Run the installation using the OpenShift CLI"),Object(i.b)(u,{align:"start",mdxType:"Accordion"},Object(i.b)(p,{title:"Linux or MacOS",open:!0,mdxType:"AccordionItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"curl -sfL get.cloudnativetoolkit.dev | sh -\n"))),Object(i.b)(p,{title:"Windows Users",mdxType:"AccordionItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc create -f https://raw.githubusercontent.com/ibm-garage-cloud/ibm-garage-iteration-zero/master/install/install-ibm-toolkit.yaml\nsleep 5\noc wait pod -l job-name=ibm-toolkit --for=condition=Ready -n default\noc logs job/ibm-toolkit -f -n default\n\n"))))),Object(i.b)(d,{label:"Customize",open:"true",mdxType:"Tab"},Object(i.b)("h3",null,"A. Download the manifest ",Object(i.b)("inlineCode",{parentName:"h3"},"install-toolkit-yaml")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download the latest Toolkit installation manifest yaml file",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"curl -LO https://raw.githubusercontent.com/ibm-garage-cloud/ibm-garage-iteration-zero/master/install/install-ibm-toolkit.yaml\n"))),Object(i.b)("li",{parentName:"ol"},"If you want a specific version of the manifest yaml file visit the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases"}),"release page")," and download the corresponding manifest file ",Object(i.b)("inlineCode",{parentName:"li"},"install-toolkit-yaml"))),Object(i.b)("h3",null,"B. Customize Installation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Edit the file ",Object(i.b)("inlineCode",{parentName:"li"},"install-toolkit-yaml")," if you want to change any of the defaults, such as changing the tools namespace, adding a components from the catalog directory or removing a default component.")),Object(i.b)("h3",null,"C. Run the installation using the OpenShift CLI"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run the installation job after customizing the installation script"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc create -f install-ibm-toolkit.yaml\nsleep 5\noc wait pod -l job-name=ibm-toolkit --for=condition=Ready -n default\noc logs job/ibm-toolkit -f -n default\n\n")))))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-install-toolkit-quick-install-mdx-505780baff1fd87b75ec.js.map