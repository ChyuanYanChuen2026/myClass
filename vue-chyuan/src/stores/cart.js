import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([]);
  const totalPrice = computed(() => cal());
  // 加入購物車
  function addItem(prod) {
    const cartListItemExist = cartList.value.find((x) => x.id == prod.id);
    if (cartListItemExist) {
      cartListItemExist.count++;
    } else {
      const cart = {
        ...prod,
        count: 1,
      };
      cartList.value.push(cart);
    }
  }
  //移除購物車
  function removeItem(id) {
    cartList.value = cartList.value.filter((x) => x.id !== id);
  }
  //計算總價
  function cal() {
    return cartList.value.reduce(
      (sum, countNum) => sum + countNum.price * countNum.count,
      0,
    );
  }

  return {
    cartList,
    addItem,
    removeItem,
    cal,
    totalPrice,
  };
});
