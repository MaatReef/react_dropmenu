import { Reports1 } from "../components/Reports/Reports1"
import { Reports2 } from "../components/Reports/Reports2"

export function Reports(){
    return (
        <>
            <h1 style= 
                {{
                    fontSize:"2rem",
                    display:"flex",
                    margin:"2rem auto 0rem",
                    justifyContent:"center"
                }}>Reporte Pasado</h1>
        </>
    )
}

export function R1(){
    return(
        <Reports1/>
    )
}

export function R2(){
    return(
        <Reports2/>
    )
}