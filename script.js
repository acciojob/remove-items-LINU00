//your JS code here. If required.
const button = document.querySelector('input[type="button"]')
const select = document.getElementById('colorSelect')

button.onclick = function() {
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex)
    }
}
