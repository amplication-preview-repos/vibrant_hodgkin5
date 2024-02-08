import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderWhereInput = {
  discount?: FloatNullableFilter;
  id?: StringFilter;
  quantity?: IntNullableFilter;
  totalPrice?: IntNullableFilter;
};
