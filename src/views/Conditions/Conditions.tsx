import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Typography, Container, Box } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { AuthContext } from '../../old/provider/AuthProvider/AuthContext';
import { useStyles } from './Conditions.styles';
import { useParams } from 'react-router-dom';

export default function Conditions(): JSX.Element {
  const { authenticated } = useContext(AuthContext);
  const classes = useStyles();

  const { to } = useParams<{ to: string }>();
  useEffect(() => {
    const element: HTMLElement | null = document.getElementById(to);
    element && element.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [to]);

  return (
    <Container>
      <Box>
        <ul className={classes.nav}>
          <li key="about">
            <NavLink
              to="/conditions/about"
              className={classes.link}
              activeClassName={classes.linkSelected}
            >
              Про платформу
            </NavLink>
          </li>
          <li key="rules">
            <NavLink
              to="/conditions/rules"
              className={classes.link}
              activeClassName={classes.linkSelected}
            >
              Правила користування
            </NavLink>
          </li>
          <li key="contacts">
            <NavLink
              to="/conditions/contacts"
              className={classes.link}
              activeClassName={classes.linkSelected}
            >
              Контакти
            </NavLink>
          </li>
        </ul>

        <div id="about">
          <Typography>Про платформу</Typography>
          {authenticated && <CreateIcon />}
          <p>
            Доказові — платформа з перевіреною і надійною інформацією про
            COVID-19, вакцинацію та інші важливі теми, пов’язані з медициною. На
            платформі публікуються авторські матеріали лікарів та експертів,
            інформація від ЮНІСЕФ, а також переклади міжнародних матеріалів та
            науково-популярних статей. Автори платформи Доказові — це люди, які
            постійно навчаються, використовують дані з наукових джерел і
            належать до авторитетних медичних спільнот. Вони постійно підвищують
            рівень знань, щоб ефективно лікувати, розповідати і пояснювати.
            Принципи, за якими працює платформа Доказові: доказова медицина: на
            порталі оприлюднюються матеріали, які відповідають принципу
            доказової медицини відбір інформації експертами: всю інформацію для
            порталу відбирають, готують і верифікують авторитетні й надійні
            лікарі, експерти, фактчекери міжнародні рекомендації: відомості,
            подані на порталі, відповідають рекомендаціям ВООЗ, Центрів контролю
            за захворюваннями США і сайту системи охорони здоров’я
            Великобританії інформація, якою варто дилітись: закликаємо
            поширювати інформацію, оприлюднену на платформі, а також
            використовувати її з освітніми цілями (докладніше — у Правилах
            користування) Матеріали сайту будуть корисними сімейним лікарям та
            медикам вузьких спеціальностей, науковцям, які працюють з темами
            COVID-19 і вакцинації, журналістам, які пишуть про них, батькам та
            всім, хто хоче знати більше на теми, про які пише платформа
            Доказові. Платформу розробили та запустили у 2021 році Дитячий фонд
            ООН (ЮНІСЕФ) в Україні та SoftServe за підтримки Агентства США з
            міжнародного розвитку (USAID).{' '}
          </p>
          <p>
            Доказові — платформа з перевіреною і надійною інформацією про
            COVID-19, вакцинацію та інші важливі теми, пов’язані з медициною. На
            платформі публікуються авторські матеріали лікарів та експертів,
            інформація від ЮНІСЕФ, а також переклади міжнародних матеріалів та
            науково-популярних статей. Автори платформи Доказові — це люди, які
            постійно навчаються, використовують дані з наукових джерел і
            належать до авторитетних медичних спільнот. Вони постійно підвищують
            рівень знань, щоб ефективно лікувати, розповідати і пояснювати.
            Принципи, за якими працює платформа Доказові: доказова медицина: на
            порталі оприлюднюються матеріали, які відповідають принципу
            доказової медицини відбір інформації експертами: всю інформацію для
            порталу відбирають, готують і верифікують авторитетні й надійні
            лікарі, експерти, фактчекери міжнародні рекомендації: відомості,
            подані на порталі, відповідають рекомендаціям ВООЗ, Центрів контролю
            за захворюваннями США і сайту системи охорони здоров’я
            Великобританії інформація, якою варто дилітись: закликаємо
            поширювати інформацію, оприлюднену на платформі, а також
            використовувати її з освітніми цілями (докладніше — у Правилах
            користування) Матеріали сайту будуть корисними сімейним лікарям та
            медикам вузьких спеціальностей, науковцям, які працюють з темами
            COVID-19 і вакцинації, журналістам, які пишуть про них, батькам та
            всім, хто хоче знати більше на теми, про які пише платформа
            Доказові. Платформу розробили та запустили у 2021 році Дитячий фонд
            ООН (ЮНІСЕФ) в Україні та SoftServe за підтримки Агентства США з
            міжнародного розвитку (USAID).{' '}
          </p>
          <p>
            Доказові — платформа з перевіреною і надійною інформацією про
            COVID-19, вакцинацію та інші важливі теми, пов’язані з медициною. На
            платформі публікуються авторські матеріали лікарів та експертів,
            інформація від ЮНІСЕФ, а також переклади міжнародних матеріалів та
            науково-популярних статей. Автори платформи Доказові — це люди, які
            постійно навчаються, використовують дані з наукових джерел і
            належать до авторитетних медичних спільнот. Вони постійно підвищують
            рівень знань, щоб ефективно лікувати, розповідати і пояснювати.
            Принципи, за якими працює платформа Доказові: доказова медицина: на
            порталі оприлюднюються матеріали, які відповідають принципу
            доказової медицини відбір інформації експертами: всю інформацію для
            порталу відбирають, готують і верифікують авторитетні й надійні
            лікарі, експерти, фактчекери міжнародні рекомендації: відомості,
            подані на порталі, відповідають рекомендаціям ВООЗ, Центрів контролю
            за захворюваннями США і сайту системи охорони здоров’я
            Великобританії інформація, якою варто дилітись: закликаємо
            поширювати інформацію, оприлюднену на платформі, а також
            використовувати її з освітніми цілями (докладніше — у Правилах
            користування) Матеріали сайту будуть корисними сімейним лікарям та
            медикам вузьких спеціальностей, науковцям, які працюють з темами
            COVID-19 і вакцинації, журналістам, які пишуть про них, батькам та
            всім, хто хоче знати більше на теми, про які пише платформа
            Доказові. Платформу розробили та запустили у 2021 році Дитячий фонд
            ООН (ЮНІСЕФ) в Україні та SoftServe за підтримки Агентства США з
            міжнародного розвитку (USAID).{' '}
          </p>
          <p>
            Доказові — платформа з перевіреною і надійною інформацією про
            COVID-19, вакцинацію та інші важливі теми, пов’язані з медициною. На
            платформі публікуються авторські матеріали лікарів та експертів,
            інформація від ЮНІСЕФ, а також переклади міжнародних матеріалів та
            науково-популярних статей. Автори платформи Доказові — це люди, які
            постійно навчаються, використовують дані з наукових джерел і
            належать до авторитетних медичних спільнот. Вони постійно підвищують
            рівень знань, щоб ефективно лікувати, розповідати і пояснювати.
            Принципи, за якими працює платформа Доказові: доказова медицина: на
            порталі оприлюднюються матеріали, які відповідають принципу
            доказової медицини відбір інформації експертами: всю інформацію для
            порталу відбирають, готують і верифікують авторитетні й надійні
            лікарі, експерти, фактчекери міжнародні рекомендації: відомості,
            подані на порталі, відповідають рекомендаціям ВООЗ, Центрів контролю
            за захворюваннями США і сайту системи охорони здоров’я
            Великобританії інформація, якою варто дилітись: закликаємо
            поширювати інформацію, оприлюднену на платформі, а також
            використовувати її з освітніми цілями (докладніше — у Правилах
            користування) Матеріали сайту будуть корисними сімейним лікарям та
            медикам вузьких спеціальностей, науковцям, які працюють з темами
            COVID-19 і вакцинації, журналістам, які пишуть про них, батькам та
            всім, хто хоче знати більше на теми, про які пише платформа
            Доказові. Платформу розробили та запустили у 2021 році Дитячий фонд
            ООН (ЮНІСЕФ) в Україні та SoftServe за підтримки Агентства США з
            міжнародного розвитку (USAID).{' '}
          </p>
        </div>

        <div id="rules">
          <Typography>Правила користування</Typography>
          {authenticated && <CreateIcon />}
          <p>
            Платформа Доказові заохочує використовувати, публікувати і
            розповсюджувати оприлюднені на ній матеріали. Водночас використання
            матеріалів можливе за умов, викладених у цих правилах. Матеріали,
            оприлюднені на платформі Доказові, створені для цієї платформи, якщо
            в самій публікації не вказано інше джерело (наприклад, що це допис
            експерта у соцмережах або відео організації). Матеріали платформи
            дозволено використовувати: в інших медіа –лише за умови посилання на
            платформу Доказові: для діджитал-медіа – гіперпосилання на
            dokazovi.info не нижче першого абзацу для телебачення і радіо –
            згадка в синхроні сюжету/передачі для особистих цілей: ви можете
            завантажити або скопіювати вміст сайту, інші компоненти та елементи,
            що відображаються на сайті для освітнього процесу: як джерела для
            матеріалів занять, завдання тощо Під час використання матеріалів у
            будь-якому випадку не можна змінювати текст і візуальні матеріали,
            щоб запобігти тому, що сенс матеріалів може бути розтлумачено
            невірно, виділено з контексту або викривлено. В будь-якому випадку
            під час використання матеріалів необхідно завжди вказувати його
            автора/авторів. Використовувати матеріали платформи з метою
            отримання комерційної вигоди заборонено. Переклади матеріалів видань
            ____, ____, _____ здійснено на умовах ексклюзивної угоди між ЮНІСЕФ
            в Україні та цими виданнями. УМОВИ ПЕРЕДРУКУ ЦИХ МАТЕРІАЛІВ.Тут ще
            буде доповнення по тексту, поки за оцінками – до 1000 символів
          </p>
          <p>
            Платформа Доказові заохочує використовувати, публікувати і
            розповсюджувати оприлюднені на ній матеріали. Водночас використання
            матеріалів можливе за умов, викладених у цих правилах. Матеріали,
            оприлюднені на платформі Доказові, створені для цієї платформи, якщо
            в самій публікації не вказано інше джерело (наприклад, що це допис
            експерта у соцмережах або відео організації). Матеріали платформи
            дозволено використовувати: в інших медіа –лише за умови посилання на
            платформу Доказові: для діджитал-медіа – гіперпосилання на
            dokazovi.info не нижче першого абзацу для телебачення і радіо –
            згадка в синхроні сюжету/передачі для особистих цілей: ви можете
            завантажити або скопіювати вміст сайту, інші компоненти та елементи,
            що відображаються на сайті для освітнього процесу: як джерела для
            матеріалів занять, завдання тощо Під час використання матеріалів у
            будь-якому випадку не можна змінювати текст і візуальні матеріали,
            щоб запобігти тому, що сенс матеріалів може бути розтлумачено
            невірно, виділено з контексту або викривлено. В будь-якому випадку
            під час використання матеріалів необхідно завжди вказувати його
            автора/авторів. Використовувати матеріали платформи з метою
            отримання комерційної вигоди заборонено. Переклади матеріалів видань
            ____, ____, _____ здійснено на умовах ексклюзивної угоди між ЮНІСЕФ
            в Україні та цими виданнями. УМОВИ ПЕРЕДРУКУ ЦИХ МАТЕРІАЛІВ.Тут ще
            буде доповнення по тексту, поки за оцінками – до 1000 символів
          </p>
          <p>
            Платформа Доказові заохочує використовувати, публікувати і
            розповсюджувати оприлюднені на ній матеріали. Водночас використання
            матеріалів можливе за умов, викладених у цих правилах. Матеріали,
            оприлюднені на платформі Доказові, створені для цієї платформи, якщо
            в самій публікації не вказано інше джерело (наприклад, що це допис
            експерта у соцмережах або відео організації). Матеріали платформи
            дозволено використовувати: в інших медіа –лише за умови посилання на
            платформу Доказові: для діджитал-медіа – гіперпосилання на
            dokazovi.info не нижче першого абзацу для телебачення і радіо –
            згадка в синхроні сюжету/передачі для особистих цілей: ви можете
            завантажити або скопіювати вміст сайту, інші компоненти та елементи,
            що відображаються на сайті для освітнього процесу: як джерела для
            матеріалів занять, завдання тощо Під час використання матеріалів у
            будь-якому випадку не можна змінювати текст і візуальні матеріали,
            щоб запобігти тому, що сенс матеріалів може бути розтлумачено
            невірно, виділено з контексту або викривлено. В будь-якому випадку
            під час використання матеріалів необхідно завжди вказувати його
            автора/авторів. Використовувати матеріали платформи з метою
            отримання комерційної вигоди заборонено. Переклади матеріалів видань
            ____, ____, _____ здійснено на умовах ексклюзивної угоди між ЮНІСЕФ
            в Україні та цими виданнями. УМОВИ ПЕРЕДРУКУ ЦИХ МАТЕРІАЛІВ.Тут ще
            буде доповнення по тексту, поки за оцінками – до 1000 символів
          </p>
          <p>
            Платформа Доказові заохочує використовувати, публікувати і
            розповсюджувати оприлюднені на ній матеріали. Водночас використання
            матеріалів можливе за умов, викладених у цих правилах. Матеріали,
            оприлюднені на платформі Доказові, створені для цієї платформи, якщо
            в самій публікації не вказано інше джерело (наприклад, що це допис
            експерта у соцмережах або відео організації). Матеріали платформи
            дозволено використовувати: в інших медіа –лише за умови посилання на
            платформу Доказові: для діджитал-медіа – гіперпосилання на
            dokazovi.info не нижче першого абзацу для телебачення і радіо –
            згадка в синхроні сюжету/передачі для особистих цілей: ви можете
            завантажити або скопіювати вміст сайту, інші компоненти та елементи,
            що відображаються на сайті для освітнього процесу: як джерела для
            матеріалів занять, завдання тощо Під час використання матеріалів у
            будь-якому випадку не можна змінювати текст і візуальні матеріали,
            щоб запобігти тому, що сенс матеріалів може бути розтлумачено
            невірно, виділено з контексту або викривлено. В будь-якому випадку
            під час використання матеріалів необхідно завжди вказувати його
            автора/авторів. Використовувати матеріали платформи з метою
            отримання комерційної вигоди заборонено. Переклади матеріалів видань
            ____, ____, _____ здійснено на умовах ексклюзивної угоди між ЮНІСЕФ
            в Україні та цими виданнями. УМОВИ ПЕРЕДРУКУ ЦИХ МАТЕРІАЛІВ.Тут ще
            буде доповнення по тексту, поки за оцінками – до 1000 символів
          </p>
        </div>

        <div id="contacts">
          <Typography>Контакти</Typography>
          {authenticated && <CreateIcon />}
          <p>
            Хочете стати автором платформи? Бажаєте співпрацювати? Маєте
            запитання? Пишіть нам на contact@dokazovi.info
          </p>
          <p>
            Хочете стати автором платформи? Бажаєте співпрацювати? Маєте
            запитання? Пишіть нам на contact@dokazovi.info
          </p>
          <p>
            Хочете стати автором платформи? Бажаєте співпрацювати? Маєте
            запитання? Пишіть нам на contact@dokazovi.info
          </p>
          <p>
            Хочете стати автором платформи? Бажаєте співпрацювати? Маєте
            запитання? Пишіть нам на contact@dokazovi.info
          </p>
        </div>
      </Box>
    </Container>
  );
}
