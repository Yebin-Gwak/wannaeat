import { create } from 'zustand';

const useCommonStore = create((set) => ({
  isManager: false, //기본값은 true로 사장님
  categories: [], // 음식 카테고리

  // isManager의 값을 변경시키는 함수 (추후 유저의 role이 "MANAGER"인지 "CUSTOMER"인지에 따라 바꾸면 될듯)
  setIsManager: (value) => set(() => ({ isManager: value })),
  setCategories: (categories) => set({ categories: categories }),
}));

export default useCommonStore;
