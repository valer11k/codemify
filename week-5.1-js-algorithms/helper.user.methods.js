class Helpers {
  getUsersByStatus(response, status) {
    const users = response.users
      .filter(
        (user) =>
          user.role.status === status &&
          user.role.description !== null &&
          user.role.description !== ""
      )
      .map((user) => user.name);
    return users;
  }

  getUsersByRole(response, role, roleId) {
    const users = response.users
      .filter((user) => user.role.name === "Admin" && user.role.id === roleId)
      .map((user) => user.name);

    return users;
  }

  getUsersByEmailDomain(response, domain) {
    const users = response.users
      .filter((user) => user.email.includes(domain))
      .map((user) => user.name);
    return users;
  }

  getUserBalanceByCurrency(response, currency) {
    const balances = response.users.filter((user) => user.currency === currency).map((user) => user.balance)
    return balances;
  }
}

export default new Helpers();
