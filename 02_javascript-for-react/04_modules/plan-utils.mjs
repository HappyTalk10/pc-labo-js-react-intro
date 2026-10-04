// 他のファイルから使う関数や値を、export で公開する

// 名前付きエクスポート（複数書ける）
export const appName = "予定管理アプリ";
export const formatPlan = (plan) => `${plan.date} ${plan.title}`;

// デフォルトエクスポート（1ファイルに1つだけ）
export default function countNotDone(plans) {
  return plans.filter((plan) => !plan.done).length;
}
