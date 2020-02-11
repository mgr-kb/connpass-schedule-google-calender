import { createComponent, reactive } from "@vue/composition-api";
import axios from "axios";
import { TConnpassApiResponse } from "../types/connpass.api";
import ConnpassResult from "@/components/Organisms/ConnpassResult";
import Button from "@/components/Atoms/Button";

type Form = {
  keyword_or: string;
  nickname: string;
  order: string;
  count: string;
};

const validForm = (formObj: Form) => {
  const filteredFormArr = Object.entries(formObj).filter(item => {
    return item[1] !== "";
  });
  const validatedForm = filteredFormArr.reduce((validatedForm: Form, data) => {
    const key: keyof Form = data[0] as keyof Form;
    validatedForm[key] = data[1];
    return validatedForm;
  }, {} as Form);
  return validatedForm;
};

export default createComponent({
  setup() {
    const state = reactive({
      results: [] as Array<any>,
      form: {
        keyword_or: "",
        nickname: "",
        order: "",
        count: "10"
      }
    });
    // submit
    const handleSubmit = async () => {
      const params = validForm(state.form);
      const data: TConnpassApiResponse = await axios
        .get("/event", { params })
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
      console.log(data);
      state.results = data.events;
    };
    // onInputイベント
    const changeFieldVal = (el: any) => {
      Object.keys(state.form).map(key => {
        const keyId: keyof Form = el.target.id;
        if (key === keyId) {
          state.form[keyId] = el.target.value;
          return;
        }
      });
    };
    return () => (
      <div class="bg-white border-b py-8">
        <h1>Connpassイベント検索</h1>
        <form>
          <div>
            <label for="keyword_or">検索キーワード</label>
            <input
              id="keyword_or"
              placeholder="検索キーワード"
              onInput={changeFieldVal}
            />
          </div>
          <div>
            <label for="nickname">参加者ニックネーム</label>
            <input
              id="nickname"
              placeholder="参加者ニックネーム"
              onInput={changeFieldVal}
            />
          </div>
          <div>
            <label for="order">検索結果の表示順</label>
            <select id="order" onInput={changeFieldVal}>
              <option disabled value="">
                Please Select one
              </option>
              <option value="1">更新日時順</option>
              <option value="2">開催日時順</option>
              <option value="3">新着順</option>
            </select>
          </div>
          <div>
            <label for="count">取得件数</label>
            <input
              id="count"
              placeholder="取得件数"
              onInput={changeFieldVal}
              value={state.form.count}
            />
          </div>
        </form>
        <Button val="検索" func={handleSubmit} />
        <ConnpassResult results={state.results} />
      </div>
    );
  }
});
