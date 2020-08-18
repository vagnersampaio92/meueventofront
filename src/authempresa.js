
export const isAuthenticatedempre = () => {

    if(! sessionStorage.getItem('tokenres') ){
        return false
      
    }
    return true
}