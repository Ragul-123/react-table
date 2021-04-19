import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  overrides: {
    MuiTableHead: {
      root: {
        backgroundColor: '#f2f4f5'
      },
    },
    MuiTableCell: {
      head: {
        padding: '10px',
        fontSize: '15px',
        fontWeight: 'bold',
        lineHeight: '20px',
        borderLeft: '1px solid #CFD4D8 ',
      },
    },
    MuiTableFooter: {
      root: {
        backgroundColor: '#E6EAED'
      }
    },
  }
});