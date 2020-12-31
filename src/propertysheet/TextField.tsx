import React from "react";
import {MbrDef} from "./MbrDef";

interface Props {
    mbrDef: MbrDef,
    data?: object
};

const TextField: React.FC<Props> = (props) => {
    const getValue = (key: string): any => {
        if (props.data == null) return "";
        if (key in props.data) {
            return props.data[key];
        }
        return "";
    }
    
    return (
        <div>
	        <span>{props.mbrDef.label}</span>
	        <input type="text" name={props.mbrDef.name} className="text-field" value={getValue(props.mbrDef.name)} />
	    </div>
    );
};

export default TextField;
