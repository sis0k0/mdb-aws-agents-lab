"use strict";(self.webpackChunkai_agents_lab_reinvent=self.webpackChunkai_agents_lab_reinvent||[]).push([[730],{4361:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=o(4848),s=o(8453),a=o(2763);const i={},l="\ud83d\udc50 Setup dev environment",r={id:"dev-env/dev-setup",title:"\ud83d\udc50 Setup dev environment",description:"You will be working in a Jupyter Notebook throughout this lab. The easiest and recommended way to run the lab notebook is using Google Colab.",source:"@site/docs/40-dev-env/1-dev-setup.mdx",sourceDirName:"40-dev-env",slug:"/dev-env/dev-setup",permalink:"/mdb-aws-ai-agents-lab/docs/dev-env/dev-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-aws-ai-agents-lab/blob/main/docs/40-dev-env/1-dev-setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dev Environment",permalink:"/mdb-aws-ai-agents-lab/docs/category/dev-environment"},next:{title:"\ud83d\udc50 Setup prerequisites",permalink:"/mdb-aws-ai-agents-lab/docs/dev-env/setup-pre-reqs"}},d={},c=[{value:"[Backup] Local setup",id:"backup-local-setup",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-setup-dev-environment",children:"\ud83d\udc50 Setup dev environment"})}),"\n",(0,t.jsx)(n.p,{children:"You will be working in a Jupyter Notebook throughout this lab. The easiest and recommended way to run the lab notebook is using Google Colab."}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to the notebook on ",(0,t.jsx)(n.a,{href:"https://github.com/mongodb-developer/ai-agents-lab-notebooks/blob/main/notebook_template.ipynb",children:"GitHub"})," and click the ",(0,t.jsx)(n.strong,{children:"Open in Colab"})," badge at the top of the notebook to open it in Google Colab."]}),"\n",(0,t.jsx)(a.A,{url:"https://github.com/mongodb-developer/ai-agents-lab-notebooks",src:"img/screenshots/40-dev-env/1-open-colab.png",alt:"Open in Colab"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["The notebook will open in Google Colab in read-only mode. Please ",(0,t.jsx)(n.strong,{children:"make a copy of the notebook"})," to keep the code changes you will make during this workshop for future reference."]}),(0,t.jsxs)(n.p,{children:["To do this, choose one of the ",(0,t.jsx)(n.strong,{children:"Save a copy"})," options in the ",(0,t.jsx)(n.strong,{children:"File"})," menu."]})]}),"\n",(0,t.jsx)(n.p,{children:"That's it! You're ready for the lab!"}),"\n",(0,t.jsx)(n.h2,{id:"backup-local-setup",children:"[Backup] Local setup"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Run the notebook locally ONLY IF Google Colab is not an option/doesn't work for you."})}),"\n",(0,t.jsx)(n.p,{children:"If you want to run the notebook locally, follow the steps below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Clone the ",(0,t.jsx)(n.a,{href:"https://github.com/mongodb-developer/ai-agents-lab-notebooks.git",children:"GitHub repo"})," for this lab by executing the following command from the terminal:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/mongodb-developer/ai-agents-lab-notebooks.git\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cd"})," into the cloned directory:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd ai-agents-lab-notebooks\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create and activate a Python virtual environment:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"python -m venv mongodb-ai-agents-lab\nsource mongodb-ai-agents-lab/bin/activate\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install and launch Jupyter Notebook:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pip install notebook\njupyter notebook\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the browser tab that pops up, open the notebook named ",(0,t.jsx)(n.code,{children:"notebook_template.ipynb"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.A,{url:"localhost:8888/tree",src:"img/screenshots/40-dev-env/2-jupyter-notebook.png",alt:"Jupyter Notebook"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2763:(e,n,o)=>{o.d(n,{A:()=>i});o(6540);var t=o(4848);function s(e){const n=e.url||"http://localhost:3000";return(0,t.jsxs)("div",{className:"browser container",children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"column left",children:[(0,t.jsx)("span",{className:"dot",style:{background:"#ED594A"}}),(0,t.jsx)("span",{className:"dot",style:{background:"#FDD800"}}),(0,t.jsx)("span",{className:"dot",style:{background:"#5AC05A"}})]}),(0,t.jsx)("div",{className:"column middle",children:(0,t.jsx)("input",{type:"text",value:n})}),(0,t.jsx)("div",{className:"column right",children:(0,t.jsxs)("div",{style:{float:"right"},children:[(0,t.jsx)("span",{className:"bar"}),(0,t.jsx)("span",{className:"bar"}),(0,t.jsx)("span",{className:"bar"})]})})]}),(0,t.jsx)("div",{className:"content",children:e.children})]})}var a=o(6025);function i(e){return(0,t.jsx)(s,{...e,children:(0,t.jsx)("img",{src:(0,a.Ay)(e.src),alt:e.alt})})}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var t=o(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);