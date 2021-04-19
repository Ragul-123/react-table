import React, { Component } from 'react';
import axios from 'axios';
import {
  Grid,
  SearchPanel,
  Table,
  TableHeaderRow,
  TableColumnResizing,
  PagingPanel,
  Toolbar,
} from "@devexpress/dx-react-grid-material-ui";
import {
  SearchState,
  PagingState,
  SortingState,
  IntegratedPaging,
  IntegratedFiltering,
  IntegratedSorting
} from '@devexpress/dx-react-grid';
import { MuiThemeProvider } from '@material-ui/core';
import { columns, defaultColumnWidths } from '../utils/columns.utils';
import { validateRows } from '../utils/row.utils';
import { theme } from './grid/grid-view';

class Orders extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      iserror: false,
      rowData: [],
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    axios.get("http://172.24.145.65/api/WO_ORDER_ACCOUNT_EXECS")
      .then(response => {
        if (response.status === 200) {
          const rowData = response.data
          console.log(rowData)
          validateRows(rowData)
          this.setState({ rowData, isLoading: false })
        }
        else {
          this.setState({ isError: true, isLoading: false })
        }
      });
  }

  createTable(rowData) {

    return (
      <MuiThemeProvider theme={theme}>
        <h4>WO_ORDER_ACCOUNT_EXECS</h4>
        <Grid rows={rowData} columns={columns} >

          <PagingState
            defaultCurrentPage={0}
            pageSize={8}
          />
          <SearchState defaultValue="" />
          <IntegratedFiltering />
          <SortingState
            defaultSorting={[{ columnName: 'ORDER_INT', direction: 'asc' }]}
          />
          <IntegratedSorting />
          <IntegratedPaging />
          <Table />
          <TableColumnResizing
            defaultColumnWidths={defaultColumnWidths}
          />
          <TableHeaderRow showSortingControls />
          <Toolbar />

          <SearchPanel />
          <PagingPanel />

        </Grid>
      </MuiThemeProvider>

    )
  };

  render() {
    const { rowData, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error...</div>
    }

    return rowData.length > 0
      ? (this.createTable(rowData))
      : (<div>No Users</div>)

  }
}

export default Orders;