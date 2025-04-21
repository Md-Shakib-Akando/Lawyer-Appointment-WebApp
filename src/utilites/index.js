export const getBookMark = () => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) return JSON.parse(favorites);
    return [];
}

export const BookMark = (data) => {
    const favorites = getBookMark();
    const isExist = favorites.find(p=>p.id===data.id)
    if(isExist) return console.log('already added')
    favorites.push(data);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
