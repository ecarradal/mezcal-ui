import { Meta, ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';
import { color } from './shared/styles';

export default {
  title: 'Colores',
  component: ColorPalette,
};

export const Boton = () => (
  <>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore porro esse sunt cumque, expedita consequuntur praesentium facere voluptatibus, voluptates autem omnis odit harum quo dicta magnam natus veniam odio!</p>
    <ColorPalette>
      <ColorItem
        title="theme.color.primary"
        subtitle="Coral"
        colors={[color.primary]}
      />
      <ColorItem
        title="theme.color.secondary"
        subtitle="Blue"
        colors={[color.secondary]}
      />
      <ColorItem
        title="theme.color.tertiary"
        subtitle="Grey"
        colors={[color.tertiary]}
      />
      <ColorItem
        title="theme.color.positive"
        subtitle="Green"
        colors={[color.positive]}
      />
      <ColorItem
        title="theme.color.warning"
        subtitle="Ochre"
        colors={[color.warning]}
      />
      <ColorItem
        title="theme.color.negative"
        subtitle="Red"
        colors={[color.negative]}
      />
      <ColorItem
        title="theme.color.orange"
        subtitle="Orange"
        colors={[color.orange]}
      />
      <ColorItem
        title="theme.color.gold"
        subtitle="Gold"
        colors={[color.gold]}
      />
      <ColorItem
        title="theme.color.green"
        subtitle="Green"
        colors={[color.green]}
      />
      <ColorItem
        title="theme.color.seafoam"
        subtitle="Seafoam"
        colors={[color.seafoam]}
      />
      <ColorItem
        title="theme.color.purple"
        subtitle="Purple"
        colors={[color.purple]}
      />
      <ColorItem
        title="theme.color.ultraviolet"
        subtitle="Ultraviolet"
        colors={[color.ultraviolet]}
      />
    </ColorPalette>
  </>
);
