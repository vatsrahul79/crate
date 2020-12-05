// App Imports
import * as dashboard from './dashboard'
import * as product from './product'
import * as crate from './crate'
import * as subscription from './subscription'
import * as user from './user'
import * as userLists from './userList'

// Admin routes
const admin = {
  ...dashboard,
  ...product,
  ...crate,
  ...subscription,
  ...user,
  ...userLists
}

export default admin
