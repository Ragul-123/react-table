export function validateRows(rowData) {
  rowData.forEach(row => {
    row.START_DATE = row.START_DATE === null ? "NULL" : row.START_DATE
    row.END_DATE = row.END_DATE === null ? "NULL" : row.END_DATE
    row.AE_ROLE_INT = row.AE_ROLE_INT === null ? "NULL" : row.AE_ROLE_INT
    row.SALES_OFFICE_ID = row.SALES_OFFICE_ID === null ? "NULL" : row.SALES_OFFICE_ID
    row.SALES_REGION_INT = row.SALES_REGION_INT === null ? "NULL" : row.SALES_REGION_INT
  });
}