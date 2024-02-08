export type Order = {
  createdAt: Date;
  discount: number | null;
  id: string;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
