import {
  StyledBoldSpan,
  StyledBoldText,
  StyledCommonTitle,
  StyledCommonTitleH2
} from "../../commonStyles/commonStyles";
import {
  StyledAdvisesTitle,
  StyledArticleAdvisesList,
  StyledArticleAdvisesListItem,
  StyledArticleDescr,
  StyledArticleSublist,
  StyledArticleSublistItem,
  StyledTextWrapper,
  StyledUsefulArticle,
  StyledUsefulArticleListItem,
  StyledUsefulArticlesList,
  StyledUsefulWrapper,
} from "./Useful.styled";

const Useful = () => {
  return (
    <StyledUsefulWrapper>
      <StyledCommonTitle>Корисне</StyledCommonTitle>
      <StyledUsefulArticlesList>
        <StyledUsefulArticleListItem>
          <StyledUsefulArticle>
            <StyledCommonTitleH2>
              Короткозорість і значення апарату УЗД в контролі її прогресії. 👇🏻
            </StyledCommonTitleH2>
            <StyledArticleDescr>
              Люди, які мають короткозорість буває частенько скаржаться на
              погіршення зору. І в цьому випадку на лікаря лягає
              відповідальність визначити внаслідок чого пацієнт став гірше
              бачити.
            </StyledArticleDescr>
          </StyledUsefulArticle>
        </StyledUsefulArticleListItem>
        <StyledUsefulArticleListItem>
          <StyledUsefulArticle>
            <StyledCommonTitleH2>
              Зростає довжина ока? Чи присутнє здорове перевантаження астенопії?
            </StyledCommonTitleH2>
            <StyledArticleDescr>
              Допомогти лікарю в цьому питанні допоможе УЗД. Апарат Compact
              Touch — французького виробництва який дозволяє швидко виміряти
              довжину ока . Око без порушень (в нормі) має довжину 24 мм. Вчені
              стверджують що на 3 діоптрії короткозорості око збільшується в
              довжину на 1 мм. Лікар вимірявши людині ПЗО може зробити висновки,
              вибрати правильну тактику подальшого ведення.
            </StyledArticleDescr>
          </StyledUsefulArticle>
        </StyledUsefulArticleListItem>
        <StyledUsefulArticleListItem>
          <StyledUsefulArticle>
            <StyledCommonTitleH2>
              Про короткозорість або про міопію 🤔
            </StyledCommonTitleH2>
            <StyledArticleDescr>
              <StyledTextWrapper>
                <div>
                  <StyledBoldSpan>Короткозорість</StyledBoldSpan> — це порушення
                  рефракції при якому світлові промені потрапляють не на
                  сітківку, а перед нею, тому людина з короткозорістю погано
                  бачить на далеку відстань . Частіше короткозорість виникає в
                  ранньому дитинстві, коли дитина починає швидко рости.
                </div>
                <StyledBoldText>
                  Короткозорість розподіляють по ступеню:
                  <StyledArticleSublist>
                    <StyledArticleSublistItem>
                      Слабка від 0 до -3,0 діоптрії
                    </StyledArticleSublistItem>
                    <StyledArticleSublistItem>
                      Середня від-3,00 до -6,00 діоптрії
                    </StyledArticleSublistItem>
                    <StyledArticleSublistItem>
                      Висока від -6,0 і вище
                    </StyledArticleSublistItem>
                  </StyledArticleSublist>
                </StyledBoldText>
              </StyledTextWrapper>
              <div>
                Для того, щоб вплинути на прогресування короткозорості вчені
                пропонують Постійне носіння окулярів (це може стримати зростання
                міопії в 30% випадків) Використання мʼяких контактних лінз (цей
                вид корекції сповільнює прогресування короткозорості в 50%
                випадків) Нічні лінзи як пишуть вчені здатні стримати зростання
                короткозорості у 70% випадків.
              </div>
            </StyledArticleDescr>
          </StyledUsefulArticle>
        </StyledUsefulArticleListItem>
        <StyledUsefulArticleListItem>
          <StyledUsefulArticle>
            <StyledCommonTitleH2>
              Що означає «НІЧНІ» лінзи? 🤔
            </StyledCommonTitleH2>
            <StyledArticleDescr>
              <div>
                Це прозорі та дуже щільні на дотик контактні лінзи, які шляхом
                своєї конструкції впливають на форму епітелію рогівки. За ніч
                змінюється форма рогівки і за законом фізики світловий промінь
                потрапляє на сітківку. Знімаючи, після сну лінзи, дитина бачить
                добре і не виникає потреби в використанні додаткових засобів
                корекції. Нічні лінзи це абсолютно безпечний засіб для
                покращення зору та підбираються суто індивідуально з урахуванням
                конфігурації поверхні ока.
              </div>
              <div>
                Переваги нічних лінз Їх дія при швидко прогресуючій
                короткозорості; Дитина, яка користується нічними лінзами, вдень
                може взагалі нічим не користуватися і мати добрий зір; При
                користуванні нічними лінзами не відчувається сухість І головне —
                нічні лінзи це максимально дієвий спосіб зупинки прогресування
                короткозорості.
              </div>
            </StyledArticleDescr>
          </StyledUsefulArticle>
        </StyledUsefulArticleListItem>
        <StyledUsefulArticleListItem>
          <StyledUsefulArticle>
            <StyledCommonTitleH2>
              Збереження здоровʼя зору у підлітків: практичні рекомендації 👇🏻
            </StyledCommonTitleH2>
            <StyledArticleDescr>
              <div>
                Важливість здоровʼя зору в підлітковому віці важко переоцінити.
              </div>
              <div>
                <StyledAdvisesTitle>
                  Ось кілька порад, які допоможуть зберегти гарний зір:{" "}
                </StyledAdvisesTitle>
                <StyledArticleAdvisesList>
                  <StyledArticleAdvisesListItem>
                    Регулярні огляди офтальмолога: Підлітки повинні проходити
                    регулярні огляди не менше ніж кожних пів року для виявлення
                    можливих проблем та корекції зору.{" "}
                  </StyledArticleAdvisesListItem>
                  <StyledArticleAdvisesListItem>
                    Відпочинок для очей: Важливо відводити час для відпочинку
                    очей під час тривалої роботи за компʼютером чи читання.
                    10-15 хв після 30-40хв роботи{" "}
                  </StyledArticleAdvisesListItem>
                  <StyledArticleAdvisesListItem>
                    Правильне освітлення: Забезпечте достатнє та правильне
                    освітлення під час читання чи виконання завдань. Світло від
                    лампи має падати на книгу чи зошит з яким працює дитина і в
                    кімнаті має бути включене загальне освітлення{" "}
                  </StyledArticleAdvisesListItem>
                  <StyledArticleAdvisesListItem>
                    Баланс активності: Забезпечте різноманіття у зорових
                    навантаженнях, включаючи зовнішню активність та перерви від
                    екранів.{" "}
                  </StyledArticleAdvisesListItem>
                  <StyledArticleAdvisesListItem>
                    Збалансована дієта: Включіть в раціон продукти, багаті
                    вітамінами та антиоксидантами, корисними для здоровʼя очей.{" "}
                  </StyledArticleAdvisesListItem>
                  <StyledArticleAdvisesListItem>
                    Використання захисних окулярів: У ситуаціях зі збільшеним
                    ризиком, наприклад, при використанні компʼютера,
                    використовуйте захисні окуляри.{" "}
                  </StyledArticleAdvisesListItem>
                  <StyledArticleAdvisesListItem>
                    Моніторинг часу екрану: Обмежте час, який підліток витрачає
                    перед екранами гаджетів, для попередження напруження очей.
                  </StyledArticleAdvisesListItem>
                </StyledArticleAdvisesList>
              </div>
            </StyledArticleDescr>
          </StyledUsefulArticle>
        </StyledUsefulArticleListItem>
      </StyledUsefulArticlesList>
      <StyledCommonTitleH2>
        Стосовно дієти , вітаміно терапії або варіантів корекції ви можете
        звернутись в оптику &quot;Окуліст&quot;!
      </StyledCommonTitleH2>
    </StyledUsefulWrapper>
  );
};

export default Useful;
