(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("NmYn"),i=a.n(o),c=a("Wbzz"),r=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),p=a.n(d),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,l=e.tabs,o=void 0===l?[]:l;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,o=l.baseUrl,i=l.subDirectory,r=o+"/edit/"+l.branch+i+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:r},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("9Hrx"),N=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=i()(e,{lower:!0,strict:!0}),o=l===n,r=new RegExp(n+"/?(#.*)?$"),b=a.replace(r,l);return Object(m.b)("li",{key:e,className:u()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(m.b)(c.Link,{className:N.link,to:""+b},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:N.list},l))))))},t}(l.a.Component),y=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,o=t.frontmatter,s=void 0===o?{}:o,u=t.relativePagePath,d=t.titleType,p=s.tabs,g=s.title,f=s.theme,N=s.description,k=s.keywords,x=Object(v.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,T=p?C.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",A=f||x;return Object(m.b)(b.a,{tabs:p,homepage:!1,theme:A,pageTitle:g,pageDescription:N,pageKeywords:k,titleType:d},Object(m.b)(h,{title:l?Object(m.b)(l,null):g,label:"label",tabs:p,theme:A}),p&&Object(m.b)(w,{slug:C,tabs:p,currentTab:T}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:u})),Object(m.b)(j.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:T}),Object(m.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},KtDe:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a("k1TG"),l=a("8o2o"),o=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=r("Tabs"),s=r("Tab"),u=r("InlineNotification"),d={_frontmatter:c},p=i.a;function m(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To enable the best working experience through the hands-on exercises, you\nneed to select the environment you plan to use for development and the required tools for integration with IBM Cloud."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you plan to use your desktop/laptop for hands-on exercises, follow\nthe instructions in the Desktop/Laptop tab. You will need a recent macOS or\nWindows 10 operating system for this option."),Object(o.b)("li",{parentName:"ul"},"If you cannot install tools on your desktop/laptop, follow the Cloud Shell\ninstructions.")),Object(o.b)("p",null,"Once you have fulfilled these setup requirements you will be ready to\ngo through the ",Object(o.b)("strong",{parentName:"p"},"Getting Started")," steps."),Object(o.b)(b,{mdxType:"Tabs"},Object(o.b)(s,{label:"Cloud Shell",mdxType:"Tab"},Object(o.b)("h2",null,"Introduction to Cloud Shell"),Object(o.b)("p",null,"IBM Cloud Shell is a free service that gives you complete control of your cloud resources, applications, and\ninfrastructure, from any web browser. It’s instantly accessible from your free IBM Cloud account—no other installation\nis needed."),Object(o.b)("p",null,"Features of IBM Cloud Shell include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Preconfigured environment: IBM Cloud Shell provides a curated, cloud-based workspace with dozens of preinstalled tools\nand programming languages. It’s automatically authenticated with your IBM Cloud account so you can start to develop\nimmediately.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"File upload/download: use this feature to import files to IBM Cloud Shell or pull-down data to your local machine.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Multiple sessions: use up to five shell sessions at a time to maximize your productivity. Mirror workflows on your\nlocal machine, or view logs on one session while editing a file in another."))),Object(o.b)("h3",null,"Accessing the Cloud Shell"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open the IBM Cloud console (cloud.ibm.com) in your browser and log in if needed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Invoke Cloud Shell by clicking on the button at the top, right-hand corner of the browser window.\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"362px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"12.847222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAu0lEQVQI11WOTYrCQBCFcwBR093pTqcTYyTZDAEJJIuBwU3QE3gAV+IPoguv4Zk/u10MuPiqKKreqxclSUJAa/3PZ/ZIz0IrbsWcayk5uBlxosmsxRjzpRNS8tt1RJ0vwzBQ1zVN09D3PVmWYdMUUyz4UXPubcX6b8PJTnB+N44jeZ4jhKBtW1ZVxTSWvB4XIuccgWCSepNwGLrxX5U2LH3C51Jwri1HN0X6ZMEgpFJKUZblRzOLBfvdljfZRVOICjY1ngAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Invoke Cloud Shell",title:"Invoke Cloud Shell",src:"/static/0d8975e85d32051b2c1c08ab03632ce1/793f7/invokecloudshell.png",srcSet:["/static/0d8975e85d32051b2c1c08ab03632ce1/7fc1e/invokecloudshell.png 288w","/static/0d8975e85d32051b2c1c08ab03632ce1/793f7/invokecloudshell.png 362w"],sizes:"(max-width: 362px) 100vw, 362px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))),Object(o.b)(s,{label:"Desktop/Laptop",mdxType:"Tab"},Object(o.b)("h2",null,"Additional tools installation"),Object(o.b)("p",null,"There are some tools that are assumed to already be available within the shell environment. "),Object(o.b)("h3",null,"Docker client"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop")," is required for working with container images locally,\nrunning common tools and using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/guides/tools-image"}),"Developer Tools Image"),"."),Object(o.b)("h3",null,"Git client"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git Client")," needs to be installed in your development operating system to work with Git\nrepositories locally. It comes as standard for Mac OS."),Object(o.b)("h3",null,"Code editor/IDE"),Object(o.b)("p",null,"You will be viewing and updating code artifacts. It is important to have a good code editor to make the process easier.\nIf you don’t already have an IDE available, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"Visual Studio Code")," is a popular\n(and free) code editor to use. "),Object(o.b)("p",null,"You can also enable ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"}),"launching VSCode from a terminal")," to\nmake it easier to transition from the terminal to the IDE."))),Object(o.b)("h3",null,"Set up the shell environment"),Object(o.b)("p",null,"We have provided a simplified installer that will install tools and configure the shell environment. The\ninstaller will first check if the required tool is available in the path. If not, the missing tool(s) will be\ninstalled into the ",Object(o.b)("inlineCode",{parentName:"p"},"bin/")," folder of the current user’s home directory and the ",Object(o.b)("inlineCode",{parentName:"p"},"PATH")," variable will be updated in the\n",Object(o.b)("inlineCode",{parentName:"p"},".bashrc")," or ",Object(o.b)("inlineCode",{parentName:"p"},".zshrc")," file to include that directory."),Object(o.b)("p",null,"The following tools are included in the shell installer:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"IBM Cloud cli (ibmcloud)"),Object(o.b)("li",{parentName:"ul"},"ArgoCD cli (argocd)"),Object(o.b)("li",{parentName:"ul"},"Tekton cli (tkn)"),Object(o.b)("li",{parentName:"ul"},"IBM Cloud fast switching (icc)"),Object(o.b)("li",{parentName:"ul"},"kube-ps1 prompt"),Object(o.b)("li",{parentName:"ul"},"OpenShift cli (oc)"),Object(o.b)("li",{parentName:"ul"},"Kubernetes cli (kubectl)"),Object(o.b)("li",{parentName:"ul"},"JSON cli (jq)"),Object(o.b)("li",{parentName:"ul"},"IBM Garage Cloud CLI (igc)")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set up the shell environment by running:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -sL shell.cloudnativetoolkit.dev | sh - && . ~/.bashrc\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If successful, you should see something like the following:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"Downloading scripts: https://github.com/ibm-garage-cloud/cloud-shell-commands/releases/download/0.3.5/assets.tar.gz\n** Installing argocd cli\n** Installing tkn cli\n** Installing kube-ps1\n** Installing icc\n** Installing Cloud-Native Toolkit cli\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can check the shell was installed correctly by checking the ",Object(o.b)("inlineCode",{parentName:"p"},"oc")," version:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"oc sync --version\n")))),Object(o.b)("h3",null,"Configure git"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Execute the following commands replacing the email and short name:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'$ git config --global user.email "<email>"\n$ git config --global user.name "<short_name>"\n')))),Object(o.b)("h3",null,"Configure IBM Cloud cluster fast-switching (icc)"),Object(o.b)("p",null,"If you will be working with clusters and services hosted on IBM Cloud, it is highly recommended to use the provided ",Object(o.b)("inlineCode",{parentName:"p"},"icc"),"\ncommand to simplify the process of switching between clusters."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Get your IBM Cloud API Key for the account. If you don’t have one then ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey#create_user_key"}),"create an API Key")),Object(o.b)("li",{parentName:"ol"},"Configure the ",Object(o.b)("inlineCode",{parentName:"li"},"icc")," command with your API Key with ",Object(o.b)("inlineCode",{parentName:"li"},"icc --add-account")),Object(o.b)("li",{parentName:"ol"},"Get the cluster metadata for the account by running ",Object(o.b)("inlineCode",{parentName:"li"},"icc --generate")),Object(o.b)("li",{parentName:"ol"},"List the available clusters with ",Object(o.b)("inlineCode",{parentName:"li"},"icc")),Object(o.b)("li",{parentName:"ol"},"Optionally, give a short nickname for your cluster by running ",Object(o.b)("inlineCode",{parentName:"li"},"icc --nickname"))),Object(o.b)("p",null,"You can now log in to a cluster by running ",Object(o.b)("inlineCode",{parentName:"p"},"icc [cluster name|cluster nickname]")),Object(o.b)(u,{mdxType:"InlineNotification"},Object(o.b)("p",null,"If you have multiple accounts, the ",Object(o.b)("inlineCode",{parentName:"p"},"icc --add-account")," can be run multiple times to add the different API Keys. Also,\n",Object(o.b)("inlineCode",{parentName:"p"},"icc --generate")," can be run multiple times to refresh the list of available clusters. Any nicknames that have been added\nwill be preserved.")))}m.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-getting-started-dev-env-setup-index-mdx-2231ad2b1cf3af11483a.js.map