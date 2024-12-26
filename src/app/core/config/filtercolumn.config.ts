import { FilterMatchMode } from "primeng/api";

export const filterConfigMatchModes = {
    matchmodes: [{
        label: '',
        value: FilterMatchMode.EQUALS,
        original: 'components.equals'
    },
    {
        label: '',
        value: FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
        original: 'components.gte'
    },
    {
        label: '',
        value: FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        original: 'components.lte'
    }],
    matchmodesOnlyIn: [{
        label: '',
        value: FilterMatchMode.IN,
        original: 'components.in'
    }],
    matchmodesOnlyContains: [{
        label: '',
        value: FilterMatchMode.CONTAINS,
        original: 'components.contains'
    }]
};