function on_expand(id) {
    const expanded = document.getElementById(`content-${id}`).className === 'cont-content-expanded';
    document.getElementById(`content-${id}`).className = expanded ? 'cont-content-collapsed' : 'cont-content-expanded';
    document.getElementById(`dim-${id}`).style.visibility = expanded ? "hidden" : "";
}