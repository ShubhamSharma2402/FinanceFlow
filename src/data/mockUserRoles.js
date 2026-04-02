// src/data/mockUserRoles.js

export const mockUsers = [
  {
    id: "u1",
    name: "Shubham Sharma",
    role: "admin"
  },
  {
    id: "u2",
    name: "Demo User",
    role: "viewer"
  },
  {
    id: "u3",
    name: "Finance Intern",
    role: "editor"
  }
];

export const rolePermissions = {
  admin: ["view", "edit", "delete", "export"],
  editor: ["view", "edit", "export"],
  viewer: ["view"]
};