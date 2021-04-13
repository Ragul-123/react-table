import React, {Component} from 'react';
import {columns} from './columns';
import {
        Grid,
        SearchPanel,
        Table,
        TableHeaderRow,
        PagingPanel,
        Toolbar
      } from "@devexpress/dx-react-grid-material-ui";
import {
        SearchState,
        PagingState,
        IntegratedPaging,
        IntegratedFiltering,
      } from '@devexpress/dx-react-grid';
      
class Orders extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            isLoading: false,
            iserror: false
        }
    }
    
//async function get request

    async componentDidMount() {
          this.setState({ isLoading: true })
  
          const response = await fetch("http://172.24.145.65/api/WO_ORDER_ACCOUNT_EXECS");
  
          if (response.ok) {
              const users = await response.json()
              console.log(users)
              this.setState({ users, isLoading: false })
          } else {
              this.setState({ isError: true, isLoading: false })
          }
      }

    renderTableHeader() {
            return (Object.keys(this.state.users[0]).map((attr) => {
            return <th key="{attr}">{attr.toUpperCase()}</th>;
        }));
    }

    renderTableRows() {
        return this.state.users.map(user => {
            return (
                <div>
                    <tr>
                        <td>{user.ACCOUNT_EXEC_ID}</td>
                        <td>{user.COMMISSION_PERCENT}</td>
                        <td>{user.ORDER_ACCOUNT_EXEC_ID}</td>
                        <td>{user.ORDER_INT}</td>
                        <td>{user.UPDATE_COUNT}</td>
                        <td>{user.UPDATE_DATE}</td>
                    </tr>
                </div>
            )
        })
    }

    createTable(users) {
      return (
      <div>
        <Grid rows={users} columns={columns}
         onColumnResize={(idx, width) =>
          console.log(`Column ${idx} has been resized to ${width}`)}>
          
        <PagingState
          defaultCurrentPage={0}
          pageSize={8}
        />
        <SearchState defaultValue="" />
        <IntegratedFiltering />
        <IntegratedPaging />
        <Table/>
        <TableHeaderRow />
        <Toolbar />
        <SearchPanel />
        <PagingPanel />
          
        </Grid>

      </div>
      );
    }

    render() {
        const { users, isLoading, isError } = this.state

        if (isLoading) {
            return <div>Loading...</div>
        }
        if (isError) {
            return <div>Error...</div>
        }
        return users.length > 0
            ? (
                this.createTable(users)
            ) : (
                <div>No Users</div>
            )
    }
}
    
export default Orders;