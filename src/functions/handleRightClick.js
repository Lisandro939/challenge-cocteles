export function handleRightClick(start, end, dataLength, setStart, setEnd) {
    if (start < dataLength - 1) {
        setStart(start + 1)
    }
    if (end < dataLength) {
        setEnd(end + 1)
    }
}