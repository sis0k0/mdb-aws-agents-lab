"use strict";(self.webpackChunkai_agents_lab_reinvent=self.webpackChunkai_agents_lab_reinvent||[]).push([[268],{38:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(4848),s=t(8453);const a={},i="\ud83d\udcd8 Components of AI agents",r={id:"ai-agents/components-of-agents",title:"\ud83d\udcd8 Components of AI agents",description:"AI agents have three main components: planning and reasoning, memory, and tools.",source:"@site/docs/10-ai-agents/3-components-of-agents.mdx",sourceDirName:"10-ai-agents",slug:"/ai-agents/components-of-agents",permalink:"/mdb-aws-agents-lab/es/docs/ai-agents/components-of-agents",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/mdb-aws-agents-lab/blob/main/docs/10-ai-agents/3-components-of-agents.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 When to use AI agents?",permalink:"/mdb-aws-agents-lab/es/docs/ai-agents/when-to-use-agents"},next:{title:"MongoDB Atlas",permalink:"/mdb-aws-agents-lab/es/docs/category/mongodb-atlas"}},l={},c=[{value:"Planning and reasoning",id:"planning-and-reasoning",level:2},{value:"Chain of Thought (Cot) Prompting",id:"chain-of-thought-cot-prompting",level:3},{value:"ReAct (Reason + Act)",id:"react-reason--act",level:3},{value:"Reflection",id:"reflection",level:3},{value:"Memory",id:"memory",level:2},{value:"Tools",id:"tools",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-components-of-ai-agents",children:"\ud83d\udcd8 Components of AI agents"})}),"\n",(0,o.jsxs)(n.p,{children:["AI agents have three main components: ",(0,o.jsx)(n.strong,{children:"planning and reasoning"}),", ",(0,o.jsx)(n.strong,{children:"memory"}),", and ",(0,o.jsx)(n.strong,{children:"tools"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"planning-and-reasoning",children:"Planning and reasoning"}),"\n",(0,o.jsx)(n.p,{children:"AI agents use user prompts, self-prompting and feedback loops to break down complex tasks, reason through their execution plan and refine it as needed."}),"\n",(0,o.jsx)(n.p,{children:"Some common design patterns for planning and reasoning in AI agents are as follows:"}),"\n",(0,o.jsx)(n.h3,{id:"chain-of-thought-cot-prompting",children:"Chain of Thought (Cot) Prompting"}),"\n",(0,o.jsx)(n.p,{children:"In this approach, the LLM is prompted to generate a step-by-step explanation or reasoning process for a given task or problem."}),"\n",(0,o.jsx)(n.p,{children:"Here is an example of a zero-shot CoT prompt:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Given a question, write out in a step-by-step manner your reasoning for how you will solve the problem to be sure that your conclusion is correct. Avoid simply stating the correct answer at the outset."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"react-reason--act",children:"ReAct (Reason + Act)"}),"\n",(0,o.jsx)(n.p,{children:"In this approach, the LLM is prompted to generate reasoning traces and task-specific actions in an interleaved manner, allowing for greater synergy between the two: reasoning traces help the model induce, track, and update action plans, while actions allow it to interface with external sources or tools, to gather additional information."}),"\n",(0,o.jsx)(n.p,{children:"Here is an example of a ReAct prompt:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Answer the following questions as best you can. You have access to the following tools:{tools}\n##\nUse the following format:\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take, should be one of [{tool_names}]\nAction Input: the input to the action\nObservation: the result of the action\n... (this Thought/Action/Action Input/Observation can repeat N times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n"})}),"\n",(0,o.jsx)(n.h3,{id:"reflection",children:"Reflection"}),"\n",(0,o.jsx)(n.p,{children:"Reflection involves prompting an LLM to reflect on and critique past actions, sometimes incorporating additional external information such as tool observations. The generation-reflection loop is run several times before returning the final response to the user. Reflection trades a bit of extra compute for a shot at better output quality."}),"\n",(0,o.jsx)(n.h2,{id:"memory",children:"Memory"}),"\n",(0,o.jsx)(n.p,{children:"The memory component allows AI agents to store and recall past conversations, enabling them to learn from these interactions."}),"\n",(0,o.jsx)(n.p,{children:"There are two main types of memory for AI agents:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Short-term memory"}),": Stores and retrieves information from a specific conversation."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Long-term memory"}),": Stores, retrieves and updates information based on multiple conversations had over a period of time."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"tools",children:"Tools"}),"\n",(0,o.jsx)(n.p,{children:"Tools are interfaces for AI agents to interact with the external world and achieve their objectives. These can be APIs, vector databases, or even specialized machine learning models."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(6540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);