import pool from "./config.js";

async function createUser(username, password, email, firstName, lastName) {
  const [result] = await pool.query(
    `
    INSERT INTO users (username, password, email, first_name, last_name)
    VALUES (?, ?, ?, ?, ?)
    `,
    [username, password, email, firstName, lastName]
  );
  return result;
}

async function getUsers() {
  const [result] = await pool.query(`SELECT * FROM Users`);
  return result;
}

async function getUser(id) {
  const [result] = await pool.query(
    `SELECT * FROM Users
    WHERE id = ?`,
    [id]
  );
  return result[0];
}

export { createUser, getUsers, getUser };
