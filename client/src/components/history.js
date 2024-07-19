import React from 'react'
import { useGetHistQuery } from '../redux/HistApi'

 const History = () => {
    const {data:hist=[], error,isLoading} = useGetHistQuery(undefined, {
      refetchOnMountOrArgChange: true,});
  return (
  
    <div style={{
      marginTop: '20px',}} className="bg-black text-white rounded shadow p-4">
<p className="font-roboto" >
                    Registerd History 
                  </p>
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
    
 



   
  )
}
export default History