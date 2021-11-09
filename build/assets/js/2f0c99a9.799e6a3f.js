(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[77342],{72964:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return a},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=e(22122),l=e(19756),i=(e(67294),e(3905)),a={title:"deploy configure",sidebar_label:"deploy configure"},d={unversionedId:"cli/commands/deploy-configure",id:"cli/commands/deploy-configure",isDocsHomePage:!1,title:"ionic deploy configure",description:"Overrides Appflow Deploy configuration",source:"@site/docs/cli/commands/deploy-configure.md",sourceDirName:"cli/commands",slug:"/cli/commands/deploy-configure",permalink:"/docs/cli/commands/deploy-configure",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/cli/commands/deploy-configure.md",version:"current",sidebar_label:"deploy configure",frontMatter:{title:"deploy configure",sidebar_label:"deploy configure"},sidebar:"cli",previous:{title:"ionic deploy build",permalink:"/docs/cli/commands/deploy-build"},next:{title:"ionic deploy manifest",permalink:"/docs/cli/commands/deploy-manifest"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Options",id:"options",children:[]},{value:"Advanced Options",id:"advanced-options",children:[]}],r={toc:c};function p(t){var n=t.components,e=(0,l.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},r,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Overrides Appflow Deploy configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic deploy configure [options]\n")),(0,i.kt)("p",null,"This command overrides configuration for the Appflow Deploy plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"cordova-plugin-ionic"),") in Capacitor projects."),(0,i.kt)("p",null,"For Capacitor projects, if the plugin is already installed, it overrides the configuration variables in the native projects."),(0,i.kt)("p",null,"For Cordova projects this is not implemented because it is better to reinstall the plugin with the different parameters and let Cordova deal with the changes."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic deploy configure \n$ ionic deploy configure --app-id=abcd1234 --channel-name="Master" --update-method=background\n$ ionic deploy configure --max-store=2 --min-background-duration=30\n$ ionic deploy configure --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30\n$ ionic deploy configure android\n$ ionic deploy configure ios\n')),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,"platform")))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The native platform (e.g. ",(0,i.kt)("code",null,"ios"),", ",(0,i.kt)("code",null,"android"),")"))))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-app-id",id:"option-app-id"},"--app-id",(0,i.kt)("span",{class:"option-spec"}," =<id>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"Your Appflow app ID")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-channel-name",id:"option-channel-name"},"--channel-name",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The channel to check for updates from")))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-update-method",id:"option-update-method"},"--update-method",(0,i.kt)("span",{class:"option-spec"}," =<name>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("p",null,"The update method that dictates the behavior of the plugin"))))),(0,i.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,i.kt)("table",{className:"reference-table"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-max-store",id:"option-max-store"},"--max-store",(0,i.kt)("span",{class:"option-spec"}," =<quantity>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"The maximum number of downloaded versions to store on the device"))))),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colSpan:"2"},(0,i.kt)("h3",null,(0,i.kt)("a",{href:"#option-min-background-duration",id:"option-min-background-duration"},"--min-background-duration",(0,i.kt)("span",{class:"option-spec"}," =<seconds>")))))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Description"),(0,i.kt)("td",null,(0,i.kt)("div",null,(0,i.kt)("p",null,"The minimum duration after which the app checks for an update in the background")))))))}p.isMDXComponent=!0}}]);