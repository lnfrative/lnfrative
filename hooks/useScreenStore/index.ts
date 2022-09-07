import useStoreSelector from '../useStoreSelector'

function useScreenStore() {
    return useStoreSelector((state) => state.screen)
}

export default useScreenStore