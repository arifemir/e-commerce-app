import User, { IUser } from '../models/userModel';
import a from 'express-async-handler';
import HttpException from '../helpers/exceptions/HttpException';
import generateToken from '../helpers/token/generateToken';

const authUser = a(async (req, res, next) => {
  const { email, password } = req.body;

  let user: IUser | null = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    const { _id, name, email, isAdmin } = user;
    const token = generateToken(_id);
    res.json({ _id, name, email, isAdmin, token });
  } else {
    throw new HttpException(401, 'Invalid email or password');
  }
});

const getUserProfile = a(async (req, res, next) => {
  const user: IUser = (req as any).user;
  if (user) {
    res.send(user);
  } else {
    throw new HttpException(404, 'User not found');
  }
});

const registerUser = a(async (req, res, next) => {
  const { name, email, password } = req.body;

  const userExist: IUser | null = await User.findOne({ email });

  if (userExist) {
    throw new HttpException(400, 'User already exists');
  }

  let user: IUser = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    const { _id, name, email, isAdmin } = user;
    const token = generateToken(_id);
    res.status(201).json({ _id, name, email, isAdmin, token });
  } else {
    throw new HttpException(400, 'Invalid user data');
  }
});

const updateUserProfile = a(async (req, res, next) => {
  const user = (req as any).user;
  if (user) {
    const { name: nameFromBody, email: emailFromBody, password } = req.body;
    user.name = nameFromBody || user.name;
    user.email = emailFromBody || user.email;
    if (password) {
      user.password = password;
    }
    const updatedUser = await user.save();

    const { _id, name, email, isAdmin } = updatedUser;
    const token = generateToken(_id);
    res.status(201).json({ _id, name, email, isAdmin, token });
  } else {
    throw new HttpException(404, 'User not found');
  }
});

const getAllUser = a(async (req, res, next) => {
  const allUsers = await User.find({});
  res.send(allUsers);
})

const getUserById = a(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if(user) {
    res.json(user);
  } else {
    throw new HttpException(404, 'User not found');
  }
})

const deleteUser = a(async (req, res, next) => {
  const user = await User.findById(req.params.id).select('-password');
  if(user) {
    await user.remove();
    res.json({ message: 'User removed' });
  } else {
    throw new HttpException(404, 'User not found');
  }
})

const updateUser = a(async (req, res, next) => {
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    const { name: nameFromBody, email: emailFromBody, password, isAdminFromBody } = req.body;
    user.name = nameFromBody || user.name;
    user.email = emailFromBody || user.email;
    user.isAdmin = isAdminFromBody;

    if (password) {
      user.password = password;
    }
    const updatedUser = await user.save();

    const { _id, name, email, isAdmin } = updatedUser;
    res.status(201).json({ _id, name, email, isAdmin });
  } else {
    throw new HttpException(404, 'User not found');
  }
});

export { authUser, getUserProfile, registerUser, updateUserProfile, getAllUser, deleteUser, getUserById, updateUser };
