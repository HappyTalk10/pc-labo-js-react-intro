import Hello from "./components/Hello.jsx";
import PlanList from "./components/PlanList.jsx";
import Counter from "./components/Counter.jsx";
import PlanAdder from "./components/PlanAdder.jsx";

export default function App() {
  return (
    <div>
      <h1>React入門</h1>

      <h2>1. コンポーネントとprops</h2>
      <Hello name="PC-LABO" />
      <Hello name="React" />

      <h2>2. 一覧表示（map と key）</h2>
      <PlanList />

      <h2>3. useState：カウンター</h2>
      <Counter />

      <h2>4. useState：予定の追加・削除・完了</h2>
      <PlanAdder />
    </div>
  );
}
