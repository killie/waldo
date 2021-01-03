import React from 'react';
import PersonList from "./person/PersonList";
import PersonDetails from "./person/PersonDetails";
import Person from "./person/Person";

import {TableDef, ColDef, RowDef, CellDef} from "./propertysheet/TableDef";
import Table from "./propertysheet/Table";

class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
	this.state = {
            people: [],
            person: null
        };
    }

    async componentDidMount() {
        try {
            let response = await fetch("/people");
            let result = await response.json();
            this.setState({people: result.people});
        } catch (error) {
            console.error(error);
        }
    }

    showPerson = (id: string) => {
        const persons: Person[] = this.state.people.filter(p => p.id === id);
        if (persons.length === 1) {
            this.setState({person: persons[0]});
        }
    }

    getTable = () => {
	const tableDef: TableDef = {
	    cols: [{title: "x1"}, {title: "x2"}, {title: "y"}],
	    rows: [{
		cells: [
		    {rowIndex: 0, colIndex: 0, data: "0"},
		    {rowIndex: 0, colIndex: 1, data: "1"},
		    {rowIndex: 0, colIndex: 2, data: "2"}
		]}, {
		    cells: [
			{rowIndex: 1, colIndex: 0, data: "12"},
			{rowIndex: 1, colIndex: 1, data: "22"},
			{rowIndex: 1, colIndex: 2, data: "32"}
		    ]}
		  ]
	};
	return tableDef;
    }
    
    // Form with post command så visning ikke henger sammen med noe mer.
    // Må wrappe mbrDef med data (value, unit, etc)...
    // Antageligvis er det et eksisterende bibliotek for skjema-logikk...
    // Kan dette brukes her og for å erstatte property sheet?
    // Problemet er grupper, plots og grids...

    render() {
        return (
                <div className="App">
                {this.state.person === null ?
                 <PersonList people={this.state.people} view={this.showPerson} /> :
                 <div>
                 <div onClick={() => this.setState({person: null})}>x</div>
                 <PersonDetails person={this.state.person} />
                 </div>
                }
		<Table tableDef={this.getTable()} />
                </div>
        );
    }
}

export interface AppProps {}

export interface AppState {
    people: Person[],
    person?: Person
}

export default App;
