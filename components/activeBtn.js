export function activeBtn(btns) {
    for (const element of btns) {
        element.onclick = () => {
            for (const element2 of btns) {
                element2.style.color = '#918989'
            }
            element.style.color = '#fff'
        }
    }
}