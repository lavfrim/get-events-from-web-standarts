import { TableConfig, TableStyles } from '../types/types';

export const getTable = ({ header, body }: TableConfig, styles: TableStyles): string => {
  return `
<table style="${styles.table}">
  <thead style="${styles.head}">
    <tr>
      ${header.map((title) => `<th style="${styles.cell}">${title}</th>`).join('\n')}
    </tr>
   </thead>
   <tbody>
     ${body
       .map(
         (row, index) =>
           `<tr style="${index % 2 ? '' : styles.row}">
            ${row.map((cell) => `<td style="${styles.cell}">${cell}</td>`).join('\n')}
        </tr>`,
       )
       .join('\n')}
  </tbody>
</table>
    `;
};
