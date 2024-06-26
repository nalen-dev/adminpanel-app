export interface LoginForm {
  username: string;
  password: string;
}

export interface AdminData {
  id: number;
  username: string;
  role: string;
}

export const LoginAdmin = async ({ username, password }: LoginForm) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error(response.status.toString());
  }

  const data = await response.json();
  return data;
};

export const GetAdminData = async () => {
  const response = await fetch("/api/users", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.status.toString());
  }

  const data = await response.json();
  return data;
};
