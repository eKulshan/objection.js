(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{390:function(e,t,o){"use strict";o.r(t);var s=o(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"contribution-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contribution-guide"}},[e._v("#")]),e._v(" Contribution guide")]),e._v(" "),o("h2",{attrs:{id:"issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#issues"}},[e._v("#")]),e._v(" Issues")]),e._v(" "),o("p",[e._v("You can use "),o("a",{attrs:{href:"https://github.com/Vincit/objection.js/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("github issues"),o("OutboundLink")],1),e._v(" to request features and file bug reports. An issue is also a good place to ask questions. We are happy to help out if you have reached a dead end, but please try to solve the problem yourself first. The "),o("a",{attrs:{href:"https://gitter.im/Vincit/objection.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("gitter chat"),o("OutboundLink")],1),e._v(" is also a good place to ask for help.")]),e._v(" "),o("p",[e._v("When creating an issue there are couple of things you need to remember:")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Update to the latest version of objection if possible and see if the problem remains.")]),e._v("\nIf updating is not an option you can still request critical bug fixes for older versions.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Describe your problem.")]),e._v("\nAnswer the following questions: Which objection version are you using? What are you doing? What code are you running? What is happening? What are you expecting to happen instead? If you provide code examples (please do!), "),o("strong",[e._v("use the actual code you are running")]),e._v(". People often leave out details or use made up examples because they think they are only leaving out irrelevant stuff. If you do that, you have already made an assumption about what the problem is and it's usually something else. Also provide all possible stack traces and error messages.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("If possible, provide an actual reproduction")]),e._v("\nThe fastest way to get your bug fixed or problem solved is to create a simple standalone app or a test case that demonstrates your problem. There's a file called "),o("a",{attrs:{href:"https://github.com/Vincit/objection.js/blob/master/reproduction-template.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("reproduction-template.js"),o("OutboundLink")],1),e._v(" you can use as a starting point for your reproduction.")])])]),e._v(" "),o("p",[e._v("Please bear in mind that objection has thousands of tests and if you run into a problem, say with "),o("code",[e._v("insert")]),e._v(" method, it doesn't mean that "),o("code",[e._v("insert")]),e._v(" is completely broken, but some small part of it you are using is. That's why enough context is necessary. It's not enough to say, \"insert fails\". You need to provide the code that fails and usually the models that are used too. And let's say this again: "),o("strong",[e._v("don't provide made up code examples!")]),e._v(" When you do, you only write the parts you think are relevant and usually leave out the useful information. Use the actual code that you have tested to fail.")]),e._v(" "),o("h2",{attrs:{id:"pull-requests"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests"}},[e._v("#")]),e._v(" Pull requests")]),e._v(" "),o("p",[e._v("If you have found a bug or want to add a feature, pull requests are always welcome! It's better to create an issue first to open a discussion if the feature is something that should be added to objection. In case of bugfixes it's also a good idea to open an issue indicating that you are working on a fix.")]),e._v(" "),o("p",[e._v("For a pull request to get merged it needs to have the following things:")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("A good description of what the PR fixes or adds. You can just add a link to the corresponding issue.")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Tests that verify the fix/feature.")]),e._v(" It's possible to create a PR without tests and ask for someone else to write them but in that case it may take a long time or forever until someone finds time to do it. "),o("em",[e._v("Untested code will never get merged!")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("For features you also need to write documentation.")]),e._v(" See the "),o("RouterLink",{attrs:{to:"/guide/contributing.html#development-setup"}},[e._v("development setup")]),e._v(" section for instructions on how to write documentation.")],1)])]),e._v(" "),o("h2",{attrs:{id:"development-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-setup"}},[e._v("#")]),e._v(" Development setup")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Fork objection in github")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Clone objection")])])])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-account"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/objection.js.git objection\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[o("p",[o("strong",[e._v("Run "),o("code",[e._v("npm install")]),e._v(" at the root of the repo")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Run "),o("code",[e._v("docker-compose up")]),e._v(" at the root of the repo")])]),e._v(" "),o("ul",[o("li",[e._v("If you have local databases running, shut them down or port binding will conflict.")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Create test users and databases by running "),o("code",[e._v("node setup-test-db")]),e._v(" at the root of the repo")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Run "),o("code",[e._v("npm test")]),e._v(" in objection's root to see if everything works.")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Run "),o("code",[e._v("npm run docs:dev")]),e._v(" and goto http://localhost:8080 to see the generated documentation site when you change the markdown files in the "),o("code",[e._v("doc")]),e._v(" folder.")])])])]),e._v(" "),o("p",[e._v("You can run the tests on a subset of databases by setting the "),o("code",[e._v("DATABASES")]),e._v(" env variable")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Only run tests on sqlite. No need for docker-compose.")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DATABASES")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("sqlite3 "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),o("p",[e._v("Code and tests need to be written in ES2015 subset supported by node 8.0.0. The best way to make sure of this is to develop with the correct node version. "),o("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm"),o("OutboundLink")],1),e._v(" is a great tool for swapping between node versions.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("prettier"),o("OutboundLink")],1),e._v(" is used to format the code. Remember to run "),o("code",[e._v("npm run prettier")]),e._v(" before committing code.")])])}),[],!1,null,null,null);t.default=a.exports}}]);