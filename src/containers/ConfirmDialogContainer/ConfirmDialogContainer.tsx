import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { HideConfirmDialog } from '@/store/actions';
import { ConfirmDialogType, ApplicationState } from '@/store/types';
import ConfirmDialog from '@/components/ConfirmDialog';

const ConfirmDialogContainer: FunctionComponent<ConfirmDialogContainerProps> = ({
  condfirmDialog,
}: ConfirmDialogContainerProps) => {
  const { active, action, message, actionText } = condfirmDialog;

  const onConfirm = () => {
    action && action();
    HideConfirmDialog();
  };

  return (
    <ConfirmDialog
      message={message}
      active={active}
      onConfirm={onConfirm}
      actionText={actionText}
    />
  );
};

interface ConfirmDialogContainerProps {
  condfirmDialog: ConfirmDialogType;
}

const mapStateToProps = (
  state: ApplicationState
): ConfirmDialogContainerProps => {
  return {
    condfirmDialog: state.confirmDialog,
  };
};

export default connect(mapStateToProps)(ConfirmDialogContainer);
