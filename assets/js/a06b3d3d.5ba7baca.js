"use strict";(self.webpackChunkjwtsmith_docs=self.webpackChunkjwtsmith_docs||[]).push([[4492],{6060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tutorial-basics/installation-and-setup","title":"installation-and-setup","description":"Jwt Smith logo","source":"@site/versioned_docs/version-0.1.0/tutorial-basics/installation-and-setup.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/installation-and-setup","permalink":"/docs/0.1.0/tutorial-basics/installation-and-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.1.0/tutorial-basics/installation-and-setup.md","tags":[],"version":"0.1.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial - Basics","permalink":"/docs/0.1.0/category/tutorial---basics"},"next":{"title":"JwtManager","permalink":"/docs/0.1.0/tutorial-basics/jwt-manager"}}');var s=t(4848),a=t(8453);const r={sidebar_position:1},o="Installation and Setup",l={},d=[{value:"Installation",id:"installation",level:2},{value:"Using npm",id:"using-npm",level:3},{value:"Using yarn",id:"using-yarn",level:3},{value:"Using pnpm",id:"using-pnpm",level:3},{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"Setting Up",id:"setting-up",level:3},{value:"Setting Environment Variables",id:"setting-environment-variables",level:3},{value:"Integrating with Your Application",id:"integrating-with-your-application",level:3},{value:"Example Setup with Express",id:"example-setup-with-express",level:4},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Jwt Smith logo",src:t(8995).A+"",width:"200",height:"200"})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"installation-and-setup",children:"Installation and Setup"})}),"\n",(0,s.jsxs)(n.p,{children:["In this section, we will guide you through the process of installing and setting up ",(0,s.jsx)(n.strong,{children:"JWT Smith"})," in your project. By the end of this section, you\u2019ll have JWT Smith integrated into your Node.js or TypeScript application, ready to handle JWT-based authentication."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["To install JWT Smith, use your preferred package manager. Ensure that you have ",(0,s.jsx)(n.strong,{children:"Node.js v18 or higher"})," installed."]}),"\n",(0,s.jsx)(n.h3,{id:"using-npm",children:"Using npm"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install jwt-smith\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-yarn",children:"Using yarn"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add jwt-smith\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-pnpm",children:"Using pnpm"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add jwt-smith\n"})}),"\n",(0,s.jsx)(n.h2,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,s.jsx)(n.p,{children:"After installing JWT Smith, you can start configuring it for your application. Begin by importing the required modules and setting up your JWT environment."}),"\n",(0,s.jsx)(n.h3,{id:"setting-up",children:"Setting Up"}),"\n",(0,s.jsxs)(n.p,{children:["Create a configuration object with ",(0,s.jsx)(n.code,{children:"JwtManager"})," to centralize your JWT settings:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { JwtManager } from 'jwt-smith';\n\nJwtManager({\n  signOptions: {\n    algorithm: 'HS256',\n  },\n  publicKey: process.env.ACCESS_TOKEN_SECRET,\n  refreshTokenKey: process.env.REFRESH_TOKEN_SECRET,\n  tokenStorage: new CustomTokenStorage(),\n  middlewareConfigs: {\n    tokenGenerationHandler: customTokenGeneration,\n    appendToRequest: ['user', 'role'],\n    cookieSettings: {\n      accessTokenCookieName: 'app-auth-token',\n      refreshTokenCookieName: 'app-auth-refresh-token',\n      refreshCookieOptions: {\n        httpOnly: true,\n        sameSite: false,\n      },\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We will discuss the ",(0,s.jsx)(n.strong,{children:"JwtManager"})," in depth in the next section."]}),"\n",(0,s.jsx)(n.h3,{id:"setting-environment-variables",children:"Setting Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["For security, store your secrets in environment variables. Create a ",(0,s.jsx)(n.code,{children:".env"})," file in the root of your project:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ACCESS_TOKEN_SECRET=your-access-token-secret\nREFRESH_TOKEN_SECRET=your-refresh-token-secret\n"})}),"\n",(0,s.jsx)(n.h3,{id:"integrating-with-your-application",children:"Integrating with Your Application"}),"\n",(0,s.jsx)(n.p,{children:"Now, integrate JWT Smith into your application using its middlewares and utilities."}),"\n",(0,s.jsx)(n.h4,{id:"example-setup-with-express",children:"Example Setup with Express"}),"\n",(0,s.jsx)(n.p,{children:"Here\u2019s how to secure your routes using JWT Smith:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import express from 'express';\nimport { \n  validateJwtHeaderMiddleware, \n  validateJwtCookieMiddleware, \n  roleBasedAuthenticationMiddleware,\n  JwtManager\n} from 'jwt-smith';\n\nconst app = express();\n\nJwtManager({\n  ...\n})\n\n// Use the middleware to validate JWTs in the Authorization header\napp.use('/api/protected', validateJwtHeaderMiddleware);\n\n// Or validate JWTs stored in cookies\napp.use('/api/secure', validateJwtCookieMiddleware);\n\n// And validate with Role based authentication\napp.use('/api/posts', validateJwtCookieMiddleware, roleBasedAuthenticationMiddleware('posts:read'));\n\napp.get('/api/protected', (req, res) => {\n  res.send('This route is protected with JWT!');\n});\n\napp.listen(3000, () => {\n  console.log('Server running on http://localhost:3000');\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.p,{children:["At this point, you have successfully installed and integrated JWT Smith into your application. Next, we\u2019ll dive into the ",(0,s.jsx)(n.strong,{children:"core methods"})," provided by JWT Smith, starting with core configurations management."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/0.1.0/tutorial-basics/jwt-manager",children:"Continue to: Jwt Manager"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8995:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/docusaurus-94605573bd2cd2c25ae516e2bd4a0126.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);