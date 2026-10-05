import { useState } from "react";

// 配列を state にして、追加・削除・完了の切り替えを行う
export default function PlanAdder() {
  const [plans, setPlans] = useState([
    { id: 1, title: "歯医者", done: false },
    { id: 2, title: "会議", done: false },
  ]);
  const [text, setText] = useState("");

  // 追加：スプレッド構文で、新しい配列を作る
  const addPlan = () => {
    if (text === "") return;
    setPlans([...plans, { id: Date.now(), title: text, done: false }]);
    setText("");
  };

  // 削除：filter で、指定した id 以外を残す
  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  // 完了の切り替え：map と スプレッド構文で、1件だけ更新する
  const toggleDone = (id) => {
    setPlans(
      plans.map((plan) =>
        plan.id === id
          ? { ...plan, done: !plan.done }
          : plan
      )
    );
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="予定を入力"
      />
      <button onClick={addPlan}>追加</button>

      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            {plan.title} {plan.done ? "（完了）" : ""}
            <button onClick={() => toggleDone(plan.id)}>完了/戻す</button>
            <button onClick={() => deletePlan(plan.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
