/**
 * グループオブジェクト
 * @property number id グループID
 * @property string title グループタイトル
 * @property string url グループurl
 */
type TSeries = {
  id: number;
  title: string;
  url: string;
};

/**
 * イベント情報
 * @property number event_id イベントID
 * @property string title タイトル
 * @property string catch キャッチ
 * @property string description 概要(HTML形式)
 * @property string event_url connpass.com 上のURL
 * @property string hash_tag Twitterのハッシュタグ
 * @property string started_at イベント開催日時 (ISO-8601形式)
 * @property string ended_at イベント終了日時 (ISO-8601形式)
 * @property string limit 定員
 * @property string event_type イベント参加タイプ
 * @property TSeries series グループ
 * @property string address 開催場所
 * @property string place 開催会場
 * @property number lat 開催会場の緯度
 * @property number lon 開催会場の経度
 * @property number owner_id 管理者のID
 * @property string owner_nickname 管理者のニックネーム
 * @property string owner_display_name 管理者の表示名
 * @property number accepted 参加者数
 * @property number waiting 補欠者数
 * @property string updated_at 更新日時 (ISO-8601形式)
 */
type TConnpassEventItem = {
  event_id: number;
  title: string;
  catch: string;
  description: string;
  event_url: string;
  hash_tag: string;
  started_at: string;
  ended_at: string;
  limit: number;
  event_type: string;
  series: TSeries;
  address: string;
  place: string;
  lat: number;
  lon: number;
  owner_id: number;
  owner_nickname: string;
  owner_display_name: string;
  accepted: number;
  waiting: number;
  updated_at: string;
};

/**
 * 検索結果
 * @property number results_returned 含まれる検索結果の件数
 * @property number results_available 検索結果の総件数
 * @property number results_start 検索の開始位置
 * @property Array<TConnpassEventItem> events 検索結果のイベントリスト
 */
export type TConnpassApiResponse = {
  results_returned: number;
  results_available: number;
  results_start: number;
  events: Array<TConnpassEventItem>;
};
