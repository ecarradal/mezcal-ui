// Button.stories.js | Button.stories.jsx | Button.stories.ts | Button.stories.tsx

import { Button } from '../../components/Button';

export default {
  title: 'Botones',
  component: Button,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

export const Boton = (args) => <Button {...args} />;
Boton.args = { text: 'Botón' };

export const Todos = () => (
  <>
    <Button type={'primary'} text={'Primario'} />
    <br /><br />
    <Button type={'primary'} text={'Primario'} />
    <br /><br />
    <Button type={'secondary'} text={'Secundario'} />
    <br /><br />
    <Button type={'secondary'} text={'Secundario'} />
  </>
);

export const Callback = (args) => <Button {...args} />;
Callback.args = { type: 'secondary', text: 'Alerta', onClick: () => {alert("Handle onClick")} };