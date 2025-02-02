"use strict";(self.webpackChunkjwtsmith_docs=self.webpackChunkjwtsmith_docs||[]).push([[7186],{9679:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"tutorial-middleware/validate-jwt-header-middleware","title":"validateJwtHeaderMiddleware","description":"The validateJwtHeaderMiddleware is similar to the validateJwtCookieMiddleware but has additional configurations for handling JWTs in request headers. This middleware extracts the JWT from the specified header, validates it, and optionally refreshes it if needed.","source":"@site/docs/tutorial-middleware/validate-jwt-header-middleware.md","sourceDirName":"tutorial-middleware","slug":"/tutorial-middleware/validate-jwt-header-middleware","permalink":"/docs/next/tutorial-middleware/validate-jwt-header-middleware","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-middleware/validate-jwt-header-middleware.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"validateJwtCookieMiddleware","permalink":"/docs/next/tutorial-middleware/validate-jwt-cookie-middleware"},"next":{"title":"roleBasedAuthenticationMiddleware","permalink":"/docs/next/tutorial-middleware/role-based-authentication-middleware"}}');var n=i(4848),r=i(8453);const d={sidebar_position:2},o="validateJwtHeaderMiddleware",s={},l=[{value:"Customization via JwtManager",id:"customization-via-jwtmanager",level:2},{value:"Additional Configurations",id:"additional-configurations",level:3},{value:"Example Usage",id:"example-usage",level:2}];function c(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"validatejwtheadermiddleware",children:"validateJwtHeaderMiddleware"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"validateJwtHeaderMiddleware"})," is similar to the ",(0,n.jsx)(t.code,{children:"validateJwtCookieMiddleware"})," but has additional configurations for handling JWTs in request headers. This middleware extracts the JWT from the specified header, validates it, and optionally refreshes it if needed."]}),"\n",(0,n.jsxs)(t.p,{children:["When extracting the refresh token, if the ",(0,n.jsx)(t.code,{children:"cookieSettings"})," configuration object contains a value for the ",(0,n.jsx)(t.code,{children:"refreshTokenCookieName"})," property, the middleware first checks the cookies, then the headers. The same approach applies when appending a new refresh token to the response object."]}),"\n",(0,n.jsx)(t.p,{children:"This middleware provides flexibility by allowing developers to define custom extraction methods, token verification logic, and refresh token handling mechanisms."}),"\n",(0,n.jsx)(t.h2,{id:"customization-via-jwtmanager",children:"Customization via JwtManager"}),"\n",(0,n.jsxs)(t.p,{children:["In addition to the configurations used by the ",(0,n.jsx)(t.code,{children:"validateJwtCookieMiddleware"}),", this middleware also supports the following optional configurations under ",(0,n.jsx)(t.code,{children:"middlewareConfigs"}),":"]}),"\n",(0,n.jsx)(t.h3,{id:"additional-configurations",children:"Additional Configurations"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"authHeaderName"})})," ",(0,n.jsx)(t.em,{children:"(string, optional)"}),": Specifies the name of the header containing the authentication token."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"refreshTokenHeaderName"})})," ",(0,n.jsx)(t.em,{children:"(string, optional)"}),": Specifies the name of the header containing the refresh token."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"authTokenExtractor"})})," ",(0,n.jsx)(t.em,{children:"(Function, optional)"}),": A custom function to extract the authentication token from the header."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:'title="authTokenExtractor"',children:"interface (authHeader: string) => string | undefined;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { JwtManager } from 'jwt-smith';\n\nconst jwtManager = new JwtManager({\n  middlewareConfigs: {\n    tokenGenerationHandler: async (refreshTokenPayload, tokenHolder) => {\n      return {\n        token: 'newAccessToken',\n        refreshToken: 'newRefreshToken',\n      };\n    },\n    authHeaderName: 'Authorization',\n    refreshTokenHeaderName: 'X-Refresh-Token',\n    authTokenExtractor: (header) => header.split(' ')[1], // Extract Bearer token\n    cookieSettings: {\n      refreshTokenCookieName: 'refresh_token',\n    },\n  },\n});\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Tips",type:"tip",children:(0,n.jsxs)(t.p,{children:["The configurations employed by the ",(0,n.jsx)(t.code,{children:"validateJwtCookieMiddleware"})," function are also applicable."]})}),"\n",(0,n.jsx)(t.p,{children:"This middleware provides a flexible way to handle JWT validation from headers while ensuring security and extensibility."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>o});var a=i(6540);const n={},r=a.createContext(n);function d(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);