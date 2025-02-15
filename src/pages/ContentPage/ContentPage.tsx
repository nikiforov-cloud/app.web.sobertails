import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '@/store/itemsSlice';
import { RootState, AppDispatch } from '@/store/store';
import Card from './components/Card/Card';
import './ContentPage.scss';

const ContentPage: React.FC<{ item: string }> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.items);

  useEffect(() => {
    if (!(item in data)) {
      void dispatch(fetchItems(item));
    }
  }, [item, dispatch, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if ((data[item] ?? []).length === 0) return <p>No data</p>;

  return (
    <div className="ContentPage">
      {data[item].map((drink) => (
        <Card key={drink.idDrink} item={drink} />
      ))}
    </div>
  );
};

export default ContentPage;
