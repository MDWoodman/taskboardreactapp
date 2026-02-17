import React from 'react';


interface Props {
    filter : string;
    onFilterChangeProps : (filter:string) => void;
}



function FilterTasks({filter,onFilterChangeProps }: Props) {

    const [_filter, setFilter] = React.useState('all');

    const onFilterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        onFilterChangeProps(e.target.value);
        setFilter(e.target.value);
    }

    return (
        <div className="filter-tasks">
            <label className="filter-option">
                <input className="filter-radio" type='radio' name="filtergroup" onChange={onFilterChange} value="all" checked={filter === 'all'} />
                <span className="filter-label">Wszystkie</span>
            </label>
            <label className="filter-option">
                <input className="filter-radio" type='radio' name="filtergroup" onChange={onFilterChange} value="open" checked={filter === 'open'} />
                <span className="filter-label">Otwarte</span>
            </label>
            <label className="filter-option">
                <input className="filter-radio" type="radio" name="filtergroup" onChange={onFilterChange} value="ended" checked={filter === 'ended'} />
                <span className="filter-label">Zakończone</span>
            </label>
        </div>


    );
}

export default FilterTasks;