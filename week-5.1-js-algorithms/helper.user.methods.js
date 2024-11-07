class Helpers {
  getUsersByStatus(response, status) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      const user = response.users[i];
      if (
        user.role.status === status &&
        user.role.description != "" &&
        user.role.description != null
      ) {
        users.push(user.name);
      }
    }
    return users;
  }

  getUsersByRole(response, role, roleId) {
    const users = [];

    for (let i = 0; i < response.users.length; i++) {
      const user = response.users[i];

      if (user.role.name === role && user.role.id === roleId) {
        users.push(user.name);
      }
    }

    return users;
  }

  getUsersByEmailDomain(response, domain) {
    const users = [];
    for (let i = 0; i < response.users.length; i++) {
      const user = response.users[i];

      if (user.email.includes(domain)) {
        users.push(user.name);
      }
    }

    return users;
  }

  getUserBalanceByCurrency(response, currency) {
    const balances = [];

    for (let i = 0; i < response.users.length; i++) {
      const user = response.users[i];
      if (user.currency === currency) {
        balances.push(user.balance);
      }
    }

    return balances;
  }
}

export default new Helpers();
