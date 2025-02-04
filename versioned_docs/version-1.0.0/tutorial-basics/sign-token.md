---
sidebar_position: 3
---

# Token Signing

The `sign` method in JWT Smith is a powerful and flexible function used to create JSON Web Tokens (JWTs). With its asynchronous implementation, it allows developers to efficiently generate tokens with custom payloads, secrets, and options.

## How the `sign` Method Works
The `sign` method accepts an object as its parameter, providing developers with complete control over token generation. Below are the properties that can be included in this object:

### Parameters

#### 1. `payload` (string | Buffer | object) [required]
- **Description:** The data to be embedded in the JWT.
- **Examples:**
  - A string (`"user123"`)
  - An object (`{ id: 1, role: "admin" }`)

#### 2. `secret` (string | Buffer | KeyObject | \{ \[key\]: string | Buffer; passphrase: string \} | PrivateKeyInput | JsonWebKeyInput) [required]
- **Description:** The secret or private key used to sign the JWT.
- **Details:** The key can also be an object or a buffer.
- **Note:** Secrets and keys must match the algorithm used.

#### 3. `options` (Object) [optional]
- **Description:** Additional options for configuring the token.
- **Supported Properties:**
  - `algorithm`: The signing algorithm to use (e.g., `HS256`, `RS256`).
  - `expiresIn`: Specifies the expiration time of the token (e.g., `"1h"`, `3600`).
  - `notBefore`: Specifies the time before which the token is invalid (e.g., `"10s"`).
  - `audience`: Identifies the recipients that the token is intended for.
  - `subject`: Identifies the subject of the token.
  - `issuer`: Identifies the principal that issued the token.
  - `jwtid`: A unique identifier for the token.
  - `header`: Additional JWT header parameters.

- **Note:** All options provided by the `jsonwebtoken` library are supported.

### Return Value
The `sign` method returns a `Promise` that resolves to a `string` containing the signed JWT, or `undefined` if signing fails.

```typescript
Promise<string | undefined>
```

---

## Setting Default Signing Options
JWT Smith provides the `setDefaultSignOptions` method to define common options for signing tokens. This method accepts an object with the same properties as the `options` parameter in the `sign` method. Additionally, developers can use the `JwtManager` to set up default configurations for signing tokens.

### Example: Using `setDefaultSignOptions`
By configuring default signing options, you can simplify subsequent calls to the `sign` method.

```typescript
import { JwtManager, setDefaultSignOptions, sign } from 'jwt-smith';

JwtManager({
  publicKey: process.env.PUBLIC_KEY || 'your-public-key',
  signOptions: { ... }
});

// OR Set default signing options
setDefaultSignOptions({
  algorithm: 'RS256',
  expiresIn: '1h',
  issuer: 'my-app',
});

// Sign a token
const token = await sign({
  payload: { id: 1, role: 'user' },
  secret: 'my-secret-key',
});

console.log('Signed Token:', token);
```

---

## Best Practices
1. **Use Secure Secrets:** Always use strong, unpredictable secrets or private keys for signing tokens.
2. **Set Expiration Times:** Define reasonable `expiresIn` values to reduce the risk of token misuse.
3. **Algorithm Consistency:** Ensure the algorithm matches between signing and verification.
4. **Default Options:** Use `setDefaultSignOptions` to maintain consistent signing behavior across your application.

---

