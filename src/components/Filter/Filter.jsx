import { FilterInput, FilterLabel } from "./Filter.styled";

export const Filter = ({ onFilterChange }) => {
    return (
        <>
            <FilterLabel htmlFor="filerValue">Find contacts by name</FilterLabel>
            <FilterInput
                name="filter"
                id="filerValue"
                type="text"
                required
                onChange={onFilterChange}
            />
        </>
    );
};