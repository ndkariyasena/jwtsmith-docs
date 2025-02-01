---
sidebar_position: 1
---

# Introduction to Middleware in JWT Smith

JWT Smith provides built-in middleware to simplify authentication and authorization in your application. These middleware functions help verify JWTs, extract user information, and enforce role-based access control (RBAC) seamlessly.

## Available Middleware

1. **validateJwtCookieMiddleware**
   - Extracts and verifies access and refresh tokens from cookies.
   
2. **validateJwtHeaderMiddleware**
   - Checks for a JWT token in the Authorization header and verifies its validity.
   
3. **roleBasedAuthenticationMiddleware**
   - Ensures users have the necessary roles to access protected resources.
   
Each middleware function is designed to integrate effortlessly with Express applications while allowing customization through `JwtManager` configurations.

In the following sections, we will dive into each middleware in detail, covering their usage, customization options, and best practices.

