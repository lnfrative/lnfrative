import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { StoreState } from '../../store'

const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector

export default useStoreSelector