import { createComponent } from "@vue/composition-api";

type Props = {
  id: string;
  placeholder: string;
  onInputFunc: () => void;
};

export default createComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    placeholder: {
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
      <input
        id={props.id}
        placeholder={props.placeholder}
        onInput={props.onInputFunc}
      />
    );
  }
});
