function on_expand() {
    const expanded = document.getElementById('content-1').className === 'cont-content-expanded';
    document.getElementById('content-1').className = expanded ? 'cont-content-collapsed' : 'cont-content-expanded';
}