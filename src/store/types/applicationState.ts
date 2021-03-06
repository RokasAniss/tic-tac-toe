import { GridBlockType, ConfirmDialogType, Score } from './';
import { Player } from '@/constants';
import { LogItem } from './logItem';

export interface ApplicationState {
  freshLoad: boolean;
  activePlayer: Player;
  grid: Array<GridBlockType>;
  confirmDialog: ConfirmDialogType;
  gridLock: boolean;
  score: Score;
  actionLog: Array<LogItem> | [];
}
