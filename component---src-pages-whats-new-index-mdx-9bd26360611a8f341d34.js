(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),b=a.n(r),n=a("NmYn"),i=a.n(n),l=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),m=a.n(s),p=a("QH2O"),g=a.n(p),u=a("qKvR"),h=function(e){var t,a=e.title,r=e.theme,b=e.tabs,n=void 0===b?[]:b;return Object(u.b)("div",{className:m()(g.a.pageHeader,(t={},t[g.a.withTabs]=n.length,t[g.a.darkMode]="dark"===r,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:g.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,r=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||r,n=b.baseUrl,i=b.subDirectory,c=n+"/edit/"+b.branch+i+"/src/pages"+t;return n?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},d=a("FCXl"),v=a("9Hrx"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=i()(e,{lower:!0,strict:!0}),n=b===r,c=new RegExp(r+"/?(#.*)?$"),o=a.replace(c,b);return Object(u.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=n,t),N.listItem)},Object(u.b)(l.Link,{className:N.link,to:""+o},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},b))))))},t}(b.a.Component),k=a("MjG9"),I=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,b=e.Title,n=t.frontmatter,s=void 0===n?{}:n,m=t.relativePagePath,p=t.titleType,g=s.tabs,j=s.title,v=s.theme,N=s.description,y=s.keywords,x=Object(I.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,w=T?r.pathname.replace(T,""):r.pathname,M=g?w.split("/").filter(Boolean).slice(-1)[0]||i()(g[0],{lower:!0}):"",C=v||x;return Object(u.b)(o.a,{tabs:g,homepage:!1,theme:C,pageTitle:j,pageDescription:N,pageKeywords:y,titleType:p},Object(u.b)(h,{title:b?Object(u.b)(b,null):j,label:"label",tabs:g,theme:C}),g&&Object(u.b)(f,{slug:w,tabs:g,currentTab:M}),Object(u.b)(k.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:m})),Object(u.b)(d.a,{pageContext:t,location:r,slug:w,tabs:g,currentTab:M}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},dGNc:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var r=a("k1TG"),b=a("8o2o"),n=(a("q1tI"),a("7ljp")),i=a("013z"),l=a("T0C+"),c=(a("qKvR"),{}),o={_frontmatter:c},s=i.a;function m(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)(s,Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Jan 28, 2021"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloudnativetoolkit.dev/workshop"}),"Cloud Native Toolkit Workshop")," released. The workshop in a box environment is easy and quick to setup with hands on labs including videos.\nCheck them out at ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloudnativetoolkit.dev/workshop"}),"cloudnativetoolkit.dev/workshop"),". More hands on labs for the workshop coming soon."),Object(n.b)("h2",null,"Jan 6, 2021"),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/getting-started/cli"}),"CLI")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.11.1"}),"v1.11.1"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.11.0"}),"v1.11.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.10.2"}),"v1.10.2"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.10.1"}),"v1.10.1"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.10.0"}),"v1.10.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.9.0"}),"v1.9.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.8.1"}),"v1.8.1"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.8.0"}),"v1.8.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.7.1"}),"v1.7.1"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.7.0"}),"v1.7.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.6.0"}),"v1.6.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.5.0"}),"v1.5.0")),Object(n.b)("p",null,"Many usability changes, particularly for the ",Object(n.b)("inlineCode",{parentName:"p"},"pipeline")," command:"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Reduces required permissions")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"At the start of every command that needs access to the kube api, the cli checks that a connection is available.\nPreviously it did that by trying to list all the pods in the cluster (e.g. the equivalent of ",Object(n.b)("inlineCode",{parentName:"li"},"kubectl get pods -A"),").\nUnfortunately, that command needs a great deal of access to succeed. The check was changed to run a command that requires\nmuch less permission."),Object(n.b)("li",{parentName:"ul"},"Before creating the webhook triggers, the pipeline command would read the Tekton version number from annotations on the\noperator deployment in the ",Object(n.b)("inlineCode",{parentName:"li"},"openshift-operators")," namespace. This check required a great deal of permissions to be able\nto read the deployment in that namespace. Instead, the ",Object(n.b)("inlineCode",{parentName:"li"},"pipeline")," command has been changed to resort to a brute force\ncheck - it assumes v0.6.0 and if it fails tries again with v0.4.0.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Usability updates for ",Object(n.b)("inlineCode",{parentName:"strong"},"pipeline")," command")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Allows the repo url to be passed in so it is not necessary to clone the repository first"),Object(n.b)("li",{parentName:"ul"},"Creates a single event listener per namespace/project instead of a new event listener for each repo"),Object(n.b)("li",{parentName:"ul"},"Detects the runtime of the repository and filters the tekton pipelines based on the runtime"),Object(n.b)("li",{parentName:"ul"},"Reads params from tekton pipeline and prompts for values"),Object(n.b)("li",{parentName:"ul"},"The input arguments have been cleaned up to remove conflicts and to use values that make more sense for the\ninput parameters.")),Object(n.b)("h2",null,"Dec 11, 2020"),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/admin/terraform"}),"IasC (IZero and Terraform modules)")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.5.0"}),"v2.5.0")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updates ibm-container-platform module to v1.18.3 to provision ocp 4.5 clusters properly"),Object(n.b)("li",{parentName:"ul"},"Adds option of storage class for Artifactory"),Object(n.b)("li",{parentName:"ul"},"Updates to point releases of terraform modules with updated workflows to generate module catalogs",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"argocd v2.10.1"),Object(n.b)("li",{parentName:"ul"},"artifactory v1.10.0"),Object(n.b)("li",{parentName:"ul"},"dashboard v1.10.4"),Object(n.b)("li",{parentName:"ul"},"ibm-image-registry v1.2.3"),Object(n.b)("li",{parentName:"ul"},"ocp-image-registry v1.2.2"),Object(n.b)("li",{parentName:"ul"},"k8s-image-registry v1.1.5"),Object(n.b)("li",{parentName:"ul"},"k8s-source-control v1.2.1"),Object(n.b)("li",{parentName:"ul"},"jenkins v1.4.3"),Object(n.b)("li",{parentName:"ul"},"pactbroker v1.4.2"),Object(n.b)("li",{parentName:"ul"},"sonarqube v1.9.2"),Object(n.b)("li",{parentName:"ul"},"swaggereditor v1.4.1"),Object(n.b)("li",{parentName:"ul"},"tekton v2.0.2"),Object(n.b)("li",{parentName:"ul"},"tekton-resources v2.2.0"),Object(n.b)("li",{parentName:"ul"},"ibm-logdna v2.4.3"),Object(n.b)("li",{parentName:"ul"},"ibm-sysdig v2.3.3")))),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/getting-started/cli"}),"CLI")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.4.2"}),"v1.4.2"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.4.1"}),"v1.4.1")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Prints next steps to the console after calling the ",Object(n.b)("inlineCode",{parentName:"p"},"pipeline")," command"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"Pipeline run started: memcached-operator-catalog-1762ff0a6d7\n\nNext steps:\n  Tekton cli:\n    View PipelineRun info - tkn pr describe memcached-operator-catalog-1762ff0a6d7\n    View PipelineRun logs - tkn pr logs memcached-operator-catalog-1762ff0a6d7\n  OpenShift console:\n    View PipelineRun - https://console-openshift-console.garage-dev-ocp45-vpc-0143c5dd31acd8e030a1d6e0ab1380e3-0000.us-east.containers.appdomain.cloud/k8s/ns/operator-dev/tekton.dev~v1beta1~PipelineRun/memcached-operator-catalog-1762ff0a6d7\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Registers the ",Object(n.b)("inlineCode",{parentName:"p"},"gitops")," command as a plugin to kubectl and oc clis"))),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/tools/tekton"}),"Tekton tasks")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.2.3"}),"v2.2.3"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.2.2"}),"v2.2.2"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.2.1"}),"v2.2.1"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.2.0"}),"v2.2.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.27"}),"v2.1.27")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updates tasks to use images hosted in quay.io instead of docker.io to avoid rate limiting issue"),Object(n.b)("li",{parentName:"ul"},"Adds workflow to mirror required images from docker.io to quay.io on a nightly schedule"),Object(n.b)("li",{parentName:"ul"},"Adds pipelines for operator and operator catalog builds")),Object(n.b)("h2",null,"Nov 20, 2020"),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/getting-started/cli"}),"CLI")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.4.0"}),"v1.4.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.3.0"}),"v1.3.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.2.2"}),"v1.2.2"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.2.2"}),"v1.2.1")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Refactors Git server interaction logic to make more extensible"),Object(n.b)("li",{parentName:"ul"},"Adds support to ",Object(n.b)("inlineCode",{parentName:"li"},"pipeline")," command for Gogs git server running in cluster"),Object(n.b)("li",{parentName:"ul"},"Adds support to ",Object(n.b)("inlineCode",{parentName:"li"},"pipeline")," command for Bitbucket along with existing support for GitHub, GitHub Enterprise, and GitLab")),Object(n.b)("h2",null,"Nov 13, 2020"),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/admin/terraform"}),"IasC (IZero and Terraform modules)")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.4.0"}),"v2.4.0")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds image-registry and source-control modules"),Object(n.b)("li",{parentName:"ul"},"Updates numbering for generated tiles"),Object(n.b)("li",{parentName:"ul"},"Updates default settings when installing from iZero"),Object(n.b)("li",{parentName:"ul"},"Updates underlying module versions",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"ibm-container-platform v1.18.0"),Object(n.b)("li",{parentName:"ul"},"artifactory v1.9.2"),Object(n.b)("li",{parentName:"ul"},"dashboard v1.10.0"),Object(n.b)("li",{parentName:"ul"},"ibm-image-registry v1.2.0"),Object(n.b)("li",{parentName:"ul"},"ocp-image-registry v1.2.0"),Object(n.b)("li",{parentName:"ul"},"tools-tekton-resources v2.1.9"),Object(n.b)("li",{parentName:"ul"},"k8s-source-control v1.2.0"),Object(n.b)("li",{parentName:"ul"},"tools-swagger-editor v1.4.0")))),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/tools/tekton"}),"Tekton tasks")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.26"}),"v2.1.26"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.25"}),"v2.1.25"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.24"}),"v2.1.24"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.23"}),"v2.1.23"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.22"}),"v2.1.24"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.21"}),"v2.1.21"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.20"}),"v2.1.20")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updates tekton tasks to support Gogs git server running in cluster"),Object(n.b)("li",{parentName:"ul"},"Fixes setup task to handle different characters in git url"),Object(n.b)("li",{parentName:"ul"},"Updates the task order in the pipelines to release the helm chart after the scan"),Object(n.b)("li",{parentName:"ul"},"Defaults to using the internal OCP registry if none is defined")),Object(n.b)("h2",null,"Nov 6, 2020"),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/admin/terraform"}),"IasC (IZero and Terraform modules)")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.3.9"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.3.8"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.3.7"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.3.6"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.3.5"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.3.4"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.3.3"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.3.2"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.3.1"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.3.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.3.9"}),"v2.2.2")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Prints the elapsed time for the Toolkit installation process"),Object(n.b)("li",{parentName:"ul"},"Updates tile definition to include README.md in long description and update input parameters"),Object(n.b)("li",{parentName:"ul"},"Updates module versions",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"ibm-container-platform v1.18.0"),Object(n.b)("li",{parentName:"ul"},"ibm-object-storage v2.0.1")))),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/getting-started/cli"}),"CLI")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.2.0"}),"v1.2.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.1.0"}),"v1.1.0")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Simplifies the logic used to determine cluster type by using intrinsic information within the cluster. This expands the number of commands that can be run against a cluster that doesn’t have the toolkit installed"),Object(n.b)("li",{parentName:"ul"},"Updates the git secret logic to support older versions of the git cli (which allows the CLI to be run in the IBM OpenLab environment)")),Object(n.b)("h2",null,"Oct 30, 2020"),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/admin/terraform"}),"IasC (IZero and Terraform modules)")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.2.1"}),"v2.2.1"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.2.0"}),"v2.2.0")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds quick install option with Terraform job running within the cluster"),Object(n.b)("li",{parentName:"ul"},"Updates Tekton Resources module to v2.1.8"),Object(n.b)("li",{parentName:"ul"},"Update terraform modules to latest",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"dashboard v1.9.0"),Object(n.b)("li",{parentName:"ul"},"ocp-cluster v2.3.5"),Object(n.b)("li",{parentName:"ul"},"pactbroker v1.4.0")))),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/getting-started/cli"}),"CLI")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.0.3"}),"v1.0.3"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.0.2"}),"v1.0.2")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes bug that causes the ",Object(n.b)("inlineCode",{parentName:"li"},"endpoint")," command to fail due to a missing import"),Object(n.b)("li",{parentName:"ul"},"Fixes bug with the ",Object(n.b)("inlineCode",{parentName:"li"},"credentials")," command that caused the internal urls to be displayed instead of the external ones")),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/tools/tekton"}),"Tekton tasks")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.19"}),"v2.1.19"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.18"}),"v2.1.18"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.17"}),"v2.1.17"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.16"}),"v2.1.16"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.15"}),"v2.1.15"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.14"}),"v2.1.14"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.13"}),"v2.1.13"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.12"}),"v2.1.12"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.11"}),"v2.1.11"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.10"}),"v2.1.10"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.9"}),"v2.1.9"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.8"}),"v2.1.8"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.7"}),"v2.1.7"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.6"}),"v2.1.6"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.5"}),"v2.1.5"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.4"}),"v2.1.4"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.3"}),"v2.1.3")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes bug in deploy task when the Git hash has an “e” in it (tries to convert to an exponential number)"),Object(n.b)("li",{parentName:"ul"},"Combines Trivy and IBM VA scan into one task"),Object(n.b)("li",{parentName:"ul"},"Uses internal endpoints for tools hosted within the cluster (like artifactory and sonarqube)"),Object(n.b)("li",{parentName:"ul"},"Updates from helm v2 to v3 for the pipeline logic"),Object(n.b)("li",{parentName:"ul"},"Fix the health url check logic"),Object(n.b)("li",{parentName:"ul"},"Uses registry-access to get image registry information instead of ibmcloud-config"),Object(n.b)("li",{parentName:"ul"},"Adds logic to wait for Vulnerability Advisor to complete before testing the result")),Object(n.b)("h2",null,"Sept 25, 2020"),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/tools/tekton"}),"Tekton tasks")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.2"}),"v2.1.2"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.1"}),"v2.1.1"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.1.0"}),"v2.1.0"),","),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Introduces image vulnerability scan with Aquasec Trivy"),Object(n.b)("li",{parentName:"ul"},"Fixes trivy scan logic to check for PERFORM_SCAN flag in setup and execute steps")),Object(n.b)("h2",null,"Sept 11, 2020"),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/admin/terraform"}),"IasC (IZero and Terraform modules)")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.1.0"}),"v2.1.0"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.0.2"}),"v2.0.2"),",\n",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.0.1"}),"v2.0.1")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Introduced Key Protect ArgoCD plugin in argocd module to v2.9.0 to generate kubernetes secrets from key material in Key Protect"),Object(n.b)("li",{parentName:"ul"},"Updates namespace module to v2.6.0 to remove use of previously deprecated, now removed ",Object(n.b)("inlineCode",{parentName:"li"},"--export")," flag")),Object(n.b)("h2",null,"Aug 25, 2020"),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/admin/terraform"}),"IasC (IZero and Terraform modules)")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/tag/v2.0.0"}),"v2.0.0")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updates Tekton module and resources to support the Red Hat Tekton operator and related versions"),Object(n.b)("li",{parentName:"ul"},"Simplifies the process to install the ",Object(n.b)(l.a,{name:"longName",mdxType:"Globals"})," on a ",Object(n.b)(l.a,{name:"ocp",mdxType:"Globals"})," provisioned anywhere"),Object(n.b)("li",{parentName:"ul"},"Provide Private Catalog tile for install with Schematics"),Object(n.b)("li",{parentName:"ul"},"Improves the handling of LogDNA and Sysdig in the cluster"),Object(n.b)("li",{parentName:"ul"},"Automates the post-install configuration steps for Artifactory"),Object(n.b)("li",{parentName:"ul"},"Automates the post-install configuration steps for SonarQube")),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/getting-started/cli"}),"CLI")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli/releases/tag/1.0.1"}),"v1.0.1")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Updates tekton pipeline handling to create the webhook"),Object(n.b)("li",{parentName:"ul"},"Adds ",Object(n.b)("inlineCode",{parentName:"li"},"git"),",",Object(n.b)("inlineCode",{parentName:"li"},"gitops")," and ",Object(n.b)("inlineCode",{parentName:"li"},"console")," commands")),Object(n.b)("h3",null,Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"/tools/tekton"}),"Tekton tasks")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/ibm-garage-tekton-tasks/releases/tag/v2.0.3"}),"v2.0.3")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Refactors tasks and pipelines to support v1beta1 schema and remove dependency on PipelineResources"),Object(n.b)("li",{parentName:"ul"},"Streamlines CI process in pipelines to be more modular and reusable"),Object(n.b)("li",{parentName:"ul"},"Tasks for Vulnerability scanning with IBM Image Registry")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-whats-new-index-mdx-9bd26360611a8f341d34.js.map