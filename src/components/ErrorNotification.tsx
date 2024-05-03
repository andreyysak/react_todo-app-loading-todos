import React, { useEffect } from 'react';

interface Props {
  errorType: ErrorType | null;
  onClose: () => void;
}

export const errors = {
  load: {
    message: 'Unable to load todos',
  },
  add: {
    message: 'Unable to add todo',
  },
  delete: {
    message: 'Unable to delete todo',
  },
  update: {
    message: 'Unable to update todo',
  },
  empty: {
    message: 'Title cannot be empty',
  },
};

export type ErrorType = keyof typeof errors;

export const ErrorNotification: React.FC<Props> = ({ errorType, onClose }) => {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 3000);
  }, [onClose]);
  const message = errorType ? errors[errorType].message : '';

  return (
    <div
      data-cy="ErrorNotification"
      className={`notification is-danger is-light has-text-weight-normal ${!message ? 'hidden' : ''}`}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={onClose}
      >
        {message}
      </button>
    </div>
  );
};
