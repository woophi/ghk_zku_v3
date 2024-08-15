import { globalStyle, style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const banner = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  borderRadius: '24px',
  padding: '12px',
  backgroundColor: '#F2F9FF',
  marginTop: '1rem',
});

const switchItem = style({});

globalStyle(`${switchItem} > span > span:first-child`, {
  fontWeight: 500,
});

const btnContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  gap: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  switchItem,
  banner,
  btnContainer,
};
