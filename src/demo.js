import React, {Component} from 'react';
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
    IntegratedPaging,
    IntegratedFiltering,
    
  } from '@devexpress/dx-react-grid';
import {columns} from './columns'; 

class demo extends Component {

        constructor(props) {
            super(props)
            this.state = {
    rowData:[],
           defaultColumnWidths : [
            { columnName: 'ACCOUNT_EXEC_ID', width: 180 },
            { columnName: 'COMMISSION_PERCENT', width: 180 },
            { columnName: 'ORDER_ACCOUNT_EXEC_ID', width: 180 },
            { columnName: 'ORDER_INT', width: 240 },
            { columnName: 'UPDATE_COUNT', width: 180 },
            { columnName: 'UPDATE_DATE', width: 180 },
          ]
        
    }
       }

   async componentDidMount() {
            this.setState({ isLoading: true })
    
            const response = await fetch("http://172.24.145.65/api/WO_ORDER_ACCOUNT_EXECS");
    
            if (response.ok) {
                const rowData = await response.json()
                console.log(rowData)
                this.setState({ rowData, isLoading: false })
            } else {
                this.setState({ isError: true, isLoading: false })
            }
        }
  
  render(){
      const {defaultColumnWidths,rowData} = this.state;
  return (
      <Grid rows={rowData} columns={columns} >
        <PagingState
          defaultCurrentPage={0}
          pageSize={8}
        />
        <SearchState defaultValue="" />
        <IntegratedFiltering />
        <IntegratedPaging />
        <Table />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
        <TableHeaderRow />
        <Toolbar />
        <SearchPanel />
        <PagingPanel />
        </Grid>
   )
};
}

export default demo;