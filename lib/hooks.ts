import useSWR from 'swr'
import fetcher from './fetcher'

 
export function useMe(){
    const {data, error} = useSWR('/me', fetcher )
    console.log(data)

    return {
        user: data,
        isLoading: !data && !error,
        isError: error
    }
}


export function usePlaylist(){
    const {data, error} = useSWR('/playlist', fetcher)

    return {
        playlists: (data as any ) || [], 
        isLoading: !data && !error,
        isError: error 
    }
}