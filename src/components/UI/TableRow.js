import classes from "../UI/UI.module.css";

const TableRow = ({columns}) => {
    return (
        <tr>
            {columns.map(column => <td className={classes.td}>{column}</td>)}
        </tr>
    );
}

export default TableRow;
