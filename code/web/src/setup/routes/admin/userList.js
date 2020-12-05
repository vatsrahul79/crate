// App Imports
import List from '../../../modules/admin/users/List'
import params from '../../../setup/config/params'
// Admin user routes
export const userLists = {
  path: '/admin/userList',
  component: List,
  auth: true,
  role: params.user.roles.admin
}