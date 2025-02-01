---
sidebar_position: 2
---

# validateJwtCookieMiddleware

The `validateJwtCookieMiddleware` checks for the presence of access and refresh tokens in the request cookies. If neither token is found, it throws an error. If tokens are found, it validates or refreshes them using the provided token generation handler and token storage.

If the tokens are valid, the middleware:
- Appends the decoded token payload to the request object.
- Sets new tokens in the cookies if necessary.
- If the tokens are invalid or an error occurs during validation, it responds with a `401 Unauthorized` status and an error message.

## Customization via JwtManager

Developers can customize this middleware through `JwtManager` by passing custom data and functions under the `middlewareConfigs` property.

### Required Parameters in JwtManager:

- **`tokenGenerationHandler`** *(Function)*: Handles token and refresh-token generation.
  ```typescript
  type TokenGenerationHandler = (
    refreshTokenPayload: string | Jwt | JwtPayload | undefined,
    tokenHolder: Record<string, unknown>,
  ) => Promise<{ token: string; refreshToken: string }>;
  ```

### Optional Parameters in JwtManager:

- **`authTokenPayloadVerifier`** *(Function)*: Verifies the authentication token payload.
  ```typescript
  type AuthTokenPayloadVerifier = (tokenPayload: string | Jwt | JwtPayload | undefined) => Promise<void>;
  ```

- **`refreshTokenPayloadVerifier`** *(Function)*: Verifies the refresh token payload.
  ```typescript
  type RefreshTokenPayloadVerifier = (refreshTokenPayload: string | Jwt | JwtPayload | undefined) => Promise<void>;
  ```

- **`refreshTokenHolderVerifier`** *(Function)*: Verifies the token holder's identity.
  ```typescript
  type RefreshTokenHolderVerifier = (
    tokenHolder: Record<string, unknown>
  ) => Promise<void>;
  ```

- **`tokenStorage`** *(Object, optional)*: Custom storage for tokens, typically a class instance implementing storage methods.
  ```typescript
  interface TokenStorage {
    getToken?: (userId: string) => Promise<string | string[] | null>;
    getRefreshToken: (userId: string) => Promise<string | string[] | null>;
    getRefreshTokenHolder: (refreshToken: string) => Promise<Record<string, unknown> | null>;
    saveOrUpdateToken: (userId: string, refreshToken: string, token?: string) => Promise<void>;
    deleteToken: (userId: string, token?: string, refreshToken?: string) => Promise<void>;
    blackListRefreshToken: (token: string, relatedData?: Record<string, unknown>) => Promise<void>;
    checkBlackListedRefreshToken: (token: string) => Promise<Record<string, unknown> | undefined>;
  }
  ```
  :::danger[NOTE]
  JWT Smith provides a memory-based solution for token storage, but it is *highly not recommended for production environments*.
  :::

- **`cookieSettings`** *(Object, optional)*: Developers can configure cookie names for authentication and refresh tokens.
  ```typescript
  cookieSettings: {
    accessTokenCookieName: string;
    accessCookieOptions: object; // Express cookie options
    refreshTokenCookieName: string;
    refreshCookieOptions: object; // Express cookie options
  }
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
    authTokenPayloadVerifier: async (tokenPayload) => {
      if (!tokenPayload) throw new Error('Invalid access token');
    },
    refreshTokenPayloadVerifier: async (refreshTokenPayload) => {
      if (!refreshTokenPayload) throw new Error('Invalid refresh token');
    },
    refreshTokenHolderVerifier: async (tokenHolder) => {
      if (!tokenHolder || !tokenHolder.userId) throw new Error('Invalid token holder');
    },
    tokenStorage: new CustomTokenStorage(), // Custom token storage class instance
    cookieSettings: {
      accessTokenCookieName: 'access_token',
      accessCookieOptions: { httpOnly: true, secure: true },
      refreshTokenCookieName: 'refresh_token',
      refreshCookieOptions: { httpOnly: true, secure: true },
    },
  },
});
```

This middleware ensures secure and efficient token validation, making authentication management seamless.

