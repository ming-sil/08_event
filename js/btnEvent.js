
// *Q1.색상넣기 버튼 클릭 시 con에 색상추가, 색상빼기 버튼 클릭 시 con에 색상 빼기

const conEl = document.querySelector('.con');
const addBtn = document.querySelector('.add_color');
const removeBtn = document.querySelector('.remove_color');

const handleClick1 = () => {
    conEl.classList.add('on');
}
const handleClick2 = () => {
    conEl.classList.remove('on');
}

addBtn.addEventListener('click', handleClick1);
removeBtn.addEventListener('click', handleClick2);
