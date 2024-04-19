import { useEffect } from "react"

export const ScrollTop = ({dep}) => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[dep])

    return null
}