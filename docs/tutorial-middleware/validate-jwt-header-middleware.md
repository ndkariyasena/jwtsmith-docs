---
sidebar_position: 2
---

# validateJwtHeaderMiddleware

The `validateJwtHeaderMiddleware` is similar to the `validateJwtCookieMiddleware` but has additional configurations for handling JWTs in request headers. This middleware extracts the JWT from the specified header, validates it, and optionally refreshes it if needed.

When extracting the refresh token, if the `cookieSettings` configuration object contains a value for the `refreshTokenCookieName` property, the middleware first checks the cookies, then the headers. The same approach applies when appending a new refresh token to the response object.

This middleware provides flexibility by allowing developers to define custom extraction methods, token verification logic, and refresh token handling mechanisms.

## Customization via JwtManager

In addition to the configurations used by the `validateJwtCookieMiddleware`, this middleware also supports the following optional configurations under `middlewareConfigs`:

### Additional Configurations

- **`authHeaderName`** *(string, optional)*: Specifies the name of the header containing the authentication token.
- **`refreshTokenHeaderName`** *(string, optional)*: Specifies the name of the header containing the refresh token.
- **`authTokenExtractor`** *(Function, optional)*: A custom function to extract the authentication token from the header.

```typescript title="authTokenExtractor"
interface (authHeader: string) => string | undefined;
```

## Example Usage

```typescript
import { JwtManager } from 'jwt-smith';

const jwtManager = new JwtManager({
  middlewareConfigs: {
    tokenGenerationHandler: async (refreshTokenPayload, tokenHolder) => {
      return {
        token: 'newAccessToken',
        refreshToken: 'newRefreshToken',
      };
    },
    authHeaderName: 'Authorization',
    refreshTokenHeaderName: 'X-Refresh-Token',
    authTokenExtractor: (header) => header.split(' ')[1], // Extract Bearer token
    cookieSettings: {
      refreshTokenCookieName: 'refresh_token',
    },
  },
});
```
:::tip Tips

The configurations employed by the `validateJwtCookieMiddleware` function are also applicable.

:::

This middleware provides a flexible way to handle JWT validation from headers while ensuring security and extensibility.

[Next: Role-Based Authentication Middleware](role-based-authentication-middleware.md)

