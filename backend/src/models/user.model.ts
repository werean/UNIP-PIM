export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: number;
}

export const UserTableName = "users" as const;