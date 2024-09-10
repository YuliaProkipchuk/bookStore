import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function Error(){
    const error = useRouteError();
    if(isRouteErrorResponse(error)){
        if(error.status===404){
            return <div>Not found. Sorry.</div>
        }
        if(error.status===401){
            return <div>{error?.data.message}.</div>
        }
    }
    return <>
    <h1>error!!!</h1>
    
    </>
}