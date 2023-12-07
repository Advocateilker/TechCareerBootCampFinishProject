import React from 'react'

const OutdatedTable = ({ outdated }) => {
    return (

        <table className='table table table-striped table-danger table-hover'>
            <thead className="thead-dark">
                <tr>
                    <th scope='col'> Sıra No </th>
                    <th scope='col'> İsmi </th>
                    <th scope='col'> Bitiş Tarihi</th>
                    <th scope='col'> Mekan </th>
                    <th scope='col'> Kategori </th>
                </tr>
            </thead>
            <tbody>
                {outdated?.map((event) => (
                    <tr key={event.id}>
                        <td scope="row">{event.id}</td>
                        <td>{event.name}</td>
                        <td>{event.endDate}</td>
                        <td>{event.place}</td>
                        <td>{event.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default OutdatedTable