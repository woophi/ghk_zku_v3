import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Collapse } from '@alfalab/core-components/collapse';
import { Gap } from '@alfalab/core-components/gap';
import { Input } from '@alfalab/core-components/input';
import { Switch } from '@alfalab/core-components/switch';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import shields from './assets/shield_s.png';
import { LS, LSKeys } from './ls';
import { MoreInfoLayout } from './more-info/MoreInfoLayout';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const [requested, setRequested] = useState(false);
  const [err, setError] = useState('');
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [accountNumber, setAccountNumber] = useState('');
  const [limit, setLimit] = useState(5_000);
  const [email, setEmail] = useState('');

  const submit = useCallback(() => {
    if (!accountNumber) {
      setError('Укажите номер лицевого счёта');
      return;
    }
    setLoading(true);
    // LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);

    // sendDataToGA(selectedItems).then(() => {
    //   setLoading(false);

    // });
  }, [accountNumber]);

  if (thxShow) {
    return <ThxLayout />;
  }

  if (moreInfo) {
    return (
      <MoreInfoLayout
        email={email}
        setEmail={setEmail}
        goBack={() => {
          setRequested(true);
          setMoreInfo(false);
        }}
        requested={requested}
      />
    );
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" font="system" weight="semibold">
          Оплата ЖКУ
        </Typography.TitleResponsive>
        <Input
          block
          label="Номер лицевого счёта"
          labelView="outer"
          placeholder="1234567890"
          size={48}
          hint="Номер ЛС или ФЛС можно найти на квитанции"
          value={accountNumber}
          onChange={(_, { value }) => setAccountNumber(value)}
        />

        <div className={appSt.banner} onClick={() => setMoreInfo(true)}>
          <img src={shields} width={44} height={44} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography.Text view="primary-medium" weight="bold">
              Страхование жилья при оплате ЖКУ
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              {requested ? 'Заявка уже оформлена' : 'До 300 000 ₽'}
            </Typography.Text>
          </div>
          <span style={{ marginLeft: 'auto', width: '24px', height: '24px' }}>
            <CDNIcon name="glyph_chevron-right_m" />
          </span>
        </div>
        <Typography.Text view="primary-small" color="secondary">
          Ежемесячный платёж за страхование имущества 200 ₽ будет добавлен к платежу за ЖКУ
        </Typography.Text>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Настройка автооплаты
        </Typography.TitleResponsive>

        <Switch
          block
          reversed
          checked={checked}
          label="Оплачивать счета автоматически"
          hint="Уведомим вас перед списанием, автооплату всегда можно отменить"
          onChange={() => setChecked(prevState => !prevState)}
          className={appSt.switchItem}
        />
        <Switch
          block
          reversed
          checked={checked2}
          label="Установить лимит на сумму платежа"
          onChange={() => setChecked2(prevState => !prevState)}
          className={appSt.switchItem}
        />
        <Collapse expanded={checked2}>
          <Input
            block
            label="Лимит на сумму платежа"
            labelView="outer"
            placeholder="5 000 ₽"
            size={48}
            value={`${limit.toLocaleString('ru')} ₽`}
            type="money"
            onChange={(_, { value }) => setLimit(Number(value.replace(/\s+/g, '').replace('₽', '')))}
          />
        </Collapse>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit} hint={err}>
          Создать шаблон оплаты
        </ButtonMobile>
      </div>
    </>
  );
};
