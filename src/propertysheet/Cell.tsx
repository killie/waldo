import React from "react";
import {CellDef} from "./TableDef";

interface CellProps {
    cellDef: CellDef,
    pasteHandler: any
}

const Cell: React.FC<CellProps> = (props) => {

    const changeHandler = (e: any) => {
	console.log(e);
    }
    
    const pasteHandler = (e: any) => {
	const text = e.clipboardData.getData("Text");
	props.pasteHandler(props.cellDef, text);
	e.preventDefault();
    }
    
    return (
	    <div row={props.cellDef.rowIndex} col={props.cellDef.colIndex}>
	    <input type="text"
	defaultValue={props.cellDef.data}
	onChange={changeHandler}
	onPaste={pasteHandler} />
	    </div>
    );
};

export default Cell;
