import { createComponent } from "@vue/composition-api";
import Label from "@/components/Atoms/Label";
import InputText from "@/components/Atoms/InputText";

type Props = {
  id: string;
  fieldName: string;
  onInputFunc: () => void;
};

export default createComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    fieldName: {
      type: String,
      reqired: true
    },
    onInputFunc: {
      type: Function,
      required: true
    }
  },
  setup(props: Props) {
    return () => (
      <div>
        <Label for={props.id} val={props.fieldName} />
        <InputText
          id={props.id}
          placeholder={props.fieldName}
          onInputFunc={props.onInputFunc}
        />
      </div>
    );
  }
});
