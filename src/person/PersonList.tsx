import React from "react";
import Person from "./Person";

interface Props {
    people: Person[],
    view: any
}

const PersonList: React.FC<Props> = (props) => {
    return (
            <table className="person-list">
            <thead>
            <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            </tr>
            </thead>
            <tbody>
            {props.people.map(person => {
                let name = person.lastName + ", " + person.firstName;
                if (person.middleName) name += " " + person.middleName;
                return (<tr onClick={() => props.view(person.id)}>
                        <td>{name}</td>
                        <td>{person.phone}</td>
                        <td>{person.eMail}</td>
                        </tr>
                       );
            })}
        </tbody>
            </table>
    );
};
            
export default PersonList;
