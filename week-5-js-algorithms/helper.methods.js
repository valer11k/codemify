class Helpers {
  getUsersByAge(response, ageMin, ageMax) {
    const users = response.users
      .filter((user) => user.age >= 30 && user.age <= 40)
      .map((user) => user.name);
    return users;
  }

  getUsersByRole(response, role) {
    const users = response.users
      .filter((user) => user.role === "admin")
      .map((user) => user.name);

    return users;
  }

  getUsersByCountry(response, country) {
    const users = response.users
      .filter((user) => user.country === "USA")
      .map((user) => user.name);

    return users;
  }

  getUsersByBalance(response, minBalance, maxBalance) {
    const users = response.users
      .filter((user) => user.balance >= 1100 && user.balance <= 2000)
      .map((user) => user.name);

    return users;
  }
}

export default new Helpers();
