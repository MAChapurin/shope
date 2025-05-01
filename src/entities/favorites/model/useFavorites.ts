'use client'
import { useEffect, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'favorites_key';

type FavoritesType = number[]

const favoritesFromLocalStorage = localStorage?.getItem(STORAGE_KEY);
const initialState: FavoritesType = favoritesFromLocalStorage
  ? JSON.parse(favoritesFromLocalStorage)
  : [];

let favorites: FavoritesType = initialState;
const subscribers: Set<() => void> = new Set();

const emitChange = () => {
  subscribers.forEach((callback) => {
    callback();
  });
};

const favoritesStore = {
  getSnapshot: (): FavoritesType => favorites,

  subscribe(callback: () => void) {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  },

  onClickHandler(sku: number) {
    if (favorites.includes(sku)) {
      favorites = favorites.filter(el => el !== sku)
    } else {
      favorites = [...favorites, sku];
    }
    emitChange();
  },

  getIsLikedBySku(sku: number): boolean {
    return favorites.some((el) => el === sku);
  },
};

export const useFavorites = () => {
  const favoritesList = useSyncExternalStore(
    favoritesStore.subscribe,
    favoritesStore.getSnapshot
  );

  const { onClickHandler, getIsLikedBySku } = favoritesStore;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesList));
  }, [favoritesList]);

  return {
    getIsLikedBySku,
    favorites: favoritesList,
    onClickHandler,
  };
};