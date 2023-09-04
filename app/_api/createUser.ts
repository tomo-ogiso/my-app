type CreateUserRequest = {
  name: string;
  email: string;
};

export const createUser = async (params: CreateUserRequest) => {
  const response = await fetch(`${process.env.API_DOMAIN}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
