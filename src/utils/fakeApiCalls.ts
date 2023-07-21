// function that fakes a login request
export const login = async (body: { email: string, password: string }) => {
  try {
    const data = {
      user: {
        id: 'test1',
      },
      token: 'test1Token',
    };
    // check if email is valid and if password is equal to 'test1'
    if (body.email === 'test1@test.test' && body.password === 'test1') {
      // set token as a cookie
      const now = new Date();
      const time = now.getTime();
      // expire time in 3 days
      const expireTime = new Date(time + 3 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `tokenBark=${data.token}; expires=${expireTime}; path=/`;
      return data;
    }
    // throw axios error
    const error = {
      response: {
        status: 401,
        statusText: 'Unauthorized',
        headers: {},
        config: {
        },
        data: {},
      },
      isAxiosError: true,
      toJSON: () => ({}),
      name: 'Error',
      message: 'Request failed with status code 401',
    };
    throw error;
  } catch (error) {
    return error;
  }
};

// function that fakes a logout request
export const logout = async () => {
  try {
    // delete token cookie
    const now = new Date();
    const time = now.getTime();
    const expireTime = new Date(time - 3 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `tokenBark=; expires=${expireTime}; path=/`;
    const data = {
      message: 'logged out',
    };
    return data;
  } catch (error) {
    return error;
  }
};

// function that fakes a getCurrentUser request
export const getCurrentUser = async () => {
  try {
    const data = {
      user: {
        id: 'test1',
        username: 'test1',
        email: 'test1@test.test',
      },
    };
    if (document.cookie.includes('tokenBark=test1')) {
      return data;
    }
    throw new Error('401');
  } catch (error) {
    return error;
  }
};
