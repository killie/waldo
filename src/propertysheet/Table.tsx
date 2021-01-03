import React from "react";
import {TableDef, ColDef, RowDef, CellDef} from "./TableDef";
import Cell from "./Cell";

interface TableProps {
	  tableDef: TableDef
	  }

const Table: React.FC<TableProps> = (props) => {

    const pasteHandler = (cellDef, text) => {
	console.log(text, cellDef);
    }
    
    return (
	    <div className="table-component">
	    <div className="header">
	    {props.tableDef.cols.map(colDef => (<div>{colDef.title}</div>))}
	    </div>
	{props.tableDef.rows.map(rowDef => {
	    return <div>
		{rowDef.cells.map(cellDef => (<Cell cellDef={cellDef} pasteHandler={pasteHandler} />))}
	    </div>
	})}
	</div>
    );
}

export default Table;
