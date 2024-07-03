function throttleone(func, del) {
    return () => {
        clearTimeout(timeout);
        var timeout = setTimeout(func, del);
    }
}