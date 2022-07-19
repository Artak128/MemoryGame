export function openAll(data) {
    for (let key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            document.querySelector(`#${key}`).classList.add(data[key],'rotateY');
        }
    }
}