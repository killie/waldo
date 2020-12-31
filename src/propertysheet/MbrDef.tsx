import SelectOption from "./SelectOption";
import utils from "./../utils/utils";

interface MbrDef {
    typeName?: string;
    name: string;
    label?: string;
    options?: SelectOption[];
};

interface CreateDefOptions {
    hide?: string[]
};

function createDef(o: object, options?: CreateDefOptions): MbrDef[] {
    const fields: MbrDef[] = [];
    for (const [key, value] of Object.entries(o)) {
        if (options !== null && options.hide !== null) {
            if (options.hide.includes(key)) {
                continue; // TODO: Or make invisible later
            }
        }
        fields.push({
            name: key,
            typeName: "text",
            label: utils.capitalize(key)
        });
    }    
    return fields;
};

export {MbrDef, createDef};
