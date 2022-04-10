import classes from "../Pages/Pages.module.css";

const TableHead = ({headers}) => {
    return (
        <thead>
        <tr>
            {headers.map(header => <th key={header} className={classes.th}>{header}</th>)}
        </tr>
        </thead>
    );
}

export default TableHead;
