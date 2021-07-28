import createContext from 'react';
import { getUser } from '../services/storage';

const UserContext = createContext(getUser());

export default UserContext;
