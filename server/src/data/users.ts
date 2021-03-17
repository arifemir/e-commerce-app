import bcrypt from 'bcrypt';

const users = [
  {
    name: 'admin user',
    email: 'adminuser@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'normal user',
    email: 'normaluser@gmail.com',
    password: bcrypt.hashSync('123456789', 10),
  },
  {
    name: 'normal user2',
    email: 'normaluser2@gmail.com',
    password: bcrypt.hashSync('159852', 10),
  },
];

export default users;
