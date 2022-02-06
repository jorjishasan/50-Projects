const imgList = [
    "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80",

    "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80",

    "https://images.unsplash.com/photo-1621858170593-9d380e529df1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",

    "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",

    "https://images.unsplash.com/photo-1640622660721-45b83554ab05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
];

const boxes = document.querySelectorAll('.box');

boxes.forEach((item, index) => {
    item.style.backgroundImage = `url(${imgList[index]})`;
    item.onclick = function () {
        boxes.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
    };
});