// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../../ui/grid'

// App Imports
import { getList as getUsersList } from '../../userList/api/actions'
import { messageShow, messageHide } from '../../common/api/actions'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import AdminMenu from '../common/Menu'

// Component
class List extends PureComponent {

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getUsersList())
  }

  // Runs on client only
  componentDidMount() {
    this.props.getUsersList()
  }

  render() {
      console.log(this.props);
    const { isLoading, list } = this.props.users

    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Products - Admin - Crate - Users</title>
        </Helmet>

        {/* Top menu bar */}
        <AdminMenu/>

        {/* Page Content */}
        <div>
          {/* Product list */}
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
              <table className="striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                  </tr>
                </thead>

                <tbody>
                {
                  isLoading
                    ? <tr>
                        <td colSpan="6">
                          <Loading message="loading Users..."/>
                        </td>
                      </tr>
                    : list.length > 0
                      ? list.map(({ id, name, email, createdAt, updatedAt }) => (
                          <tr key={id}>
                            <td>
                              { name }
                            </td>

                            <td>
                              { email }
                            </td>

                            <td>
                              { new Date(parseInt(createdAt)).toDateString() }
                            </td>

                            <td>
                              { new Date(parseInt(updatedAt)).toDateString() }
                            </td>
                          </tr>
                        ))
                      : <tr>
                          <td colSpan="6">
                            <EmptyMessage message="No products to show."/>
                          </td>
                        </tr>
                }
                </tbody>
              </table>
            </GridCell>
          </Grid>
        </div>
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  users: PropTypes.object.isRequired,
  getUsersList: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
function listState(state) {
  return {
    users: state.users
  }
}

export default connect(listState, { getUsersList, messageShow, messageHide })(List)
