window.PFLEGE_DATA={
  "version": "1.1.0",
  "modules": [
    {
      "id": "ankommen",
      "title": "Знайомство й потреби",
      "deTitle": "Ankommen und Bedürfnisse",
      "goal": "Представитися, зрозуміти побажання й домовитися про допомогу.",
      "sources": [
        "pflege1:22-23",
        "aerzte:155-157",
        "fit:16-20"
      ],
      "reading": "Sviat macht ein Praktikum im Pflegeheim. Am Morgen klopft er an die Tür von Frau Berg. Er stellt sich vor und fragt, wie sie angesprochen werden möchte. Frau Berg ist noch müde und möchte zuerst etwas trinken. Sviat hört zu und fragt, wobei sie Unterstützung braucht. Er verspricht nichts, was er nicht sicher weiß.",
      "translation": "Свят проходить практику в будинку догляду. Уранці він стукає у двері пані Берґ. Він представляється й запитує, як до неї звертатися. Пані Берґ ще втомлена і спочатку хоче щось випити. Свят слухає та запитує, у чому їй потрібна допомога. Він не обіцяє того, чого не знає напевно.",
      "keys": [
        "klopft",
        "stellt sich vor",
        "zuerst",
        "Unterstützung"
      ],
      "phrases": [
        [
          "Guten Morgen, ich heiße Sviat.",
          "Доброго ранку, мене звати Свят."
        ],
        [
          "Ich mache hier ein Praktikum.",
          "Я проходжу тут практику."
        ],
        [
          "Wie darf ich Sie ansprechen?",
          "Як до Вас звертатися?"
        ],
        [
          "Wie geht es Ihnen heute?",
          "Як Ви сьогодні почуваєтеся?"
        ],
        [
          "Was brauchen Sie gerade?",
          "Що Вам зараз потрібно?"
        ],
        [
          "Wobei brauchen Sie Unterstützung?",
          "У чому Вам потрібна допомога?"
        ],
        [
          "Ich frage meine Kollegin.",
          "Я запитаю свою колегу."
        ],
        [
          "Habe ich Sie richtig verstanden?",
          "Я правильно Вас зрозумів?"
        ]
      ],
      "vocab": [
        [
          "der Bewohner",
          "мешканець",
          "Der Bewohner äußert einen Wunsch.",
          "Мешканець висловлює побажання."
        ],
        [
          "die Bewohnerin",
          "мешканка",
          "Die Bewohnerin möchte sich ausruhen.",
          "Мешканка хоче відпочити."
        ],
        [
          "die Unterstützung",
          "допомога; підтримка",
          "Sie braucht Unterstützung beim Anziehen.",
          "Їй потрібна допомога під час одягання."
        ],
        [
          "sich vorstellen",
          "представлятися",
          "Ich stelle mich zuerst vor.",
          "Спочатку я представляюся."
        ],
        [
          "ansprechen",
          "звертатися до когось",
          "Wie darf ich Sie ansprechen?",
          "Як до Вас звертатися?"
        ],
        [
          "das Bedürfnis",
          "потреба",
          "Ich achte auf ihre Bedürfnisse.",
          "Я зважаю на її потреби."
        ]
      ],
      "dialogue": [
        [
          "Ти",
          "Guten Morgen, Frau Berg. Ich bin Sviat, der Praktikant.",
          "Доброго ранку, пані Берґ. Я Свят, практикант."
        ],
        [
          "Мешканка",
          "Guten Morgen. Ich bin noch müde.",
          "Доброго ранку. Я ще втомлена."
        ],
        [
          "Ти",
          "Möchten Sie zuerst etwas trinken?",
          "Ви хотіли б спочатку щось випити?"
        ],
        [
          "Мешканка",
          "Ja, bitte. Ein Glas Wasser.",
          "Так, будь ласка. Склянку води."
        ]
      ],
      "questions": [
        [
          "Was macht Sviat zuerst?",
          [
            "Er stellt sich vor.",
            "Er schreibt einen Arztbrief.",
            "Er verspricht einen Besuch."
          ],
          0,
          "У тексті спочатку йдеться про представлення: stellt sich vor."
        ],
        [
          "Was möchte Frau Berg zuerst?",
          [
            "Sofort aufstehen.",
            "Etwas trinken.",
            "Besuch empfangen."
          ],
          1,
          "Ключове слово zuerst пов’язане з etwas trinken, а не з підйомом."
        ],
        [
          "Welche Aussage passt?",
          [
            "Sviat entscheidet alles allein.",
            "Sviat hört nicht zu.",
            "Sviat fragt nach dem Unterstützungsbedarf."
          ],
          2,
          "Він уточнює, у чому потрібна допомога: wobei sie Unterstützung braucht."
        ]
      ],
      "gapText": "Guten Morgen, Frau Berg. {{52}} ich hereinkommen? Ich möchte {{53}} helfen. Sagen Sie bitte Bescheid, {{54}} Sie etwas brauchen.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "Darf",
            "Muss",
            "Soll"
          ],
          "answer": 0,
          "why": [
            "Darf ich …? — ввічливо попросити дозволу.",
            "Muss ich …? означає «Чи я зобов’язаний?», а тут просять дозволу.",
            "Soll ich …? означає пропозицію або уточнення доручення; для дозволу потрібне Darf."
          ],
          "rule": "Дозвіл: Darf ich + Infinitiv?"
        },
        {
          "n": 53,
          "options": [
            "Sie",
            "Ihnen",
            "Ihr"
          ],
          "answer": 1,
          "why": [
            "Helfen вимагає Dativ, тому Sie тут не підходить.",
            "Helfen + Dativ: Ihnen — Вам.",
            "Ihr — присвійна або інша займенникова форма; тут потрібне Ihnen."
          ],
          "rule": "helfen + Dativ → Ihnen helfen"
        },
        {
          "n": 54,
          "options": [
            "weil",
            "obwohl",
            "wenn"
          ],
          "answer": 2,
          "why": [
            "Weil називає причину, а тут умова: якщо щось потрібно.",
            "Obwohl означає «хоча» й створює невідповідний зміст.",
            "Wenn означає «якщо»: повідомте, якщо щось потрібно."
          ],
          "rule": "Умова: wenn … brauchen."
        }
      ],
      "writingPrompt": "Представся мешканці та запропонуй допомогу двома реченнями.",
      "model": "Guten Morgen, Frau Berg. Ich heiße Sviat und mache hier ein Praktikum. Wobei brauchen Sie Unterstützung?",
      "modelUA": "Доброго ранку, пані Берґ. Мене звати Свят, я проходжу тут практику. У чому Вам потрібна допомога?",
      "talk": "Розіграй перше знайомство. Назви себе, запитай про звертання та потреби."
    },
    {
      "id": "koerperpflege",
      "title": "Догляд і згода",
      "deTitle": "Körperpflege und Einverständnis",
      "goal": "Пояснювати свої дії, запитувати згоду та підтримувати самостійність.",
      "sources": [
        "pflege1:14-15",
        "pflege1:29",
        "fit:16-20"
      ],
      "reading": "Herr König möchte sein Gesicht selbst waschen. Für den Rücken braucht er Unterstützung. Sviat erklärt zuerst die geplante Hilfe und fragt nach dem Einverständnis. Herr König möchte die Tür geschlossen haben. Als ihm das Wasser zu kühl ist, sagt er Bescheid. Sviat nimmt den Wunsch ernst und stimmt das weitere Vorgehen mit ihm ab.",
      "translation": "Пан Кеніґ хоче сам умити обличчя. Для миття спини йому потрібна допомога. Свят спочатку пояснює заплановану допомогу та запитує згоду. Пан Кеніґ хоче, щоб двері були зачинені. Коли вода здається йому надто прохолодною, він про це каже. Свят серйозно ставиться до побажання та узгоджує з ним подальші дії.",
      "keys": [
        "selbst",
        "Rücken",
        "Einverständnis",
        "geschlossen",
        "zu kühl"
      ],
      "phrases": [
        [
          "Darf ich Ihnen beim Waschen helfen?",
          "Можна допомогти Вам помитися?"
        ],
        [
          "Was möchten Sie selbst machen?",
          "Що Ви хотіли б зробити самостійно?"
        ],
        [
          "Ich erkläre Ihnen zuerst, was ich mache.",
          "Спочатку я поясню Вам, що робитиму."
        ],
        [
          "Ist die Wassertemperatur angenehm?",
          "Температура води приємна?"
        ],
        [
          "Soll ich die Tür schließen?",
          "Мені зачинити двері?"
        ],
        [
          "Ist das für Sie in Ordnung?",
          "Вас це влаштовує?"
        ],
        [
          "Möchten Sie eine Pause machen?",
          "Ви хотіли б зробити перерву?"
        ],
        [
          "Sagen Sie bitte, wenn etwas unangenehm ist.",
          "Скажіть, будь ласка, якщо щось неприємно."
        ]
      ],
      "vocab": [
        [
          "die Körperpflege",
          "догляд за тілом",
          "Bei der Körperpflege achte ich auf seine Wünsche.",
          "Під час догляду я зважаю на його побажання."
        ],
        [
          "das Einverständnis",
          "згода",
          "Ich frage nach ihrem Einverständnis.",
          "Я запитую її згоди."
        ],
        [
          "der Waschlappen",
          "мочалка; серветка для миття",
          "Der Waschlappen liegt am Waschbecken.",
          "Серветка для миття лежить біля умивальника."
        ],
        [
          "das Handtuch",
          "рушник",
          "Brauchen Sie ein Handtuch?",
          "Вам потрібен рушник?"
        ],
        [
          "selbstständig",
          "самостійний; самостійно",
          "Er wäscht sein Gesicht selbstständig.",
          "Він самостійно вмиває обличчя."
        ],
        [
          "die Privatsphäre",
          "приватність; особистий простір",
          "Ich respektiere Ihre Privatsphäre.",
          "Я поважаю Вашу приватність."
        ]
      ],
      "dialogue": [
        [
          "Ти",
          "Was möchten Sie heute selbst machen?",
          "Що Ви хотіли б сьогодні зробити самостійно?"
        ],
        [
          "Мешканець",
          "Das Gesicht wasche ich allein.",
          "Обличчя я вмию сам."
        ],
        [
          "Ти",
          "Und wobei wünschen Sie Unterstützung?",
          "А в чому Ви бажаєте допомоги?"
        ],
        [
          "Мешканець",
          "Bitte helfen Sie mir am Rücken.",
          "Допоможіть, будь ласка, помити спину."
        ]
      ],
      "questions": [
        [
          "Was möchte Herr König selbst waschen?",
          [
            "Seinen Rücken.",
            "Sein Gesicht.",
            "Seine Kleidung."
          ],
          1,
          "Gesicht — обличчя; Rücken — спина. Самостійно він хоче вмити обличчя."
        ],
        [
          "Was ist Herrn König wichtig?",
          [
            "Eine geschlossene Tür.",
            "Eine offene Tür.",
            "Ein schneller Besuch."
          ],
          0,
          "Er möchte die Tür geschlossen haben — він хоче зачинені двері."
        ],
        [
          "Wie empfindet er das Wasser?",
          [
            "Zu heiß.",
            "Genau richtig.",
            "Zu kühl."
          ],
          2,
          "Zu kühl означає «надто прохолодне»."
        ]
      ],
      "gapText": "Herr König möchte sein Gesicht {{52}} waschen. Ich helfe ihm {{53}} Waschen des Rückens. Vorher frage ich, {{54}} die Hilfe für ihn in Ordnung ist.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "selbst",
            "selbe",
            "selberes"
          ],
          "answer": 0,
          "why": [
            "Selbst тут прислівниково означає «самостійно».",
            "Selbe потрібне в конструкціях на кшталт dieselbe Person.",
            "Selberes не є правильною формою для цього речення."
          ],
          "rule": "etwas selbst machen"
        },
        {
          "n": 53,
          "options": [
            "beim",
            "zum",
            "vom"
          ],
          "answer": 0,
          "why": [
            "Beim = bei dem: допомагати під час миття.",
            "Zum виражає мету або напрям, тут потрібне beim Waschen.",
            "Vom = von dem, тут не позначає діяльність, під час якої допомагають."
          ],
          "rule": "helfen beim + субстантивований інфінітив"
        },
        {
          "n": 54,
          "options": [
            "weil",
            "ob",
            "deshalb"
          ],
          "answer": 1,
          "why": [
            "Weil означає причину, а тут непряме запитання.",
            "Ob вводить непряме запитання «чи».",
            "Deshalb означає «тому» й не вводить таке запитання."
          ],
          "rule": "fragen, ob … ist"
        }
      ],
      "writingPrompt": "Запиши побажання мешканця без оцінок.",
      "model": "Herr König möchte sein Gesicht selbst waschen. Beim Waschen des Rückens wünscht er Unterstützung. Er bittet darum, die Tür zu schließen.",
      "modelUA": "Пан Кеніґ хоче сам умити обличчя. Для миття спини він бажає допомоги. Він просить зачинити двері.",
      "talk": "Запитай згоду, поясни наступну дію та запропонуй перерву."
    },
    {
      "id": "essen",
      "title": "Їжа та пиття",
      "deTitle": "Essen und Trinken",
      "goal": "Розуміти побажання щодо їжі й точно повідомляти про спостереження.",
      "sources": [
        "pflege1:14-15",
        "pflege1:21",
        "aerzte:29-40"
      ],
      "reading": "Frau Seidel hat heute wenig Appetit. Sie isst ein halbes Brötchen und trinkt eine Tasse Tee. Zum Mittagessen wünscht sie eine vegetarische Mahlzeit. Sviat fragt, ob sie Unterstützung braucht. Später berichtet er der zuständigen Pflegefachkraft, was Frau Seidel gegessen und getrunken hat. Er unterscheidet ihre Aussagen von seinen Beobachtungen.",
      "translation": "Пані Зайдель сьогодні має слабкий апетит. Вона з’їдає половину булочки та випиває чашку чаю. На обід вона бажає вегетаріанську страву. Свят запитує, чи потрібна їй допомога. Пізніше він повідомляє відповідальну Pflegefachkraft, що пані Зайдель з’їла та випила. Він відокремлює її слова від власних спостережень.",
      "keys": [
        "wenig Appetit",
        "halbes Brötchen",
        "eine Tasse Tee",
        "vegetarische",
        "berichtet"
      ],
      "phrases": [
        [
          "Möchten Sie etwas trinken?",
          "Ви хотіли б щось випити?"
        ],
        [
          "Möchten Sie Tee oder Wasser?",
          "Ви хотіли б чай чи воду?"
        ],
        [
          "Haben Sie Appetit?",
          "У Вас є апетит?"
        ],
        [
          "Was möchten Sie zum Frühstück essen?",
          "Що Ви хотіли б з’їсти на сніданок?"
        ],
        [
          "Brauchen Sie Unterstützung beim Essen?",
          "Вам потрібна допомога під час їжі?"
        ],
        [
          "Gibt es etwas, das Sie nicht vertragen?",
          "Чи є щось, чого Ви не переносите?"
        ],
        [
          "Ich kläre das mit der Pflegefachkraft.",
          "Я уточню це у Pflegefachkraft."
        ],
        [
          "Sie hat heute wenig gegessen.",
          "Вона сьогодні мало їла."
        ]
      ],
      "vocab": [
        [
          "der Appetit",
          "апетит",
          "Sie hat wenig Appetit.",
          "У неї слабкий апетит."
        ],
        [
          "die Mahlzeit",
          "прийом їжі; страва",
          "Die Mahlzeit ist vegetarisch.",
          "Страва вегетаріанська."
        ],
        [
          "die Flüssigkeit",
          "рідина",
          "Die Trinkmenge wird dokumentiert.",
          "Кількість випитої рідини документують."
        ],
        [
          "vertragen",
          "переносити; засвоювати",
          "Sie verträgt keine Milch.",
          "Вона не переносить молоко."
        ],
        [
          "schlucken",
          "ковтати",
          "Haben Sie Beschwerden beim Schlucken?",
          "У Вас є труднощі під час ковтання?"
        ],
        [
          "die Trinkmenge",
          "кількість випитої рідини",
          "Ich notiere die vereinbarte Trinkmenge.",
          "Я записую узгоджену кількість випитого."
        ]
      ],
      "dialogue": [
        [
          "Ти",
          "Was möchten Sie zum Frühstück trinken?",
          "Що Ви хотіли б випити на сніданок?"
        ],
        [
          "Мешканка",
          "Eine Tasse Tee, bitte.",
          "Чашку чаю, будь ласка."
        ],
        [
          "Ти",
          "Und möchten Sie etwas essen?",
          "А Ви хотіли б щось з’їсти?"
        ],
        [
          "Мешканка",
          "Nur ein halbes Brötchen. Ich habe wenig Appetit.",
          "Лише половину булочки. У мене слабкий апетит."
        ]
      ],
      "questions": [
        [
          "Was hat Frau Seidel getrunken?",
          [
            "Ein Glas Milch.",
            "Zwei Gläser Wasser.",
            "Eine Tasse Tee."
          ],
          2,
          "У тексті чітко вказано eine Tasse Tee; не додавай кількостей, яких немає."
        ],
        [
          "Was wünscht sie zum Mittagessen?",
          [
            "Eine vegetarische Mahlzeit.",
            "Gar nichts.",
            "Nur ein Brötchen."
          ],
          0,
          "На обід вона бажає vegetarische Mahlzeit. Булочка стосується попереднього прийому їжі."
        ],
        [
          "Was gibt Sviat weiter?",
          [
            "Eine eigene Diagnose.",
            "Ihre Nahrungsaufnahme und ihre Aussagen.",
            "Eine erfundene Trinkmenge."
          ],
          1,
          "Передають спостереження й слова мешканки, без вигаданих показників."
        ]
      ],
      "gapText": "Frau Seidel hat wenig Appetit, {{52}} isst sie nur ein halbes Brötchen. Sie möchte eine Mahlzeit {{53}} Fleisch. Ich habe ihre Wünsche {{54}}.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "weil",
            "deshalb",
            "obwohl"
          ],
          "answer": 1,
          "why": [
            "Після weil у підрядному реченні дієслово було б наприкінці; тут уже isst sie.",
            "Deshalb + дієслово: deshalb isst sie — тому вона їсть.",
            "Obwohl означає «хоча» та потребує іншої побудови речення."
          ],
          "rule": "deshalb + дієслово + підмет"
        },
        {
          "n": 53,
          "options": [
            "ohne",
            "bei",
            "seit"
          ],
          "answer": 0,
          "why": [
            "Ohne Fleisch — без м’яса, відповідає vegetarianisch.",
            "Bei означає «біля/під час», не «без».",
            "Seit означає «відколи» й не підходить до складу страви."
          ],
          "rule": "ohne + Akkusativ"
        },
        {
          "n": 54,
          "options": [
            "dokumentieren",
            "dokumentierte",
            "dokumentiert"
          ],
          "answer": 2,
          "why": [
            "Після habe для Perfekt потрібен Partizip II.",
            "Dokumentierte — Präteritum; разом із habe тут не вживається.",
            "Habe dokumentiert — правильний Perfekt."
          ],
          "rule": "haben + Partizip II"
        }
      ],
      "writingPrompt": "Опиши лише відомі факти про сніданок.",
      "model": "Frau Seidel aß ein halbes Brötchen und trank eine Tasse Tee. Sie berichtete über wenig Appetit. Die zuständige Pflegefachkraft wurde informiert.",
      "modelUA": "Пані Зайдель з’їла половину булочки та випила чашку чаю. Вона повідомила про слабкий апетит. Відповідальну Pflegefachkraft поінформовано.",
      "talk": "Постав три запитання про побажання щодо їжі та повідом колегу про відповідь."
    },
    {
      "id": "mobilitaet",
      "title": "Пересування й допомога",
      "deTitle": "Mobilität und Unterstützung",
      "goal": "Уточнювати потребу в супроводі й просити допомогу перед незнайомою дією.",
      "sources": [
        "pflege1:14-15",
        "pflege1:22",
        "pflege1:26"
      ],
      "reading": "Herr Braun möchte in den Aufenthaltsraum gehen. Sein Rollator steht neben dem Bett. Im Pflegeplan ist festgehalten, welche Unterstützung er beim Gehen benötigt. Sviat kennt diese Vereinbarung noch nicht und fragt die Pflegefachkraft. Bevor er eine ihm unbekannte Unterstützung übernimmt, lässt er sich das Vorgehen zeigen. Herr Braun sagt, dass er eine kurze Pause braucht.",
      "translation": "Пан Браун хоче піти до спільної кімнати. Його ролатор стоїть біля ліжка. У плані догляду зазначено, яка допомога потрібна йому під час ходьби. Свят ще не знає цієї домовленості та запитує Pflegefachkraft. Перш ніж братися за незнайому допомогу, він просить показати порядок дій. Пан Браун каже, що йому потрібна коротка перерва.",
      "keys": [
        "Rollator",
        "Pflegeplan",
        "fragt",
        "zeigen",
        "Pause"
      ],
      "phrases": [
        [
          "Möchten Sie in den Aufenthaltsraum gehen?",
          "Ви хотіли б піти до спільної кімнати?"
        ],
        [
          "Benutzen Sie einen Rollator?",
          "Ви користуєтеся ролатором?"
        ],
        [
          "Welche Unterstützung brauchen Sie beim Gehen?",
          "Яка допомога Вам потрібна під час ходьби?"
        ],
        [
          "Brauchen Sie eine Pause?",
          "Вам потрібна перерва?"
        ],
        [
          "Ich hole Unterstützung.",
          "Я покличу когось допомогти."
        ],
        [
          "Kannst du mir das Vorgehen zeigen?",
          "Можеш показати мені порядок дій?"
        ],
        [
          "Was ist im Pflegeplan vereinbart?",
          "Що узгоджено в плані догляду?"
        ],
        [
          "Ich übernehme das noch nicht allein.",
          "Я ще не виконую це самостійно."
        ]
      ],
      "vocab": [
        [
          "der Rollator",
          "ролатор; ходунки на колесах",
          "Sein Rollator steht neben dem Bett.",
          "Його ролатор стоїть біля ліжка."
        ],
        [
          "das Hilfsmittel",
          "допоміжний засіб",
          "Welches Hilfsmittel benutzt er?",
          "Яким допоміжним засобом він користується?"
        ],
        [
          "aufstehen",
          "вставати",
          "Er möchte aufstehen.",
          "Він хоче встати."
        ],
        [
          "sich hinsetzen",
          "сідати",
          "Sie möchte sich hinsetzen.",
          "Вона хоче сісти."
        ],
        [
          "begleiten",
          "супроводжувати",
          "Soll ich Sie begleiten?",
          "Вас провести?"
        ],
        [
          "der Pflegeplan",
          "план догляду",
          "Ich lese den Pflegeplan.",
          "Я читаю план догляду."
        ]
      ],
      "dialogue": [
        [
          "Мешканець",
          "Ich möchte in den Aufenthaltsraum gehen.",
          "Я хочу піти до спільної кімнати."
        ],
        [
          "Ти",
          "Welche Unterstützung ist beim Gehen vereinbart? Ich frage kurz nach.",
          "Яку допомогу під час ходьби узгоджено? Я зараз уточню."
        ],
        [
          "Колега",
          "Komm, ich zeige dir das Vorgehen.",
          "Ходімо, я покажу тобі порядок дій."
        ],
        [
          "Ти",
          "Danke. Ich möchte es richtig lernen.",
          "Дякую. Я хочу навчитися робити це правильно."
        ]
      ],
      "questions": [
        [
          "Wohin möchte Herr Braun?",
          [
            "In den Aufenthaltsraum.",
            "Zum Bahnhof.",
            "Nach Hause."
          ],
          0,
          "Зазначено Aufenthaltsraum — спільну кімнату."
        ],
        [
          "Wo steht der Rollator?",
          [
            "Vor der Haustür.",
            "Neben dem Bett.",
            "Im Garten."
          ],
          1,
          "Neben dem Bett — біля ліжка."
        ],
        [
          "Warum fragt Sviat nach?",
          [
            "Weil er den Plan ändern möchte.",
            "Weil er keine Pause erlaubt.",
            "Weil er die vereinbarte Unterstützung noch nicht kennt."
          ],
          2,
          "Він уточнює невідомий йому порядок допомоги, а не вигадує його."
        ]
      ],
      "gapText": "Herr Braun möchte {{52}} Aufenthaltsraum gehen. Sein Rollator steht neben {{53}} Bett. Ich frage nach, {{54}} ich das Vorgehen noch nicht kenne.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "im",
            "in den",
            "in dem"
          ],
          "answer": 1,
          "why": [
            "Im означає місце «у кімнаті», а тут напрям: куди йти.",
            "Напрям після in → Akkusativ: in den Aufenthaltsraum.",
            "In dem — Dativ для місця, тут потрібен Akkusativ."
          ],
          "rule": "Wohin? in + Akkusativ"
        },
        {
          "n": 53,
          "options": [
            "dem",
            "das",
            "den"
          ],
          "answer": 0,
          "why": [
            "Wo? Neben + Dativ: neben dem Bett.",
            "Das Bett — Akkusativ/називний, але тут місце без переміщення предмета.",
            "Den не відповідає Dativ середнього роду."
          ],
          "rule": "Wo? neben + Dativ"
        },
        {
          "n": 54,
          "options": [
            "deshalb",
            "trotzdem",
            "weil"
          ],
          "answer": 2,
          "why": [
            "Після deshalb потрібне дієслово одразу: deshalb frage ich.",
            "Trotzdem означає «попри це» й не вводить підрядну причину.",
            "Weil пояснює причину; kenne стоїть наприкінці."
          ],
          "rule": "weil + підмет … дієслово"
        }
      ],
      "writingPrompt": "Попроси наставника показати незнайому допомогу під час пересування.",
      "model": "Ich kenne die vereinbarte Unterstützung noch nicht. Kannst du mir bitte zeigen, wie ich Herrn Braun begleiten soll?",
      "modelUA": "Я ще не знаю узгодженого способу допомоги. Можеш, будь ласка, показати, як мені супроводжувати пана Брауна?",
      "talk": "Відмовся від самостійного виконання незнайомої дії та попроси наставника показати."
    },
    {
      "id": "toilette",
      "title": "Туалет і приватність",
      "deTitle": "Toilettengang und Intimsphäre",
      "goal": "Розуміти делікатні прохання та говорити шанобливо.",
      "sources": [
        "pflege1:14-15",
        "pflege1:29",
        "fit:16-20"
      ],
      "reading": "Frau Neumann sagt leise: „Ich muss mal.“ Sviat versteht, dass sie zur Toilette möchte. Er fragt diskret, welche Unterstützung sie braucht. Frau Neumann wünscht eine geschlossene Tür und möchte möglichst viel selbst machen. Sviat achtet auf ihre Privatsphäre. Fragen zum vereinbarten Hilfebedarf klärt er mit der zuständigen Kollegin.",
      "translation": "Пані Нойман тихо каже: «Мені треба». Свят розуміє, що вона хоче в туалет. Він делікатно запитує, яка допомога їй потрібна. Пані Нойман бажає зачинених дверей і хоче якомога більше зробити сама. Свят поважає її приватність. Питання про узгоджену допомогу він уточнює у відповідальної колеги.",
      "keys": [
        "Ich muss mal",
        "diskret",
        "geschlossene Tür",
        "selbst",
        "Privatsphäre"
      ],
      "phrases": [
        [
          "Möchten Sie zur Toilette?",
          "Ви хотіли б у туалет?"
        ],
        [
          "Welche Unterstützung wünschen Sie?",
          "Якої допомоги Ви бажаєте?"
        ],
        [
          "Soll ich Sie zur Toilette begleiten?",
          "Вас провести до туалету?"
        ],
        [
          "Ich schließe die Tür.",
          "Я зачиню двері."
        ],
        [
          "Sagen Sie bitte Bescheid, wenn Sie Hilfe brauchen.",
          "Дайте знати, будь ласка, якщо потрібна допомога."
        ],
        [
          "Ich respektiere Ihre Privatsphäre.",
          "Я поважаю Вашу приватність."
        ],
        [
          "Ich muss mal.",
          "Мені потрібно в туалет — розмовно."
        ],
        [
          "Ich kläre den Hilfebedarf mit meiner Kollegin.",
          "Я уточню потрібну допомогу у своєї колеги."
        ]
      ],
      "vocab": [
        [
          "die Toilette",
          "туалет",
          "Sie möchte zur Toilette.",
          "Вона хоче в туалет."
        ],
        [
          "der Toilettengang",
          "відвідування туалету",
          "Beim Toilettengang braucht sie Unterstützung.",
          "Під час відвідування туалету їй потрібна допомога."
        ],
        [
          "die Ausscheidung",
          "виділення; фізіологічні випорожнення",
          "Ausscheidung ist ein Thema im Pflegebericht.",
          "Випорожнення — одна з тем звіту про догляд."
        ],
        [
          "der Harndrang",
          "позив до сечовипускання",
          "Sie berichtet über häufigen Harndrang.",
          "Вона повідомляє про часті позиви до сечовипускання."
        ],
        [
          "der Stuhlgang",
          "випорожнення кишечника",
          "Er hat Fragen zum Stuhlgang.",
          "У нього є запитання щодо випорожнення кишечника."
        ],
        [
          "diskret",
          "делікатно; непомітно",
          "Ich frage diskret nach.",
          "Я делікатно уточнюю."
        ]
      ],
      "dialogue": [
        [
          "Мешканка",
          "Entschuldigung, ich muss mal.",
          "Перепрошую, мені потрібно в туалет."
        ],
        [
          "Ти",
          "Möchten Sie zur Toilette?",
          "Ви хотіли б у туалет?"
        ],
        [
          "Мешканка",
          "Ja. Bitte machen Sie die Tür zu.",
          "Так. Зачиніть, будь ласка, двері."
        ],
        [
          "Ти",
          "Natürlich. Welche Unterstützung brauchen Sie?",
          "Звісно. Яка допомога Вам потрібна?"
        ]
      ],
      "questions": [
        [
          "Was bedeutet hier „Ich muss mal“?",
          [
            "Ich brauche neue Kleidung.",
            "Ich möchte zur Toilette.",
            "Ich möchte telefonieren."
          ],
          1,
          "Це поширений розмовний вислів про потребу піти в туалет."
        ],
        [
          "Was wünscht Frau Neumann?",
          [
            "Viele Besucher im Zimmer.",
            "Eine ständig offene Tür.",
            "Eine geschlossene Tür."
          ],
          2,
          "Вона прямо просить зачинені двері."
        ],
        [
          "Wie fragt Sviat nach?",
          [
            "Diskret und respektvoll.",
            "Laut vor allen Bewohnern.",
            "Ohne ihre Antwort abzuwarten."
          ],
          0,
          "Ключове слово diskret: делікатно, з повагою до приватності."
        ]
      ],
      "gapText": "Frau Neumann möchte {{52}} Toilette. Sie möchte vieles selbst machen, {{53}} braucht sie etwas Unterstützung. Ich frage sie, {{54}} Hilfe sie wünscht.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "zur",
            "zum",
            "bei der"
          ],
          "answer": 0,
          "why": [
            "Zur = zu der, бо die Toilette — жіночий рід.",
            "Zum = zu dem, тут неправильний рід.",
            "Bei der означає місце «біля/при», а не напрям до туалету."
          ],
          "rule": "zu der Toilette → zur Toilette"
        },
        {
          "n": 53,
          "options": [
            "weil",
            "trotzdem",
            "ob"
          ],
          "answer": 1,
          "why": [
            "Weil потребує іншого порядку слів і не передає контраст.",
            "Trotzdem braucht sie … — попри це, допомога потрібна.",
            "Ob вводить непряме запитання, тут його немає."
          ],
          "rule": "trotzdem + дієслово + підмет"
        },
        {
          "n": 54,
          "options": [
            "welcher",
            "welches",
            "welche"
          ],
          "answer": 2,
          "why": [
            "Welcher тут не відповідає Akkusativ жіночого роду.",
            "Welches — середній рід; Hilfe жіночого роду.",
            "Welche Hilfe — правильна форма для die Hilfe."
          ],
          "rule": "welche Hilfe"
        }
      ],
      "writingPrompt": "Сформулюй делікатну пропозицію допомоги.",
      "model": "Möchten Sie zur Toilette? Welche Unterstützung wünschen Sie? Ich achte darauf, dass Ihre Privatsphäre gewahrt bleibt.",
      "modelUA": "Ви хотіли б у туалет? Якої допомоги Ви бажаєте? Я подбаю про Вашу приватність.",
      "talk": "Зрозумій непряме прохання та уточни потрібну допомогу."
    },
    {
      "id": "beschwerden",
      "title": "Біль і самопочуття",
      "deTitle": "Beschwerden verstehen und weitergeben",
      "goal": "Уточнювати скарги та передавати слова мешканця без власного діагнозу.",
      "sources": [
        "aerzte:29-40",
        "fsp:44-51",
        "innere:4-10"
      ],
      "reading": "Herr Weber sagt, dass ihm seit dem Aufstehen schwindelig ist. Er beschreibt außerdem Schmerzen im linken Knie. Sviat fragt, wo genau es weh tut und seit wann die Beschwerden bestehen. Er gibt die Aussagen zeitnah an die zuständige Pflegefachkraft weiter. Er sagt nicht, welche Krankheit Herr Weber angeblich hat. Bei plötzlich auftretenden schweren Beschwerden holt er sofort Hilfe nach dem Notfallablauf der Einrichtung.",
      "translation": "Пан Вебер каже, що після підйому в нього паморочиться голова. Також він описує біль у лівому коліні. Свят запитує, де саме болить і відколи є скарги. Він своєчасно передає слова відповідальній Pflegefachkraft. Він не стверджує, нібито знає діагноз пана Вебера. За раптових тяжких скарг він одразу кличе допомогу відповідно до порядку дій закладу.",
      "keys": [
        "seit dem Aufstehen",
        "linken Knie",
        "wo genau",
        "seit wann",
        "Pflegefachkraft"
      ],
      "phrases": [
        [
          "Haben Sie Schmerzen?",
          "У Вас щось болить?"
        ],
        [
          "Wo genau tut es weh?",
          "Де саме болить?"
        ],
        [
          "Seit wann haben Sie die Beschwerden?",
          "Відколи у Вас ці скарги?"
        ],
        [
          "Ist Ihnen schwindelig?",
          "У Вас паморочиться голова?"
        ],
        [
          "Ist Ihnen übel?",
          "Вас нудить?"
        ],
        [
          "Bekommen Sie gut Luft?",
          "Вам легко дихати?"
        ],
        [
          "Ich informiere die zuständige Pflegefachkraft.",
          "Я повідомлю відповідальну Pflegefachkraft."
        ],
        [
          "Bitte komm sofort. Ich brauche Hilfe.",
          "Будь ласка, підійди негайно. Мені потрібна допомога."
        ]
      ],
      "vocab": [
        [
          "der Schmerz",
          "біль",
          "Er beschreibt Schmerzen im Knie.",
          "Він описує біль у коліні."
        ],
        [
          "der Schwindel",
          "запаморочення",
          "Der Schwindel besteht seit dem Aufstehen.",
          "Запаморочення є після підйому."
        ],
        [
          "die Übelkeit",
          "нудота",
          "Sie berichtet über Übelkeit.",
          "Вона повідомляє про нудоту."
        ],
        [
          "die Atemnot",
          "задишка; утруднене дихання",
          "Er berichtet über Atemnot.",
          "Він повідомляє про утруднене дихання."
        ],
        [
          "die Beschwerde",
          "скарга; неприємний симптом",
          "Seit wann bestehen die Beschwerden?",
          "Відколи є ці скарги?"
        ],
        [
          "weitergeben",
          "передавати інформацію",
          "Ich gebe die Beobachtung weiter.",
          "Я передаю спостереження."
        ]
      ],
      "dialogue": [
        [
          "Мешканець",
          "Mir ist seit dem Aufstehen schwindelig.",
          "Після підйому в мене паморочиться голова."
        ],
        [
          "Ти",
          "Haben Sie außerdem Schmerzen?",
          "У Вас також щось болить?"
        ],
        [
          "Мешканець",
          "Ja, mein linkes Knie tut weh.",
          "Так, болить ліве коліно."
        ],
        [
          "Ти",
          "Danke, dass Sie es sagen. Ich informiere sofort die Pflegefachkraft.",
          "Дякую, що сказали. Я одразу повідомлю Pflegefachkraft."
        ]
      ],
      "questions": [
        [
          "Seit wann ist Herrn Weber schwindelig?",
          [
            "Seit einer Woche.",
            "Seit dem Mittagessen.",
            "Seit dem Aufstehen."
          ],
          2,
          "У тексті є конкретна часова вказівка: seit dem Aufstehen."
        ],
        [
          "Wo beschreibt er Schmerzen?",
          [
            "Im linken Knie.",
            "Im rechten Arm.",
            "Im ganzen Rücken."
          ],
          0,
          "Links — ліворуч, Knie — коліно. Не плутай з правим боком."
        ],
        [
          "Was gibt Sviat weiter?",
          [
            "Eine selbst gestellte Diagnose.",
            "Die beschriebenen Beschwerden.",
            "Eine erfundene Messung."
          ],
          1,
          "Він передає скарги та спостереження, не вигадує діагноз або вимірювання."
        ]
      ],
      "gapText": "Herr Weber sagt, {{52}} ihm schwindelig ist. Er hat Schmerzen {{53}} linken Knie. Ich habe die Pflegefachkraft {{54}}.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "dass",
            "deshalb",
            "denn"
          ],
          "answer": 0,
          "why": [
            "Dass вводить зміст сказаного; ist стоїть у кінці.",
            "Deshalb означає «тому» й потребує головного речення.",
            "Denn з’єднує головні речення, тут потрібна передача змісту слів."
          ],
          "rule": "sagen, dass … ist"
        },
        {
          "n": 53,
          "options": [
            "ins",
            "im",
            "in den"
          ],
          "answer": 1,
          "why": [
            "Ins виражає напрям, а тут місце болю.",
            "Im = in dem: біль у коліні, місце → Dativ.",
            "In den не підходить до середнього роду Knie у Dativ."
          ],
          "rule": "Wo? im linken Knie"
        },
        {
          "n": 54,
          "options": [
            "informieren",
            "informierte",
            "informiert"
          ],
          "answer": 2,
          "why": [
            "Для Perfekt після habe потрібне Partizip II.",
            "Informierte — Präteritum, не поєднується тут з habe.",
            "Habe informiert — правильний Perfekt."
          ],
          "rule": "habe informiert"
        }
      ],
      "writingPrompt": "Передай колезі скарги, назвавши джерело інформації.",
      "model": "Herr Weber berichtet über Schwindel seit dem Aufstehen und Schmerzen im linken Knie. Bitte komm zu ihm. Ich habe keine Messwerte erhoben.",
      "modelUA": "Пан Вебер повідомляє про запаморочення після підйому та біль у лівому коліні. Будь ласка, підійди до нього. Я не проводив вимірювань.",
      "talk": "Уточни місце й час появи скарг. Потім стисло повідом Pflegefachkraft."
    },
    {
      "id": "demenz",
      "title": "Деменція та емоції",
      "deTitle": "Demenzsensibel kommunizieren",
      "goal": "Говорити коротко, дати час на відповідь і помічати почуття людини.",
      "sources": [
        "aerzte:169-176",
        "official-demenz"
      ],
      "reading": "Frau Winter fragt wiederholt, wann sie nach Hause gehen kann. Sviat spricht ruhig und stellt sich erneut vor. Er widerspricht nicht schroff, sondern nimmt ihren Wunsch ernst. Er stellt nur eine kurze Frage auf einmal und wartet auf ihre Antwort. Bei der Getränkeauswahl bietet er Tee oder Wasser an. Er beobachtet ihre Reaktion und holt bei Unsicherheit Unterstützung.",
      "translation": "Пані Вінтер неодноразово запитує, коли вона зможе піти додому. Свят говорить спокійно та знову представляється. Він не заперечує різко, а серйозно ставиться до її бажання. Він ставить лише одне коротке запитання за раз і чекає відповіді. Для пиття він пропонує чай або воду. Він спостерігає за її реакцією та за невпевненості просить допомоги.",
      "keys": [
        "ruhig",
        "erneut",
        "eine kurze Frage",
        "wartet",
        "Tee oder Wasser"
      ],
      "phrases": [
        [
          "Ich bin Sviat. Ich bin jetzt bei Ihnen.",
          "Я Свят. Я зараз із Вами."
        ],
        [
          "Wir haben Zeit.",
          "У нас є час."
        ],
        [
          "Sie möchten nach Hause.",
          "Ви хочете додому."
        ],
        [
          "Sie wirken besorgt.",
          "Ви виглядаєте стурбованою / стурбованим."
        ],
        [
          "Möchten Sie hier sitzen?",
          "Ви хотіли б посидіти тут?"
        ],
        [
          "Möchten Sie Tee oder Wasser?",
          "Ви хотіли б чай чи воду?"
        ],
        [
          "Ich warte auf Ihre Antwort.",
          "Я почекаю на Вашу відповідь."
        ],
        [
          "Ich hole meine Kollegin dazu.",
          "Я покличу свою колегу."
        ]
      ],
      "vocab": [
        [
          "die Demenz",
          "деменція",
          "Wir sprechen mit Menschen mit Demenz.",
          "Ми розмовляємо з людьми з деменцією."
        ],
        [
          "ruhig",
          "спокійний; спокійно",
          "Ich spreche ruhig und deutlich.",
          "Я говорю спокійно й чітко."
        ],
        [
          "besorgt",
          "стурбований",
          "Sie wirkt besorgt.",
          "Вона виглядає стурбованою."
        ],
        [
          "zuhören",
          "слухати уважно",
          "Ich höre Ihnen zu.",
          "Я Вас уважно слухаю."
        ],
        [
          "abwarten",
          "дочекатися",
          "Ich warte die Antwort ab.",
          "Я чекаю на відповідь."
        ],
        [
          "die Würde",
          "гідність",
          "Die Würde der Person ist wichtig.",
          "Гідність людини важлива."
        ]
      ],
      "dialogue": [
        [
          "Мешканка",
          "Ich möchte nach Hause.",
          "Я хочу додому."
        ],
        [
          "Ти",
          "Sie möchten nach Hause. Ich bin jetzt bei Ihnen.",
          "Ви хочете додому. Я зараз із Вами."
        ],
        [
          "Мешканка",
          "Ich bin so unruhig.",
          "Мені так неспокійно."
        ],
        [
          "Ти",
          "Möchten Sie hier mit mir sitzen?",
          "Ви хотіли б посидіти тут зі мною?"
        ]
      ],
      "questions": [
        [
          "Wie spricht Sviat?",
          [
            "Ruhig und mit kurzen Fragen.",
            "Sehr schnell und laut.",
            "Mit vielen Fachbegriffen."
          ],
          0,
          "Ruhig та короткі запитання відповідають описаній ситуації."
        ],
        [
          "Wie viele Getränke bietet er zur Auswahl an?",
          [
            "Fünf.",
            "Zwei.",
            "Gar keine."
          ],
          1,
          "Він пропонує два конкретні варіанти: Tee oder Wasser."
        ],
        [
          "Was tut er nach einer Frage?",
          [
            "Er stellt sofort fünf weitere Fragen.",
            "Er korrigiert jede Aussage.",
            "Er wartet auf die Antwort."
          ],
          2,
          "Він дає людині час і чекає на відповідь."
        ]
      ],
      "gapText": "Ich spreche ruhig {{52}} deutlich. Nach einer Frage warte ich {{53}} die Antwort. Frau Winter wirkt besorgt, {{54}} nehme ich mir Zeit.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "und",
            "weil",
            "obwohl"
          ],
          "answer": 0,
          "why": [
            "Und поєднує дві характеристики: спокійно й чітко.",
            "Weil потребує речення з дієсловом і означає причину.",
            "Obwohl потребує підрядного речення та іншого змісту."
          ],
          "rule": "ruhig und deutlich"
        },
        {
          "n": 53,
          "options": [
            "für",
            "auf",
            "mit"
          ],
          "answer": 1,
          "why": [
            "Warten für не є потрібним тут сталим сполученням.",
            "Warten auf + Akkusativ: чекати на відповідь.",
            "Mit означає «з», але тут потрібне warten auf."
          ],
          "rule": "warten auf + Akkusativ"
        },
        {
          "n": 54,
          "options": [
            "weil",
            "ob",
            "deshalb"
          ],
          "answer": 2,
          "why": [
            "Weil не підходить до порядку nehme ich.",
            "Ob означає «чи» й не передає наслідок.",
            "Deshalb nehme ich mir Zeit — тому я приділяю час."
          ],
          "rule": "deshalb + дієслово"
        }
      ],
      "writingPrompt": "Опиши спостереження без ярлика «важка мешканка».",
      "model": "Frau Winter fragte wiederholt nach der Heimkehr. Ich sprach ruhig mit ihr und wartete ihre Antworten ab. Bei Unsicherheit zog ich eine Kollegin hinzu.",
      "modelUA": "Пані Вінтер неодноразово запитувала про повернення додому. Я говорив із нею спокійно й чекав на відповіді. За невпевненості звернувся до колеги.",
      "talk": "Потренуй коротку спокійну розмову без суперечки й без неперевірених обіцянок."
    },
    {
      "id": "biografie",
      "title": "Біографія й розмова",
      "deTitle": "Biografie und Alltag",
      "goal": "Підтримувати розмову та дізнаватися про важливі звички людини.",
      "sources": [
        "pflege1:20",
        "pflege1:23",
        "fsp:50-51"
      ],
      "reading": "Frau Hoffmann hat früher in einer Bäckerei gearbeitet. Sie hört gern alte Lieder und sitzt nachmittags gern am Fenster. Über ihre Arbeit erzählt sie ausführlich, über ihre Familie möchte sie heute nicht sprechen. Sviat respektiert das. Er fragt nach ihren Gewohnheiten und notiert nur Informationen, die für die vereinbarte Betreuung wichtig sind. Er verspricht keinen Besuch ihrer Angehörigen.",
      "translation": "Пані Гофман раніше працювала в пекарні. Вона любить слухати старі пісні та після обіду сидіти біля вікна. Про роботу вона розповідає докладно, а про родину сьогодні говорити не хоче. Свят це поважає. Він запитує про її звички та записує лише інформацію, важливу для узгодженої підтримки. Він не обіцяє візиту її рідних.",
      "keys": [
        "früher",
        "Bäckerei",
        "alte Lieder",
        "nicht sprechen",
        "respektiert"
      ],
      "phrases": [
        [
          "Was haben Sie früher beruflich gemacht?",
          "Ким Ви раніше працювали?"
        ],
        [
          "Welche Musik hören Sie gern?",
          "Яку музику Ви любите слухати?"
        ],
        [
          "Was machen Sie gern am Nachmittag?",
          "Що Ви любите робити після обіду?"
        ],
        [
          "Was ist Ihnen im Alltag wichtig?",
          "Що для Вас важливо в повсякденному житті?"
        ],
        [
          "Möchten Sie darüber erzählen?",
          "Ви хотіли б про це розповісти?"
        ],
        [
          "Wir müssen darüber nicht sprechen.",
          "Ми не мусимо про це говорити."
        ],
        [
          "Welche Gewohnheiten möchten Sie beibehalten?",
          "Які звички Ви хотіли б зберегти?"
        ],
        [
          "Danke, dass Sie mir davon erzählt haben.",
          "Дякую, що розповіли мені про це."
        ]
      ],
      "vocab": [
        [
          "die Biografie",
          "біографія",
          "Ihre Biografie hilft uns, sie besser kennenzulernen.",
          "Її біографія допомагає нам краще її пізнати."
        ],
        [
          "die Gewohnheit",
          "звичка",
          "Welche Gewohnheiten sind Ihnen wichtig?",
          "Які звички важливі для Вас?"
        ],
        [
          "die Erinnerung",
          "спогад",
          "Sie erzählt von einer schönen Erinnerung.",
          "Вона розповідає про приємний спогад."
        ],
        [
          "früher",
          "раніше; колись",
          "Früher arbeitete sie in einer Bäckerei.",
          "Раніше вона працювала в пекарні."
        ],
        [
          "die Angehörigen",
          "рідні; близькі",
          "Ihre Angehörigen besuchen sie.",
          "Її рідні її відвідують."
        ],
        [
          "beibehalten",
          "зберігати; дотримуватися надалі",
          "Sie möchte ihre Gewohnheiten beibehalten.",
          "Вона хоче зберегти свої звички."
        ]
      ],
      "dialogue": [
        [
          "Ти",
          "Welche Musik hören Sie gern?",
          "Яку музику Ви любите слухати?"
        ],
        [
          "Мешканка",
          "Alte Lieder. Die kenne ich noch von früher.",
          "Старі пісні. Я пам’ятаю їх ще з давніх часів."
        ],
        [
          "Ти",
          "Möchten Sie von früher erzählen?",
          "Ви хотіли б розповісти про минуле?"
        ],
        [
          "Мешканка",
          "Ja, über meine Arbeit in der Bäckerei.",
          "Так, про мою роботу в пекарні."
        ]
      ],
      "questions": [
        [
          "Wo hat Frau Hoffmann gearbeitet?",
          [
            "In einer Schule.",
            "In einer Bäckerei.",
            "In einer Bank."
          ],
          1,
          "Bäckerei — пекарня."
        ],
        [
          "Worüber möchte sie heute nicht sprechen?",
          [
            "Über Musik.",
            "Über ihre Arbeit.",
            "Über ihre Familie."
          ],
          2,
          "Вона сьогодні не бажає говорити про родину; її бажання поважають."
        ],
        [
          "Was ist eine passende Reaktion?",
          [
            "Ihr Thema wechseln lassen.",
            "Trotzdem weiter nach der Familie fragen.",
            "Einen Besuch versprechen."
          ],
          0,
          "Важливо прийняти відмову від теми, не наполягати й не давати неперевірених обіцянок."
        ]
      ],
      "gapText": "Frau Hoffmann hat früher in einer Bäckerei {{52}}. Sie erzählt gern {{53}} ihrer Arbeit. Heute möchte sie nicht über ihre Familie sprechen, {{54}} respektiere ich.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "gearbeitet",
            "arbeiten",
            "arbeitete"
          ],
          "answer": 0,
          "why": [
            "Hat gearbeitet — правильна форма Perfekt.",
            "Інфінітив arbeiten тут не утворює Perfekt.",
            "Arbeitete — Präteritum, його не поєднують із hat."
          ],
          "rule": "hat gearbeitet"
        },
        {
          "n": 53,
          "options": [
            "für",
            "von",
            "bei"
          ],
          "answer": 1,
          "why": [
            "Erzählen für тут не виражає тему розповіді.",
            "Erzählen von + Dativ — розповідати про щось.",
            "Bei означає «при/біля», не тему розповіді."
          ],
          "rule": "erzählen von + Dativ"
        },
        {
          "n": 54,
          "options": [
            "dem",
            "den",
            "das"
          ],
          "answer": 2,
          "why": [
            "Respektieren потребує Akkusativ, а dem — Dativ.",
            "Den тут не замінює весь попередній зміст.",
            "Das може позначати всю попередню думку: це я поважаю."
          ],
          "rule": "Das respektiere ich."
        }
      ],
      "writingPrompt": "Запиши дві звички мешканки без вигаданих деталей.",
      "model": "Frau Hoffmann hört gern alte Lieder und sitzt nachmittags gern am Fenster. Über ihre Familie möchte sie heute nicht sprechen.",
      "modelUA": "Пані Гофман любить слухати старі пісні та після обіду сидіти біля вікна. Про родину вона сьогодні говорити не бажає.",
      "talk": "Запитай про роботу в минулому, улюблене заняття та важливу звичку."
    },
    {
      "id": "team",
      "title": "Колеги та наставник",
      "deTitle": "Team und Praxisanleitung",
      "goal": "Уточнювати доручення, перепитувати та просити зворотний зв’язок.",
      "sources": [
        "pflege1:26",
        "pflege1:28",
        "fit:118"
      ],
      "reading": "Zu Beginn des Frühdienstes fragt Sviat, wer seine Ansprechperson ist. Seine Praxisanleiterin erklärt ihm eine Aufgabe. Sviat fasst die Anweisung mit eigenen Worten zusammen. Einen Fachbegriff versteht er noch nicht und fragt nach. Die Aufgabe hat er bisher nur beobachtet. Deshalb bittet er um Anleitung und Rückmeldung, bevor er sie selbst übernimmt.",
      "translation": "На початку ранкової зміни Свят запитує, хто його контактна особа. Наставниця пояснює йому завдання. Свят переказує вказівку своїми словами. Один професійний термін він ще не розуміє та перепитує. Поки що він лише спостерігав виконання цього завдання. Тому він просить інструктаж і зворотний зв’язок, перш ніж виконувати його самостійно.",
      "keys": [
        "Ansprechperson",
        "eigenen Worten",
        "fragt nach",
        "nur beobachtet",
        "Anleitung"
      ],
      "phrases": [
        [
          "Wer ist heute meine Ansprechperson?",
          "До кого мені сьогодні звертатися?"
        ],
        [
          "Welche Aufgaben soll ich übernehmen?",
          "Які завдання мені виконати?"
        ],
        [
          "Kannst du bitte etwas langsamer sprechen?",
          "Можеш, будь ласка, говорити трохи повільніше?"
        ],
        [
          "Was bedeutet dieser Begriff?",
          "Що означає цей термін?"
        ],
        [
          "Habe ich richtig verstanden, dass …?",
          "Я правильно зрозумів, що…?"
        ],
        [
          "Ich habe das bisher nur beobachtet.",
          "Поки що я лише спостерігав, як це роблять."
        ],
        [
          "Kannst du mich dabei anleiten?",
          "Можеш керувати мною під час виконання?"
        ],
        [
          "Was kann ich beim nächsten Mal besser machen?",
          "Що наступного разу я можу зробити краще?"
        ]
      ],
      "vocab": [
        [
          "die Praxisanleitung",
          "практичне наставництво",
          "Ich bitte um Praxisanleitung.",
          "Я прошу практичного наставництва."
        ],
        [
          "die Ansprechperson",
          "контактна особа",
          "Sie ist heute meine Ansprechperson.",
          "Вона сьогодні моя контактна особа."
        ],
        [
          "die Rückmeldung",
          "зворотний зв’язок",
          "Ich wünsche mir eine Rückmeldung.",
          "Я хотів би отримати зворотний зв’язок."
        ],
        [
          "die Anweisung",
          "вказівка; інструкція",
          "Ich wiederhole die Anweisung.",
          "Я повторюю вказівку."
        ],
        [
          "nachfragen",
          "перепитувати; уточнювати",
          "Bei Unklarheiten frage ich nach.",
          "За неясностей я перепитую."
        ],
        [
          "übernehmen",
          "брати на себе; виконувати",
          "Welche Aufgabe soll ich übernehmen?",
          "Яке завдання мені виконати?"
        ]
      ],
      "dialogue": [
        [
          "Наставниця",
          "Ist dir die Aufgabe klar?",
          "Тобі зрозуміле завдання?"
        ],
        [
          "Ти",
          "Noch nicht ganz. Was bedeutet dieser Begriff?",
          "Ще не зовсім. Що означає цей термін?"
        ],
        [
          "Наставниця",
          "Ich erkläre es dir noch einmal und zeige es dir.",
          "Я ще раз поясню й покажу."
        ],
        [
          "Ти",
          "Danke. Danach wiederhole ich die Schritte mit eigenen Worten.",
          "Дякую. Потім я повторю кроки своїми словами."
        ]
      ],
      "questions": [
        [
          "Was macht Sviat nach der Erklärung?",
          [
            "Er ignoriert die Anweisung.",
            "Er erfindet andere Schritte.",
            "Er fasst sie mit eigenen Worten zusammen."
          ],
          2,
          "Переказ своїми словами допомагає перевірити розуміння."
        ],
        [
          "Warum fragt er nach?",
          [
            "Er versteht einen Begriff noch nicht.",
            "Er möchte die Aufgabe vermeiden.",
            "Er kennt schon alles."
          ],
          0,
          "У тексті конкретно вказано незрозумілий Fachbegriff."
        ],
        [
          "Welche Erfahrung hat er mit der Aufgabe?",
          [
            "Er hat sie oft allein gemacht.",
            "Er hat sie bisher nur beobachtet.",
            "Er hat sie bereits unterrichtet."
          ],
          1,
          "Nur beobachtet — лише спостерігав. Це не те саме, що самостійно виконував."
        ]
      ],
      "gapText": "Ich möchte es richtig lernen. {{52}} du mir das bitte zeigen? Ich frage nach, {{53}} ich einen Begriff nicht verstehe. Danach wiederhole ich die Schritte {{54}} eigenen Worten.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "Kannst",
            "Können",
            "Könnt"
          ],
          "answer": 0,
          "why": [
            "До du належить kannst: Kannst du …?",
            "Können відповідає Sie/wir/sie, але не du.",
            "Könnt відповідає ihr, але не du."
          ],
          "rule": "du kannst / Sie können"
        },
        {
          "n": 53,
          "options": [
            "deshalb",
            "wenn",
            "trotzdem"
          ],
          "answer": 1,
          "why": [
            "Deshalb потребує головного речення, а тут умова.",
            "Wenn вводить умову: якщо не розумію термін.",
            "Trotzdem означає «попри це», не «якщо»."
          ],
          "rule": "wenn … nicht verstehe"
        },
        {
          "n": 54,
          "options": [
            "von",
            "bei",
            "mit"
          ],
          "answer": 2,
          "why": [
            "Стала конструкція не von eigenen Worten.",
            "Bei не утворює потрібного вислову.",
            "Mit eigenen Worten — своїми словами."
          ],
          "rule": "mit eigenen Worten"
        }
      ],
      "writingPrompt": "Попроси пояснити незрозуміле доручення.",
      "model": "Ich bin mir bei dieser Aufgabe noch unsicher. Kannst du mir das Vorgehen bitte zeigen? Danach möchte ich eine Rückmeldung bekommen.",
      "modelUA": "Я ще не впевнений у виконанні цього завдання. Можеш показати мені порядок дій? Потім я хотів би отримати зворотний зв’язок.",
      "talk": "Уточни завдання, повтори доручення своїми словами та попроси перевірити виконання."
    },
    {
      "id": "uebergabe",
      "title": "Передача зміни",
      "deTitle": "Übergabe",
      "goal": "Стисло повідомляти: хто, що, відколи, що вже зроблено та що потрібно уточнити.",
      "sources": [
        "pflege1:9-10",
        "pflege1:21",
        "fsp:76-80"
      ],
      "reading": "Bei der Übergabe berichtet Sviat über Frau Berg aus Zimmer 12. Sie sagte um 8 Uhr, dass ihr übel sei. Beim Frühstück aß sie ein halbes Brötchen. Die zuständige Pflegefachkraft wurde um 8:05 Uhr informiert. Sviat hat keine Temperatur gemessen und nennt deshalb keinen Temperaturwert. Er sagt klar, welche Informationen noch fehlen.",
      "translation": "Під час передачі зміни Свят повідомляє про пані Берґ із кімнати 12. О восьмій вона сказала, що її нудить. На сніданок вона з’їла половину булочки. Відповідальну Pflegefachkraft поінформували о 8:05. Свят не вимірював температуру, тому не називає її значення. Він чітко каже, якої інформації ще немає.",
      "keys": [
        "Zimmer 12",
        "8 Uhr",
        "halbes Brötchen",
        "8:05",
        "keine Temperatur"
      ],
      "phrases": [
        [
          "Ich möchte kurz etwas zu Frau Berg weitergeben.",
          "Я хочу коротко передати інформацію про пані Берґ."
        ],
        [
          "Sie berichtet über Übelkeit.",
          "Вона повідомляє про нудоту."
        ],
        [
          "Das ist mir um acht Uhr aufgefallen.",
          "Я помітив це о восьмій годині."
        ],
        [
          "Die zuständige Pflegefachkraft ist informiert.",
          "Відповідальну Pflegefachkraft поінформовано."
        ],
        [
          "Dazu habe ich noch keine Information.",
          "Щодо цього я ще не маю інформації."
        ],
        [
          "Ich habe die Temperatur nicht gemessen.",
          "Я не вимірював температуру."
        ],
        [
          "Ist dazu noch etwas offen?",
          "Чи залишилося ще щось неуточненим?"
        ],
        [
          "Wer übernimmt die weitere Abklärung?",
          "Хто займеться подальшим уточненням?"
        ]
      ],
      "vocab": [
        [
          "die Übergabe",
          "передача зміни; передача інформації",
          "Die Übergabe beginnt um sechs Uhr.",
          "Передача зміни починається о шостій."
        ],
        [
          "die Beobachtung",
          "спостереження",
          "Ich gebe meine Beobachtung weiter.",
          "Я передаю своє спостереження."
        ],
        [
          "auffallen",
          "впадати в око; бути поміченим",
          "Mir ist eine Veränderung aufgefallen.",
          "Я помітив зміну."
        ],
        [
          "zuständig",
          "відповідальний; уповноважений",
          "Wer ist zuständig?",
          "Хто відповідальний?"
        ],
        [
          "die Veränderung",
          "зміна",
          "Seit wann besteht die Veränderung?",
          "Відколи є ця зміна?"
        ],
        [
          "offen",
          "відкритий; ще не з’ясований",
          "Diese Frage ist noch offen.",
          "Це питання ще не з’ясоване."
        ]
      ],
      "dialogue": [
        [
          "Ти",
          "Frau Berg aus Zimmer zwölf berichtet seit acht Uhr über Übelkeit.",
          "Пані Берґ із кімнати дванадцять із восьмої повідомляє про нудоту."
        ],
        [
          "Колега",
          "Wer wurde informiert?",
          "Кого поінформували?"
        ],
        [
          "Ти",
          "Die zuständige Pflegefachkraft um acht Uhr fünf.",
          "Відповідальну Pflegefachkraft о восьмій п’ять."
        ],
        [
          "Колега",
          "Danke. Welche Angaben fehlen noch?",
          "Дякую. Яких даних ще немає?"
        ]
      ],
      "questions": [
        [
          "Wann wurde die Pflegefachkraft informiert?",
          [
            "Um 8:05 Uhr.",
            "Um 12 Uhr.",
            "Erst am nächsten Tag."
          ],
          0,
          "Точний час повідомлення — 8:05; час появи слів про нудоту — 8:00."
        ],
        [
          "Welche Angabe wäre erfunden?",
          [
            "Ein halbes Brötchen.",
            "Eine Temperatur von 38 Grad.",
            "Die Zimmernummer 12."
          ],
          1,
          "Температуру не вимірювали, тому 38 °C були б вигадкою."
        ],
        [
          "Was gehört zur klaren Übergabe?",
          [
            "Unbekannte Werte ergänzen.",
            "Nur Vermutungen nennen.",
            "Fehlende Informationen ausdrücklich benennen."
          ],
          2,
          "Чітко називати, що відомо та чого ще немає."
        ]
      ],
      "gapText": "Frau Berg berichtet {{52}} Übelkeit. Die Pflegefachkraft wurde um 8:05 Uhr {{53}}. Ich habe die Temperatur {{54}} gemessen.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "für",
            "über",
            "zu"
          ],
          "answer": 1,
          "why": [
            "Berichten für означає іншу конструкцію, не тему повідомлення.",
            "Berichten über + Akkusativ: повідомляти про нудоту.",
            "Berichten zu тут не відповідає потрібному сталому вислову."
          ],
          "rule": "berichten über + Akkusativ"
        },
        {
          "n": 53,
          "options": [
            "informiert",
            "informieren",
            "informierte"
          ],
          "answer": 0,
          "why": [
            "Wurde informiert — пасив: була поінформована.",
            "Після wurde у пасиві потрібен Partizip II.",
            "Informierte — особова форма минулого часу, не Partizip II."
          ],
          "rule": "wurde + Partizip II"
        },
        {
          "n": 54,
          "options": [
            "kein",
            "keine",
            "nicht"
          ],
          "answer": 2,
          "why": [
            "Kein заперечує іменник без означеного артикля.",
            "Keine не поєднується з die Temperatur таким чином.",
            "Nicht заперечує дію: не вимірював."
          ],
          "rule": "die Temperatur nicht gemessen"
        }
      ],
      "writingPrompt": "Склади коротку передачу: мешканка, скарга, час повідомлення, невідомі дані.",
      "model": "Frau Berg, Zimmer 12, berichtete um 8 Uhr über Übelkeit. Sie aß ein halbes Brötchen. Pflegefachkraft um 8:05 Uhr informiert. Temperatur nicht gemessen.",
      "modelUA": "Пані Берґ, кімната 12, о 8:00 повідомила про нудоту. З’їла половину булочки. Pflegefachkraft поінформовано о 8:05. Температуру не вимірювали.",
      "talk": "Передай випадок за 30 секунд, не додаючи вигаданих показників."
    },
    {
      "id": "dokumentation",
      "title": "Документація без оцінок",
      "deTitle": "Sachlich dokumentieren",
      "goal": "Відрізняти слова людини, власне спостереження та виконану дію.",
      "sources": [
        "pflege1:20-23",
        "fsp:76-80",
        "fit:43-52"
      ],
      "reading": "Frau Adler möchte heute zunächst nicht an der Beschäftigungsgruppe teilnehmen. Sie sagt, dass sie müde ist. Sviat notiert ihre Aussage und den Zeitpunkt. Er schreibt nicht, dass sie „schwierig“ oder „faul“ sei. Später entscheidet Frau Adler selbst, ob sie teilnehmen möchte. Sviat bespricht mit seiner Anleiterin, wo die Information nach den Regeln der Einrichtung dokumentiert wird.",
      "translation": "Пані Адлер сьогодні поки що не хоче брати участь у груповому занятті. Вона каже, що втомлена. Свят записує її слова та час. Він не пише, нібито вона «важка» або «лінива». Пізніше пані Адлер сама вирішує, чи хоче долучитися. Свят обговорює з наставницею, де цю інформацію записують за правилами закладу.",
      "keys": [
        "sagt",
        "Zeitpunkt",
        "nicht",
        "selbst",
        "Regeln der Einrichtung"
      ],
      "phrases": [
        [
          "Die Bewohnerin sagt, dass sie müde ist.",
          "Мешканка каже, що втомлена."
        ],
        [
          "Ich habe Folgendes beobachtet.",
          "Я спостерігав таке."
        ],
        [
          "Um neun Uhr äußerte sie diesen Wunsch.",
          "О дев’ятій годині вона висловила це побажання."
        ],
        [
          "Wo soll ich das dokumentieren?",
          "Де мені це задокументувати?"
        ],
        [
          "Ich habe dazu keine eigene Beobachtung.",
          "Я не маю щодо цього власного спостереження."
        ],
        [
          "Diese Information stammt von der Bewohnerin.",
          "Ця інформація — зі слів мешканки."
        ],
        [
          "Ich habe die Angabe mit meiner Anleiterin besprochen.",
          "Я обговорив ці дані з наставницею."
        ],
        [
          "Ich notiere nur, was tatsächlich bekannt ist.",
          "Я записую лише те, що справді відомо."
        ]
      ],
      "vocab": [
        [
          "dokumentieren",
          "документувати",
          "Ich dokumentiere die Beobachtung.",
          "Я документую спостереження."
        ],
        [
          "die Aussage",
          "висловлювання; слова людини",
          "Die Aussage stammt von Frau Adler.",
          "Це слова пані Адлер."
        ],
        [
          "der Zeitpunkt",
          "момент часу",
          "Der Zeitpunkt ist bekannt.",
          "Час відомий."
        ],
        [
          "sachlich",
          "об’єктивно; по суті",
          "Ich schreibe sachlich.",
          "Я пишу об’єктивно."
        ],
        [
          "äußern",
          "висловлювати",
          "Sie äußert einen Wunsch.",
          "Вона висловлює побажання."
        ],
        [
          "tatsächlich",
          "насправді; фактично",
          "Was wurde tatsächlich beobachtet?",
          "Що насправді спостерігали?"
        ]
      ],
      "dialogue": [
        [
          "Ти",
          "Soll ich schreiben, dass Frau Adler heute schwierig ist?",
          "Мені написати, що пані Адлер сьогодні «важка»?"
        ],
        [
          "Наставниця",
          "Beschreibe bitte, was sie gesagt hat.",
          "Опиши, будь ласка, що вона сказала."
        ],
        [
          "Ти",
          "Sie sagte um neun Uhr, dass sie müde ist und zunächst nicht teilnehmen möchte.",
          "О дев’ятій вона сказала, що втомлена та поки не хоче долучатися."
        ],
        [
          "Наставниця",
          "Genau. Bleib bei den bekannten Angaben.",
          "Саме так. Дотримуйся відомих даних."
        ]
      ],
      "questions": [
        [
          "Was sagt Frau Adler?",
          [
            "Dass sie müde ist.",
            "Dass sie verreisen möchte.",
            "Dass sie Hunger hat."
          ],
          0,
          "У тексті є конкретна її заява: вона втомлена."
        ],
        [
          "Welche Formulierung ist sachlich?",
          [
            "Sie ist faul.",
            "Sie ist schwierig.",
            "Sie sagte um neun Uhr, dass sie müde ist."
          ],
          2,
          "Останній варіант передає слова й час без оцінного ярлика."
        ],
        [
          "Wo wird dokumentiert?",
          [
            "Immer in einem privaten Chat.",
            "Nach den Regeln der Einrichtung.",
            "Auf einem öffentlichen Profil."
          ],
          1,
          "Місце й порядок запису уточнюють за правилами закладу."
        ]
      ],
      "gapText": "Frau Adler sagt, dass sie müde {{52}}. Um neun Uhr {{53}} sie den Wunsch, später teilzunehmen. Ich habe die Angabe mit meiner Anleiterin {{54}}.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "ist",
            "sein",
            "hat"
          ],
          "answer": 0,
          "why": [
            "Sie ist müde; у dass-реченні ist стоїть наприкінці.",
            "Sein — інфінітив, тут потрібна особова форма ist.",
            "Німецькою «бути втомленою» — müde sein, не müde haben."
          ],
          "rule": "dass sie müde ist"
        },
        {
          "n": 53,
          "options": [
            "äußern",
            "äußerte",
            "geäußert"
          ],
          "answer": 1,
          "why": [
            "Після sie потрібна особова форма, не інфінітив.",
            "Äußerte — Präteritum для sie.",
            "Geäußert потребує допоміжного дієслова hat/hatte."
          ],
          "rule": "sie äußerte / sie hat geäußert"
        },
        {
          "n": 54,
          "options": [
            "besprechen",
            "besprach",
            "besprochen"
          ],
          "answer": 2,
          "why": [
            "Для Perfekt потрібен Partizip II.",
            "Besprach — Präteritum, не поєднується тут із habe.",
            "Habe besprochen — правильний Perfekt."
          ],
          "rule": "besprechen → besprochen"
        }
      ],
      "writingPrompt": "Перепиши об’єктивно: «Вона лінива й не хоче нічого робити».",
      "model": "Frau Adler sagte um neun Uhr, dass sie müde ist und zunächst nicht an der Beschäftigungsgruppe teilnehmen möchte.",
      "modelUA": "Пані Адлер о дев’ятій сказала, що втомлена та поки не хоче брати участь у груповому занятті.",
      "talk": "Назви окремо: слова мешканки, власне спостереження та вже виконану дію."
    },
    {
      "id": "angehoerige",
      "title": "Родичі й межі ролі",
      "deTitle": "Angehörigengespräche",
      "goal": "Слухати занепокоєння та передавати запитання відповідальній особі.",
      "sources": [
        "pflege1:9",
        "pflege1:13",
        "aerzte:155-157"
      ],
      "reading": "Die Tochter von Herrn König fragt Sviat, warum die Medikamente geändert wurden. Sviat kennt den Grund nicht. Er sagt das offen und vermittelt das Gespräch an die zuständige Pflegefachkraft. Die Tochter wirkt besorgt. Sviat hört ihre Frage an, nennt aber keine Vermutungen und bespricht keine anderen Bewohner. Einen Rückrufzeitpunkt verspricht er erst nach bestätigter Absprache.",
      "translation": "Донька пана Кеніґа запитує Свята, чому змінили ліки. Свят не знає причини. Він відкрито це каже та передає розмову відповідальній Pflegefachkraft. Донька виглядає стурбованою. Свят вислуховує її запитання, але не висловлює припущень і не обговорює інших мешканців. Час зворотного дзвінка він обіцяє лише після підтвердженої домовленості.",
      "keys": [
        "kennt den Grund nicht",
        "offen",
        "zuständige Pflegefachkraft",
        "keine Vermutungen",
        "bestätigter"
      ],
      "phrases": [
        [
          "Ich sehe, dass Sie besorgt sind.",
          "Я бачу, що Ви стурбовані."
        ],
        [
          "Was möchten Sie genau wissen?",
          "Що саме Ви хотіли б дізнатися?"
        ],
        [
          "Dazu habe ich keine gesicherte Information.",
          "Щодо цього я не маю підтвердженої інформації."
        ],
        [
          "Ich leite Ihre Frage weiter.",
          "Я передам Ваше запитання."
        ],
        [
          "Ich hole die zuständige Pflegefachkraft dazu.",
          "Я покличу відповідальну Pflegefachkraft."
        ],
        [
          "Über andere Bewohner kann ich keine Auskunft geben.",
          "Я не можу повідомляти інформацію про інших мешканців."
        ],
        [
          "Ich kläre, wer mit Ihnen sprechen kann.",
          "Я уточню, хто може з Вами поговорити."
        ],
        [
          "Ich möchte Ihnen nichts Falsches sagen.",
          "Я не хочу сказати Вам щось неправильне."
        ]
      ],
      "vocab": [
        [
          "die Auskunft",
          "інформація; довідка",
          "Wer darf dazu Auskunft geben?",
          "Хто може надати інформацію щодо цього?"
        ],
        [
          "die Sorge",
          "занепокоєння; турбота",
          "Ich höre mir Ihre Sorge an.",
          "Я вислухаю Ваше занепокоєння."
        ],
        [
          "gesichert",
          "підтверджений; достовірний",
          "Diese Information ist gesichert.",
          "Ця інформація підтверджена."
        ],
        [
          "weiterleiten",
          "переадресувати; передати далі",
          "Ich leite die Frage weiter.",
          "Я передаю запитання далі."
        ],
        [
          "die Absprache",
          "домовленість",
          "Wir halten uns an die Absprache.",
          "Ми дотримуємося домовленості."
        ],
        [
          "die Schweigepflicht",
          "обов’язок зберігати професійну таємницю",
          "Im Team beachten wir die Schweigepflicht.",
          "У команді ми дотримуємося професійної таємниці."
        ]
      ],
      "dialogue": [
        [
          "Родичка",
          "Warum wurden die Medikamente meines Vaters geändert?",
          "Чому змінили ліки мого батька?"
        ],
        [
          "Ти",
          "Dazu habe ich keine gesicherte Information.",
          "Щодо цього я не маю підтвердженої інформації."
        ],
        [
          "Родичка",
          "Mit wem kann ich sprechen?",
          "З ким я можу поговорити?"
        ],
        [
          "Ти",
          "Ich kläre das mit der zuständigen Pflegefachkraft.",
          "Я уточню це у відповідальної Pflegefachkraft."
        ]
      ],
      "questions": [
        [
          "Was weiß Sviat über den Grund der Änderung?",
          [
            "Er kennt alle Einzelheiten.",
            "Er kennt den Grund nicht.",
            "Er hat selbst die Medikamente geändert."
          ],
          1,
          "Він не знає причини та прямо про це говорить."
        ],
        [
          "Wie reagiert er auf die Frage?",
          [
            "Er nennt eine Vermutung.",
            "Er berichtet über andere Bewohner.",
            "Er vermittelt an die zuständige Person."
          ],
          2,
          "Відповідь передають особі, яка має потрібну інформацію та повноваження."
        ],
        [
          "Wann verspricht er einen Rückrufzeitpunkt?",
          [
            "Nach bestätigter Absprache.",
            "Sofort, ohne nachzufragen.",
            "Er nennt immer irgendeine Uhrzeit."
          ],
          0,
          "Обіцянка ґрунтується на підтвердженій домовленості."
        ]
      ],
      "gapText": "Ich weiß nicht, {{52}} die Medikamente geändert wurden. Ich leite Ihre Frage {{53}}. Ich bespreche das {{54}} der zuständigen Pflegefachkraft.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "deshalb",
            "weil",
            "warum"
          ],
          "answer": 2,
          "why": [
            "Deshalb — «тому», не непряме «чому».",
            "Weil вводить причину, але тут ми не знаємо й уточнюємо чому.",
            "Warum вводить непряме запитання про причину."
          ],
          "rule": "Ich weiß nicht, warum …"
        },
        {
          "n": 53,
          "options": [
            "weiter",
            "wieder",
            "gegen"
          ],
          "answer": 0,
          "why": [
            "Weiterleiten — передавати далі; префікс відділяється.",
            "Wieder означає «знову», це не потрібний префікс.",
            "Gegen — «проти», не частина потрібного дієслова."
          ],
          "rule": "weiterleiten → ich leite … weiter"
        },
        {
          "n": 54,
          "options": [
            "für",
            "mit",
            "ohne"
          ],
          "answer": 1,
          "why": [
            "Für не означає спільне обговорення з кимось.",
            "Mit + Dativ: обговорити з відповідальною Pflegefachkraft.",
            "Ohne означає «без», що змінює зміст на протилежний."
          ],
          "rule": "mit der Pflegefachkraft"
        }
      ],
      "writingPrompt": "Відповідай родичці, коли не знаєш причини зміни лікування.",
      "model": "Ich verstehe, dass Sie dazu eine Frage haben. Den Grund kenne ich nicht. Ich leite Ihre Frage an die zuständige Pflegefachkraft weiter.",
      "modelUA": "Я розумію, що у Вас є запитання щодо цього. Причини я не знаю. Я передам Ваше запитання відповідальній Pflegefachkraft.",
      "talk": "Вислухай занепокоєння та передай запитання без припущень."
    },
    {
      "id": "ausbildungsrolle",
      "title": "Моя роль на Ausbildung",
      "deTitle": "Meine Rolle in der Ausbildung",
      "goal": "Уточнюй доручення, межі відповідальності та навчальні цілі.",
      "reading": "Sviat beginnt seine Ausbildung in der Pflegefachassistenz. Frau Keller ist seine Praxisanleiterin. Vor einer neuen Aufgabe erklärt sie den Ablauf und beobachtet ihn. Sviat sagt offen, wenn er eine Anweisung nicht versteht. Er führt nur Aufgaben aus, für die er angeleitet wurde und die ihm übertragen wurden. Bei Unsicherheit fragt er nach. Gemeinsam besprechen sie am Ende der Schicht, was gut gelungen ist und was er noch üben möchte.",
      "translation": "Свят починає навчання з Pflegefachassistenz. Пані Келлер — його практична наставниця. Перед новим завданням вона пояснює послідовність і спостерігає за ним. Свят відкрито каже, якщо не розуміє вказівки. Він виконує лише ті завдання, щодо яких його навчили і які йому доручили. Якщо не впевнений, перепитує. Наприкінці зміни вони разом обговорюють, що вдалося і що він ще хоче потренувати.",
      "keys": [
        "Praxisanleiterin",
        "nicht versteht",
        "übertragen",
        "fragt er nach"
      ],
      "phrases": [
        [
          "Ich bin Auszubildender in der Pflegefachassistenz.",
          "Я навчаюся на фахового асистента з догляду."
        ],
        [
          "Wer ist heute meine Ansprechperson?",
          "Хто сьогодні моя контактна особа?"
        ],
        [
          "Können Sie mir den Ablauf zeigen?",
          "Можете показати мені послідовність дій?"
        ],
        [
          "Bei dieser Aufgabe brauche ich Anleitung.",
          "Для цього завдання мені потрібен інструктаж."
        ],
        [
          "Ich habe die Anweisung noch nicht verstanden.",
          "Я ще не зрозумів вказівку."
        ],
        [
          "Darf ich die Aufgabe unter Aufsicht üben?",
          "Можна потренувати це завдання під наглядом?"
        ],
        [
          "Was soll ich heute besonders beachten?",
          "На що мені сьогодні особливо звернути увагу?"
        ],
        [
          "Ich möchte eine Rückmeldung zu meiner Arbeit.",
          "Я хотів би отримати відгук про свою роботу."
        ]
      ],
      "vocab": [
        [
          "die Praxisanleitung",
          "практичний інструктаж",
          "Ich brauche eine Praxisanleitung.",
          "Мені потрібен практичний інструктаж."
        ],
        [
          "die Verantwortung",
          "відповідальність",
          "Die Verantwortung muss geklärt sein.",
          "Відповідальність має бути визначена."
        ],
        [
          "die Anweisung",
          "вказівка",
          "Ich frage bei einer unklaren Anweisung nach.",
          "Я перепитую, якщо вказівка незрозуміла."
        ],
        [
          "übertragen",
          "доручати; передавати",
          "Die Fachkraft hat mir diese Aufgabe übertragen.",
          "Фахівчиня доручила мені це завдання."
        ],
        [
          "die Aufsicht",
          "нагляд",
          "Ich übe unter Aufsicht.",
          "Я тренуюся під наглядом."
        ],
        [
          "die Rückmeldung",
          "зворотний зв’язок; відгук",
          "Die Rückmeldung hilft mir beim Lernen.",
          "Зворотний зв’язок допомагає мені навчатися."
        ]
      ],
      "dialogue": [
        [
          "Наставниця",
          "Was möchtest du heute üben?",
          "Що ти хотів би сьогодні потренувати?"
        ],
        [
          "Ти",
          "Ich möchte die Übergabe üben.",
          "Я хотів би потренувати передачу зміни."
        ],
        [
          "Наставниця",
          "Was brauchst du dafür?",
          "Що тобі для цього потрібно?"
        ],
        [
          "Ти",
          "Bitte hören Sie zu und geben Sie mir danach eine Rückmeldung.",
          "Будь ласка, послухайте мене й потім дайте відгук."
        ]
      ],
      "questions": [
        [
          "Was macht Sviat bei einer unklaren Anweisung?",
          [
            "Er rät.",
            "Er fragt nach.",
            "Er verlässt die Station."
          ],
          1,
          "За невпевненості він перепитує: Bei Unsicherheit fragt er nach."
        ],
        [
          "Welche Aufgaben führt er aus?",
          [
            "Alle Aufgaben ohne Anleitung.",
            "Nur Aufgaben von Angehörigen.",
            "Aufgaben, für die er angeleitet wurde und die ihm übertragen wurden."
          ],
          2,
          "Важливі обидві умови: інструктаж і доручення."
        ],
        [
          "Wann besprechen sie den Lernfortschritt?",
          [
            "Am Ende der Schicht.",
            "Erst nach der Prüfung.",
            "Nie."
          ],
          0,
          "У тексті: am Ende der Schicht — наприкінці зміни."
        ]
      ],
      "gapText": "Ich bin neu in der Ausbildung. {{52}} ich etwas nicht verstehe, frage ich nach. Ich übe neue Aufgaben {{53}} Aufsicht. Bitte erklären Sie mir, {{54}} ich beachten soll.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "Wenn",
            "Obwohl",
            "Deshalb"
          ],
          "answer": 0,
          "why": [
            "Wenn означає «якщо»: умова для перепитування.",
            "Obwohl — «хоча», тут потрібна умова.",
            "Deshalb починає головне речення, а тут підрядне."
          ],
          "rule": "Wenn + підрядне речення: дієслово в кінці."
        },
        {
          "n": 53,
          "options": [
            "ohne",
            "unter",
            "gegen"
          ],
          "answer": 1,
          "why": [
            "Ohne Aufsicht означає «без нагляду», це змінює задуманий зміст.",
            "Unter Aufsicht — під наглядом.",
            "Gegen Aufsicht не є відповідним словосполученням."
          ],
          "rule": "Стійкий вираз: unter Aufsicht."
        },
        {
          "n": 54,
          "options": [
            "wer",
            "wo",
            "was"
          ],
          "answer": 2,
          "why": [
            "Wer питає про особу, а тут про зміст вказівки.",
            "Wo питає про місце.",
            "Was ich beachten soll — на що я маю зважати."
          ],
          "rule": "Непряме запитання: was … beachten soll."
        }
      ],
      "writingPrompt": "Напиши наставниці, чого ти хочеш навчитися і де потрібна допомога.",
      "model": "Ich möchte heute die Übergabe üben. Bei der Dokumentation brauche ich noch Anleitung. Können Sie mir danach eine Rückmeldung geben?",
      "modelUA": "Сьогодні я хочу потренувати передачу зміни. У документації мені ще потрібен інструктаж. Можете потім дати мені відгук?",
      "talk": "Скажи наставниці про одну сильну сторону й одну навчальну потребу.",
      "sources": [
        "bibb2026",
        "reg2026"
      ],
      "new": true
    },
    {
      "id": "praevention",
      "title": "Профілактика й безпечне середовище",
      "deTitle": "Prävention im Pflegealltag",
      "goal": "Описуй ризики та допомагай зберігати самостійність людини.",
      "reading": "Herr Weber möchte zum Gemeinschaftsraum gehen. Sviat sieht ein Kabel auf dem Boden und meldet die Stolperstelle seiner Kollegin. Herr Weber trägt geschlossene Schuhe. Er möchte seinen Rollator benutzen und den Weg möglichst selbstständig gehen. Sviat fragt, welche Unterstützung vereinbart ist, und richtet sich nach dem Pflegeplan. Er erklärt seine Hilfe und achtet auf die Zustimmung des Bewohners. Sicherheit und Selbstständigkeit werden gemeinsam berücksichtigt.",
      "translation": "Пан Вебер хоче піти до спільної кімнати. Свят бачить кабель на підлозі та повідомляє колезі про місце, де можна спіткнутися. Пан Вебер у закритому взутті. Він хоче скористатися ролатором і пройти шлях якомога самостійніше. Свят уточнює узгоджену допомогу й дотримується плану догляду. Він пояснює свою допомогу та зважає на згоду мешканця. Безпеку й самостійність враховують разом.",
      "keys": [
        "Kabel",
        "Stolperstelle",
        "selbstständig",
        "Pflegeplan",
        "Zustimmung"
      ],
      "phrases": [
        [
          "Ich habe eine Stolperstelle bemerkt.",
          "Я помітив місце, де можна спіткнутися."
        ],
        [
          "Welche Unterstützung ist vereinbart?",
          "Яку допомогу узгоджено?"
        ],
        [
          "Möchten Sie Ihren Rollator benutzen?",
          "Ви хотіли б скористатися своїм ролатором?"
        ],
        [
          "Ich richte mich nach dem Pflegeplan.",
          "Я дотримуюся плану догляду."
        ],
        [
          "Was können Sie selbst übernehmen?",
          "Що ви можете зробити самостійно?"
        ],
        [
          "Ich erkläre Ihnen jeden Schritt.",
          "Я поясню вам кожен крок."
        ],
        [
          "Ist diese Unterstützung für Sie in Ordnung?",
          "Вас влаштовує така допомога?"
        ],
        [
          "Wir achten auf Sicherheit und Selbstständigkeit.",
          "Ми зважаємо на безпеку й самостійність."
        ]
      ],
      "vocab": [
        [
          "die Prävention",
          "профілактика",
          "Prävention gehört zum Pflegealltag.",
          "Профілактика — частина повсякденного догляду."
        ],
        [
          "die Stolperstelle",
          "місце, де можна спіткнутися",
          "Ich melde die Stolperstelle.",
          "Я повідомляю про місце, де можна спіткнутися."
        ],
        [
          "das Sturzrisiko",
          "ризик падіння",
          "Die Fachkraft beurteilt das Sturzrisiko.",
          "Фахівчиня оцінює ризик падіння."
        ],
        [
          "die Zustimmung",
          "згода",
          "Ich frage nach der Zustimmung.",
          "Я запитую про згоду."
        ],
        [
          "berücksichtigen",
          "враховувати",
          "Wir berücksichtigen seine Wünsche.",
          "Ми враховуємо його побажання."
        ],
        [
          "vereinbaren",
          "узгоджувати",
          "Wir vereinbaren die Unterstützung.",
          "Ми узгоджуємо допомогу."
        ]
      ],
      "dialogue": [
        [
          "Мешканець",
          "Ich möchte allein zum Gemeinschaftsraum gehen.",
          "Я хочу сам піти до спільної кімнати."
        ],
        [
          "Ти",
          "Welche Unterstützung wünschen Sie sich?",
          "Яку допомогу ви хотіли б отримати?"
        ],
        [
          "Мешканець",
          "Bitte bleiben Sie in meiner Nähe.",
          "Будь ласка, залишайтеся поруч зі мною."
        ],
        [
          "Ти",
          "Ich kläre kurz mit meiner Kollegin, was vereinbart ist.",
          "Я коротко уточню з колегою, що узгоджено."
        ]
      ],
      "questions": [
        [
          "Was bemerkt Sviat?",
          [
            "Ein Kabel auf dem Boden.",
            "Eine neue Rechnung.",
            "Einen Besuch im Zimmer."
          ],
          0,
          "Орієнтир: Kabel auf dem Boden — кабель на підлозі."
        ],
        [
          "Was ist Herrn Weber wichtig?",
          [
            "Dass Sviat alles übernimmt.",
            "Dass er möglichst selbstständig bleibt.",
            "Dass der Pflegeplan ignoriert wird."
          ],
          1,
          "Мешканець хоче пройти шлях möglichst selbstständig."
        ],
        [
          "Woran orientiert sich Sviat?",
          [
            "Nur an der Uhrzeit.",
            "An einem privaten Rezept.",
            "Am Pflegeplan und an der vereinbarten Unterstützung."
          ],
          2,
          "Він уточнює узгоджену допомогу й орієнтується на Pflegeplan."
        ]
      ],
      "gapText": "Herr Weber möchte {{52}} Rollator benutzen. Ich frage, welche Hilfe er {{53}}. Ich erkläre die Unterstützung, {{54}} er weiß, was geschieht.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "seinen",
            "seinem",
            "seiner"
          ],
          "answer": 0,
          "why": [
            "Benutzen + Akkusativ: seinen Rollator.",
            "Seinem — Dativ, а benutzen потребує Akkusativ.",
            "Seiner не відповідає чоловічому роду в Akkusativ."
          ],
          "rule": "der Rollator → seinen Rollator."
        },
        {
          "n": 53,
          "options": [
            "brauche",
            "brauchst",
            "braucht"
          ],
          "answer": 2,
          "why": [
            "Brauche узгоджується з ich.",
            "Brauchst узгоджується з du.",
            "Er braucht — правильна форма для er."
          ],
          "rule": "er/sie/es braucht."
        },
        {
          "n": 54,
          "options": [
            "obwohl",
            "damit",
            "trotzdem"
          ],
          "answer": 1,
          "why": [
            "Obwohl означає поступку, тут мета пояснення.",
            "Damit — щоб: пояснюю, щоб людина розуміла.",
            "Trotzdem потребує головного речення."
          ],
          "rule": "Мета: damit … weiß."
        }
      ],
      "writingPrompt": "Опиши колезі ризик у приміщенні без оцінок і здогадок.",
      "model": "Auf dem Boden liegt ein Kabel. Herr Weber möchte zum Gemeinschaftsraum gehen. Ich habe meiner Kollegin die Stolperstelle gemeldet.",
      "modelUA": "На підлозі лежить кабель. Пан Вебер хоче піти до спільної кімнати. Я повідомив колезі про місце, де можна спіткнутися.",
      "talk": "Уточни узгоджену допомогу та поясни її мешканцеві.",
      "sources": [
        "bibb2026",
        "reg2026"
      ],
      "new": true
    },
    {
      "id": "akutsituation",
      "title": "Помітити зміну стану й повідомити",
      "deTitle": "Veränderungen erkennen und weitergeben",
      "goal": "Чітко передавай скаргу, час і власні спостереження.",
      "reading": "Frau Roth sagt plötzlich, dass sie schlecht Luft bekommt. Sviat nimmt ihre Aussage ernst und holt sofort die zuständige Pflegefachkraft nach dem vereinbarten Notfallablauf. Er berichtet, seit wann die Beschwerden bestehen und was er beobachtet hat. Er stellt keine eigene Diagnose. Die Fachkraft übernimmt die weitere Einschätzung. Danach dokumentiert Sviat die Aussage der Bewohnerin, den Zeitpunkt und die Weitergabe der Information.",
      "translation": "Пані Рот раптом каже, що їй важко дихати. Свят серйозно сприймає її слова й негайно кличе відповідальну фахівчиню згідно з узгодженим порядком дій у невідкладній ситуації. Він повідомляє, відколи є скарга і що він спостерігав. Він не ставить власного діагнозу. Подальшу оцінку бере на себе фахівчиня. Потім Свят документує слова мешканки, час і передачу інформації.",
      "keys": [
        "plötzlich",
        "sofort",
        "seit wann",
        "beobachtet",
        "keine eigene Diagnose"
      ],
      "phrases": [
        [
          "Was hat sich verändert?",
          "Що змінилося?"
        ],
        [
          "Seit wann bestehen die Beschwerden?",
          "Відколи є ці скарги?"
        ],
        [
          "Ich hole sofort die zuständige Pflegefachkraft.",
          "Я негайно покличу відповідальну фахівчиню з догляду."
        ],
        [
          "Die Bewohnerin sagt, dass sie schlecht Luft bekommt.",
          "Мешканка каже, що їй важко дихати."
        ],
        [
          "Die Beschwerden haben plötzlich begonnen.",
          "Скарги виникли раптово."
        ],
        [
          "Ich habe die Information sofort weitergegeben.",
          "Я негайно передав інформацію."
        ],
        [
          "Bitte kommen Sie sofort zu Frau Roth.",
          "Будь ласка, негайно підійдіть до пані Рот."
        ],
        [
          "Die weitere Einschätzung übernimmt die Fachkraft.",
          "Подальшу оцінку бере на себе фахівчиня."
        ]
      ],
      "vocab": [
        [
          "die Atemnot",
          "задишка; утруднене дихання",
          "Frau Roth berichtet über Atemnot.",
          "Пані Рот повідомляє про утруднене дихання."
        ],
        [
          "plötzlich",
          "раптово",
          "Die Beschwerden beginnen plötzlich.",
          "Скарги виникають раптово."
        ],
        [
          "die Zustandsveränderung",
          "зміна стану",
          "Ich melde die Zustandsveränderung.",
          "Я повідомляю про зміну стану."
        ],
        [
          "zuständig",
          "відповідальний за це",
          "Ich informiere die zuständige Fachkraft.",
          "Я інформую відповідальну фахівчиню."
        ],
        [
          "der Zeitpunkt",
          "момент; час події",
          "Ich dokumentiere den Zeitpunkt.",
          "Я документую час події."
        ],
        [
          "die Einschätzung",
          "оцінка ситуації або стану",
          "Die Fachkraft übernimmt die Einschätzung.",
          "Фахівчиня бере на себе оцінку."
        ]
      ],
      "dialogue": [
        [
          "Мешканка",
          "Ich bekomme plötzlich schlecht Luft.",
          "Мені раптом стало важко дихати."
        ],
        [
          "Ти",
          "Ich hole sofort die Pflegefachkraft.",
          "Я негайно покличу фахівчиню з догляду."
        ],
        [
          "Ти — колезі",
          "Frau Roth berichtet seit wenigen Minuten über Atemnot.",
          "Пані Рот повідомляє про утруднене дихання протягом останніх кількох хвилин."
        ],
        [
          "Колега",
          "Ich komme sofort.",
          "Я негайно підійду."
        ]
      ],
      "questions": [
        [
          "Welche Aussage stammt von Frau Roth?",
          [
            "Sie möchte eine Rechnung.",
            "Sie hat einen Termin vergessen.",
            "Sie bekommt schlecht Luft."
          ],
          2,
          "У тексті наведено скаргу: schlecht Luft bekommt."
        ],
        [
          "Wen holt Sviat?",
          [
            "Die zuständige Pflegefachkraft.",
            "Einen anderen Bewohner.",
            "Nur einen Angehörigen."
          ],
          0,
          "Він негайно кличе zuständige Pflegefachkraft за порядком закладу."
        ],
        [
          "Was dokumentiert er?",
          [
            "Eine selbst gestellte Diagnose.",
            "Aussage, Zeitpunkt und Weitergabe.",
            "Nur seine Vermutung."
          ],
          1,
          "Три орієнтири: слова мешканки, час, передача інформації."
        ]
      ],
      "gapText": "Frau Roth sagt, {{52}} sie schlecht Luft bekommt. Ich informiere {{53}} die zuständige Fachkraft. Anschließend {{54}} ich den Zeitpunkt.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "weil",
            "dass",
            "obwohl"
          ],
          "answer": 1,
          "why": [
            "Weil означає причину, а тут передається зміст слів.",
            "Sagt, dass … — каже, що…",
            "Obwohl означає «хоча» й не передає зміст висловлювання."
          ],
          "rule": "Передача слів: sagen, dass …"
        },
        {
          "n": 53,
          "options": [
            "morgen",
            "vielleicht",
            "sofort"
          ],
          "answer": 2,
          "why": [
            "Morgen означає «завтра», а ситуація потребує негайної передачі.",
            "Vielleicht означає «можливо», а дія визначена.",
            "Sofort означає «негайно»."
          ],
          "rule": "sofort — негайно; anschließend — після цього."
        },
        {
          "n": 54,
          "options": [
            "dokumentiere",
            "dokumentierst",
            "dokumentiert"
          ],
          "answer": 0,
          "why": [
            "Ich dokumentiere — правильна форма.",
            "Dokumentierst — форма для du.",
            "Dokumentiert — форма для er/sie/es або ihr."
          ],
          "rule": "ich dokumentiere."
        }
      ],
      "writingPrompt": "Передай колезі скаргу й час її початку. Використай berichten über.",
      "model": "Frau Roth berichtet seit wenigen Minuten über Atemnot. Ich habe sofort die zuständige Pflegefachkraft informiert. Die weitere Einschätzung hat die Fachkraft übernommen.",
      "modelUA": "Пані Рот повідомляє про утруднене дихання протягом останніх кількох хвилин. Я негайно повідомив відповідальній фахівчині з догляду. Подальшу оцінку взяла на себе фахівчиня.",
      "talk": "Потренуй коротке повідомлення: хто, що каже, відколи, кому вже повідомлено.",
      "sources": [
        "bibb2026",
        "reg2026"
      ],
      "new": true
    },
    {
      "id": "rehabilitation",
      "title": "Самостійність і реабілітація",
      "deTitle": "Selbstständigkeit und Rehabilitation",
      "goal": "Підтримуй власні можливості людини та уточнюй рекомендації команди.",
      "reading": "Nach einem Krankenhausaufenthalt möchte Herr Brandt wieder mehr selbst übernehmen. Beim Anziehen braucht er für einige Schritte Hilfe, andere schafft er allein. Sviat fragt zuerst nach seinen Wünschen und lässt ihm Zeit. Die vereinbarten Hilfen stehen im Pflegeplan. Bei Fragen zur Bewegung stimmt er sich mit der Pflegefachkraft und dem therapeutischen Team ab. Gemeinsam besprechen sie kleine, erreichbare Ziele. Sviat berichtet, welche Schritte Herr Brandt heute selbst geschafft hat.",
      "translation": "Після перебування в лікарні пан Брандт хоче знову більше робити сам. Під час одягання на деяких етапах йому потрібна допомога, з іншими він справляється самостійно. Свят спочатку запитує про його побажання й дає йому час. Узгоджена допомога записана у плані догляду. Питання руху він узгоджує з фахівчинею з догляду та терапевтичною командою. Разом вони обговорюють невеликі досяжні цілі. Свят повідомляє, які кроки пан Брандт сьогодні виконав сам.",
      "keys": [
        "selbst übernehmen",
        "lässt ihm Zeit",
        "Pflegeplan",
        "erreichbare Ziele"
      ],
      "phrases": [
        [
          "Was möchten Sie selbst versuchen?",
          "Що ви хотіли б спробувати самі?"
        ],
        [
          "Ich lasse Ihnen Zeit.",
          "Я дам вам час."
        ],
        [
          "Bei welchem Schritt brauchen Sie Hilfe?",
          "На якому етапі вам потрібна допомога?"
        ],
        [
          "Das haben Sie heute selbst geschafft.",
          "Сьогодні ви впоралися з цим самі."
        ],
        [
          "Welches Ziel ist Ihnen wichtig?",
          "Яка мета для вас важлива?"
        ],
        [
          "Wir stimmen uns im Team ab.",
          "Ми узгоджуємо це в команді."
        ],
        [
          "Ich unterstütze Sie nach dem vereinbarten Plan.",
          "Я допомагаю вам за узгодженим планом."
        ],
        [
          "Ich frage die Fachkraft nach der Empfehlung.",
          "Я запитаю фахівчиню про рекомендацію."
        ]
      ],
      "vocab": [
        [
          "die Rehabilitation",
          "реабілітація",
          "Rehabilitation unterstützt die Selbstständigkeit.",
          "Реабілітація підтримує самостійність."
        ],
        [
          "die Fähigkeit",
          "здатність; уміння",
          "Wir achten auf vorhandene Fähigkeiten.",
          "Ми зважаємо на наявні вміння."
        ],
        [
          "das Ziel",
          "мета",
          "Wir besprechen ein erreichbares Ziel.",
          "Ми обговорюємо досяжну мету."
        ],
        [
          "die Empfehlung",
          "рекомендація",
          "Ich frage nach der Empfehlung.",
          "Я запитую про рекомендацію."
        ],
        [
          "sich abstimmen",
          "узгоджувати дії",
          "Wir stimmen uns mit der Fachkraft ab.",
          "Ми узгоджуємо дії з фахівчинею."
        ],
        [
          "erreichbar",
          "досяжний",
          "Das Ziel soll erreichbar sein.",
          "Мета має бути досяжною."
        ]
      ],
      "dialogue": [
        [
          "Мешканець",
          "Ich möchte den Pullover selbst anziehen.",
          "Я хочу сам надягнути светр."
        ],
        [
          "Ти",
          "Gern. Bei welchem Schritt brauchen Sie Unterstützung?",
          "Звісно. На якому етапі вам потрібна допомога?"
        ],
        [
          "Мешканець",
          "Bitte helfen Sie mir nur am Anfang.",
          "Будь ласка, допоможіть мені лише на початку."
        ],
        [
          "Ти",
          "Ich unterstütze Sie so, wie es vereinbart ist.",
          "Я допоможу вам так, як узгоджено."
        ]
      ],
      "questions": [
        [
          "Was möchte Herr Brandt?",
          [
            "Mehr selbst übernehmen.",
            "Alle Fähigkeiten aufgeben.",
            "Keine Wünsche äußern."
          ],
          0,
          "Ключ: wieder mehr selbst übernehmen."
        ],
        [
          "Was macht Sviat zuerst?",
          [
            "Er entscheidet allein.",
            "Er fragt nach den Wünschen.",
            "Er schreibt eine Rechnung."
          ],
          1,
          "Спочатку він уточнює побажання людини."
        ],
        [
          "Was berichtet Sviat?",
          [
            "Nur seine Vermutungen.",
            "Eine neue Diagnose.",
            "Welche Schritte Herr Brandt selbst geschafft hat."
          ],
          2,
          "Він повідомляє конкретні спостереження про самостійно виконані кроки."
        ]
      ],
      "gapText": "Herr Brandt möchte mehr {{52}} übernehmen. Ich lasse {{53}} Zeit. Wir besprechen ein Ziel, {{54}} erreichbar ist.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "selbst",
            "sich",
            "sein"
          ],
          "answer": 0,
          "why": [
            "Selbst означає «сам»: mehr selbst übernehmen.",
            "Sich — зворотний займенник, тут не підходить.",
            "Sein — дієслово або присвійна форма, тут потрібне selbst."
          ],
          "rule": "selbst übernehmen — робити самостійно."
        },
        {
          "n": 53,
          "options": [
            "ihn",
            "er",
            "ihm"
          ],
          "answer": 2,
          "why": [
            "Ihn — Akkusativ, а в конструкції jemandem Zeit lassen потрібен Dativ.",
            "Er — Nominativ.",
            "Ihm — Dativ: дати йому час."
          ],
          "rule": "jemandem Zeit lassen → ihm Zeit lassen."
        },
        {
          "n": 54,
          "options": [
            "der",
            "das",
            "den"
          ],
          "answer": 1,
          "why": [
            "Der не узгоджується із середнім родом Ziel.",
            "Das Ziel → ein Ziel, das erreichbar ist.",
            "Den не є потрібною формою називного відмінка середнього роду."
          ],
          "rule": "Відносне речення: das Ziel, das … ist."
        }
      ],
      "writingPrompt": "Опиши одну дію, яку мешканець сьогодні виконав самостійно.",
      "model": "Herr Brandt hat den Pullover mit Unterstützung angezogen. Die vereinbarten Schritte hat er selbst übernommen. Ich habe ihm ausreichend Zeit gelassen.",
      "modelUA": "Пан Брандт надягнув светр із допомогою. Узгоджені етапи він виконав самостійно. Я дав йому достатньо часу.",
      "talk": "Попроси мешканця назвати важливу для нього мету. Узгодь свою допомогу.",
      "sources": [
        "bibb2026",
        "reg2026"
      ],
      "new": true
    },
    {
      "id": "palliativ",
      "title": "Паліативний догляд і присутність",
      "deTitle": "Begleitung in der letzten Lebensphase",
      "goal": "Говори спокійно, слухай побажання й передавай спостереження.",
      "reading": "Frau Sommer ist schwer krank und wird palliativ versorgt. Heute möchte sie Ruhe und wünscht sich, dass ihre Tochter bei ihr bleibt. Sviat hört zu und fragt, was ihr im Moment wichtig ist. Er spricht langsam und lässt Pausen zu. Als Frau Sommer über Schmerzen berichtet, informiert er die zuständige Pflegefachkraft. Er verspricht keine Änderung der Behandlung. In der Übergabe nennt er ihre Wünsche und seine Beobachtungen. Ihre Würde und ihre Entscheidungen bleiben wichtig.",
      "translation": "Пані Зоммер тяжко хвора й отримує паліативну допомогу. Сьогодні вона хоче спокою та щоб донька залишалася поруч. Свят слухає й запитує, що для неї зараз важливо. Він говорить повільно й дозволяє паузи. Коли пані Зоммер повідомляє про біль, він інформує відповідальну фахівчиню з догляду. Він не обіцяє змін лікування. Під час передачі зміни він називає її побажання та свої спостереження. Її гідність і рішення залишаються важливими.",
      "keys": [
        "Ruhe",
        "Tochter",
        "Schmerzen",
        "Pflegefachkraft",
        "Würde"
      ],
      "phrases": [
        [
          "Was ist Ihnen im Moment wichtig?",
          "Що для вас зараз важливо?"
        ],
        [
          "Möchten Sie, dass jemand bei Ihnen bleibt?",
          "Ви хотіли б, щоб хтось залишився поруч?"
        ],
        [
          "Ich höre Ihnen zu.",
          "Я вас слухаю."
        ],
        [
          "Wir können auch einen Moment schweigen.",
          "Ми також можемо хвилину помовчати."
        ],
        [
          "Ich nehme Ihre Beschwerden ernst.",
          "Я серйозно сприймаю ваші скарги."
        ],
        [
          "Ich gebe Ihren Wunsch an die Fachkraft weiter.",
          "Я передам ваше побажання фахівчині."
        ],
        [
          "Soll ich Ihre Tochter informieren lassen?",
          "Попросити, щоб повідомили вашій доньці?"
        ],
        [
          "Ich kann Ihnen dazu nichts versprechen.",
          "Я не можу вам цього пообіцяти."
        ]
      ],
      "vocab": [
        [
          "die Würde",
          "гідність",
          "Die Würde des Menschen bleibt wichtig.",
          "Гідність людини залишається важливою."
        ],
        [
          "die Begleitung",
          "супровід; підтримка",
          "Die Begleitung richtet sich nach ihren Wünschen.",
          "Супровід орієнтується на її побажання."
        ],
        [
          "die Ruhe",
          "спокій",
          "Frau Sommer möchte Ruhe.",
          "Пані Зоммер хоче спокою."
        ],
        [
          "schweigen",
          "мовчати",
          "Wir dürfen auch schweigen.",
          "Ми також можемо помовчати."
        ],
        [
          "die Lebensphase",
          "етап життя",
          "Wir begleiten Menschen in der letzten Lebensphase.",
          "Ми супроводжуємо людей на останньому етапі життя."
        ],
        [
          "palliativ",
          "паліативний; паліативно",
          "Frau Sommer wird palliativ versorgt.",
          "Пані Зоммер отримує паліативну допомогу."
        ]
      ],
      "dialogue": [
        [
          "Ти",
          "Was ist Ihnen gerade wichtig, Frau Sommer?",
          "Що для вас зараз важливо, пані Зоммер?"
        ],
        [
          "Мешканка",
          "Ich möchte, dass meine Tochter bei mir bleibt.",
          "Я хочу, щоб моя донька залишалася поруч."
        ],
        [
          "Ти",
          "Ich gebe Ihren Wunsch an meine Kollegin weiter.",
          "Я передам ваше побажання своїй колезі."
        ],
        [
          "Мешканка",
          "Danke. Im Moment möchte ich nicht viel sprechen.",
          "Дякую. Зараз я не хочу багато говорити."
        ]
      ],
      "questions": [
        [
          "Was wünscht sich Frau Sommer?",
          [
            "Eine neue Rechnung.",
            "Dass ihre Tochter bei ihr bleibt.",
            "Dass niemand ihre Wünsche hört."
          ],
          1,
          "Вона хоче спокою та присутності доньки."
        ],
        [
          "Was tut Sviat bei der Schmerzäußerung?",
          [
            "Er verspricht eine andere Behandlung.",
            "Er ignoriert die Aussage.",
            "Er informiert die zuständige Pflegefachkraft."
          ],
          2,
          "Він передає скаргу відповідальній фахівчині."
        ],
        [
          "Was nennt er in der Übergabe?",
          [
            "Wünsche und Beobachtungen.",
            "Nur Vermutungen.",
            "Eine eigene Verordnung."
          ],
          0,
          "У тексті: ihre Wünsche und seine Beobachtungen."
        ]
      ],
      "gapText": "Frau Sommer möchte, {{52}} ihre Tochter bleibt. Ich höre {{53}} zu. Ihren Wunsch gebe ich {{54}} die Pflegefachkraft weiter.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "wenn",
            "weil",
            "dass"
          ],
          "answer": 2,
          "why": [
            "Wenn позначає умову, а тут зміст побажання.",
            "Weil називає причину.",
            "Möchte, dass … — хоче, щоб…"
          ],
          "rule": "Побажання: möchte, dass … bleibt."
        },
        {
          "n": 53,
          "options": [
            "ihr",
            "sie",
            "ihre"
          ],
          "answer": 0,
          "why": [
            "Zuhören вимагає Dativ: ihr zuhören.",
            "Sie — тут Akkusativ або Nominativ, потрібен Dativ.",
            "Ihre — присвійна форма, не потрібний займенник."
          ],
          "rule": "jemandem zuhören → ihr zuhören."
        },
        {
          "n": 54,
          "options": [
            "mit",
            "an",
            "von"
          ],
          "answer": 1,
          "why": [
            "Mit означає «з», а адресата переданої інформації вводить an.",
            "Etwas an jemanden weitergeben — передати комусь.",
            "Von позначає джерело, а тут адресат."
          ],
          "rule": "an die Pflegefachkraft weitergeben."
        }
      ],
      "writingPrompt": "Запиши побажання мешканки та кому його передали.",
      "model": "Frau Sommer möchte Ruhe und die Anwesenheit ihrer Tochter. Sie berichtet über Schmerzen. Die zuständige Pflegefachkraft wurde informiert.",
      "modelUA": "Пані Зоммер хоче спокою та присутності доньки. Вона повідомляє про біль. Відповідальну фахівчиню з догляду поінформовано.",
      "talk": "Слухай побажання. Зроби паузу й потренуй спокійну передачу інформації.",
      "sources": [
        "bibb2026",
        "reg2026"
      ],
      "new": true
    },
    {
      "id": "pruefungssprache",
      "title": "Розуміти запитання на іспиті",
      "deTitle": "Prüfungsaufträge verstehen",
      "goal": "Розрізняй «назвати», «описати», «пояснити» й «обґрунтувати».",
      "reading": "In einer Übung liest Sviat eine kurze Fallsituation. Frau Klein hat beim Frühstück wenig getrunken und sagt, dass ihr das Wasser zu kalt ist. Die Aufgabe lautet: Nennen Sie zwei Beobachtungen. Sviat nennt zuerst die geringe Trinkmenge und dann die Aussage von Frau Klein. Bei Beschreiben Sie soll er den Ablauf genauer darstellen. Bei Begründen Sie erklärt er, warum eine Handlung sinnvoll ist. Er liest den Auftrag genau und trennt Beobachtung und Vermutung.",
      "translation": "На тренуванні Свят читає короткий випадок. Пані Кляйн мало випила за сніданком і каже, що вода для неї надто холодна. Завдання: назвіть два спостереження. Свят спочатку називає малу кількість випитого, потім слова пані Кляйн. У завданні «Опишіть» він має докладніше подати перебіг. У завданні «Обґрунтуйте» пояснює, чому дія доцільна. Він уважно читає умову й відокремлює спостереження від припущень.",
      "keys": [
        "Nennen",
        "Beschreiben",
        "Begründen",
        "Auftrag",
        "Vermutung"
      ],
      "phrases": [
        [
          "Nennen Sie zwei Beobachtungen.",
          "Назвіть два спостереження."
        ],
        [
          "Beschreiben Sie die Situation.",
          "Опишіть ситуацію."
        ],
        [
          "Erklären Sie den Unterschied.",
          "Поясніть різницю."
        ],
        [
          "Begründen Sie Ihre Antwort.",
          "Обґрунтуйте свою відповідь."
        ],
        [
          "Erläutern Sie Ihr Vorgehen.",
          "Поясніть докладніше свої дії."
        ],
        [
          "Welche Information fehlt noch?",
          "Якої інформації ще бракує?"
        ],
        [
          "Ich unterscheide zwischen Beobachtung und Vermutung.",
          "Я розрізняю спостереження та припущення."
        ],
        [
          "Ich würde zunächst nachfragen, weil die Information fehlt.",
          "Я б спочатку уточнив, тому що бракує інформації."
        ]
      ],
      "vocab": [
        [
          "nennen",
          "називати",
          "Ich nenne zwei Beobachtungen.",
          "Я називаю два спостереження."
        ],
        [
          "beschreiben",
          "описувати",
          "Ich beschreibe die Situation sachlich.",
          "Я описую ситуацію фактично."
        ],
        [
          "begründen",
          "обґрунтовувати",
          "Ich begründe meine Antwort.",
          "Я обґрунтовую свою відповідь."
        ],
        [
          "erläutern",
          "докладно пояснювати",
          "Ich erläutere mein Vorgehen.",
          "Я докладно пояснюю свої дії."
        ],
        [
          "die Vermutung",
          "припущення",
          "Eine Vermutung ist keine Beobachtung.",
          "Припущення — не спостереження."
        ],
        [
          "die Aufgabenstellung",
          "умова завдання",
          "Ich lese die Aufgabenstellung genau.",
          "Я уважно читаю умову завдання."
        ]
      ],
      "dialogue": [
        [
          "Викладачка",
          "Nennen Sie zwei Beobachtungen aus dem Fall.",
          "Назвіть два спостереження з випадку."
        ],
        [
          "Ти",
          "Frau Klein hat wenig getrunken. Sie sagt, dass ihr das Wasser zu kalt ist.",
          "Пані Кляйн мало випила. Вона каже, що вода для неї надто холодна."
        ],
        [
          "Викладачка",
          "Warum fragen Sie nach ihren Wünschen?",
          "Чому ви уточнюєте її побажання?"
        ],
        [
          "Ти",
          "Weil ich ihre Bedürfnisse verstehen und die Unterstützung abstimmen möchte.",
          "Тому що хочу зрозуміти її потреби й узгодити допомогу."
        ]
      ],
      "questions": [
        [
          "Was verlangt Nennen Sie?",
          [
            "Eine vollständige Diagnose.",
            "Eine Behandlung verordnen.",
            "Die geforderten Punkte angeben."
          ],
          2,
          "Nennen означає назвати потрібні пункти."
        ],
        [
          "Was gehört zu Begründen Sie?",
          [
            "Erklären, warum etwas sinnvoll ist.",
            "Nur ein einzelnes Wort wiederholen.",
            "Die Frage auslassen."
          ],
          0,
          "Begründen вимагає аргументу: чому ви так відповідаєте чи дієте."
        ],
        [
          "Was ist im Fall als Aussage belegt?",
          [
            "Frau Klein hat nie Durst.",
            "Das Wasser ist ihr zu kalt.",
            "Frau Klein lehnt jede Hilfe ab."
          ],
          1,
          "Підтверджено лише слова про надто холодну воду; інше — припущення."
        ]
      ],
      "gapText": "Ich nenne zwei Beobachtungen {{52}} dem Fall. Ich frage nach, {{53}} ich die Wünsche verstehen möchte. Bei einer Begründung erkläre ich, {{54}} ich so handle.",
      "gaps": [
        {
          "n": 52,
          "options": [
            "aus",
            "gegen",
            "ohne"
          ],
          "answer": 0,
          "why": [
            "Aus dem Fall — із випадку.",
            "Gegen означає «проти», тут не відповідає змісту.",
            "Ohne означає «без», а спостереження беруть із випадку."
          ],
          "rule": "aus + Dativ → aus dem Fall."
        },
        {
          "n": 53,
          "options": [
            "obwohl",
            "weil",
            "trotzdem"
          ],
          "answer": 1,
          "why": [
            "Obwohl вводить поступку, тут пояснюється причина.",
            "Weil називає причину перепитування.",
            "Trotzdem — прислівник для головного речення."
          ],
          "rule": "weil … verstehen möchte."
        },
        {
          "n": 54,
          "options": [
            "wer",
            "wo",
            "warum"
          ],
          "answer": 2,
          "why": [
            "Wer — хто, тут потрібна причина.",
            "Wo — де, тут потрібна причина.",
            "Warum — чому: пояснює обґрунтування дії."
          ],
          "rule": "Непряме запитання: warum ich so handle."
        }
      ],
      "writingPrompt": "Назви два факти з випадку та обґрунтуй одне уточнювальне запитання.",
      "model": "Frau Klein hat beim Frühstück wenig getrunken. Sie sagt, dass ihr das Wasser zu kalt ist. Ich frage nach ihren Wünschen, weil ich ihre Bedürfnisse verstehen möchte.",
      "modelUA": "Пані Кляйн мало випила за сніданком. Вона каже, що вода для неї надто холодна. Я уточнюю її побажання, тому що хочу зрозуміти її потреби.",
      "talk": "Прочитай умову, назви факти й додай коротке обґрунтування з weil.",
      "sources": [
        "bibb2026",
        "reg2026"
      ],
      "new": true
    }
  ],
  "matches": [
    {
      "id": "alltag",
      "title": "Потреби мешканців",
      "intro": "Прочитай усі прохання та всі відповіді. Для кожного номера вибери a–f або X, якщо відповідної відповіді немає. X є окремим варіантом.",
      "responses": [
        [
          "a",
          "Ich hole Ihnen ein Glas Wasser.",
          "Я принесу Вам склянку води."
        ],
        [
          "b",
          "Ich kläre, welche Unterstützung beim Gehen vereinbart ist.",
          "Я уточню узгоджену допомогу під час ходьби."
        ],
        [
          "c",
          "Ich frage meine Kollegin nach der Rückrufabsprache.",
          "Я уточню в колеги домовленість про зворотний дзвінок."
        ],
        [
          "d",
          "Ich informiere die zuständige Pflegefachkraft über Ihre Beschwerden.",
          "Я повідомлю відповідальну Pflegefachkraft про Ваші скарги."
        ],
        [
          "e",
          "Natürlich, wir müssen darüber nicht sprechen.",
          "Звісно, ми не мусимо про це говорити."
        ],
        [
          "f",
          "Ich schließe die Tür.",
          "Я зачиню двері."
        ]
      ],
      "items": [
        {
          "n": 1,
          "text": "Mir ist übel.",
          "ua": "Мене нудить.",
          "answer": "d",
          "why": "Мешканець повідомляє про скаргу; відповідна реакція — передати інформацію Pflegefachkraft."
        },
        {
          "n": 2,
          "text": "Können Sie bitte die Tür zumachen?",
          "ua": "Можете, будь ласка, зачинити двері?",
          "answer": "f",
          "why": "Zumachen і schließen тут синоніми: зачинити."
        },
        {
          "n": 3,
          "text": "Ich möchte ein Glas Wasser.",
          "ua": "Я хотів би склянку води.",
          "answer": "a",
          "why": "Відповідь a безпосередньо стосується прохання про воду."
        },
        {
          "n": 4,
          "text": "Bitte erklären Sie mir die Kosten meines Mietvertrags.",
          "ua": "Поясніть, будь ласка, витрати за моїм договором оренди.",
          "answer": "x",
          "why": "Жодна відповідь a–f не пояснює договір оренди. Обирай X."
        },
        {
          "n": 5,
          "text": "Über meine Familie möchte ich heute nicht sprechen.",
          "ua": "Про родину я сьогодні не хочу говорити.",
          "answer": "e",
          "why": "Відповідь e приймає бажання не обговорювати цю тему."
        }
      ]
    },
    {
      "id": "team",
      "title": "Команда: обери відповідну реакцію",
      "intro": "Усі ситуації та відповіді видно разом. Натискай літеру в рядку потрібного номера.",
      "responses": [
        [
          "a",
          "Kannst du mir den Begriff bitte erklären?",
          "Можеш, будь ласка, пояснити цей термін?"
        ],
        [
          "b",
          "Ich habe die Temperatur nicht gemessen.",
          "Я не вимірював температуру."
        ],
        [
          "c",
          "Ich frage nach, wer heute zuständig ist.",
          "Я уточню, хто сьогодні відповідальний."
        ],
        [
          "d",
          "Ich schreibe ihre Aussage mit dem Zeitpunkt auf.",
          "Я запишу її слова разом із часом."
        ],
        [
          "e",
          "Kannst du mir das Vorgehen bitte zeigen?",
          "Можеш показати мені порядок дій?"
        ],
        [
          "f",
          "Ich gebe nur die bekannten Beobachtungen weiter.",
          "Я передаю лише відомі спостереження."
        ]
      ],
      "items": [
        {
          "n": 13,
          "text": "Du verstehst ein Fachwort nicht.",
          "ua": "Ти не розумієш професійне слово.",
          "answer": "a",
          "why": "Потрібно попросити пояснити термін — відповідь a."
        },
        {
          "n": 14,
          "text": "Eine Aufgabe ist für dich neu.",
          "ua": "Завдання для тебе нове.",
          "answer": "e",
          "why": "До незнайомої дії доречно попросити показати порядок виконання."
        },
        {
          "n": 15,
          "text": "Du suchst eine Antwort zur Urlaubsbuchung im Reisebüro.",
          "ua": "Тобі потрібна відповідь щодо бронювання відпустки в турагенції.",
          "answer": "x",
          "why": "Серед відповідей немає інформації про бронювання подорожі: X."
        },
        {
          "n": 16,
          "text": "Jemand fragt nach einem Temperaturwert, den du nicht erhoben hast.",
          "ua": "Хтось запитує значення температури, якої ти не вимірював.",
          "answer": "b",
          "why": "Потрібно прямо сказати, що температуру не вимірювали."
        },
        {
          "n": 17,
          "text": "Du weißt nicht, wer deine Ansprechperson ist.",
          "ua": "Ти не знаєш, хто твоя контактна особа.",
          "answer": "c",
          "why": "Відповідь c уточнює відповідальну особу."
        }
      ]
    }
  ],
  "sources": [
    {
      "id": "pflege1",
      "title": "uebungstest_pflege.pdf",
      "pages": 56,
      "status": "text",
      "use": "Основне джерело тем: догляд і планування, біографія, передача зміни, близькість і дистанція, командна робота.",
      "selected": "PDF 9–15, 20–23, 26–29; витягнуто весь доступний текстовий шар."
    },
    {
      "id": "aerzte",
      "title": "Deutsch für Ärztinnen und Ärzte",
      "pages": 240,
      "status": "text",
      "use": "Мовні прийоми: уточнення скарг, активне слухання, зрозумілі запитання, спілкування з людьми з деменцією.",
      "selected": "PDF 29–40, 155–157, 169–176. Лікарські алгоритми не є змістом курсу."
    },
    {
      "id": "medsprach",
      "title": "Sprachbausteine Deutsch B2–C1 Medizin",
      "pages": 84,
      "status": "text",
      "use": "Сполучники, прийменники та побудова фраз. Вправи курсу створено заново для Pflege.",
      "selected": "Витягнуто доступний текст усіх сторінок. Частина оригінальних рядків обрізана у текстовому шарі."
    },
    {
      "id": "fit",
      "title": "Fit für die Fachsprachprüfung in nur 1 Woche",
      "pages": 128,
      "status": "text",
      "use": "Ввічливі фрази, емпатія, уточнення та аналіз помилок у спілкуванні.",
      "selected": "PDF 16–20, 28–35, 43–52, 118."
    },
    {
      "id": "fsp",
      "title": "Fachsprachprüfung – erfolgreich bestehen!",
      "pages": 636,
      "status": "text",
      "use": "Різниця між словами людини та професійним повідомленням; мовні конструкції документації.",
      "selected": "PDF 44–51, 76–80. Власні діагнози й призначення не тренуються."
    },
    {
      "id": "innere",
      "title": "Die 50 wichtigsten Fälle Innere Medizin",
      "pages": 590,
      "status": "text",
      "use": "Відібрано лише лексику скарг: Schwindel, Übelkeit, Atemnot, Schmerzen.",
      "selected": "Текстовий шар витягнуто; клінічні схеми лікування не включено."
    },
    {
      "id": "paed",
      "title": "Fallbuch Pädiatrie",
      "pages": 334,
      "status": "text",
      "use": "Переглянуто як джерело. Дитячі клінічні випадки не включено до основного курсу Altenheim.",
      "selected": "Текстовий шар витягнуто. Додаткова література, не базовий матеріал для цієї мети."
    },
    {
      "id": "scan-sprach",
      "title": "Sprachbausteine Deutsch B1–B2 Pflege",
      "pages": 12,
      "status": "scan",
      "use": "Сканований PDF без текстового шару.",
      "selected": "Текст не розпізнано в цій збірці. На Android доступний локальний імпорт PDF з OCR."
    },
    {
      "id": "scan-test2",
      "title": "516417267-pflege-test-model-2 (1).pdf",
      "pages": 55,
      "status": "scan",
      "use": "Сканований другий модельний тест.",
      "selected": "Текст не розпізнано в цій збірці. Оригінальні завдання не позначаються як опрацьовані."
    },
    {
      "id": "scan-grammar",
      "title": "Grammatik aktiv B1+",
      "pages": 108,
      "status": "scan",
      "use": "Сканований граматичний посібник.",
      "selected": "Текст не розпізнано в цій збірці. Граматичні пояснення курсу авторські."
    }
  ],
  "dictionary": {
    "ich": "я",
    "du": "ти",
    "er": "він",
    "sie": "вона; вони; Ви (з великої літери)",
    "es": "воно; це",
    "wir": "ми",
    "ihr": "ви; її; їй (залежить від контексту)",
    "ihre": "її; їхні; Ваші",
    "ihren": "її; їхніх; Ваших",
    "ihrem": "її; їхньому; Вашому",
    "ihres": "її; їхнього; Вашого",
    "ihnen": "їм; Вам",
    "ihm": "йому",
    "ihn": "його",
    "mich": "мене",
    "mir": "мені",
    "dich": "тебе",
    "dir": "тобі",
    "uns": "нас; нам",
    "euch": "вас; вам",
    "mein": "мій",
    "meine": "моя; мої",
    "meinen": "мого; моїх",
    "meiner": "моєї; моїй",
    "meinem": "моєму",
    "deine": "твоя; твої",
    "seine": "його",
    "seinen": "його",
    "seinem": "його",
    "der": "означений артикль; який",
    "die": "означений артикль; яка; які",
    "das": "означений артикль; це",
    "dem": "артикль у Dativ",
    "den": "артикль у Akkusativ або Dativ множини",
    "des": "артикль у Genitiv",
    "ein": "один; неозначений артикль",
    "eine": "одна; неозначений артикль",
    "einen": "одного; артикль",
    "einem": "одному; у одного",
    "einer": "однієї; одній",
    "eines": "одного",
    "kein": "жодний; не",
    "keine": "жодна; немає",
    "keinen": "жодного; жодних",
    "keiner": "жодної",
    "und": "і; та",
    "oder": "або; чи",
    "aber": "але",
    "weil": "тому що",
    "dass": "що (сполучник)",
    "wenn": "якщо; коли",
    "ob": "чи (непряме запитання)",
    "obwohl": "хоча",
    "denn": "адже; бо; ж (залежить від контексту)",
    "deshalb": "тому; через це",
    "trotzdem": "попри це",
    "bevor": "перш ніж",
    "nachdem": "після того як",
    "damit": "щоб; цим",
    "also": "отже",
    "als": "коли (разова подія в минулому); ніж",
    "um": "о (час); навколо; для того щоб",
    "zu": "до; надто; частка перед інфінітивом",
    "zur": "до (zu der)",
    "zum": "до (zu dem)",
    "im": "у; в (in dem)",
    "ins": "у; в (in das, напрям)",
    "in": "у; в",
    "am": "на; біля; у (an dem)",
    "an": "на; біля; до",
    "auf": "на",
    "mit": "з",
    "bei": "біля; при; під час",
    "beim": "під час; при (bei dem)",
    "vom": "від; про (von dem)",
    "von": "від; про",
    "für": "для",
    "ohne": "без",
    "gegen": "проти; близько (час)",
    "seit": "із; від (час)",
    "nach": "після; префікс nachfragen",
    "vor": "перед; до",
    "neben": "біля; поруч із",
    "über": "про; над",
    "unter": "під; серед",
    "aus": "із; з",
    "durch": "через",
    "während": "під час; тоді як",
    "hier": "тут",
    "dort": "там",
    "heute": "сьогодні",
    "jetzt": "зараз",
    "gerade": "зараз; саме",
    "noch": "ще",
    "schon": "вже",
    "erst": "лише; спочатку",
    "zuerst": "спочатку",
    "danach": "після цього",
    "vorher": "перед цим",
    "später": "пізніше",
    "bisher": "досі; поки що",
    "wieder": "знову",
    "erneut": "повторно",
    "nur": "лише",
    "auch": "також",
    "nicht": "не",
    "nichts": "нічого",
    "alles": "усе",
    "etwas": "щось; трохи",
    "viel": "багато",
    "viele": "багато",
    "vieles": "багато чого",
    "wenig": "мало",
    "wenigen": "небагатьох",
    "sehr": "дуже",
    "ganz": "цілком; зовсім",
    "genau": "точно; саме",
    "bitte": "будь ласка",
    "danke": "дякую",
    "ja": "так",
    "nein": "ні",
    "natürlich": "звісно",
    "gern": "охоче; із задоволенням",
    "gerne": "охоче",
    "lieber": "краще; охочіше",
    "wie": "як",
    "was": "що",
    "wer": "хто",
    "wo": "де",
    "wohin": "куди",
    "wobei": "у чому; під час чого",
    "warum": "чому",
    "wann": "коли",
    "worüber": "про що",
    "welche": "яка; які",
    "welcher": "який; якої",
    "welches": "яке",
    "welchen": "якого; яких",
    "sich": "себе; собі (зворотний займенник)",
    "selbst": "сам; самостійно",
    "allein": "сам; самостійно",
    "alleine": "сам; самостійно",
    "eigenen": "власними; власних",
    "eigene": "власна; власні",
    "bin": "є; я є",
    "bist": "є; ти є",
    "ist": "є",
    "sind": "є",
    "seid": "є (ви)",
    "sein": "бути; його",
    "war": "був; була",
    "waren": "були",
    "wäre": "був би; була б",
    "sei": "є (передача чужих слів)",
    "hat": "має; допоміжне дієслово",
    "habe": "маю; допоміжне дієслово",
    "haben": "мати; допоміжне дієслово",
    "hast": "маєш",
    "hatte": "мав; мала",
    "wird": "стає; буде; пасив",
    "werden": "ставати; допоміжне дієслово",
    "wurde": "був; була (пасив)",
    "wurden": "були (пасив)",
    "kann": "може",
    "kannst": "можеш",
    "können": "могти",
    "könnt": "можете",
    "könnte": "міг би; могла б",
    "möchte": "хотів би; хотіла б",
    "möchten": "хотіли б",
    "muss": "мусить; мушу",
    "musst": "мусиш",
    "müssen": "мусити",
    "soll": "слід; має (доручення)",
    "sollst": "маєш (доручення)",
    "sollen": "слід; мають",
    "darf": "можна; має дозвіл",
    "darfst": "можеш; маєш дозвіл",
    "dürfen": "мати дозвіл",
    "will": "хоче; хочу",
    "wollen": "хотіти",
    "macht": "робить",
    "mache": "роблю",
    "machen": "робити",
    "gemacht": "зроблено; зробив",
    "geht": "йде; почувається",
    "gehen": "іти",
    "kommt": "приходить",
    "kommen": "приходити",
    "komm": "підійди; прийди",
    "kam": "прийшов; прийшла",
    "heiße": "мене звати",
    "heißen": "називатися",
    "spricht": "говорить",
    "spreche": "говорю",
    "sprechen": "говорити",
    "gesprochen": "говорив; сказаний",
    "sagt": "каже",
    "sage": "кажу",
    "sagen": "казати",
    "sagte": "сказав; сказала",
    "gesagt": "сказав; сказано",
    "fragt": "запитує",
    "frage": "запитання; запитую",
    "fragen": "запитання; запитувати",
    "gefragt": "запитав",
    "antwort": "відповідь",
    "antworten": "відповіді; відповідати",
    "antwortet": "відповідає",
    "braucht": "потребує",
    "brauchen": "потребувати",
    "brauche": "потребую",
    "benötigt": "потребує",
    "versteht": "розуміє",
    "verstehe": "розумію",
    "verstehen": "розуміти",
    "verstanden": "зрозумів",
    "kenne": "знаю",
    "kennt": "знає",
    "kennen": "знати",
    "weiß": "знає; знаю",
    "wissen": "знати",
    "weiss": "знає; знаю",
    "lerne": "вчуся",
    "lernen": "учитися",
    "zeigen": "показувати",
    "zeige": "показую",
    "zeigt": "показує",
    "erklärt": "пояснює; пояснений",
    "erkläre": "пояснюю",
    "erklären": "пояснювати",
    "helfen": "допомагати",
    "helfe": "допомагаю",
    "hilft": "допомагає",
    "hört": "слухає",
    "höre": "слухаю",
    "hören": "слухати",
    "zuhören": "слухати уважно",
    "zuhört": "уважно слухає",
    "zugehört": "вислухав",
    "gibt": "дає; є",
    "gebe": "даю; передаю",
    "geben": "давати",
    "weiter": "далі; відокремлюваний префікс",
    "weitergeben": "передавати інформацію",
    "weiterleiten": "переадресувати; передати далі",
    "leite": "переадресовую (leite … weiter)",
    "leitet": "переадресовує (leitet … weiter)",
    "nimmt": "бере",
    "nehme": "беру",
    "nehmen": "брати",
    "aufnehmen": "приймати; записувати",
    "annehmen": "приймати",
    "verspricht": "обіцяє",
    "versprechen": "обіцяти",
    "isst": "їсть",
    "esse": "їм",
    "essen": "їсти",
    "aß": "їв; їла",
    "gegessen": "їв; з’їдений",
    "trinkt": "п’є",
    "trinke": "п’ю",
    "trinken": "пити",
    "trank": "пив; пила",
    "getrunken": "випив; випитий",
    "waschen": "мити; прати",
    "wäscht": "миє",
    "gewaschen": "помив; помитий",
    "anziehen": "одягати",
    "anlegen": "накладати; одягати; встановлювати",
    "schließen": "зачиняти",
    "schließe": "зачиняю",
    "geschlossen": "зачинений",
    "zumachen": "зачиняти",
    "öffnen": "відчиняти",
    "liegt": "лежить",
    "liegen": "лежати",
    "stehen": "стояти",
    "steht": "стоїть",
    "sitzen": "сидіти",
    "sitzt": "сидить",
    "aufstehen": "вставати",
    "hinsetzen": "сісти",
    "begleiten": "супроводжувати",
    "benutzen": "користуватися",
    "vereinbart": "узгоджений",
    "vereinbaren": "домовлятися",
    "geplante": "запланована; заплановану",
    "geplant": "запланований",
    "ab": "від; відокремлюваний префікс",
    "stimmt": "погоджує; правильно (контекст)",
    "abstimmen": "узгоджувати",
    "beachten": "зважати; дотримуватися",
    "achte": "зважаю; дотримуюся",
    "achtet": "зважає",
    "respektiert": "поважає",
    "respektiere": "поважаю",
    "respektieren": "поважати",
    "wünsche": "побажання; бажаю",
    "wünscht": "бажає",
    "wünschen": "побажанням; бажати",
    "wunsch": "побажання",
    "äußert": "висловлює",
    "äußern": "висловлювати",
    "äußerte": "висловив; висловила",
    "geäußert": "висловив; висловлено",
    "äußerungen": "висловлювання",
    "berichtet": "повідомляє; повідомлено",
    "berichte": "повідомляю",
    "berichten": "повідомляти",
    "berichtete": "повідомив; повідомила",
    "beschreibt": "описує",
    "beschreiben": "описувати",
    "beschreibe": "опиши; описую",
    "notiert": "записує",
    "notiere": "записую",
    "notieren": "записувати",
    "dokumentiert": "документує; задокументовано",
    "dokumentiere": "документую",
    "dokumentieren": "документувати",
    "dokumentierte": "документував",
    "schreibt": "пише",
    "schreibe": "пишу; напиши",
    "schreiben": "писати",
    "geschrieben": "написав; написаний",
    "informiere": "повідомляю",
    "informiert": "поінформований; повідомляє",
    "informieren": "повідомляти",
    "informierte": "повідомив; повідомила",
    "hole": "кличу; принесу",
    "holt": "кличе; приносить",
    "holen": "кликати; принести",
    "dazu": "до цього; щодо цього",
    "hinzu": "додатково; залучаючи",
    "bespricht": "обговорює",
    "bespreche": "обговорюю",
    "besprechen": "обговорювати",
    "besprochen": "обговорив; обговорено",
    "besprach": "обговорив; обговорила",
    "wiederhole": "повторюю",
    "wiederholt": "повторює; неодноразово",
    "wiederholen": "повторювати",
    "fasst": "підсумовує (fasst … zusammen)",
    "zusammen": "разом; префікс zusammenfassen",
    "zusammenfassen": "підсумовувати",
    "übernimmt": "бере на себе",
    "übernehme": "беру на себе",
    "übernehmen": "брати на себе; виконувати",
    "beobachtet": "спостерігав; спостерігає",
    "beobachte": "спостерігаю",
    "beobachten": "спостерігати",
    "aufgefallen": "помічений; впав в око",
    "auffallen": "впадати в око; бути поміченим",
    "bestehen": "існувати; тривати; скласти іспит",
    "besteht": "існує; триває",
    "gemessen": "виміряв; виміряний",
    "messen": "вимірювати",
    "erhoben": "зібраний; виміряний",
    "erheben": "збирати дані; вимірювати",
    "nennt": "називає",
    "nenne": "називаю",
    "nennen": "називати",
    "fehlen": "бракувати; бути відсутнім",
    "fehlt": "бракує",
    "stammt": "походить; отримано від",
    "stammen": "походити",
    "wirkt": "виглядає; справляє враження",
    "wirken": "виглядати; справляти враження",
    "wartet": "чекає",
    "warte": "чекаю; почекай",
    "warten": "чекати",
    "abwarten": "дочекатися",
    "bleibt": "залишається",
    "bleibe": "залишаюся",
    "bleib": "залишайся; дотримуйся",
    "bleiben": "залишатися",
    "ernst": "серйозно",
    "widerspricht": "заперечує",
    "unterscheidet": "розрізняє",
    "unterscheiden": "розрізняти",
    "klärt": "уточнює",
    "kläre": "уточнюю",
    "klären": "уточнювати; з’ясовувати",
    "nachfragen": "перепитувати; уточнювати",
    "bittet": "просить",
    "bitten": "просити",
    "anleiten": "інструктувати; керувати виконанням",
    "lässt": "дозволяє; дає (lässt sich zeigen — просить показати)",
    "lassen": "дозволяти; залишати",
    "teilnehmen": "брати участь",
    "teilnimmt": "бере участь",
    "teilzunehmen": "взяти участь (інфінітив із zu)",
    "entscheiden": "вирішувати",
    "entscheidet": "вирішує",
    "erzählt": "розповідає; розказаний",
    "erzählen": "розповідати",
    "gearbeitet": "працював; працювала",
    "arbeitete": "працював; працювала",
    "arbeitet": "працює",
    "arbeiten": "працювати",
    "beibehalten": "зберігати; дотримуватися надалі",
    "vertragen": "переносити; засвоювати",
    "verträgt": "переносить",
    "schlucken": "ковтати",
    "tut": "робить (tut weh — болить)",
    "weh": "боляче (wehtun — боліти)",
    "fällt": "падає; помічається (fällt auf)",
    "geändert": "змінений",
    "ändern": "змінювати",
    "vermittelt": "передає; організовує контакт",
    "vermitteln": "організовувати контакт; посередничати",
    "bekommen": "отримувати",
    "bekomme": "отримую",
    "bekommt": "отримує",
    "zurückrufen": "передзвонити",
    "müde": "втомлений",
    "besorgt": "стурбований",
    "ruhig": "спокійний; спокійно",
    "deutlich": "чітко; виразно",
    "angenehm": "приємний; приємно",
    "unangenehm": "неприємний; неприємно",
    "kalt": "холодно; холодний",
    "warm": "тепло; теплий",
    "kühl": "прохолодний; прохолодно",
    "heiß": "гарячий; гаряче",
    "gut": "добре; хороший",
    "besser": "краще",
    "schlecht": "погано; поганий (mir ist schlecht — мене нудить)",
    "schwindelig": "із запамороченням (mir ist schwindelig — у мене паморочиться голова)",
    "übel": "нудить; недобре",
    "bequem": "зручно; зручний",
    "kurz": "коротко; короткий",
    "kurze": "коротка; коротку",
    "kurzen": "короткого; короткий",
    "klein": "малий",
    "groß": "великий",
    "richtige": "правильна; правильну",
    "richtig": "правильно",
    "falsch": "неправильно; хибний",
    "falsches": "щось неправильне",
    "unsicher": "невпевнений",
    "sicher": "надійний; певний",
    "sachlich": "об’єктивно; по суті",
    "diskret": "делікатно; непомітно",
    "respektvoll": "шанобливо",
    "klar": "зрозуміло; чітко",
    "offen": "відкритий; ще не з’ясований",
    "eigentlich": "власне; насправді",
    "tatsächlich": "насправді; фактично",
    "bekannten": "відомих",
    "bekannt": "відомий",
    "bekanntes": "відоме",
    "neue": "нова; нові",
    "neu": "новий",
    "unbekannte": "незнайому; незнайома",
    "unbekannten": "незнайомого; незнайомих",
    "zuständig": "відповідальний; уповноважений",
    "zuständige": "відповідальна; відповідальну",
    "zuständigen": "відповідальної; відповідального",
    "bestätigter": "підтвердженої; підтвердженою",
    "bestätigt": "підтверджений",
    "gesicherte": "підтверджена; достовірна",
    "gesicherten": "підтвердженої; достовірних",
    "lange": "довго",
    "ausführlich": "докладно",
    "früher": "раніше; колись",
    "nachmittags": "після обіду; пообіддя",
    "plötzlich": "раптом",
    "plötzlich auftretenden": "тих, що виникають раптово",
    "schweren": "тяжких; важких",
    "zeitnah": "своєчасно; найближчим часом",
    "sofort": "негайно",
    "folgendes": "таке; нижченаведене",
    "ganzen": "усього; цілого",
    "linken": "лівому; лівого",
    "linkes": "ліве",
    "rechten": "правому; правого",
    "halbes": "половина; половинний",
    "vegetarische": "вегетаріанська; вегетаріанську",
    "weiteren": "подальшого; подальшої",
    "andere": "інші",
    "anderen": "інших",
    "stark": "сильно; сильний",
    "zunächst": "поки що; спершу",
    "möglichst": "якомога",
    "morgen": "ранок; завтра (залежить від контексту)",
    "guten": "доброго",
    "tag": "день",
    "nacht": "ніч",
    "abend": "вечір",
    "frühdienst": "ранкова зміна",
    "nachtdienst": "нічна зміна",
    "beginn": "початок",
    "uhr": "година (у позначенні часу)",
    "acht": "вісім",
    "neun": "дев’ять",
    "zwölf": "дванадцять",
    "fünf": "п’ять",
    "zwei": "два",
    "drei": "три",
    "vier": "чотири",
    "sechs": "шість",
    "sieben": "сім",
    "zehn": "десять",
    "ersten": "першого; першій",
    "mal": "раз; якось; частка (контекст)",
    "nächsten": "наступного",
    "frau": "пані; жінка",
    "herr": "пан",
    "herrn": "пана; пану",
    "sviat": "Свят (ім’я)",
    "berg": "Берґ (прізвище); гора",
    "könig": "Кеніґ (прізвище); король",
    "braun": "Браун (прізвище); коричневий",
    "seidel": "Зайдель (прізвище)",
    "neumann": "Нойман (прізвище)",
    "weber": "Вебер (прізвище)",
    "winter": "Вінтер (прізвище); зима",
    "hoffmann": "Гофман (прізвище)",
    "adler": "Адлер (прізвище); орел",
    "praktikum": "практика; стажування",
    "praktikant": "практикант",
    "pflegeheim": "будинок догляду",
    "altenheim": "будинок для літніх людей",
    "zimmer": "кімната",
    "tür": "двері",
    "bett": "ліжко",
    "fenster": "вікно",
    "aufenthaltsraum": "спільна кімната; кімната відпочинку",
    "waschbecken": "умивальник",
    "gesicht": "обличчя",
    "rücken": "спина",
    "knie": "коліно",
    "arm": "рука",
    "körperpflege": "догляд за тілом",
    "pflege": "догляд",
    "pflegefachkraft": "кваліфікований фахівець із догляду",
    "pflegefachassistenz": "професійна асистенція в догляді",
    "kollegin": "колега (жінка)",
    "kollegen": "колеги; колегу (чоловіка)",
    "kolleginnen": "колеги (жінки)",
    "kollege": "колега (чоловік)",
    "team": "команда",
    "praxisanleiterin": "наставниця з практичного навчання",
    "anleiterin": "наставниця",
    "anleitung": "інструктаж; керівництво",
    "praxisanleitung": "практичне наставництво",
    "ansprechperson": "контактна особа",
    "aufgabe": "завдання",
    "aufgaben": "завдання (множина)",
    "anweisung": "вказівка; інструкція",
    "rückmeldung": "зворотний зв’язок",
    "begriff": "термін; поняття",
    "fachbegriff": "професійний термін",
    "fachbegriffe": "професійні терміни",
    "fachwort": "професійне слово",
    "schritte": "кроки",
    "vorgehen": "порядок дій",
    "worte": "слова",
    "worten": "словами; словах",
    "information": "інформація",
    "informationen": "інформація; відомості",
    "angabe": "дані; відомість",
    "angaben": "дані; відомості",
    "aussage": "висловлювання; слова людини",
    "aussagen": "висловлювання; слова",
    "beobachtung": "спостереження",
    "beobachtungen": "спостереження (множина)",
    "veränderung": "зміна",
    "zeitpunkt": "момент часу",
    "temperatur": "температура",
    "temperaturwert": "значення температури",
    "werte": "значення; показники",
    "messwerte": "результати вимірювань",
    "messung": "вимірювання",
    "diagnose": "діагноз",
    "krankheit": "хвороба",
    "beschwerden": "скарги; симптоми",
    "schmerzen": "болі; біль",
    "schmerz": "біль",
    "schwindel": "запаморочення",
    "übelkeit": "нудота",
    "atemnot": "задишка; утруднене дихання",
    "luft": "повітря (gut Luft bekommen — легко дихати)",
    "notfallablauf": "порядок дій у невідкладній ситуації",
    "einrichtung": "заклад",
    "regeln": "правила",
    "bedarf": "потреба",
    "hilfebedarf": "потреба в допомозі",
    "unterstützungsbedarf": "потреба в підтримці; допомозі",
    "hilfe": "допомога",
    "unterstützung": "допомога; підтримка",
    "bedürfnis": "потреба",
    "bedürfnisse": "потреби",
    "bedürfnissen": "потребам; потребами",
    "einverständnis": "згода",
    "privatsphäre": "приватність; особистий простір",
    "intimsphäre": "інтимна сфера; приватність тіла",
    "handtuch": "рушник",
    "waschlappen": "мочалка; серветка для миття",
    "wassertemperatur": "температура води",
    "wasser": "вода",
    "tee": "чай",
    "glas": "склянка",
    "tasse": "чашка",
    "brötchen": "булочка",
    "frühstück": "сніданок",
    "mittagessen": "обід",
    "mahlzeit": "прийом їжі; страва",
    "fleisch": "м’ясо",
    "milch": "молоко",
    "trinkmenge": "кількість випитої рідини",
    "flüssigkeit": "рідина",
    "nahrungsaufnahme": "споживання їжі",
    "appetit": "апетит",
    "pause": "перерва",
    "rollator": "ролатор; ходунки на колесах",
    "hilfsmittel": "допоміжний засіб",
    "pflegeplan": "план догляду",
    "toilette": "туалет",
    "toilettengang": "відвідування туалету",
    "ausscheidung": "виділення; фізіологічні випорожнення",
    "harndrang": "позив до сечовипускання",
    "stuhlgang": "випорожнення кишечника",
    "demenz": "деменція",
    "menschen": "люди; людей",
    "person": "людина; особа",
    "würde": "гідність",
    "reaktion": "реакція",
    "getränkeauswahl": "вибір напоїв",
    "musik": "музика",
    "lieder": "пісні",
    "alte": "старі; давні",
    "alten": "старих; давніх",
    "biografie": "біографія",
    "gewohnheit": "звичка",
    "gewohnheiten": "звички",
    "erinnerung": "спогад",
    "bäckerei": "пекарня",
    "arbeit": "робота",
    "familie": "родина",
    "angehörigen": "рідні; близькі",
    "angehörige": "рідні; близькі",
    "betreuung": "підтримка; супровід; догляд",
    "beruflich": "професійно; за фахом",
    "alltag": "повсякденне життя",
    "besuch": "візит",
    "übergabe": "передача зміни; передача інформації",
    "abklärung": "уточнення; з’ясування; обстеження",
    "dokumentation": "документація; документування",
    "beschäftigungsgruppe": "група спільних занять",
    "teilnahme": "участь",
    "tochter": "донька",
    "vater": "батько",
    "vaters": "батька",
    "grund": "причина; підстава",
    "medikamente": "ліки",
    "gespräch": "розмова",
    "gespräche": "розмови",
    "auskunft": "інформація; довідка",
    "sorge": "занепокоєння; турбота",
    "rückrufzeitpunkt": "час зворотного дзвінка",
    "rückrufabsprache": "домовленість про зворотний дзвінок",
    "absprache": "домовленість",
    "schweigepflicht": "обов’язок зберігати професійну таємницю",
    "vermutung": "припущення",
    "vermutungen": "припущення",
    "unklarheiten": "неясності",
    "unsicherheit": "невпевненість",
    "erfahrung": "досвід",
    "erfahrungen": "досвід; випадки з досвіду",
    "einzelheiten": "подробиці",
    "klopft": "стукає",
    "klopfen": "стукати",
    "vorstellen": "представлятися",
    "stellt": "ставить; stellt sich vor — представляється",
    "angesprochen": "той, до кого звернулися",
    "ansprechen": "звертатися до когось",
    "vermeiden": "уникати",
    "erfindet": "вигадує",
    "erfundene": "вигадана; вигадані",
    "erfundener": "вигаданого; вигаданою",
    "schroff": "різко; грубо",
    "ständig": "постійно",
    "unruhig": "неспокійний",
    "zeit": "час",
    "heimkehr": "повернення додому",
    "heim": "додому",
    "hause": "додому; вдома (zu Hause)",
    "selbstständig": "самостійний; самостійно",
    "selbstständigkeit": "самостійність",
    "selbstbestimmt": "самостійно вирішуючи",
    "selbe": "той самий; та сама",
    "selberes": "неправильна форма в цій вправі",
    "stimme": "голос; погоджуюся",
    "sicherer": "безпечніший; безпечніше",
    "entschuldigung": "перепрошую; вибачення",
    "ordnung": "порядок (in Ordnung — гаразд)",
    "bestimmten": "певних",
    "geeignet": "придатний",
    "teil": "частина",
    "passende": "відповідна; підходяща",
    "a": "позначення варіанта a",
    "b": "позначення варіанта b",
    "c": "позначення варіанта c",
    "d": "позначення варіанта d",
    "e": "позначення варіанта e",
    "f": "позначення варіанта f",
    "x": "немає відповідної відповіді",
    "der bewohner": "мешканець",
    "bewohner": "мешканець",
    "die bewohnerin": "мешканка",
    "bewohnerin": "мешканка",
    "die unterstützung": "допомога; підтримка",
    "sich vorstellen": "представлятися",
    "das bedürfnis": "потреба",
    "die körperpflege": "догляд за тілом",
    "das einverständnis": "згода",
    "der waschlappen": "мочалка; серветка для миття",
    "das handtuch": "рушник",
    "die privatsphäre": "приватність; особистий простір",
    "der appetit": "апетит",
    "die mahlzeit": "прийом їжі; страва",
    "die flüssigkeit": "рідина",
    "die trinkmenge": "кількість випитої рідини",
    "der rollator": "ролатор; ходунки на колесах",
    "das hilfsmittel": "допоміжний засіб",
    "sich hinsetzen": "сідати",
    "der pflegeplan": "план догляду",
    "die toilette": "туалет",
    "der toilettengang": "відвідування туалету",
    "die ausscheidung": "виділення; фізіологічні випорожнення",
    "der harndrang": "позив до сечовипускання",
    "der stuhlgang": "випорожнення кишечника",
    "der schmerz": "біль",
    "der schwindel": "запаморочення",
    "die übelkeit": "нудота",
    "die atemnot": "задишка; утруднене дихання",
    "die beschwerde": "скарга; неприємний симптом",
    "beschwerde": "скарга; неприємний симптом",
    "die demenz": "деменція",
    "die würde": "гідність",
    "die biografie": "біографія",
    "die gewohnheit": "звичка",
    "die erinnerung": "спогад",
    "die angehörigen": "рідні; близькі",
    "die praxisanleitung": "практичне наставництво",
    "die ansprechperson": "контактна особа",
    "die rückmeldung": "зворотний зв’язок",
    "die anweisung": "вказівка; інструкція",
    "die übergabe": "передача зміни; передача інформації",
    "die beobachtung": "спостереження",
    "die veränderung": "зміна",
    "die aussage": "висловлювання; слова людини",
    "der zeitpunkt": "момент часу",
    "die auskunft": "інформація; довідка",
    "die sorge": "занепокоєння; турбота",
    "gesichert": "підтверджений; достовірний",
    "die absprache": "домовленість",
    "die schweigepflicht": "обов’язок зберігати професійну таємницю",
    "wichtig": "важливо; важливий",
    "vereinbarte": "узгоджена; узгоджену",
    "diese": "ця; ці",
    "bescheid": "повідомлення (Bescheid sagen — дати знати)",
    "weitere": "подальша; подальші",
    "geschlossene": "зачинена; зачинену",
    "bedeutet": "означає",
    "darüber": "про це; щодо цього",
    "dieser": "цей; цієї",
    "schwierig": "складний; важкий",
    "rückens": "спини",
    "kleidung": "одяг",
    "offene": "відчинена; відкрита",
    "gar": "зовсім (gar nicht — зовсім не)",
    "thema": "тема",
    "laut": "голосно; згідно з (контекст)",
    "außerdem": "крім того; також",
    "einmal": "один раз",
    "bietet": "пропонує",
    "ihrer": "її; Вашої; їхньої",
    "faul": "лінивий",
    "immer": "завжди",
    "meines": "мого",
    "hereinkommen": "заходити; увійти",
    "ausruhen": "відпочити (sich ausruhen)",
    "stelle": "ставлю (stelle mich vor — представляюся)",
    "arztbrief": "лікарський лист; медичний висновок",
    "empfangen": "приймати; зустрічати",
    "passt": "підходить; відповідає",
    "darum": "про це; тому (контекст)",
    "wasche": "мию; умиваю",
    "schneller": "швидший; швидше",
    "empfindet": "відчуває; сприймає",
    "vegetarisch": "вегетаріанський",
    "gläser": "склянки",
    "festgehalten": "зафіксований; записаний",
    "vereinbarung": "домовленість",
    "benutzt": "використовує; користується",
    "lese": "читаю",
    "bahnhof": "вокзал",
    "haustür": "вхідні двері",
    "garten": "сад",
    "plan": "план",
    "erlaubt": "дозволяє; дозволений",
    "leise": "тихо",
    "vereinbarten": "узгодженого; узгодженій",
    "darauf": "на це; за цим",
    "gewahrt": "збережений; дотриманий",
    "pflegebericht": "звіт про догляд",
    "häufigen": "частих",
    "telefonieren": "телефонувати",
    "besucher": "відвідувач; відвідувачі",
    "allen": "усім; усіма",
    "bewohnern": "мешканцям; мешканцями",
    "abzuwarten": "дочекатися (інфінітив із zu)",
    "angeblich": "нібито",
    "auftretenden": "тих, що виникають",
    "woche": "тиждень",
    "gestellte": "поставлений; сформульований",
    "beschriebenen": "описаних",
    "sondern": "а; натомість (після заперечення)",
    "fragte": "запитував; запитувала",
    "sprach": "говорив; говорила",
    "wartete": "чекав; чекала",
    "zog": "тягнув; залучив (zog … hinzu)",
    "so": "так; настільки",
    "schnell": "швидко",
    "vielen": "багатьох",
    "fachbegriffen": "професійними термінами",
    "getränke": "напої",
    "auswahl": "вибір",
    "korrigiert": "виправляє",
    "jede": "кожна; кожну",
    "nachmittag": "час після обіду",
    "davon": "про це; з цього",
    "kennenzulernen": "познайомитися; краще пізнати",
    "schönen": "приємного; гарного",
    "besuchen": "відвідувати",
    "schule": "школа",
    "bank": "банк; лавка (контекст)",
    "wechseln": "змінювати",
    "frühdienstes": "ранкової зміни",
    "langsamer": "повільніше",
    "dabei": "під час цього; із цим",
    "erklärung": "пояснення",
    "ignoriert": "ігнорує",
    "oft": "часто",
    "bereits": "уже",
    "unterrichtet": "навчав; викладав",
    "beginnt": "починається",
    "erfunden": "вигаданий",
    "grad": "градус; градуси",
    "zimmernummer": "номер кімнати",
    "gehört": "належить; належить до; почув (контекст)",
    "klaren": "чіткої; зрозумілої",
    "ergänzen": "доповнювати",
    "fehlende": "відсутня; ті, яких бракує",
    "ausdrücklich": "прямо; чітко; однозначно",
    "benennen": "називати; чітко вказувати",
    "seiner": "його; своєї",
    "diesen": "цей; цього",
    "verreisen": "їхати в подорож",
    "hunger": "голод",
    "formulierung": "формулювання",
    "privaten": "приватному; приватних",
    "chat": "чат",
    "öffentlichen": "публічному; публічних",
    "profil": "профіль",
    "sehe": "бачу",
    "halten": "тримати; дотримуватися",
    "wem": "кому; ким (mit wem — з ким)",
    "änderung": "зміна",
    "alle": "усі",
    "reagiert": "реагує",
    "nachzufragen": "перепитати; уточнити",
    "irgendeine": "якусь; будь-яку",
    "uhrzeit": "час за годинником",
    "kosten": "витрати; коштувати",
    "mietvertrags": "договору оренди",
    "verstehst": "розумієш",
    "suchst": "шукаєш",
    "urlaubsbuchung": "бронювання відпустки; подорожі",
    "reisebüro": "турагенція",
    "jemand": "хтось",
    "weißt": "знаєш",
    "abgeben": "віддавати; передавати",
    "ablauf": "перебіг; послідовність дій",
    "achten": "звертати увагу; зважати",
    "akute": "гострі; гостра",
    "akutsituationen": "невідкладні ситуації",
    "anfang": "початок",
    "angeben": "вказувати; називати",
    "angehörigengespräche": "розмови з родичами",
    "angeleitet": "проінструктований; навчений під керівництвом",
    "angezogen": "одягнув; одягнений",
    "ankommen": "прибувати; освоюватися",
    "anschließend": "після цього; потім",
    "anwesenheit": "присутність",
    "aufgabenstellung": "умова завдання",
    "aufgeben": "відмовлятися від; здаватися",
    "aufsicht": "нагляд",
    "auftrag": "доручення; завдання",
    "ausbildung": "професійне навчання",
    "auslassen": "пропускати",
    "ausreichend": "достатньо; достатній",
    "auszubildender": "учень професійного навчання",
    "beginnen": "починати; починатися",
    "begleitung": "супровід; підтримка",
    "begonnen": "почався; розпочатий",
    "begründe": "обґрунтовую",
    "begründen": "обґрунтовувати",
    "begründung": "обґрунтування",
    "behandlung": "лікування",
    "belegt": "підтверджений; підтверджено",
    "bemerkt": "помічає; помітив",
    "berücksichtigen": "враховувати",
    "berücksichtigt": "враховує; враховано",
    "besonders": "особливо",
    "bestimmt": "напевно; визначений",
    "beurteilt": "оцінює",
    "bewegung": "рух",
    "bewohners": "мешканця",
    "boden": "підлога; земля",
    "brandt": "Брандт (прізвище)",
    "brauchst": "потребуєш",
    "dafür": "для цього; за це",
    "dann": "потім; тоді",
    "darstellen": "зображати; викладати",
    "demenzsensibel": "з урахуванням потреб людини з деменцією",
    "dokumentierst": "документуєш",
    "durst": "спрага",
    "einige": "деякі; кілька",
    "einschätzung": "оцінка стану або ситуації",
    "einzelnes": "окреме; одиничне",
    "empfehlung": "рекомендація",
    "ende": "кінець",
    "entscheidungen": "рішення",
    "erkennen": "розпізнавати; помічати",
    "erläutere": "докладно пояснюю",
    "erläutern": "докладно пояснювати",
    "erneute": "повторне; ще одне",
    "erreichbar": "досяжний",
    "erreichbare": "досяжні; досяжна",
    "erreichbares": "досяжне",
    "etwa": "приблизно",
    "fachkraft": "кваліфікований фахівець або фахівчиня",
    "fall": "випадок",
    "fallsituation": "опис конкретного випадку",
    "festgelegte": "визначене; встановлена",
    "fähigkeit": "здатність; уміння",
    "fähigkeiten": "здатності; уміння",
    "fördern": "сприяти; підтримувати розвиток",
    "führt": "веде; виконує (у führen … aus)",
    "geforderten": "необхідні; ті, які вимагаються",
    "geklärt": "з’ясований; узгоджено",
    "gelassen": "дав; залишив (форма lassen)",
    "gelungen": "вдалося; вдалий",
    "gemeinsam": "разом; спільно",
    "gemeinschaftsraum": "спільна кімната; кімната для спілкування",
    "gemeldet": "повідомив; повідомлено",
    "genauer": "точніше; докладніше",
    "geringe": "мала; невелика",
    "geschafft": "упорався; виконав",
    "geschieht": "відбувається",
    "gesundheit": "здоров’я",
    "handeln": "діяти",
    "handle": "дію",
    "handlung": "дія",
    "heimlich": "потай; приховано",
    "hilfen": "види допомоги; допоміжні засоби",
    "jeden": "кожного; кожен",
    "kabel": "кабель",
    "keller": "Келлер (прізвище); підвал",
    "kleine": "маленькі; невелика",
    "komme": "приходжу; прийду",
    "kommunizieren": "спілкуватися",
    "krank": "хворий; хвора",
    "krankenhausaufenthalt": "перебування в лікарні",
    "kurative": "лікувальні; спрямовані на лікування",
    "langsam": "повільно",
    "lasse": "даю; залишаю (форма lassen)",
    "lautet": "звучить; сформульовано",
    "lebensgestaltung": "організація власного життя",
    "lebensphase": "етап життя",
    "lehnt": "відхиляє; відмовляється (у lehnt … ab)",
    "lernfortschritt": "поступ у навчанні",
    "letzten": "останнього; останній",
    "liest": "читає",
    "mehr": "більше",
    "melde": "повідомляю",
    "meldet": "повідомляє",
    "milliliter": "мілілітр; мілілітри",
    "minuten": "хвилини",
    "mobilität": "рухливість; мобільність",
    "moment": "момент; мить",
    "motivation": "мотивація",
    "motiviert": "мотивований",
    "möchtest": "хотів би; хотіла б",
    "nachfrage": "уточнювальне запитання",
    "neuen": "нового; нові",
    "nie": "ніколи",
    "niemals": "ніколи; за жодних обставин",
    "niemand": "ніхто",
    "nutzen": "використовувати",
    "nähe": "близькість; поруч",
    "orientiert": "орієнтується",
    "palliativ": "паліативний; паліативно",
    "pausen": "паузи; перерви",
    "pflegealltag": "повсякденна робота з догляду",
    "pflegefachassistenzperson": "фаховий асистент або асистентка з догляду",
    "pflegehandeln": "професійні дії з догляду",
    "pflegesituationen": "ситуації догляду",
    "prävention": "профілактика",
    "präventiv": "профілактично",
    "prüfen": "перевіряти",
    "prüfung": "іспит; перевірка",
    "prüfungsaufträge": "завдання іспиту",
    "pullover": "светр",
    "punkte": "пункти; бали",
    "rechnung": "рахунок",
    "rehabilitation": "реабілітація",
    "rehabilitatives": "реабілітаційне",
    "rezept": "рецепт",
    "richte": "спрямовую; орієнтуюся (у sich richten nach)",
    "richtet": "спрямовує; орієнтується",
    "rolle": "роль",
    "roth": "Рот (прізвище)",
    "ruhe": "спокій",
    "rät": "радить; вгадує",
    "schafft": "справляється; виконує",
    "schicht": "робоча зміна",
    "schmerzäußerung": "повідомлення про біль; прояв болю",
    "schritt": "крок; етап",
    "schuhe": "взуття; черевики",
    "schweigen": "мовчати",
    "schwer": "тяжко; важкий",
    "selbstversorgung": "самообслуговування",
    "sicherheit": "безпека; упевненість",
    "sieht": "бачить",
    "sinnvoll": "доцільний; має сенс",
    "situation": "ситуація",
    "sommer": "Зоммер (прізвище); літо",
    "sowieso": "і так; однаково",
    "station": "відділення",
    "stattdessen": "натомість",
    "stellen": "ставити; формулювати",
    "stimmen": "узгоджувати (у stimmen … ab); бути правильним",
    "stolperstelle": "місце, де можна спіткнутися",
    "sturzrisiko": "ризик падіння",
    "termin": "призначений час; зустріч",
    "therapeutischen": "терапевтичним; лікувальним",
    "trennt": "відокремлює; розділяє",
    "trägt": "носить; несе",
    "unklaren": "незрозумілої; нечіткі",
    "unterbrechen": "переривати",
    "unterscheide": "розрізняю",
    "unterschied": "різниця",
    "unterstütze": "допомагаю; підтримую",
    "unterstützt": "допомагає; підтримує",
    "unwichtig": "неважливий",
    "verantwortung": "відповідальність",
    "vergessen": "забути; забув",
    "verlangt": "вимагає",
    "verlässt": "залишає; виходить із",
    "verordnen": "призначати лікування або засіб",
    "verordnung": "призначення; нормативна постанова",
    "versorgt": "отримує догляд; забезпечений допомогою",
    "verständigungsorientiert": "спрямовано на взаєморозуміння",
    "verständnis": "розуміння",
    "versuchen": "пробувати; намагатися",
    "verändert": "змінилося; змінений",
    "veränderungen": "зміни",
    "vielleicht": "можливо",
    "vollständige": "повний; повна",
    "vorhandene": "наявні",
    "weg": "шлях; дорога",
    "weitergabe": "передача інформації",
    "weitergegeben": "передав; передано",
    "welchem": "якому; котрому",
    "wen": "кого",
    "woran": "на що; на чому",
    "wort": "слово",
    "ziel": "мета",
    "ziele": "цілі",
    "zustandsveränderung": "зміна стану",
    "zustimmung": "згода",
    "zwischen": "між",
    "übe": "тренуюся; практикую",
    "üben": "тренуватися; практикувати",
    "übernommen": "узяв на себе; виконав",
    "übertragen": "доручати; передавати",
    "übung": "вправа; тренування"
  },
  "curriculum": [
    [
      "01",
      "Професія та відповідальність",
      "Pflegefachassistenzperson werden",
      "ausbildungsrolle",
      70
    ],
    [
      "02",
      "Гігієна, харчування та рухливість",
      "Selbstversorgung und Mobilität",
      "koerperpflege",
      180
    ],
    [
      "03",
      "Комунікація та аналіз досвіду",
      "Verständigungsorientiert kommunizieren",
      "team",
      90
    ],
    [
      "04",
      "Здоров’я та профілактика",
      "Gesundheit fördern und präventiv handeln",
      "praevention",
      70
    ],
    [
      "05",
      "Догляд під час гострих захворювань",
      "Akute und kurative Pflegesituationen",
      "beschwerden",
      180
    ],
    [
      "06",
      "Розпізнавання невідкладної ситуації",
      "In Akutsituationen sicher handeln",
      "akutsituation",
      40
    ],
    [
      "07",
      "Реабілітація і робота в команді",
      "Rehabilitatives Pflegehandeln",
      "rehabilitation",
      70
    ],
    [
      "08",
      "Важкі ситуації та останній етап життя",
      "Begleitung in der letzten Lebensphase",
      "palliativ",
      110
    ],
    [
      "09",
      "Побажання і повсякденне життя",
      "Menschen bei der Lebensgestaltung begleiten",
      "biografie",
      180
    ]
  ],
  "examCases": [
    {
      "id": "trinken",
      "title": "Сніданок і побажання",
      "text": "Frau Klein hat beim Frühstück etwa 100 Milliliter getrunken. Sie sagt: Das Wasser ist mir zu kalt. Sviat fragt nach ihrem Wunsch und gibt die Information bei der Übergabe weiter.",
      "ua": "Пані Кляйн випила за сніданком приблизно 100 мл. Вона каже: «Вода для мене надто холодна». Свят уточнює її побажання й передає інформацію під час передачі зміни.",
      "keys": [
        "100 Milliliter",
        "zu kalt",
        "Wunsch",
        "Übergabe"
      ],
      "questions": [
        [
          "Welche Information ist eine Beobachtung?",
          [
            "Frau Klein will niemals trinken.",
            "Sie hat etwa 100 Milliliter getrunken.",
            "Sie hat bestimmt eine neue Krankheit."
          ],
          1,
          "Приблизно 100 мл — конкретний факт. «Ніколи» й нова хвороба в тексті не підтверджені."
        ],
        [
          "Welche Nachfrage passt?",
          [
            "Warum sind Sie immer schwierig?",
            "Sie müssen jetzt schweigen.",
            "Was möchten Sie stattdessen trinken?"
          ],
          2,
          "Це відкрите ввічливе запитання про побажання. Інші варіанти містять оцінку або наказ."
        ],
        [
          "Was gehört in die Übergabe?",
          [
            "Trinkmenge, Aussage und Wunsch der Bewohnerin.",
            "Nur eine Vermutung über ihre Motivation.",
            "Eine selbst festgelegte neue Behandlung."
          ],
          0,
          "Передаємо факти, слова й побажання людини; не додаємо непідтверджене лікування."
        ]
      ],
      "prompt": "Склади передачу зміни: скільки випито, що сказала людина, що зроблено.",
      "model": "Frau Klein hat beim Frühstück etwa 100 Milliliter getrunken. Sie sagte, dass ihr das Wasser zu kalt ist. Ich habe nach ihrem Wunsch gefragt und die Information weitergegeben.",
      "modelUA": "Пані Кляйн випила за сніданком приблизно 100 мл. Вона сказала, що вода для неї надто холодна. Я уточнив її побажання й передав інформацію."
    },
    {
      "id": "wuensche",
      "title": "Самостійність під час одягання",
      "text": "Herr Brandt möchte seinen Pullover selbst anziehen. Er bittet nur am Anfang um Hilfe. Im Pflegeplan ist diese Unterstützung vereinbart. Sviat lässt ihm Zeit und berichtet später, welche Schritte Herr Brandt selbst übernommen hat.",
      "ua": "Пан Брандт хоче сам надягнути светр. Він просить допомоги лише на початку. Таку допомогу узгоджено в плані догляду. Свят дає йому час і потім повідомляє, які етапи пан Брандт виконав самостійно.",
      "keys": [
        "selbst",
        "nur am Anfang",
        "Pflegeplan",
        "Zeit"
      ],
      "questions": [
        [
          "Was ist Herrn Brandt wichtig?",
          [
            "Alles sofort abgeben.",
            "Keine Wünsche äußern.",
            "Den Pullover möglichst selbst anziehen."
          ],
          2,
          "Його побажання — самостійно надягнути светр."
        ],
        [
          "Welche Begründung passt zum Warten?",
          [
            "Ich lasse ihm Zeit, damit er eigene Fähigkeiten nutzen kann.",
            "Ich warte, weil seine Wünsche unwichtig sind.",
            "Ich warte, um nicht mehr zu sprechen."
          ],
          0,
          "Речення пояснює мету підтримки самостійності й відповідає побажанню."
        ],
        [
          "Was kann Sviat sachlich berichten?",
          [
            "Herr Brandt ist immer langsam.",
            "Herr Brandt hat die vereinbarten Schritte selbst übernommen.",
            "Herr Brandt ist bestimmt nicht motiviert."
          ],
          1,
          "Другий варіант описує конкретну дію. «Завжди повільний» і здогад про мотивацію — оцінки."
        ]
      ],
      "prompt": "Одним реченням опиши виконане, другим — обґрунтуй свою допомогу.",
      "model": "Herr Brandt hat die vereinbarten Schritte beim Anziehen selbst übernommen. Ich habe ihm Zeit gelassen, damit er seine Fähigkeiten nutzen kann.",
      "modelUA": "Пан Брандт самостійно виконав узгоджені етапи одягання. Я дав йому час, щоб він міг скористатися своїми вміннями."
    },
    {
      "id": "rueckfrage",
      "title": "Незрозуміле доручення",
      "text": "Die Praxisanleiterin gibt Sviat eine neue Aufgabe. Sviat hat einen Teil der Erklärung nicht verstanden. Er sagt das offen und bittet um eine erneute Erklärung. Danach wiederholt er den Auftrag mit eigenen Worten. Die Praxisanleiterin bestätigt, dass er die Aufgabe richtig verstanden hat.",
      "ua": "Практична наставниця дає Святу нове завдання. Він не зрозумів частину пояснення. Він відкрито каже про це та просить пояснити ще раз. Потім повторює доручення своїми словами. Наставниця підтверджує, що він зрозумів завдання правильно.",
      "keys": [
        "nicht verstanden",
        "erneute Erklärung",
        "eigenen Worten",
        "bestätigt"
      ],
      "questions": [
        [
          "Was macht Sviat bei Unsicherheit?",
          [
            "Er fragt nach.",
            "Er rät heimlich.",
            "Er bestätigt ohne Verständnis."
          ],
          0,
          "Він відкрито називає нерозуміння й перепитує."
        ],
        [
          "Welche Formulierung passt?",
          [
            "Ich weiß sowieso alles.",
            "Sie müssen nicht mit mir sprechen.",
            "Können Sie mir diesen Schritt bitte noch einmal erklären?"
          ],
          2,
          "Це конкретне ввічливе прохання пояснити потрібний крок."
        ],
        [
          "Warum wiederholt er den Auftrag?",
          [
            "Um die Kollegin zu unterbrechen.",
            "Um zu prüfen, ob er ihn richtig verstanden hat.",
            "Um eine neue Diagnose zu stellen."
          ],
          1,
          "Повтор своїми словами дозволяє перевірити розуміння."
        ]
      ],
      "prompt": "Попроси ще раз пояснити крок і перевір своє розуміння конструкцією Habe ich richtig verstanden, dass …?",
      "model": "Können Sie mir diesen Schritt bitte noch einmal erklären? Habe ich richtig verstanden, dass ich zuerst nach dem Wunsch des Bewohners fragen soll?",
      "modelUA": "Можете, будь ласка, пояснити мені цей крок ще раз? Чи правильно я зрозумів, що спочатку маю запитати про побажання мешканця?"
    }
  ],
  "studyPlan": [
    {
      "title": "Тиждень 1 · Перший контакт",
      "ids": [
        "ankommen",
        "ausbildungsrolle"
      ],
      "task": "Представся, уточни звертання й попроси пояснити незрозумілий крок."
    },
    {
      "title": "Тиждень 2 · Догляд і приватність",
      "ids": [
        "koerperpflege",
        "toilette"
      ],
      "task": "Попроси згоди й поясни допомогу трьома короткими реченнями."
    },
    {
      "title": "Тиждень 3 · Їжа та скарги",
      "ids": [
        "essen",
        "beschwerden"
      ],
      "task": "Запитай про пиття й самопочуття. Запиши слова людини без власних висновків."
    },
    {
      "title": "Тиждень 4 · Рухливість",
      "ids": [
        "mobilitaet",
        "praevention",
        "rehabilitation"
      ],
      "task": "Уточни узгоджену допомогу й опиши одну самостійно виконану дію."
    },
    {
      "title": "Тиждень 5 · Спілкування",
      "ids": [
        "demenz",
        "biografie",
        "angehoerige"
      ],
      "task": "Проведи короткий діалог про звички, побажання й потреби."
    },
    {
      "title": "Тиждень 6 · Передача зміни",
      "ids": [
        "team",
        "uebergabe",
        "dokumentation"
      ],
      "task": "Передай: хто, що каже, що спостерігав, коли й кому вже повідомив."
    },
    {
      "title": "Тиждень 7 · Складні розмови",
      "ids": [
        "akutsituation",
        "palliativ"
      ],
      "task": "Потренуй чітке повідомлення про зміну стану та спокійне уточнення побажань."
    },
    {
      "title": "Тиждень 8 · Мова іспиту",
      "ids": [
        "pruefungssprache"
      ],
      "task": "Пройди три навчальні випадки, напиши короткі відповіді й порівняй зі зразками."
    }
  ],
  "verifiedAt": "2026-10-21",
  "officialResources": [
    {
      "title": "BIBB · Програма Pflegefachassistenz 2027",
      "url": "https://www.bibb.de/de/226067.php",
      "detail": "Рамкова програма й роз’яснення. 18 місяців; 1050 годин занять і 1280 годин практики."
    },
    {
      "title": "Офіційні рамкові плани · PDF, 202 сторінки",
      "url": "https://www.bibb.de/dokumente/pdf/AB26_PFA-Rahmenpl%C3%A4ne_GENEHMIGTE_VORABFASSUNG.pdf",
      "detail": "Схвалена попередня редакція від 28.07.2026. План для шкіл; не весь комплект підручників."
    },
    {
      "title": "PflFAssAPrV · Правила іспиту",
      "url": "https://www.recht.bund.de/bgbl/1/2026/166/regelungstext.pdf?__blob=publicationFile",
      "detail": "Затверджена редакція: §27 — дві письмові роботи по 120 хв; §34 — усна 20–30 хв; §§38–39 — практична частина."
    },
    {
      "title": "telc Deutsch B1·B2 Pflege · Безкоштовний мовний тест",
      "url": "https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-b1b2-pflege/",
      "detail": "Пробний тест, відповіді та аудіо. Мовний іспит, окремий від державного професійного іспиту."
    },
    {
      "title": "Ein Tag Deutsch – in der Pflege",
      "url": "https://www.deutsch-am-arbeitsplatz.de/app-ein-tag-deutsch/app",
      "detail": "Вправи на робочі діалоги, лексику та вимову від рівня B1."
    }
  ]
};
