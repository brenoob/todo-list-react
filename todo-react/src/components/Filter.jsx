const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
        <h2>Filtrar</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} >
                    <option value="All">todas</option>
                    <option value="completed">completas</option>
                    <option value="incomplete">não completas</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Filter