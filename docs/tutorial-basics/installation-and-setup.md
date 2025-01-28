---
sidebar_position: 1
---

# Installation and Setup

In this section, we will guide you through the process of installing and setting up **JWT Smith** in your project. By the end of this section, you’ll have JWT Smith integrated into your Node.js or TypeScript application, ready to handle JWT-based authentication.

## Installation
To install JWT Smith, use your preferred package manager. Ensure that you have **Node.js v18 or higher** installed.

### Using npm
```bash
npm install jwt-smith
```

### Using yarn
```bash
yarn add jwt-smith
```

### Using pnpm
```bash
pnpm add jwt-smith
```

## Basic Configuration
After installing JWT Smith, you can start configuring it for your application. Begin by importing the required modules and setting up your JWT environment.

### Setting Up
Create a configuration object with `JwtManager` to centralize your JWT settings:

```typescript
import { JwtManager } from 'jwt-smith';

JwtManager({
  signOptions: {
    algorithm: 'HS256',
  },
  publicKey: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenKey: process.env.REFRESH_TOKEN_SECRET,
  tokenStorage: new CustomTokenStorage(),
  middlewareConfigs: {
    tokenGenerationHandler: customTokenGeneration,
    appendToRequest: ['user', 'role'],
    cookieSettings: {
      accessTokenCookieName: 'app-auth-token',
      refreshTokenCookieName: 'app-auth-refresh-token',
      refreshCookieOptions: {
        httpOnly: true,
        sameSite: false,
      },
    },
  },
});
```
We will discuss the **JwtManager** in depth in the next section.

### Setting Environment Variables
For security, store your secrets in environment variables. Create a `.env` file in the root of your project:

```
ACCESS_TOKEN_SECRET=your-access-token-secret
REFRESH_TOKEN_SECRET=your-refresh-token-secret
```

### Integrating with Your Application
Now, integrate JWT Smith into your application using its middlewares and utilities.

#### Example Setup with Express
Here’s how to secure your routes using JWT Smith:

```typescript
import express from 'express';
import { 
  validateJwtHeaderMiddleware, 
  validateJwtCookieMiddleware, 
  roleBasedAuthenticationMiddleware,
  JwtManager
} from 'jwt-smith';

const app = express();

JwtManager({
  ...
})

// Use the middleware to validate JWTs in the Authorization header
app.use('/api/protected', validateJwtHeaderMiddleware);

// Or validate JWTs stored in cookies
app.use('/api/secure', validateJwtCookieMiddleware);

// And validate with Role based authentication
app.use('/api/posts', validateJwtCookieMiddleware, roleBasedAuthenticationMiddleware('posts:read'));

app.get('/api/protected', (req, res) => {
  res.send('This route is protected with JWT!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

## Next Steps
At this point, you have successfully installed and integrated JWT Smith into your application. Next, we’ll dive into the **core methods** provided by JWT Smith, starting with core configurations management.

[Continue to: Jwt Manager](jwt-manager.md)

