import React from "react";
import {MbrDef} from "./MbrDef";
import TextField from "./TextField";

interface Props {
    fields: MbrDef[],
    data?: object
}

const PropertySheet: React.FC<Props> = (props) => {

    return (
	    <div className="fields">
	    {props.fields.map(field => {
		if (field.typeName === "text") {
		    return (<TextField mbrDef={field} data={props.data} />);
		}
		return (<div>?</div>);
	    })}
	    </div>
    );

};

export {PropertySheet};
