
const userName: string = 'terry';
document.onreadystatechange = (e: Event): void => {
    if (document.readyState !== 'complete') return;

    alert(userName);
}