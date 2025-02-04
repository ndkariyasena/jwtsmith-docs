---
sidebar_position: 2
---

# JwtManager
### Centralized Configuration for JWT Smith

The `JwtManager` method in JWT Smith provides developers with a centralized way to configure and customize the behavior of token signing, verification, and middleware functionalities. It simplifies the setup process while allowing for fine-grained control through optional parameters and custom methods.

## Why Use JwtManager?

By leveraging `JwtManager`, you can:
- Define common configurations for signing and verifying JWTs.
- Pass custom methods to handle middleware behavior.
- Ensure consistent settings across your application.

This flexibility makes `JwtManager` a key component of JWT Smith, tailored for both simple and advanced use cases.

---

## Parameters
The `JwtManager` method accepts the following parameters:

### 1. `logger` (Object) [optional]
- **Description:** A custom logger instance (e.g., Pino, Winston) for logging events and errors.

### 2. `publicKey` (String) [required]
- **Description:** The public key used for verifying JWTs.

### 3. `refreshTokenKey` (String) [optional]
- **Description:** The key used for signing refresh tokens.
- **Note:** If the key is undefined module will use the `public-key`.

### 4. `signOptions` (Object) [optional]
- **Description:** Configuration options for signing JWTs.
- **Details:** All options provided by the `jsonwebtoken` library are supported.

### 5. `verifyOptions` (Object) [optional]
- **Description:** Configuration options for verifying JWTs.
- **Details:** All options provided by the `jsonwebtoken` library are supported.

### 6. `middlewareConfigs` (Object) [optional]
- **Description:** Configuration object for customizing middleware behavior.

#### Middleware Configurations
- **`tokenStorage` (Object) [optional]:** Custom storage for tokens, typically a class instance implementing storage methods.
- **`authHeaderName` (String) [optional]:** Name of the HTTP header that carries the authentication token.
- **`refreshTokenHeaderName` (String) [optional]:** Name of the HTTP header that carries the refresh token.
- **`appendToRequest` (Array | Boolean) [optional]:** A list of properties to append to the request object. Acceptable values:
  - `user`
  - `role`
  - `language`
  - `tokenPayload`
- **`cookieSettings` (Object):** Settings for handling cookies.
  - **`accessTokenCookieName` (String):** Name of the cookie that stores the access token.
  - **`accessCookieOptions` (Object):** Options for generating the access token cookie (compatible with Express cookie options).
  - **`refreshTokenCookieName` (String):** Name of the cookie that stores the refresh token.
  - **`refreshCookieOptions` (Object):** Options for generating the refresh token cookie (compatible with Express cookie options).

#### Middleware Custom Methods
- **`tokenGenerationHandler` (Function) [required]:** A custom handler for generating access and refresh tokens.
- **`authTokenExtractor` (Function) [optional]:** A custom handler for extracting the auth token from headers.
- **`authTokenPayloadVerifier` (Function) [optional]:** A custom handler for verifying the payload of the auth token.
- **`refreshTokenPayloadVerifier` (Function) [optional]:** A custom handler for verifying the payload of the refresh token.
- **`refreshTokenHolderVerifier` (Function) [optional]:** A custom handler for verifying the owner/holder of the refresh token.
- **`extractApiVersion` (Function) [optional]:** A custom handler for extracting the API version from the request.

:::danger[NOTE]
JWT Smith provides a memory-based solution for token storage, but it is **highly not recommended for production environments**.
:::

---

## Example Configuration
Here’s an example of setting up `JwtManager` with custom configurations:

```typescript
import { JwtManager } from 'jwt-smith';

const jwtManager = JwtManager({
  publicKey: process.env.PUBLIC_KEY || 'your-public-key',
  refreshTokenKey: process.env.REFRESH_TOKEN_KEY || 'your-refresh-key',
  signOptions: {
    algorithm: 'RS256',
    expiresIn: '1h',
  },
  verifyOptions: {
    algorithms: ['RS256'],
  },
  middlewareConfigs: {
    authHeaderName: 'Authorization',
    refreshTokenHeaderName: 'X-Refresh-Token',
    appendToRequest: ['user', 'role'],
    cookieSettings: {
      accessTokenCookieName: 'auth_token',
      accessCookieOptions: {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      },
      refreshTokenCookieName: 'refresh_token',
      refreshCookieOptions: {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      },
    },
    tokenGenerationHandler: async (payload) => {
      // Custom logic for generating tokens
      return {
        accessToken: 'generated-access-token',
        refreshToken: 'generated-refresh-token',
      };
    },
    authTokenExtractor: (req) => req.headers['authorization'],
  },
  logger: console, // Using the built-in console as a logger
});
```

---

## Next Steps
Now that you’ve configured the `JwtManager`, you can start using it for token signing, verification, and middleware integration.

