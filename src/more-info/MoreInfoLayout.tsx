import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Divider } from '@alfalab/core-components/divider';
import { Gap } from '@alfalab/core-components/gap';
import { Input } from '@alfalab/core-components/input';
import { Typography } from '@alfalab/core-components/typography';
import shield from '../assets/shield.png';
import { appSt } from '../style.css';
import { miSt } from './style.css';

type Props = {
  goBack: () => void;
  email: string;
  setEmail: (v: string) => void;
  requested: boolean;
};

export const MoreInfoLayout = ({ goBack, email, setEmail, requested }: Props) => {
  return (
    <>
      <div className={appSt.container}>
        <div className={miSt.imgBox}>
          <Typography.TitleResponsive tag="h1" view="large" font="system" weight="bold">
            Страхование жилья при оплате ЖКУ
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Ваш дом под защитой
          </Typography.Text>
          <img src={shield} width="100%" />
        </div>

        <Input
          block
          label="Ваш e-mail"
          labelView="outer"
          placeholder="you@yandex.ru"
          size={48}
          hint="Оформите заявку на подключение страхования, и наши сотрудники отправят вам все необходимые документы на электронную почту"
          value={email}
          onChange={(_, { value }) => setEmail(value)}
          type="email"
        />
        <div className={miSt.box}>
          <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
            Что покрывает страхование?
          </Typography.TitleResponsive>

          <div className={miSt.row}>
            <Typography.Text view="primary-medium" color="secondary" weight="medium">
              Внутренняя отделка
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
              до 100 000 ₽
            </Typography.Text>
          </div>
          <Divider />
          <div className={miSt.row}>
            <Typography.Text view="primary-medium" color="secondary" weight="medium">
              Ответственность перед соседями
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
              до 100 000 ₽
            </Typography.Text>
          </div>
          <Divider />

          <div className={miSt.row}>
            <Typography.Text view="primary-medium" color="secondary" weight="medium">
              Движимое имущество
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
              до 100 000 ₽
            </Typography.Text>
          </div>
          <Divider />

          <div className={miSt.row}>
            <Typography.Text view="primary-medium" color="secondary" weight="medium">
              Расходы на гостинницу
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
              до 5 000 ₽
            </Typography.Text>
          </div>
          <Divider />

          <div className={miSt.row}>
            <Typography.Text view="primary-medium" color="secondary" weight="medium">
              Расходы на уборку после страхового случая
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="medium" style={{ flexShrink: 0 }}>
              до 3 000 ₽
            </Typography.Text>
          </div>
        </div>
        <Typography.Text view="primary-small" color="secondary">
          Ежемесячный платёж за страхование имущества 200 ₽ будет добавлен к платежу за ЖКУ
        </Typography.Text>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        {requested ? (
          <ButtonMobile block view="primary" onClick={goBack}>
            Заявка уже оформлена
          </ButtonMobile>
        ) : (
          <ButtonMobile block view="primary" onClick={goBack} className={miSt.btn}>
            <div className={appSt.btnContainer}>
              <div>
                <Typography.TitleResponsive font="system" tag="h2" view="xsmall" weight="bold">
                  200 ₽ в месяц
                </Typography.TitleResponsive>
                <Typography.Text color="secondary-inverted" tag="p" view="primary-medium" defaultMargins={false}>
                  Оформить заявку на страхование
                </Typography.Text>
              </div>

              <div className={appSt.btnContainer}>
                <div className={miSt.btnArrow}>
                  <CDNIcon name="glyph_chevron-right_m" color="#000000" />
                </div>
              </div>
            </div>
          </ButtonMobile>
        )}
      </div>
    </>
  );
};
