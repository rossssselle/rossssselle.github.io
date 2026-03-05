(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67585,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let a=e.r(32061);function n({reason:e,children:t}){if("undefined"==typeof window)throw Object.defineProperty(new a.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},9885,(e,t,r)=>{"use strict";function a(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"encodeURIPath",{enumerable:!0,get:function(){return a}})},52157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return i}});let a=e.r(43476),n=e.r(74080),s=e.r(63599),o=e.r(9885);function i({moduleIds:e}){if("undefined"!=typeof window)return null;let t=s.workAsyncStorage.getStore();if(void 0===t)return null;let r=[];if(t.reactLoadableManifest&&e){let a=t.reactLoadableManifest;for(let t of e){if(!a[t])continue;let e=a[t].files;r.push(...e)}}return 0===r.length?null:(0,a.jsx)(a.Fragment,{children:r.map(e=>{let r=`${t.assetPrefix}/_next/${(0,o.encodeURIPath)(e)}`;return e.endsWith(".css")?(0,a.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,n.preload)(r,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},69093,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return c}});let a=e.r(43476),n=e.r(71645),s=e.r(67585),o=e.r(52157);function i(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},c=function(e){let t={...l,...e},r=(0,n.lazy)(()=>t.loader().then(i)),c=t.loading;function d(e){let i=c?(0,a.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,l=!t.ssr||!!t.loading,d=l?n.Suspense:n.Fragment,u=t.ssr?(0,a.jsxs)(a.Fragment,{children:["undefined"==typeof window?(0,a.jsx)(o.PreloadChunks,{moduleIds:t.modules}):null,(0,a.jsx)(r,{...e})]}):(0,a.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(r,{...e})});return(0,a.jsx)(d,{...l?{fallback:i}:{},children:u})}return d.displayName="LoadableComponent",d}},70703,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}});let a=e.r(55682)._(e.r(69093));function n(e,t){let r={};"function"==typeof e&&(r.loader=e);let n={...r,...t};return(0,a.default)({...n,modules:n.loadableGenerated?.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},31713,e=>{"use strict";let t;var r,a,n=e.i(43476),s=e.i(71645);let o=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)},i=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,s.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:c,...d},u)=>(0,s.createElement)("svg",{ref:u,...l,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:i("lucide",n),...!o&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(o)?o:[o]])),d=(r="mail",a=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],(t=(0,s.forwardRef)(({className:e,...t},n)=>(0,s.createElement)(c,{ref:n,iconNode:a,className:i(`lucide-${o(r).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${r}`,e),...t}))).displayName=o(r),t),u=(0,e.i(70703).default)(()=>e.A(64146),{loadableGenerated:{modules:[12750]},ssr:!1});function p(){return(0,n.jsx)(u,{scene:"https://prod.spline.design/WBBBobfUf6xRsO0I/scene.splinecode",className:"spline-client"})}function h({activeSection:e,onSectionChange:t}){return(0,n.jsx)("nav",{className:"navbar",children:(0,n.jsx)("ul",{className:"nav-list",children:[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"contact",label:"Contact"},{id:"ai",label:"Zellie AI"}].map(r=>(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:()=>t(r.id),className:`nav-button ${e===r.id?"active":""}`,children:(0,n.jsx)("span",{children:r.label})})},r.id))})})}e.i(47167);let f=["What's your tech stack?","Tell me about your experience","Are you open to new roles?","What projects are you most proud of?"],m=()=>(0,n.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),(0,n.jsx)("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),x=()=>(0,n.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),(0,n.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}),(0,n.jsx)("line",{x1:"12",y1:"3",x2:"12",y2:"7"}),(0,n.jsx)("circle",{cx:"9",cy:"16",r:"1",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"15",cy:"16",r:"1",fill:"currentColor"})]}),b=()=>(0,n.jsx)("span",{style:{display:"inline-flex",gap:"3px",alignItems:"center",padding:"2px 0"},children:[0,1,2].map(e=>(0,n.jsx)("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--accent)",display:"inline-block",animation:"bounce 1.2s infinite",animationDelay:`${.2*e}s`}},e))});function g(){let[e,t]=(0,s.useState)([{role:"assistant",content:"Hey! I'm an AI trained on Zellie's background. Ask me anything — experience, projects, or whether they're open to new roles. 👋"}]),[r,a]=(0,s.useState)(""),[o,i]=(0,s.useState)(!1),[l,c]=(0,s.useState)(!1),d=(0,s.useRef)(null),u=(0,s.useRef)(null);(0,s.useEffect)(()=>{let e=setTimeout(()=>c(!0),100);return()=>clearTimeout(e)},[]),(0,s.useEffect)(()=>{d.current?.scrollIntoView({behavior:"smooth"})},[e,o]);let p=async r=>{let n=r.trim();if(!n||o)return;let s=[...e,{role:"user",content:n}];t(s),a(""),i(!0);try{let e=await fetch("https://zellie-ai.onrender.com/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:s})});if(!e.ok)throw Error("API error");let r=await e.json();t(e=>[...e,{role:"assistant",content:r.reply}])}catch{t(e=>[...e,{role:"assistant",content:"Sorry, something went wrong. Try again in a moment."}])}finally{i(!1),u.current?.focus()}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');

        :root {
          --bg: #0f0f0f;
          --surface: #161616;
          --surface2: #1e1e1e;
          --border: #2a2a2a;
          --accent: #c8f135;
          --accent-dim: rgba(200,241,53,0.12);
          --text: #f0f0f0;
          --muted: #777;
          --user-bubble: #1f1f1f;
          --bot-bubble: #131313;
          --radius: 14px;
          --font-serif: 'DM Serif Display', serif;
          --font-mono: 'DM Mono', monospace;
          --font-sans: 'DM Sans', sans-serif;
        }

        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes msgIn {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .chatbot-wrap {
          font-family: var(--font-sans);
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .chatbot-wrap.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .chatbot-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 520px;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.03), 0 24px 60px rgba(0,0,0,0.5);
        }

        .chat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 22px;
          border-bottom: 1px solid var(--border);
          background: var(--bg);
        }

        .header-avatar {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--accent-dim);
          border: 1px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }

        .header-text h3 {
          font-family: var(--font-serif);
          font-size: 15px;
          color: var(--text);
          margin: 0;
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        .header-text p {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent);
          margin: 2px 0 0;
          letter-spacing: 0.05em;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          margin-left: auto;
          box-shadow: 0 0 8px var(--accent);
          flex-shrink: 0;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
        }

        .chat-messages::-webkit-scrollbar { width: 4px; }
        .chat-messages::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

        .msg-row {
          display: flex;
          animation: msgIn 0.25s ease forwards;
        }
        .msg-row.user { justify-content: flex-end; }
        .msg-row.assistant { justify-content: flex-start; }

        .bubble {
          max-width: 80%;
          padding: 11px 15px;
          border-radius: var(--radius);
          font-size: 13.5px;
          line-height: 1.6;
          letter-spacing: 0.01em;
        }

        .bubble.user {
          background: var(--user-bubble);
          border: 1px solid var(--border);
          color: var(--text);
          border-bottom-right-radius: 4px;
        }

        .bubble.assistant {
          background: var(--bot-bubble);
          border: 1px solid var(--border);
          color: #d8d8d8;
          border-bottom-left-radius: 4px;
          border-left: 2px solid var(--accent);
        }

        .suggestions {
          padding: 0 20px 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .suggestion-btn {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 6px 12px;
          border-radius: 20px;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--muted);
          cursor: pointer;
          transition: all 0.15s ease;
          letter-spacing: 0.02em;
        }
        .suggestion-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-dim);
        }

        .chat-input-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border-top: 1px solid var(--border);
          background: var(--bg);
        }

        .chat-input {
          flex: 1;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 14px;
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: var(--text);
          outline: none;
          transition: border-color 0.15s;
          caret-color: var(--accent);
        }
        .chat-input::placeholder { color: var(--muted); }
        .chat-input:focus { border-color: var(--accent); }

        .send-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--accent);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f0f0f;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }
        .send-btn:hover:not(:disabled) {
          background: #d9ff4f;
          transform: scale(1.05);
        }
        .send-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 12px;
        }
      `}),(0,n.jsxs)("div",{className:`chatbot-wrap ${l?"visible":""}`,children:[(0,n.jsx)("p",{className:"section-label",children:"ask me anything"}),(0,n.jsxs)("div",{className:"chatbot-card",children:[(0,n.jsxs)("div",{className:"chat-header",children:[(0,n.jsx)("div",{className:"header-avatar",children:(0,n.jsx)(x,{})}),(0,n.jsxs)("div",{className:"header-text",children:[(0,n.jsx)("h3",{children:"Zellie — AI"}),(0,n.jsx)("p",{children:"trained on my experience & projects"})]}),(0,n.jsx)("div",{className:"status-dot",title:"Online"})]}),(0,n.jsxs)("div",{className:"chat-messages",children:[e.map((e,t)=>(0,n.jsx)("div",{className:`msg-row ${e.role}`,children:(0,n.jsx)("div",{className:`bubble ${e.role}`,children:e.content})},t)),o&&(0,n.jsx)("div",{className:"msg-row assistant",children:(0,n.jsx)("div",{className:"bubble assistant",children:(0,n.jsx)(b,{})})}),(0,n.jsx)("div",{ref:d})]}),0===e.filter(e=>"user"===e.role).length&&(0,n.jsx)("div",{className:"suggestions",children:f.map(e=>(0,n.jsx)("button",{className:"suggestion-btn",onClick:()=>p(e),disabled:o,children:e},e))}),(0,n.jsxs)("div",{className:"chat-input-row",children:[(0,n.jsx)("input",{ref:u,className:"chat-input",type:"text",placeholder:"Ask about my experience, stack, projects...",value:r,onChange:e=>a(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),p(r))},disabled:o}),(0,n.jsx)("button",{className:"send-btn",onClick:()=>p(r),disabled:o||!r.trim(),"aria-label":"Send",children:(0,n.jsx)(m,{})})]})]})]})]})}function v(){let[e,t]=(0,s.useState)("home");return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(h,{activeSection:e,onSectionChange:t}),(0,n.jsxs)("div",{className:"main-content",children:[(0,n.jsxs)("div",{className:`content-panel ${"home"!==e?"visible":"hidden"}`,children:["about"===e&&(0,n.jsxs)("div",{className:"content-inner",children:[(0,n.jsx)("h2",{children:"About Me"}),(0,n.jsx)("p",{children:"I’m Zellie (she/they): Software Engineer, STEM educator, and creative human who can build an app, write music, or sew an outfit—depending on the day. Born and raised in Seattle, WA and now gallivanting in Brooklyn, NY."}),(0,n.jsx)("p",{children:"With 7+ years in full-stack development (React, JavaScript, Go), I focus on making web experiences simple, scalable, and genuinely enjoyable. I also teach computer science at The Parris Foundation, where I mentor students and help them build confidence through tech."}),(0,n.jsx)("p",{children:"I’m happiest working on projects that sit at the intersection of tech, education, community, and creativity. Feel free to reach out! I'm always open to discussing new projects and opportunities."})]}),"contact"===e&&(0,n.jsxs)("div",{className:"content-inner",children:[(0,n.jsx)("h2",{children:"holla at ur enby"}),(0,n.jsxs)("div",{className:"contact-links",children:[(0,n.jsxs)("a",{href:"mailto:your.email@example.com",className:"contact-link",children:[(0,n.jsx)(d,{size:24,className:"contact-icon",style:{color:"#2563eb"}}),(0,n.jsxs)("div",{className:"contact-info",children:[(0,n.jsx)("div",{className:"contact-label",children:"Email"}),(0,n.jsx)("div",{className:"contact-value",children:"justclickthis@thanks.bye"})]})]}),(0,n.jsxs)("a",{href:"https://github.com/rossssselle",target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:[(0,n.jsx)("svg",{className:"contact-icon",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),(0,n.jsxs)("div",{className:"contact-info",children:[(0,n.jsx)("div",{className:"contact-label",children:"GitHub"}),(0,n.jsx)("div",{className:"contact-value",children:"@rossssselle"})]})]}),(0,n.jsxs)("a",{href:"https://linkedin.com/in/rossellemacabata",target:"_blank",rel:"noopener noreferrer",className:"contact-link",children:[(0,n.jsx)("svg",{className:"contact-icon",width:"24",height:"24",fill:"#0077b5",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),(0,n.jsxs)("div",{className:"contact-info",children:[(0,n.jsx)("div",{className:"contact-label",children:"LinkedIn"}),(0,n.jsx)("div",{className:"contact-value",children:"Rosselle Macabata"})]})]})]})]}),"ai"===e&&(0,n.jsx)("section",{style:{maxWidth:600,margin:"80px auto",padding:"0 24px"},children:(0,n.jsx)(g,{})})]}),(0,n.jsx)("div",{className:`photo-section ${"home"!==e?"half":"full"}`,children:(0,n.jsx)("div",{className:"photo-content",children:(0,n.jsx)("div",{className:"photo-placeholder",children:(0,n.jsx)(p,{})})})})]})]})}e.s(["default",()=>v],31713)},64146,e=>{e.v(t=>Promise.all(["static/chunks/4addbc03f5648801.js","static/chunks/ed06ebd5658fc4bb.js"].map(t=>e.l(t))).then(()=>t(12750)))}]);