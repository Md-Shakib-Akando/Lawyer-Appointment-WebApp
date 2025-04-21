import { toast } from 'react-toastify';

export const getBookMark = () => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) return JSON.parse(favorites);
    return [];
}

export const BookMark = (data) => {
    const favorites = getBookMark();
    const isExist = favorites.find(p=>p.id===data.id)
    if (isExist) {
        toast.warn("Already added to appointments!");
        return;
      }
    favorites.push(data);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success(`Appointment Schedule for ${data.name} successfully`);
}

export const removeBookMark=(id)=>{
    const favorites = getBookMark();
    const remainingFavorite=favorites.filter(fav=>fav.id!==id);
    localStorage.setItem('favorites', JSON.stringify(remainingFavorite));
    toast.error("Appointment canceled!");
}
