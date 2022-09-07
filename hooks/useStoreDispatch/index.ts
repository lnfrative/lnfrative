import { useDispatch } from 'react-redux'
import type { StoreDispatch } from '../../store'

const useStoreDispatch = () => useDispatch<StoreDispatch>()

export default useStoreDispatch