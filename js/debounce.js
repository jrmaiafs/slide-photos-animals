export default function debounce(callback, time) {
    let timer;
    return (...args) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            timer = null
            callback(...args)
        }, time)
    }
}