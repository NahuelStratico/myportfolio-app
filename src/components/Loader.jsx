import Loader from "react-loader-spinner"
import '../pages/styles/home.css'

const LoaderSpinner = () => {
    return(
        <Loader type="Puff" color="#00BFFF" height={80} width={80}/>
    )
}

export default LoaderSpinner