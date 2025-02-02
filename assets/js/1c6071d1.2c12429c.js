"use strict";(self.webpackChunkjwtsmith_docs=self.webpackChunkjwtsmith_docs||[]).push([[9656],{5385:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"tutorial-middleware/validate-jwt-cookie-middleware","title":"validateJwtCookieMiddleware","description":"The validateJwtCookieMiddleware checks for the presence of access and refresh tokens in the request cookies. If neither token is found, it throws an error. If tokens are found, it validates or refreshes them using the provided token generation handler and token storage.","source":"@site/docs/tutorial-middleware/validate-jwt-cookie-middleware.md","sourceDirName":"tutorial-middleware","slug":"/tutorial-middleware/validate-jwt-cookie-middleware","permalink":"/docs/next/tutorial-middleware/validate-jwt-cookie-middleware","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-middleware/validate-jwt-cookie-middleware.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction to Middleware in JWT Smith","permalink":"/docs/next/tutorial-middleware/introduction"},"next":{"title":"validateJwtHeaderMiddleware","permalink":"/docs/next/tutorial-middleware/validate-jwt-header-middleware"}}');var i=r(4848),o=r(8453);const s={sidebar_position:2},a="validateJwtCookieMiddleware",d={},l=[{value:"Customization via JwtManager",id:"customization-via-jwtmanager",level:2},{value:"Required Parameters in JwtManager:",id:"required-parameters-in-jwtmanager",level:3},{value:"Optional Parameters in JwtManager:",id:"optional-parameters-in-jwtmanager",level:3},{value:"Example Usage",id:"example-usage",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"validatejwtcookiemiddleware",children:"validateJwtCookieMiddleware"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"validateJwtCookieMiddleware"})," checks for the presence of access and refresh tokens in the request cookies. If neither token is found, it throws an error. If tokens are found, it validates or refreshes them using the provided token generation handler and token storage."]}),"\n",(0,i.jsx)(n.p,{children:"If the tokens are valid, the middleware:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Appends the decoded token payload to the request object."}),"\n",(0,i.jsx)(n.li,{children:"Sets new tokens in the cookies if necessary."}),"\n",(0,i.jsxs)(n.li,{children:["If the tokens are invalid or an error occurs during validation, it responds with a ",(0,i.jsx)(n.code,{children:"401 Unauthorized"})," status and an error message."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"customization-via-jwtmanager",children:"Customization via JwtManager"}),"\n",(0,i.jsxs)(n.p,{children:["Developers can customize this middleware through ",(0,i.jsx)(n.code,{children:"JwtManager"})," by passing custom data and functions under the ",(0,i.jsx)(n.code,{children:"middlewareConfigs"})," property."]}),"\n",(0,i.jsx)(n.h3,{id:"required-parameters-in-jwtmanager",children:"Required Parameters in JwtManager:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"tokenGenerationHandler"})})," ",(0,i.jsx)(n.em,{children:"(Function)"}),": Handles token and refresh-token generation.","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type TokenGenerationHandler = (\n  refreshTokenPayload: string | Jwt | JwtPayload | undefined,\n  tokenHolder: Record<string, unknown>,\n) => Promise<{ token: string; refreshToken: string }>;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"optional-parameters-in-jwtmanager",children:"Optional Parameters in JwtManager:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"authTokenPayloadVerifier"})})," ",(0,i.jsx)(n.em,{children:"(Function)"}),": Verifies the authentication token payload."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type AuthTokenPayloadVerifier = (tokenPayload: string | Jwt | JwtPayload | undefined) => Promise<void>;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"refreshTokenPayloadVerifier"})})," ",(0,i.jsx)(n.em,{children:"(Function)"}),": Verifies the refresh token payload."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type RefreshTokenPayloadVerifier = (refreshTokenPayload: string | Jwt | JwtPayload | undefined) => Promise<void>;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"refreshTokenHolderVerifier"})})," ",(0,i.jsx)(n.em,{children:"(Function)"}),": Verifies the token holder's identity."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type RefreshTokenHolderVerifier = (\n  tokenHolder: Record<string, unknown>\n) => Promise<void>;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"tokenStorage"})})," ",(0,i.jsx)(n.em,{children:"(Object, optional)"}),": Custom storage for tokens, typically a class instance implementing storage methods."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"interface TokenStorage {\n  getToken?: (userId: string) => Promise<string | string[] | null>;\n  getRefreshToken: (userId: string) => Promise<string | string[] | null>;\n  getRefreshTokenHolder: (refreshToken: string) => Promise<Record<string, unknown> | null>;\n  saveOrUpdateToken: (userId: string, refreshToken: string, token?: string) => Promise<void>;\n  deleteToken: (userId: string, token?: string, refreshToken?: string) => Promise<void>;\n  blackListRefreshToken: (token: string, relatedData?: Record<string, unknown>) => Promise<void>;\n  checkBlackListedRefreshToken: (token: string) => Promise<Record<string, unknown> | undefined>;\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"NOTE",type:"danger",children:(0,i.jsxs)(n.p,{children:["JWT Smith provides a memory-based solution for token storage, but it is ",(0,i.jsx)(n.em,{children:"highly not recommended for production environments"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"cookieSettings"})})," ",(0,i.jsx)(n.em,{children:"(Object, optional)"}),": Developers can configure cookie names for authentication and refresh tokens."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"cookieSettings: {\n  accessTokenCookieName: string;\n  accessCookieOptions: object; // Express cookie options\n  refreshTokenCookieName: string;\n  refreshCookieOptions: object; // Express cookie options\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { JwtManager } from 'jwt-smith';\n\nconst jwtManager = new JwtManager({\n  middlewareConfigs: {\n    tokenGenerationHandler: async (refreshTokenPayload, tokenHolder) => {\n      return {\n        token: 'newAccessToken',\n        refreshToken: 'newRefreshToken',\n      };\n    },\n    authTokenPayloadVerifier: async (tokenPayload) => {\n      if (!tokenPayload) throw new Error('Invalid access token');\n    },\n    refreshTokenPayloadVerifier: async (refreshTokenPayload) => {\n      if (!refreshTokenPayload) throw new Error('Invalid refresh token');\n    },\n    refreshTokenHolderVerifier: async (tokenHolder) => {\n      if (!tokenHolder || !tokenHolder.userId) throw new Error('Invalid token holder');\n    },\n    tokenStorage: new CustomTokenStorage(), // Custom token storage class instance\n    cookieSettings: {\n      accessTokenCookieName: 'access_token',\n      accessCookieOptions: { httpOnly: true, secure: true },\n      refreshTokenCookieName: 'refresh_token',\n      refreshCookieOptions: { httpOnly: true, secure: true },\n    },\n  },\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"This middleware ensures secure and efficient token validation, making authentication management seamless."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(6540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);