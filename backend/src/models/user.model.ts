type UserRole = 5 | 10 | 15;

export class User {
  public readonly id: string;
  public username: string;
  public email: string;
  public password: string;
  private readonly role: UserRole;

  constructor(id: string, username: string, email: string, password: string, role: UserRole) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }
  getRole(): UserRole {
    return this.role;
  }
}

export const UserTableName = "users" as const;
