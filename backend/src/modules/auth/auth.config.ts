export const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || "default_secret",
    expiresIn: "1h",
  },
  cookie: {
    name: "token",
    options: {
      httpOnly: true,
      secure: true,
      sameSite: "strict" as const,
      path: "/",
    },
  },
} as const;
