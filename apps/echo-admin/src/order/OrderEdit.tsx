import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Discount" source="discount" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput step={1} label="Total Price" source="totalPrice" />
      </SimpleForm>
    </Edit>
  );
};
