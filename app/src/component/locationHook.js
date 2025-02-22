import { useLocation } from 'react-router-dom';

function useLocationExclude (excludePaths){
    const location = useLocation();
    const isExcluded = excludePaths.includes(location.pathname);

    return {...location, isExcluded}
} 

export default useLocationExclude;