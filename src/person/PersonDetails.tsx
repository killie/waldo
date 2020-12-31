import React from 'react';
import Person from "./Person";
import {MbrDef, createDef} from "./../propertysheet/MbrDef";
import {PropertySheet} from "./../propertysheet/PropertySheet";

interface Props {
    person: Person
}

const PersonDetails: React.FC<Props> = (props) => {

    if (props.person === null) {
        return (<div></div>);
    }

    const hide: string[] = ["id"];
    const fields: MbrDef[] = createDef(props.person, {hide: hide});
    
    return (
            <div className="person-details props">
            <PropertySheet fields={fields} data={props.person} />
            </div>
    );
};

export default PersonDetails;
