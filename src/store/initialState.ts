import { ApplicationState, GridBlockType } from './types';
import { gridSize, Player } from '@/constants';

const initialGrid = (): GridBlockType[] => {
  const _grid = [];
  for (let i = 0; i < gridSize; i++) {
    _grid.push(null);
  }
  return _grid;
};

const initialState: ApplicationState = {
  freshLoad: true,
  activePlayer: Player.x,
  grid: initialGrid(),
  confirmDialog: {
    actionText: '',
    active: false,
  },
  gridLock: false,
  score: {
    x: 0,
    o: 0,
  },
  actionLog: [],
};

export default initialState;
