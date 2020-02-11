import { createComponent } from "@vue/composition-api";
import { TConnpassEventItem } from "../../types/connpass.api";

type Props = {
  results: Array<TConnpassEventItem>;
};

export default createComponent({
  props: {
    results: {
      type: Array,
      required: true
    }
  },
  setup(props: Props) {
    return () => (
      <ul class="flex flex-wrap mx-auto">
        {props.results.map(item => (
          <li class="w-1/4 md:w-1/4 xl:w-1/4 p-3 list-none">
            <div class="bg-green-300 border-4 border-green-700 rounded-lg">
              <div class="items-center">
                <p>{item.title}</p>
                <a href={item.event_url}>connpassへ</a>
                <p>{item.started_at}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
});
