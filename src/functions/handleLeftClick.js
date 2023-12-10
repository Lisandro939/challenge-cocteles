export function handleLeftClick(start, end, dataLength, setStart, setEnd) {
    if (end === dataLength && end - start < 3) {
        setStart(start - 1)
    } else if (start > 0) {
        setStart(start - 1)
    } 
    if (end - start >= 3 && end > 3) {
        setEnd(end - 1)
    }
}