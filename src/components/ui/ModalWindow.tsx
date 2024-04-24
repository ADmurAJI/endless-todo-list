import { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';

import styles from '../../style/ui/modalWindow.module.scss';

import todos from '../../store/todos';

import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

type ModalProps = {
  children: JSX.Element | JSX.Element[];
  modalToggler: () => void;
}

const ModalWindow:FunctionComponent<ModalProps> = observer(( {children, modalToggler} ) => {
  return (
    <div className={styles.blackout}>
      <div className={`${styles.flexColumn} ${styles.controls}`}>
        <div className={styles.flexColumn}>
          <Input 
            value={todos.todoTitle}
            onChange={(e) => todos.titleHandler(e.target.value)}
            placeholder='Заголовок...'
          />
          <TextArea 
            value={todos.todoText}
            onChange={(e) => todos.textHandler(e.target.value)}
            placeholder='Описание...'
          />
        </div>
        {children}
        <Button 
          btnText='Закрыть'
          onClick={modalToggler}
        />
      </div>
    </div>
  );
});

export default ModalWindow;
