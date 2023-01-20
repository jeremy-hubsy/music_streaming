import formatDuration from 'format-duration'

export const formatTime = (timeInSeconds = 0) => {
    return formatDuration(timeInSeconds * 1000 )
}

export const formatDate = (date: string) => {
    const dateFormat = new Date(date)
    return dateFormat.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

}