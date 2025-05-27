export interface SearchWhereItem {
  key: string;
  rel: string; // TODO 映射连接符
  val: any;
  label: string;
  filterCom: string; // 搜索控件类型（范围较广）
  type: string; // 控件类型
  relOptions: { value: string; label: string }[];
  props: Record<string, any>;
}
