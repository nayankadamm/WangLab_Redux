import React from 'react'
import { useGetHistQuery } from '../redux/HistApi'
import { Container } from 'react-bootstrap';
export default function Userhist() {
    const {data:hist=[], error,isLoading} = useGetHistQuery();
  return (
    <Container >
        <div>
        


        <div style={{
              marginTop: '20px',}} className= 'p-4 bg-black text-white pb-2 rounded shadow'>
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
            </div>
    </Container>
    
  )
}
