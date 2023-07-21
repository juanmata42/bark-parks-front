// function that fakes a login request
export const login = async (body: { email: string, password: string }) => {
  try {
    const data = {
      user: {
        id: 'test1',
      },
      token: 'test1',
    };
    // check if email is valid and if password is equal to 'test1'
    if (body.email === 'test1@test.test' && body.password === 'test1') {
      // set token as a cookie
      document.cookie = `token=${data.token}`;
      return data;
    }
    throw new Error('401');
  } catch (error) {
    return error;
  }
};

// function that fakes a logout request
export const logout = async () => {
  try {
    const data = {
      user: {
        id: 'test1',
        username: 'test1',
        email: 'test1@test.test',
      },
      token: 'test1',
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
    if (document.cookie.includes('token=test1')) {
      return data;
    }
    throw new Error('401');
  } catch (error) {
    return error;
  }
};
