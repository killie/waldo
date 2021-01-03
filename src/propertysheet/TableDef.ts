export interface TableDef {
    cols: ColDef[],
    rows: RowDef[]
}

export interface ColDef {
    title: string
}

export interface RowDef {
    cells: CellDef[]
}

export interface CellDef {
    rowIndex: number,
    colIndex: number,
    data: string
}
    
