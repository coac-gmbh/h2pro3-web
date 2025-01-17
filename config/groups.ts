import { maxLength, url } from 'vuelidate/lib/validators';


export interface IGroupTypeConfig {
    key: string,
    fields: Array<string>
}

export interface IGroupTypeField {
    key: string,
    type: 'input-text' | 'input-url' | 'textarea',
    validations?: any,
    validationParameters?: any 
}

export const GROUP_TYPES: IGroupTypeConfig[] = [
    { key: 'C', fields: ['website', 'population', 'area', 'energy_demand'] },
    { key: 'Q', fields: ['website', 'industry', 'employee', 'location'] },
    { key: 'I', fields: ['website'] },
    { key: 'U', fields: ['website', 'institution', 'departments'] },
    { key: 'P', fields: ['location', 'project_partners', 'project_duration', 'website', 'lessons_learned'] },
    { key: 'E', fields: ['website'] },
]

export const GROUP_TYPES_FIELDS: IGroupTypeField[] = [
    {
        key: 'website',
        type: 'input-text',
        validations: {
            url,
            maxLength: maxLength(200)
        }
    },
    {
        key: 'population',
        type: 'input-text',
        validations: {
            maxLength: maxLength(64)
        }
    },
    {
        key: 'area',
        type: 'input-text',
        validations: {
            maxLength: maxLength(100)
        }
    },
    {
        key: 'energy_demand',
        type: 'input-text',
        validations: {
            maxLength: maxLength(40)
        }
    },
    {
        key: 'industry',
        type: 'input-text',
        validations: {
            maxLength: maxLength(64)
        }
    },
    {
        key: 'employee',
        type: 'input-text',
        validations: {
            maxLength: maxLength(32)
        }
    },
    {
        key: 'location',
        type: 'input-text',
        validations: {
            maxLength: maxLength(64)
        }
    },
    {
        key: 'institution',
        type: 'input-text',
        validations: {
            maxLength: maxLength(100)
        }
    },
    {
        key: 'departments',
        type: 'textarea',
        validations: {
            maxLength: maxLength(2000)
        }
    },
    {
        key: 'project_partners',
        type: 'textarea',
        validations: {
            maxLength: maxLength(2000)
        }
    },
    {
        key: 'project_duration',
        type: 'input-text',
        validations: {
            maxLength: maxLength(64)
        }
    },
    {
        key: 'lessons_learned',
        type: 'textarea',
        validations: {
            maxLength: maxLength(2000)
        }
    },
];
