export interface iTableLibActionsArgs {
  title: string;
  materialIconText?: string;
  event: (id: any) => void;
  getDynamic?: (((args : any) => iTableLibActionsArgs))  
}
export interface iTableLibisEmptyArgs {
  headers: Array<string>;
}