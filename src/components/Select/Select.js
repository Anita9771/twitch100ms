import React from 'react';


const Select = ({ state }) => {
  return (
    <select
    className='role-selector shadow appearance-none border border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
    value={state.role}
    name='Choose Roles'
    onChange={(e) => state.setRole(e.target.value)}
>
<option id="only" value='stage'>stage</option>
<option value='viewer'>viewer</option>
</select>
  );
};

export default Select;