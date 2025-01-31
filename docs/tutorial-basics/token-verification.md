---
sidebar_position: 4
---

# Token Verification

The `verify` method in JWT Smith is designed to validate JSON Web Tokens (JWTs) with the same flexibility and configurability as the `sign` method. This asynchronous function ensures secure and reliable verification of tokens, allowing developers to enforce token integrity and authenticity.

## How the `verify` Method Works

The `verify` method accepts an object as its parameter, similar to the `sign` method. However, the primary difference is that the first property is the `token` to be verified.

### Parameters

#### 1. `token` (string) [required]

- **Description:** The JWT to be verified.
- **Examples:**
  - A signed JWT string (e.g., `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."`)

#### 2. `secret` (string | Buffer | KeyObject | \{ \[key\]: string | Buffer; passphrase: string \} | PrivateKeyInput | JsonWebKeyInput) [required]

- **Description:** The secret or public key used to verify the JWT.
- **Details:** The key must match the one used during the signing process.
- **Note:** Secrets and keys must align with the algorithm used.

#### 3. `options` (Object) [optional]

- **Description:** Additional options for configuring the verification process.

- **Supported Properties:**

  - `algorithms`: List of allowed algorithms for verification (e.g., `["HS256", "RS256"]`).
  - `audience`: Expected audience of the token.
  - `issuer`: Expected issuer of the token.
  - `subject`: Expected subject of the token.
  - `jwtid`: JWT ID to match against the `jti` claim in the token.
  - `ignoreExpiration`: When set to `true`, ignores token expiration (use with caution).
  - `ignoreNotBefore`: When set to `true`, ignores the `nbf` claim (use with caution).
  - `complete`: When set to `true`, returns the decoded payload and header as an object.

- **Note:** All options provided by the `jsonwebtoken` library are supported.

### Return Value

The verify method returns a Promise that resolves to:

- `string`: If the token is successfully verified, and the payload is a string.
- `Jwt`: If the token is successfully verified, and the payload is a Jwt object.
- `JwtPayload`: If the token is successfully verified, and the payload is a JwtPayload object.
- `undefined`: If the token is successfully verified, but the payload is empty or cannot be determined.
- `Error`: If the token verification fails.

```typescript
Promise<string | Jwt | JwtPayload | undefined>
```

---

## Setting Default Verification Options

Similar to signing, you can configure default options for verification using the `JwtManager`. This simplifies the process by defining consistent behaviors across your application.

### Example: Using `JwtManager` for Default Options

```typescript
import { JwtManager, setDefaultVerifyOptions, verify } from 'jwt-smith';

JwtManager({
  publicKey: process.env.PUBLIC_KEY || 'your-public-key',
  verifyOptions: { ... }
});

// OR Set default verification options
setDefaultVerifyOptions({
  algorithms: ['RS256'],
  issuer: 'my-app',
});

// Verify a token
const decoded = await verify({
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  secret: 'my-public-key',
});

console.log('Decoded Payload:', decoded);
```

---

## Best Practices

1. **Use Secure Secrets:** Always use the correct public or private keys for verification.
2. **Leverage Default Options:** Set defaults using `JwtManager` to reduce errors and improve consistency.
3. **Validate Critical Claims:** Ensure critical claims like `audience`, `issuer`, and `subject` are validated to prevent misuse.
4. **Avoid Ignoring Claims:** Avoid using options like `ignoreExpiration` and `ignoreNotBefore` in production environments.

---

[Continue to: Middleware Functions](middleware-functions.md)

