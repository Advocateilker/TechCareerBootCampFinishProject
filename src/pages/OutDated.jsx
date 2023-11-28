import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import OutdatedTable from '../components/OutdatedTable'

const OutDated = () => {

    const [outdated, setOutdated] = useState()

    useEffect(() => {
        axios.get("http://localhost:3038/outdated")
            .then((res) => setOutdated(res.data))
            .catch((err) => console.log(err))
    }, [])

   // console.log(outdated)

    return (
        <div >
            <h1 className='text-center text-danger'>Süresi Geçmiş Etkinlikler</h1>
            <OutdatedTable outdated={outdated} />

        </div>
    )
}

export default OutDated