---
sidebar_position: 3
---

# roleBasedAuthenticationMiddleware

The `roleBasedAuthenticationMiddleware` enforces role-based access control (RBAC) for API endpoints by verifying user roles and their associated permissions before granting access.

## How It Works

- Extract `user` object or `role` property from the request object.
- Checks if the user has the required role and action permissions.
- Validates against a structured permissions configuration file (`.auth-permissions.json`).
- Supports wildcard permissions (`*:*`) for full access control.
- If access is granted, the request proceeds; otherwise, a `403 Forbidden` response is returned.

## Middleware Parameters

- `requiredAction: string` _(Required)_ - The action the user is attempting (e.g., `articles:post`, `articles:list`).

## Example Usage

```typescript
app.get(
  "/articles/some-endpoint",
  validateJwtHeaderMiddleware, // Or validateJwtCookieMiddleware
  roleBasedAuthenticationMiddleware("articles:list"),
  (req, res) => {
    res.send("You have access to this endpoint");
  }
);
```

## Permissions Configuration File

### File Structure

The permissions configuration file contains 3 main categories:

- `endpoints`

- `groups`

- `common`

:::tip

The middleware reads the configurations in the above order.

:::

If the `activeVersions` property is present, the middleware will reject all non-mentioned API versions.

The permissions file (`.auth-permissions.json`) must be located at the root level and should define role-based access as follows:

```json
{
  "versioned": true,
  "activeVersions": ["v1"],
  "endpoints": [
    {
      "path": "/login",
      "methods": ["POST"],
      "permissions": [
        {
          "roles": ["Admin", "Viewer", "Editor"],
          "actions": ["auth:login"]
        }
      ]
    },
    {
      "path": "/logout",
      "methods": ["POST"],
      "permissions": [
        {
          "roles": ["Admin", "Viewer", "Editor"],
          "actions": ["auth:logout"]
        }
      ]
    },
    {
      "path": "/users",
      "methods": ["GET"],
      "permissions": [
        {
          "roles": ["Admin", "Viewer", "Editor"],
          "actions": ["user:list"]
        }
      ]
    }
  ],
  "groups": {
    "posts": {
      "basePath": "/posts",
      "permissions": [
        {
          "roles": ["Admin", "Editor"],
          "actions": ["read:post", "write:post"]
        },
        {
          "roles": ["Viewer"],
          "actions": ["read:post"]
        }
      ],
      "endpoints": [
        {
          "path": "/:id",
          "methods": ["GET", "DELETE"],
          "permissions": [
            {
              "roles": ["Admin"],
              "actions": ["delete:post"]
            }
          ]
        }
      ]
    },
    "users": {
      "basePath": "/v1/users",
      "permissions": [
        {
          "roles": ["Admin"],
          "actions": ["*:*"]
        }
      ],
      "endpoints": [
        {
          "path": "/profile",
          "methods": ["GET"],
          "permissions": [
            {
              "roles": ["Admin", "Viewer"],
              "actions": ["read:user"]
            }
          ]
        },
        {
          "path": "/:id",
          "methods": ["PATCH", "DELETE"],
          "permissions": [
            {
              "roles": ["Admin"],
              "actions": ["update:user", "delete:user"]
            }
          ]
        }
      ]
    }
  },
  "common": {
    "roles": [
      {
        "name": "Admin",
        "permissions": ["*:*"]
      },
      {
        "name": "Editor",
        "permissions": ["read:post", "write:post"]
      },
      {
        "name": "Viewer",
        "permissions": ["read:post"]
      }
    ]
  }
}
```

```typescript
interface PermissionsConfiguration {
  versioned?: boolean;
  activeVersions?: string[];
  common: {
    roles: RolesSet[];
  };
  groups: GroupedRoutesPermissionConfig;
  endpoints: EndPointsPermissionConfig[];
}

interface RolesSet {
  name: string;
  permissions: string[];
}

type GroupedRoutesPermissionConfig = Record<string, EndPointConfig>;

interface EndPointConfig {
  basePath: string;
  permissions: PermissionsSet[];
  endpoints: EndPointsPermissionConfig[];
}

interface PermissionsSet {
  roles: string[];
  actions: string[];
}

interface EndPointsPermissionConfig {
  path: string;
  methods: string[];
  permissions: PermissionsSet[];
}
```

## Customization via JwtManager

- **`extractApiVersion`** _(Function, optional)_: Custom function to extract API version from the request.

```typescript title="authTokenExtractor"
interface (request: AuthedRequest) => Promise<string | undefined>;
```

This middleware provides a structured approach to role-based authentication, ensuring secure access control for your application.
