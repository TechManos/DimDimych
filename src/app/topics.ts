import {ContentElement} from "./model/ContentElement";
import {TextContentElement} from "./model/TextContentElement";
import {ImageContentElement} from "./model/ImageContentElement";

export interface Topic {
  id: number;
  name: string;
  shortDescription?: string;
  genre?: string;
  contentElements: ContentElement[];
}

// TODO: implement inner elements, meaning each element can have inner ContentElement
// <p>Здластвуйте, я Діма Каляденка и я поздравляю вас на своем праздника. Сегодня ми уже успели поиграть Варзон и пососать ВЕЛИКОГО <strong>жирного</strong> хуя 🐓.</p>

export const topics: Topic[] = [
  {
    id: 1,
    name: 'Надутий маяк',
    shortDescription: 'Я сьогодні всосала як шлюха йобана',
    genre: 'Action, Comedy',
    contentElements: [
      new TextContentElement({
        htmlElement: '<p>',
        value: 'Сьогодні був чудовий день! 😊'
      }),
      new TextContentElement({
        htmlElement: '<h4>',
        value: 'Привет падпіщікам'
      }),
      new TextContentElement({
        htmlElement: '<p>',
        value: 'Здластвуйте, я Діма Каляденка и я поздравляю вас на своем праздника. Сегодня ми уже успели поиграть Варзон и пососать ВЕЛИКОГО жирного хуя 🐓.'
      }),
      new TextContentElement({
        htmlElement: '<p>',
        value: 'Зато мой друг подарок меня сфоткал:'
      }),
      new ImageContentElement({
        path: 'assets/inspiration/content_1_1.jpg',
        alt: 'Image jakyjs konkretnij iz topics 1'
      }),
      new TextContentElement({
        htmlElement: '<h4>',
        value: 'ВСЕМ СПАСИБО ЗА ВНИМАНИЕ, Я ХОЧУ ЗДОХНУТЬ'
      })
    ]
  },
  {
    id: 2,
    name: 'Здраствуй',
    shortDescription: 'Ета Прігожин Женя',
    genre: 'Action',
    contentElements: [
      new TextContentElement({
        htmlElement: '<p>',
        value: 'Zachodim'
      }),
      new TextContentElement({
        htmlElement: '<h4>',
        value: 'Всем привет, и ето вторая запись моего варзон блога. Сегодня в комнате очень жарко: во-первіх, я жирний потній горячий слон, во-вторіх у меня очень сильній комп\'ьтер поняли суки!😡'
      }),
      new TextContentElement({
        htmlElement: '<p>',
        value: 'Але це не все. У нас сьогодні відбувся певний момент, так би мовити, ну, надутий. Але базований.'
      }),
      new ImageContentElement({
        path: 'assets/inspiration/content_2_1.jpg',
        alt: 'Image jakyjs konkretnij iz topics 2'
      }),
      new TextContentElement({
        htmlElement: '<h4>',
        value: 'Ну, тут в принципі все зрозуміло, ну, трохи Евгений так сказать, Пригожин, ну, помолодився. хіхіхіхіхіхіхіх 🤗🤗🤗🤗🤗🤗🤗🤗 '
      })
    ]
  }
]
