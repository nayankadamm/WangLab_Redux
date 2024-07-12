import React from 'react'
import { useGetHistQuery } from '../redux/HistApi'
 const History = () => {
    const {data:hist=[], error,isLoading} = useGetHistQuery();
  return (
    <div>
        <h3 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>Registered history</h3>


<div className="bg-white p-4 rounded shadow">
            {hist.length === 0 ? (
              <p className="font-roboto">No slots reserved yet.</p>
            ) : (
              hist.map((res, index) => (
                <div key={index} className="mb-4">
                  <p className="font-roboto">
                    <strong>{res.name} </strong> reserved <strong>{res.equipment} </strong>  on <strong> {res.date}</strong>  from <strong> {res.startTime}</strong>  to <strong> {res.endTime}</strong> 
                  </p>
                  <hr className="mt-2" />
                </div>
              ))
            )}
          </div>
    </div>
   
  )
}
export default History