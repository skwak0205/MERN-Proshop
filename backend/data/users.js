import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@google.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@google.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@google.com',
    password: bcrypt.hashSync('12345', 10),
  },
];

export default users;
