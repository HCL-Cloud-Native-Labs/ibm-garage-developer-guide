(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"+KkB":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var o=a("k1TG"),n=a("8o2o"),l=(a("q1tI"),a("7ljp")),r=a("013z"),c=a("T0C+"),b=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},s=i("PageDescription"),p=i("Tabs"),u=i("Tab"),d={_frontmatter:b},h=r.a;function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(h,Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(s,{mdxType:"PageDescription"},Object(l.b)("p",null,"Provides a walk-through of the provisioned environment and the steps to validate it is ready to\nbegin on-boarding developers.")),Object(l.b)("h2",null,"Explore the provisioned resources"),Object(l.b)("h3",null,Object(l.b)(c.a,{name:"ic",mdxType:"Globals"})," resources"),Object(l.b)("p",null,"Once the Terraform scripts have finished, you can see the resources that the scripts created in IBM Cloud:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"In the IBM Cloud console, open the ",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.ibm.com/resources",title:"Resource list"}),"Resource List")),Object(l.b)("li",{parentName:"ol"},"On the Resource List page, filter by your Resource Group by selecting the resource group from the ",Object(l.b)("inlineCode",{parentName:"li"},"Group")," dropdown (e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"appdev-team"),")"),Object(l.b)("li",{parentName:"ol"},"You should see these resources listed under the following sections:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Clusters"),": 1, either Kubernetes or OpenShift"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Services"),": depending on the configuration could be quite a few (LogDNA, Sysdig, Activity Tracker, Watson Assistant, Watson Studio, PostgreSQL, MongoDB, etc)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Storage"),": possibly Cloud Object Storage")))),Object(l.b)("h3",null,"Cluster resources"),Object(l.b)("p",null,"Log in to the cluster and look at the console to see the resources that have been provisioned within the cluster."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Access the cluster console"),Object(l.b)(p,{mdxType:"Tabs"},Object(l.b)(u,{label:"IBM Cloud",mdxType:"Tab"},Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"In the IBM Cloud console, open the ",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://cloud.ibm.com/resources",title:"Resource list"}),"Resource List")),Object(l.b)("li",{parentName:"ul"},"On the Resource List page, filter by your Resource Group by selecting the resource group from the ",Object(l.b)("inlineCode",{parentName:"li"},"Group")," dropdown (e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"appdev-team"),")"),Object(l.b)("li",{parentName:"ul"},"Expand the ",Object(l.b)("strong",{parentName:"li"},"Clusters")," section and click on the appropriate cluster"),Object(l.b)("li",{parentName:"ul"},"Click the button to open the Kubernetes or OpenShift web console"))),Object(l.b)(u,{label:"Hybrid",mdxType:"Tab"},Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"```shell script\noc login {server_url} -u {username} -p {password}\noc console\n```\n")))))),Object(l.b)("br",null),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Navigate to the ",Object(l.b)("inlineCode",{parentName:"li"},"tools")," namespace/project."),Object(l.b)("li",{parentName:"ol"},"Look at the status of the pods in the cluster. All should be either in ",Object(l.b)("inlineCode",{parentName:"li"},"running")," or ",Object(l.b)("inlineCode",{parentName:"li"},"completed")," state."),Object(l.b)("li",{parentName:"ol"},"If LogDNA or Sysdig were bound to the cluster then a ",Object(l.b)("inlineCode",{parentName:"li"},"ibm-observe")," namespace/project should have been created containing\na pod for each node in the cluster")),Object(l.b)("h3",null,"Validate LogDNA"),Object(l.b)("p",null,"If LogDNA was provisioned and/or bound to the cluster, check that log data is flowing into ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"/tools/log-management"}),"LogDNA")),Object(l.b)("h3",null,"Validate/complete the SysDig setup"),Object(l.b)("p",null,"Complete the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"/admin/sysdig-setup"}),"setup of Sysdig")," and ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"/tools/monitoring"}),"check the monitoring data")," is flowing"),Object(l.b)("h3",null,"Validate the Developer Dashboard"),Object(l.b)("p",null,"Test opening the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"/getting-started/dashboard"}),Object(l.b)(c.a,{name:"dashboard",mdxType:"Globals"}))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Log into the cluster from the command-line")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run either or all of the CLI options to load the dashboard"),Object(l.b)(p,{mdxType:"Tabs"},Object(l.b)(u,{label:"oc",mdxType:"Tab"},Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc dashboard\n"))),Object(l.b)(u,{label:"kubectl",mdxType:"Tab"},Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"kubetl dashboard\n"))),Object(l.b)(u,{label:"IGC",mdxType:"Tab"},Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"igc dashboard\n")))))),Object(l.b)("h3",null,"Validate the installed tools"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Log into the cluster from the command-line"),Object(l.b)("li",{parentName:"ol"},"Run the ",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/getting-started/cli"}),Object(l.b)(c.a,{name:"igccli",mdxType:"Globals"}))," ",Object(l.b)("inlineCode",{parentName:"li"},"credentials")," command to list the credentials for the tools",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc credentials -n tools\n"))),Object(l.b)("li",{parentName:"ol"},"Use the url and credentials provided for each tool to validate the provided credentials")),Object(l.b)("h2",null,"Additional configuration"),Object(l.b)("p",null,"The following post installation setup is required. To get the developers enabled quickly, make sure you have\ncompleted at least post installation tasks. The customization is optional and down to development team needs."),Object(l.b)("h3",null,"Customize the Dashboard configuration"),Object(l.b)("p",null,"Perform the steps in ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"/admin/config-dashboard"}),"Configure Dashboard")," to customize tiles and menu items for the tools\nthat are external to the cluster."),Object(l.b)("h3",null,"Set up user access"),Object(l.b)("p",null,"Configure the RBAC rules in the development cluster. This restricts who can change the parts of the cluster where\nthe tools are installed."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Run the RBAC script ",Object(l.b)("inlineCode",{parentName:"li"},"./terraform/scripts/rbac.sh")," found in the ",Object(l.b)("inlineCode",{parentName:"li"},"ibm-garage-iteration-zero")," repository")),Object(l.b)("h3",null,"Create a CI namespace/project"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Log into the cluster from the command-line"),Object(l.b)("li",{parentName:"ol"},"Run the ",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/getting-started/cli"}),Object(l.b)(c.a,{name:"igccli",mdxType:"Globals"}))," ",Object(l.b)("inlineCode",{parentName:"li"},"sync")," command to create the namespace/project",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"oc sync --dev {project}\n")))),Object(l.b)("h3",null,"Setup a GitOps repo"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Follow the steps to ",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/tools/continuous-delivery#set-up-the-gitops-repo"}),"create a GitOps repo"),"."),Object(l.b)("li",{parentName:"ol"},"Follow the steps to ",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/tools/continuous-delivery#hook-the-ci-pipeline-to-the-cd-pipeline"}),"add configuration for the CI pipeline"),", using\nthe namespace created in the ",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"#create-a-ci-namespaceproject"}),"previous step"),".")),Object(l.b)("h3",null,"Test the pipeline"),Object(l.b)("p",null,"The best way to verify that the tools have been configured properly is to deploy a sample pipeline. Follow the\n",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"/getting-started-day-1/deploy-app"}),"deploy an app")," steps for one of the starter kits to ensure that all the tools have\nbeen configured properly."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," Use the project/namespace created in the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"#create-a-ci-namespaceproject"}),"previous two steps")," when deploying the app"))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-post-installation-index-mdx-294c8b9c766d99b7b6ae.js.map