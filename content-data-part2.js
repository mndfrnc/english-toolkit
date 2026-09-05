// content-data-part2.js
// GERADO a partir dos módulos pedagógicos reconstruídos e autoQA'd (Parte 2: Módulos 4-5).
// Fonte de verdade: ver PART_2_META.generated_from abaixo. Não editar
// pedagogicamente este arquivo direto — corrija o .md de origem e regere.
// Arquivo separado de content-data-open.js (Parte 1), por decisão da Amanda.
// Entrevistas NÃO está aqui. Nenhum gate de acesso foi implementado — é conteúdo puro.

export const PART_2_META = {
  "part_id": "part_2",
  "label": "Parte 2: Módulos 4 e 5",
  "generated_from": [
    "PADRAO-PEDAGOGICO-UNICO.md",
    "MAPA-15-LICOES-5-CHECKPOINTS.md",
    "ENGLISH-TOOL-MODULO-4-RECONSTRUIDO.md",
    "ENGLISH-TOOL-MODULO-5-RECONSTRUIDO.md",
    "QA-CONJUNTO-MODULOS-3-A-5.md (correções já incorporadas nos .md de origem)"
  ],
  "excludes": [
    "interview/Entrevistas"
  ],
  "gate": "não implementado nesta entrega — content-data-part2.js é conteúdo apenas, sem lógica de acesso. required_day não foi definido (decisão da Amanda, 04/09/2026): quem integrar ao PWA decide a liberação.",
  "note": "Não editar pedagogicamente este arquivo diretamente. Qualquer correção de conteúdo deve primeiro ser feita nos .md de origem, depois regerada aqui.",
  "id_convention_note": "IDs seguem a mesma convenção de content-data-open.js (module_N_lesson_M, numeração dentro do módulo, M de 1 a 3), e não a numeração global sugerida na 'Especificação técnica' dos .md de origem (lesson_10, lesson_11...) — mantém consistência com a Parte 1 já entregue.",
  "audio_scope_note": "Mesma régua de marcação de áudio da Parte 1 (ver CONFLITOS-E-LACUNAS.md item 4): diálogos de abertura e 'Veja funcionando' (linha a linha + completo), frase-exemplo de cada item de 'Palavras para usar', e frases-modelo destacadas em bloco de citação dentro de 'Entenda'. Nenhuma versão lenta (rate 0.72) foi adicionada nestes dois módulos, porque nenhuma lição lista uma atividade de repetição tipo 'Fale comigo' em 'No English Tool' — mesma regra da Parte 1, aplicada de forma consistente."
};

export const MODULE_4 = {
  "id": "module_4",
  "label": "Módulo 4: Agir no mundo ao redor",
  "part": "part_2",
  "order": 4,
  "required_day": null,
  "required_day_note": "Sem gate definido nesta entrega, por decisão da Amanda (04/09/2026) — quem integrar ao PWA decide a liberação.",
  "outcome": "ao concluir este módulo, você conseguirá descrever um lugar, descrever objetos e pessoas com mais detalhe, e comprar algo perguntando quantidade e preço.",
  "how_to_use": "leia uma lição por vez. Faça primeiro as atividades da apostila e depois abra a prática indicada no English Tool. Ao terminar as três lições, faça o Checkpoint 4.",
  "lessons": [
    {
      "id": "module_4_lesson_1",
      "label": "Lição 10: Descrever lugares",
      "order": 1,
      "can_do": [
        "dizer o que existe em um lugar usando there is/there are",
        "usar preposições de lugar (in, on, under, next to, behind)",
        "descrever um ambiente com frases simples"
      ],
      "opening": {
        "instruction": "Leia o diálogo. Depois, ouça-o no English Tool.",
        "dialogue": {
          "lines": [
            {
              "speaker": "Tomás",
              "en": "What's your kitchen like?",
              "audio_id": "audio_module_4_lesson_1_opening_line_1"
            },
            {
              "speaker": "Alice",
              "en": "There's a table in the middle. There are two chairs next to it.",
              "audio_id": "audio_module_4_lesson_1_opening_line_2"
            },
            {
              "speaker": "Tomás",
              "en": "Is there a window?",
              "audio_id": "audio_module_4_lesson_1_opening_line_3"
            },
            {
              "speaker": "Alice",
              "en": "Yes, there's a window behind the table.",
              "audio_id": "audio_module_4_lesson_1_opening_line_4"
            }
          ],
          "full_audio_id": "audio_module_4_lesson_1_opening_full_1"
        },
        "translation": {
          "type": "summary",
          "text": "Tomás pergunta como é a cozinha de Alice. Tem uma mesa no meio. Tem duas cadeiras ao lado dela. Tem uma janela atrás da mesa."
        },
        "pattern_note": "Observe there is/there are anunciando o que existe no lugar, e as preposições dizendo onde cada coisa está."
      },
      "understand": [
        {
          "title": "There is / there are",
          "intro": "Use there is (there's) para uma coisa no singular e there are para mais de uma.",
          "table": {
            "columns": [
              "Frase",
              "Uso"
            ],
            "rows": [
              [
                "There is a chair. / There's a chair.",
                "uma coisa"
              ],
              [
                "There are two chairs.",
                "mais de uma coisa"
              ],
              [
                "Is there a table?",
                "pergunta, singular"
              ],
              [
                "Are there any chairs?",
                "pergunta, plural"
              ]
            ]
          },
          "atencao": {
            "title": "there is/are não é o mesmo que it is",
            "text": "There is/are anuncia que algo existe em um lugar. It is descreve algo que já foi mencionado.",
            "examples": [
              {
                "en": "There's a book on the table.",
                "pt": "anuncia"
              },
              {
                "en": "It's a good book.",
                "pt": "descreve o livro já mencionado"
              }
            ]
          }
        },
        {
          "title": "Preposições de lugar",
          "table": {
            "columns": [
              "Preposição",
              "Sentido",
              "Exemplo"
            ],
            "rows": [
              [
                "in",
                "dentro de",
                "The keys are in the bag."
              ],
              [
                "on",
                "em cima de",
                "The cup is on the table."
              ],
              [
                "under",
                "embaixo de",
                "The cat is under the bed."
              ],
              [
                "next to",
                "ao lado de",
                "The chair is next to the table."
              ],
              [
                "behind",
                "atrás de",
                "The window is behind the sofa."
              ]
            ]
          },
          "dica": "essas cinco preposições respondem à pergunta \"Where is it?\" (Onde está?). Praticar com objetos reais ao seu redor — apontando e dizendo a frase em voz alta — fixa muito mais rápido do que só ler a tabela."
        }
      ],
      "words_to_use": [
        {
          "word": "kitchen / bedroom / living room",
          "example": "The kitchen is small.",
          "audio_id": "audio_module_4_lesson_1_word_example_1"
        },
        {
          "word": "park / supermarket / school",
          "example": "There's a park near my house.",
          "audio_id": "audio_module_4_lesson_1_word_example_2"
        },
        {
          "word": "table / chair / window / door",
          "example": "There's a door next to the window.",
          "audio_id": "audio_module_4_lesson_1_word_example_3"
        },
        {
          "word": "street / neighborhood",
          "example": "I live on a quiet street.",
          "audio_id": "audio_module_4_lesson_1_word_example_4"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Descrevendo a sala",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "What's your living room like?",
                "audio_id": "audio_module_4_lesson_1_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "There's a sofa in the middle and a TV in front of it.",
                "audio_id": "audio_module_4_lesson_1_seeitworking_1_line_2"
              }
            ],
            "full_audio_id": "audio_module_4_lesson_1_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Perguntando sobre um lugar",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Is there a supermarket near here?",
                "audio_id": "audio_module_4_lesson_1_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "Yes, there's one next to the school.",
                "audio_id": "audio_module_4_lesson_1_seeitworking_2_line_2"
              }
            ],
            "full_audio_id": "audio_module_4_lesson_1_seeitworking_2_full_1"
          }
        },
        {
          "title": "Situação 3 — Pedindo informação na rua",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Excuse me, is there a park around here?",
                "audio_id": "audio_module_4_lesson_1_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "Yes, it's behind that building.",
                "audio_id": "audio_module_4_lesson_1_seeitworking_3_line_2"
              }
            ],
            "full_audio_id": "audio_module_4_lesson_1_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_4_lesson_1_practice_1",
          "title": "Complete com there is ou there are",
          "type": "completar",
          "items": [
            {
              "prompt": "___ a table in the kitchen.",
              "answer": "There is / There's"
            },
            {
              "prompt": "___ three chairs in the room.",
              "answer": "There are"
            },
            {
              "prompt": "___ a park near my house.",
              "answer": "There is / There's"
            },
            {
              "prompt": "___ any windows in this room?",
              "answer": "Are there"
            }
          ]
        },
        {
          "id": "module_4_lesson_1_practice_2",
          "title": "Escolha a preposição certa",
          "type": "escolha_por_contexto",
          "items": [
            {
              "prompt": "The book is ___ the table. (o livro está sobre a mesa)",
              "options": [
                "on",
                "under"
              ],
              "answer": 0
            },
            {
              "prompt": "The shoes are ___ the bed. (os sapatos estão embaixo da cama)",
              "options": [
                "under",
                "next to"
              ],
              "answer": 0
            },
            {
              "prompt": "The chair is ___ the table. (a cadeira está ao lado da mesa)",
              "options": [
                "in",
                "next to"
              ],
              "answer": 1
            },
            {
              "prompt": "The garden is ___ the house. (o jardim fica atrás da casa)",
              "options": [
                "behind",
                "on"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "module_4_lesson_1_practice_3",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "\"There is\" é usado para mais de uma coisa.",
              "answer": false,
              "feedback": "F. \"There is\" é para uma coisa; \"there are\" é para mais de uma."
            },
            {
              "statement": "\"Next to\" significa \"ao lado de\".",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"It is\" e \"there is\" têm exatamente o mesmo uso.",
              "answer": false,
              "feedback": "F. \"It is\" descreve algo já mencionado; \"there is\" anuncia que existe."
            },
            {
              "statement": "\"Under\" significa \"embaixo de\".",
              "answer": true,
              "feedback": "V."
            }
          ]
        },
        {
          "id": "module_4_lesson_1_practice_4",
          "title": "Associe",
          "type": "associar",
          "instruction": "Ligue cada preposição à descrição correspondente.",
          "columnA": [
            "in",
            "under",
            "next to"
          ],
          "columnB": [
            "o gato está debaixo da cama",
            "as chaves estão dentro da bolsa",
            "a cadeira está ao lado da mesa"
          ],
          "answer": {
            "in": "as chaves estão dentro da bolsa",
            "under": "o gato está debaixo da cama",
            "next to": "a cadeira está ao lado da mesa"
          }
        }
      ],
      "your_turn": {
        "id": "module_4_lesson_1_production",
        "type": "producao_livre",
        "instruction": "Descreva um cômodo da sua casa (ou de uma casa inventada) em três frases.",
        "template": [
          "There's __________.",
          "There are __________.",
          "The __________ is next to/behind/under __________."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "There is ou there are",
          "detail": "completar quatro frases",
          "skill": "leitura/gramática"
        },
        {
          "label": "Escolha a preposição",
          "detail": "completar quatro frases com apoio visual",
          "skill": "leitura"
        },
        {
          "label": "Ouça e localize",
          "detail": "identificar a posição de um objeto descrito",
          "skill": "escuta"
        },
        {
          "label": "Meu cômodo",
          "detail": "gravar ou digitar uma descrição própria",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_4_lesson_1_review",
        "recycles": [
          "module_1_lesson_2",
          "module_3_lesson_2"
        ],
        "instruction": "Complete reciclando to be (Lição 2) e vocabulário de rotina (Lição 8) antes de descrever o lugar:",
        "template": "I ___ (am) at home. I usually ___ (study) in my bedroom.",
        "possible_answer": "am, study"
      },
      "check_progress": {
        "can_do": [
          "usar there is/there are para descrever o que existe em um lugar",
          "usar in, on, under, next to e behind corretamente",
          "descrever um ambiente com frases simples"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Estruturas essenciais → There is, there are e lugar"
    },
    {
      "id": "module_4_lesson_2",
      "label": "Lição 11: Descrever objetos e pessoas",
      "order": 2,
      "can_do": [
        "usar a, an e the corretamente",
        "formar o plural de substantivos regulares e alguns irregulares",
        "descrever um objeto ou pessoa com adjetivos"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Bruna",
              "en": "I need a new bag. Do you like this one?",
              "audio_id": "audio_module_4_lesson_2_opening_line_1"
            },
            {
              "speaker": "Felix",
              "en": "It's nice, but it's expensive. What about that small blue one?",
              "audio_id": "audio_module_4_lesson_2_opening_line_2"
            },
            {
              "speaker": "Bruna",
              "en": "The blue one? It's cheaper, and it's really practical.",
              "audio_id": "audio_module_4_lesson_2_opening_line_3"
            }
          ],
          "full_audio_id": "audio_module_4_lesson_2_opening_full_1"
        },
        "translation": {
          "type": "summary",
          "text": "Bruna precisa de uma bolsa nova. Felix acha bonita, mas cara. A azul pequena é mais barata e prática."
        },
        "pattern_note": "Repare em a/an para apresentar algo novo e the para retomar algo já mencionado, como \"the blue one\"."
      },
      "understand": [
        {
          "title": "A, an e the",
          "table": {
            "columns": [
              "Artigo",
              "Uso",
              "Exemplo"
            ],
            "rows": [
              [
                "a",
                "antes de som de consoante, algo não específico",
                "a bag, a book"
              ],
              [
                "an",
                "antes de som de vogal",
                "an apple, an hour"
              ],
              [
                "the",
                "quando já se sabe de qual coisa se fala",
                "the blue bag (a que já foi mencionada)"
              ]
            ]
          },
          "atencao": {
            "title": "a/an depende do som, não da letra",
            "text": "\"An hour\" usa an porque \"hour\" começa com som de vogal (o \"h\" é mudo), mesmo começando com a letra H. O que importa é como a palavra soa, não como é escrita."
          }
        },
        {
          "title": "Plural",
          "table": {
            "columns": [
              "Regra",
              "Exemplo"
            ],
            "rows": [
              [
                "Maioria dos substantivos: +s",
                "bag → bags"
              ],
              [
                "Termina em s, sh, ch, x: +es",
                "box → boxes"
              ],
              [
                "Irregulares (decore aos poucos)",
                "child → children, person → people"
              ]
            ]
          }
        }
      ],
      "words_to_use": [
        {
          "word": "big / small",
          "example": "It's a big house.",
          "audio_id": "audio_module_4_lesson_2_word_example_1"
        },
        {
          "word": "new / old",
          "example": "I have a new phone.",
          "audio_id": "audio_module_4_lesson_2_word_example_2"
        },
        {
          "word": "cheap / expensive",
          "example": "This bag is expensive.",
          "audio_id": "audio_module_4_lesson_2_word_example_3"
        },
        {
          "word": "blue, red, black...",
          "example": "I like the blue one.",
          "audio_id": "audio_module_4_lesson_2_word_example_4"
        },
        {
          "word": "practical / comfortable",
          "example": "These shoes are comfortable.",
          "audio_id": "audio_module_4_lesson_2_word_example_5"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Escolhendo um objeto",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Do you like this jacket?",
                "audio_id": "audio_module_4_lesson_2_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "It's nice, but I prefer the black one. It's more practical.",
                "audio_id": "audio_module_4_lesson_2_seeitworking_1_line_2"
              }
            ],
            "full_audio_id": "audio_module_4_lesson_2_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Descrevendo uma pessoa",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "What's your new coworker like?",
                "audio_id": "audio_module_4_lesson_2_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "She's friendly and she has a big smile.",
                "audio_id": "audio_module_4_lesson_2_seeitworking_2_line_2"
              }
            ],
            "full_audio_id": "audio_module_4_lesson_2_seeitworking_2_full_1"
          }
        },
        {
          "title": "Situação 3 — Comparando dois objetos",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Which one do you like, the big bag or the small one?",
                "audio_id": "audio_module_4_lesson_2_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "The small one. It's cheaper and it's easier to carry.",
                "audio_id": "audio_module_4_lesson_2_seeitworking_3_line_2"
              }
            ],
            "full_audio_id": "audio_module_4_lesson_2_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_4_lesson_2_practice_1",
          "title": "Complete com a, an ou the",
          "type": "completar",
          "items": [
            {
              "prompt": "I have ___ apple.",
              "answer": "an"
            },
            {
              "prompt": "She has ___ new car.",
              "answer": "a"
            },
            {
              "prompt": "Look at ___ blue bag — it's mine.",
              "answer": "the"
            },
            {
              "prompt": "It's ___ hour before the class starts.",
              "answer": "an"
            }
          ]
        },
        {
          "id": "module_4_lesson_2_practice_2",
          "title": "Transforme para o plural",
          "type": "transformar",
          "instruction": "Transforme cada substantivo do singular para o plural.",
          "items": [
            {
              "prompt": "book → ____",
              "answer": "books"
            },
            {
              "prompt": "box → ____",
              "answer": "boxes"
            },
            {
              "prompt": "child → ____",
              "answer": "children"
            },
            {
              "prompt": "bag → ____",
              "answer": "bags"
            },
            {
              "prompt": "person → ____",
              "answer": "people"
            }
          ]
        },
        {
          "id": "module_4_lesson_2_practice_3",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "\"An\" é usado antes de som de consoante.",
              "answer": false,
              "feedback": "F. \"An\" é usado antes de som de vogal, não de consoante."
            },
            {
              "statement": "\"The\" é usado quando já se sabe de qual coisa se fala.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "O plural de \"box\" é \"boxs\".",
              "answer": false,
              "feedback": "F. O plural de \"box\" é \"boxes\"."
            },
            {
              "statement": "O plural de \"child\" é \"children\".",
              "answer": true,
              "feedback": "V."
            }
          ]
        },
        {
          "id": "module_4_lesson_2_practice_4",
          "title": "Una as informações",
          "type": "una_as_informacoes",
          "instruction": "Descreva o objeto com um artigo e um adjetivo.",
          "items": [
            {
              "prompt": "bag / expensive",
              "answer": "an expensive bag"
            },
            {
              "prompt": "phone / new",
              "answer": "a new phone"
            },
            {
              "prompt": "shoes / comfortable",
              "answer": "comfortable shoes"
            }
          ]
        }
      ],
      "your_turn": {
        "id": "module_4_lesson_2_production",
        "type": "producao_livre",
        "instruction": "Descreva um objeto seu (real ou inventado) em três frases. Depois, descreva também uma pessoa real ou inventada.",
        "template": [
          "I have __________.",
          "It's __________ and __________.",
          "I like it because __________.",
          "He/She is __________ and __________.",
          "He/She has __________."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "A, an ou the",
          "detail": "completar quatro frases",
          "skill": "leitura/gramática"
        },
        {
          "label": "Plural",
          "detail": "escrever cinco plurais",
          "skill": "escrita"
        },
        {
          "label": "Ouça e descreva",
          "detail": "identificar o objeto descrito em um áudio",
          "skill": "escuta"
        },
        {
          "label": "Meu objeto",
          "detail": "gravar ou digitar uma descrição própria",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_4_lesson_2_review",
        "recycles": [
          "module_1_lesson_3"
        ],
        "instruction": "Complete usando um adjetivo adequado para descrever um objeto:",
        "template": "My phone is ___ and practical.",
        "possible_answer": "new"
      },
      "check_progress": {
        "can_do": [
          "usar a, an e the corretamente",
          "formar plurais regulares e alguns irregulares",
          "descrever um objeto ou pessoa com adjetivos"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Estruturas essenciais → Artigos e plural"
    },
    {
      "id": "module_4_lesson_3",
      "label": "Lição 12: Comprar e falar de quantidades",
      "order": 3,
      "can_do": [
        "perguntar quantidade usando how much e how many",
        "usar some e any corretamente",
        "fazer um diálogo simples de compra com preço"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Vendedor",
              "en": "Can I help you?",
              "audio_id": "audio_module_4_lesson_3_opening_line_1"
            },
            {
              "speaker": "Yara",
              "en": "Yes, please. How much is this shirt?",
              "audio_id": "audio_module_4_lesson_3_opening_line_2"
            },
            {
              "speaker": "Vendedor",
              "en": "It's twenty dollars. Do you need it in another size?",
              "audio_id": "audio_module_4_lesson_3_opening_line_3"
            },
            {
              "speaker": "Yara",
              "en": "Do you have any in medium?",
              "audio_id": "audio_module_4_lesson_3_opening_line_4"
            },
            {
              "speaker": "Vendedor",
              "en": "Yes, we have some in medium.",
              "audio_id": "audio_module_4_lesson_3_opening_line_5"
            }
          ],
          "full_audio_id": "audio_module_4_lesson_3_opening_full_1"
        },
        "translation": {
          "type": "summary",
          "text": "Yara pergunta o preço da camisa: vinte dólares. Ela pergunta se tem tamanho médio, e o vendedor confirma que sim."
        },
        "pattern_note": "Repare em some na afirmativa (\"we have some\") e any na pergunta (\"any in medium\")."
      },
      "understand": [
        {
          "title": "How much e how many",
          "table": {
            "columns": [
              "Pergunta",
              "Uso",
              "Exemplo"
            ],
            "rows": [
              [
                "How much + substantivo incontável",
                "quantidade de coisas incontáveis",
                "How much water do you need?"
              ],
              [
                "How much is/are + item",
                "preço",
                "How much is this shirt?"
              ],
              [
                "How many + substantivo no plural",
                "quantidade de coisas contáveis",
                "How many shirts do you need?"
              ]
            ]
          },
          "atencao": {
            "title": "\"money\" não tem plural",
            "text": "Palavras como money, water e time não têm plural em inglês — você não diz \"moneys\". Por isso usam how much, nunca how many."
          },
          "note": "Em geral, usamos some em afirmativas e any em perguntas e negativas. Some também é comum em pedidos e ofertas, como em ‘Can I have some water?’"
        },
        {
          "title": "Some e any",
          "table": {
            "columns": [
              "Palavra",
              "Uso",
              "Exemplo"
            ],
            "rows": [
              [
                "some",
                "frases afirmativas",
                "I have some money."
              ],
              [
                "any",
                "perguntas e negativas",
                "Do you have any money? / I don't have any money."
              ]
            ]
          }
        }
      ],
      "words_to_use": [
        {
          "word": "price / dollar / real",
          "example": "How much is it?",
          "audio_id": "audio_module_4_lesson_3_word_example_1"
        },
        {
          "word": "size (small, medium, large)",
          "example": "Do you have this in a large size?",
          "audio_id": "audio_module_4_lesson_3_word_example_2"
        },
        {
          "word": "shirt / shoes / jacket",
          "example": "I need a new jacket.",
          "audio_id": "audio_module_4_lesson_3_word_example_3"
        },
        {
          "word": "some / any",
          "example": "I need some help.",
          "audio_id": "audio_module_4_lesson_3_word_example_4"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Perguntando o preço",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "How much are these shoes?",
                "audio_id": "audio_module_4_lesson_3_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "They're forty dollars.",
                "audio_id": "audio_module_4_lesson_3_seeitworking_1_line_2"
              }
            ],
            "full_audio_id": "audio_module_4_lesson_3_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Perguntando quantidade",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "How many shirts do you want?",
                "audio_id": "audio_module_4_lesson_3_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "Just one, please.",
                "audio_id": "audio_module_4_lesson_3_seeitworking_2_line_2"
              }
            ],
            "full_audio_id": "audio_module_4_lesson_3_seeitworking_2_full_1"
          }
        },
        {
          "title": "Situação 3 — Fechando a compra",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Do you have any bags in blue?",
                "audio_id": "audio_module_4_lesson_3_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "Yes, we have some. How many do you need?",
                "audio_id": "audio_module_4_lesson_3_seeitworking_3_line_2"
              },
              {
                "speaker": "A",
                "en": "Just one.",
                "audio_id": "audio_module_4_lesson_3_seeitworking_3_line_3"
              }
            ],
            "full_audio_id": "audio_module_4_lesson_3_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_4_lesson_3_practice_1",
          "title": "Escolha: How much ou how many?",
          "type": "escolha_por_contexto",
          "instruction": "Marque a opção correta.",
          "items": [
            {
              "prompt": "___ is this jacket?",
              "options": [
                "How much",
                "How many"
              ],
              "answer": 0
            },
            {
              "prompt": "___ shirts do you have?",
              "options": [
                "How much",
                "How many"
              ],
              "answer": 1
            },
            {
              "prompt": "___ money do you need?",
              "options": [
                "How much",
                "How many"
              ],
              "answer": 0
            },
            {
              "prompt": "___ apples are there?",
              "options": [
                "How much",
                "How many"
              ],
              "answer": 1
            }
          ]
        },
        {
          "id": "module_4_lesson_3_practice_2",
          "title": "Complete com some ou any",
          "type": "completar",
          "items": [
            {
              "prompt": "I have ___ money.",
              "answer": "some"
            },
            {
              "prompt": "Do you have ___ shirts in blue?",
              "answer": "any"
            },
            {
              "prompt": "I don't have ___ time today.",
              "answer": "any"
            },
            {
              "prompt": "We need ___ help.",
              "answer": "some"
            }
          ]
        },
        {
          "id": "module_4_lesson_3_practice_3",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "\"How much\" é usado com coisas contáveis, como \"shirts\".",
              "answer": false,
              "feedback": "F. \"How much\" é usado com coisas incontáveis."
            },
            {
              "statement": "\"Money\" não tem plural em inglês.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"Some\" é mais comum em frases afirmativas.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"Any\" é mais comum em perguntas e negativas.",
              "answer": true,
              "feedback": "V."
            }
          ]
        },
        {
          "id": "module_4_lesson_3_practice_4",
          "title": "Complete o diálogo",
          "type": "completar",
          "word_bank": [
            "How much",
            "some",
            "any",
            "How many"
          ],
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Do you have __________ shirts in medium?",
                "audio_id": "audio_module_4_lesson_3_practice4_line_1"
              },
              {
                "speaker": "B",
                "en": "Yes, we have __________.",
                "audio_id": "audio_module_4_lesson_3_practice4_line_2"
              },
              {
                "speaker": "A",
                "en": "__________ are they?",
                "audio_id": "audio_module_4_lesson_3_practice4_line_3"
              },
              {
                "speaker": "B",
                "en": "Thirty dollars. __________ do you need?",
                "audio_id": "audio_module_4_lesson_3_practice4_line_4"
              },
              {
                "speaker": "A",
                "en": "Just two.",
                "audio_id": "audio_module_4_lesson_3_practice4_line_5"
              }
            ],
            "full_audio_id": "audio_module_4_lesson_3_practice4_full_1"
          },
          "answer": [
            "Do you have any shirts in medium?",
            "Yes, we have some.",
            "How much are they?",
            "Thirty dollars. How many do you need?",
            "Just two."
          ]
        }
      ],
      "your_turn": {
        "id": "module_4_lesson_3_production",
        "type": "producao_livre",
        "instruction": "Escreva um pequeno diálogo de compra, perguntando preço e quantidade.",
        "template": [
          "A: How much is __________?",
          "B: It's __________.",
          "A: How many __________ do you have?",
          "B: I have __________."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "How much ou how many",
          "detail": "completar quatro frases",
          "skill": "leitura/gramática"
        },
        {
          "label": "Some ou any",
          "detail": "completar quatro frases",
          "skill": "escrita"
        },
        {
          "label": "Ouça o preço",
          "detail": "identificar o valor mencionado em um áudio",
          "skill": "escuta"
        },
        {
          "label": "Minha compra",
          "detail": "gravar ou digitar um diálogo curto de compra",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_4_lesson_3_review",
        "recycles": [
          "module_2_lesson_1",
          "module_3_lesson_1",
          "module_4_lesson_2"
        ],
        "instruction": "Complete reciclando números (Lições 4 e 7) e artigos/plural (Lição 11) antes de praticar quantidade:",
        "template": "This shirt is ___ dollars. I need ___ (a/some) shirts.",
        "possible_answer": "livre para o número; some para a segunda lacuna"
      },
      "check_progress": {
        "can_do": [
          "perguntar quantidade usando how much e how many",
          "usar some e any corretamente",
          "fazer um diálogo simples de compra com preço"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Estruturas essenciais → Quantidades e compras"
    }
  ],
  "checkpoint": {
    "id": "module_4_checkpoint",
    "label": "Checkpoint 4: Lugares e compras",
    "instruction": "O checkpoint verifica se você consegue usar as três lições do Módulo 4 em conjunto — e também reaplica um ponto de um checkpoint anterior. Faça sem consultar o gabarito. Depois, corrija e repita somente o que errou.",
    "parts": [
      {
        "id": "module_4_checkpoint_part_a",
        "label": "Parte A — Descreva o ambiente",
        "type": "completar",
        "instruction": "Complete a descrição de uma loja usando uma vez cada expressão.",
        "word_bank": [
          "There's",
          "There are",
          "next to",
          "How much",
          "some"
        ],
        "text_template": "__________ a table with shoes __________ the door. __________ two chairs near the window. __________ is this bag? We have __________ in different colors.",
        "answer": "There's a table with shoes next to the door. There are two chairs near the window. How much is this bag? We have some in different colors."
      },
      {
        "id": "module_4_checkpoint_part_b",
        "label": "Parte B — Encontre e corrija o erro",
        "type": "encontre_o_erro",
        "items": [
          {
            "prompt": "There is two chairs in the room.",
            "note": "there is/are",
            "answer": "There are two chairs in the room."
          },
          {
            "prompt": "I have an book.",
            "note": "a/an",
            "answer": "I have a book."
          },
          {
            "prompt": "How much shirts do you have?",
            "note": "how much/how many",
            "answer": "How many shirts do you have?"
          },
          {
            "prompt": "I don't work on Sundays, I do.",
            "note": "reaplicado do Checkpoint 3 — negativa com do",
            "answer": "I don't work on Sundays."
          },
          {
            "prompt": "A imagem mostra o gato embaixo da cama: The cat is on the bed.",
            "note": "trocar on por under",
            "answer": "The cat is under the bed."
          },
          {
            "prompt": "Do you have money any?",
            "note": "ordem de any",
            "answer": "Do you have any money?"
          }
        ]
      },
      {
        "id": "module_4_checkpoint_part_c",
        "label": "Parte C — Produção final",
        "type": "producao_livre",
        "instruction": "Escreva ou grave uma descrição de um ambiente seguida de um diálogo de compra. Deve conter:",
        "requirements": [
          "pelo menos duas frases com there is/there are",
          "uma preposição de lugar (in, on, under, next to ou behind)",
          "uma pergunta com how much ou how many",
          "o uso de some ou any",
          "pelo menos um adjetivo descrevendo um objeto"
        ],
        "criterion": "tentativa_registrada"
      }
    ],
    "completion_criterion": {
      "objective_items_total": 11,
      "objective_items_required": 9,
      "text": "acertar pelo menos 9 dos 11 itens objetivos do checkpoint (5 da Parte A + 6 da Parte B); concluir a produção final com os cinco elementos solicitados; refazer os itens essenciais registrados na revisão, incluindo o item reaplicado do Checkpoint 3 (Parte B, item 4).",
      "non_blocking_note": "Se ainda não alcançar o critério, o módulo não será apagado nem reiniciado. O English Tool mostrará quais lições revisar e oferecerá uma nova tentativa apenas com os pontos necessários."
    }
  },
  "source": "ENGLISH-TOOL-MODULO-4-RECONSTRUIDO.md",
  "notes": [
    "Nenhuma referência a Entrevistas ou a qualquer conteúdo pessoal da Amanda (verificado na fonte e no QA-CONJUNTO-MODULOS-3-A-5.md)."
  ]
};

export const MODULE_5 = {
  "id": "module_5",
  "label": "Módulo 5: Falar do agora e ganhar autonomia",
  "part": "part_2",
  "order": 5,
  "required_day": null,
  "required_day_note": "Sem gate definido nesta entrega, por decisão da Amanda (04/09/2026) — quem integrar ao PWA decide a liberação.",
  "outcome": "ao concluir este módulo, você conseguirá dizer o que está acontecendo agora, falar de necessidades e desconfortos do corpo, comparar coisas e indicar posse — encerrando a Parte 2 do English Tool com uma base funcional A1.",
  "how_to_use": "leia uma lição por vez. Faça primeiro as atividades da apostila e depois abra a prática indicada no English Tool. Ao terminar as três lições, faça o Checkpoint 5.",
  "lessons": [
    {
      "id": "module_5_lesson_1",
      "label": "Lição 13: Dizer o que está acontecendo",
      "order": 1,
      "can_do": [
        "dizer o que está acontecendo agora usando o presente contínuo",
        "diferenciar rotina (presente simples) de ação no momento (presente contínuo)",
        "fazer perguntas sobre o que alguém está fazendo agora"
      ],
      "opening": {
        "instruction": "Leia o diálogo. Depois, ouça-o no English Tool.",
        "dialogue": {
          "lines": [
            {
              "speaker": "Ana",
              "en": "Hi! What are you doing right now?",
              "audio_id": "audio_module_5_lesson_1_opening_line_1"
            },
            {
              "speaker": "Davi",
              "en": "I'm cooking dinner. What about you?",
              "audio_id": "audio_module_5_lesson_1_opening_line_2"
            },
            {
              "speaker": "Ana",
              "en": "I'm watching a movie. I usually cook at this time, but not today.",
              "audio_id": "audio_module_5_lesson_1_opening_line_3"
            }
          ],
          "full_audio_id": "audio_module_5_lesson_1_opening_full_1"
        },
        "translation": {
          "type": "summary",
          "text": "Ana pergunta o que Davi está fazendo agora. Ele está cozinhando o jantar. Ana está assistindo a um filme — ela geralmente cozinha nesse horário, mas hoje não."
        },
        "pattern_note": "Repare no contraste entre \"I'm cooking\", dito por Davi para falar do momento atual, e \"I usually cook\", dito por Ana para falar de rotina."
      },
      "understand": [
        {
          "title": "Presente contínuo",
          "intro": "Forme o presente contínuo com to be + verbo terminado em -ing.",
          "table": {
            "columns": [
              "Pessoa",
              "Forma",
              "Exemplo"
            ],
            "rows": [
              [
                "I",
                "am + -ing",
                "I am cooking."
              ],
              [
                "you / we / they",
                "are + -ing",
                "They are studying."
              ],
              [
                "he / she / it",
                "is + -ing",
                "She is working."
              ]
            ]
          },
          "note": "Negativa e pergunta.",
          "model_sentences": [
            {
              "text": "I'm not cooking right now.",
              "audio_id": "audio_module_5_lesson_1_model_1"
            },
            {
              "text": "Is she working? Yes, she is.",
              "audio_id": "audio_module_5_lesson_1_model_2"
            }
          ]
        },
        {
          "title": "Rotina ou agora?",
          "table": {
            "columns": [
              "Presente simples (rotina)",
              "Presente contínuo (agora)"
            ],
            "rows": [
              [
                "I cook every day.",
                "I'm cooking right now."
              ],
              [
                "She works from Monday to Friday.",
                "She's working right now."
              ]
            ]
          },
          "atencao": {
            "title": "nem todo verbo usa -ing com naturalidade",
            "text": "Verbos como like, want e know normalmente não aparecem com -ing, mesmo quando falamos do momento presente (\"I like it\" e não \"I'm liking it\"). Por enquanto, use -ing com verbos de ação (cook, study, work, watch), não com esses."
          }
        }
      ],
      "words_to_use": [
        {
          "word": "right now / at the moment",
          "example": "I'm busy right now.",
          "audio_id": "audio_module_5_lesson_1_word_example_1"
        },
        {
          "word": "cooking, studying, working, watching",
          "example": "She's studying.",
          "audio_id": "audio_module_5_lesson_1_word_example_2"
        },
        {
          "word": "doing",
          "example": "What are you doing?",
          "audio_id": "audio_module_5_lesson_1_word_example_3"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Ligação por vídeo",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "What are you doing?",
                "audio_id": "audio_module_5_lesson_1_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "I'm having lunch. Can I call you back?",
                "audio_id": "audio_module_5_lesson_1_seeitworking_1_line_2"
              }
            ],
            "full_audio_id": "audio_module_5_lesson_1_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Contraste rotina x agora",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Do you usually work on Saturdays?",
                "audio_id": "audio_module_5_lesson_1_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "No, I don't. But I'm working today because I have a deadline.",
                "audio_id": "audio_module_5_lesson_1_seeitworking_2_line_2"
              }
            ],
            "full_audio_id": "audio_module_5_lesson_1_seeitworking_2_full_1"
          }
        },
        {
          "title": "Situação 3 — Perguntando sobre outra pessoa",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Where's Marina?",
                "audio_id": "audio_module_5_lesson_1_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "She's in the kitchen. She's cooking.",
                "audio_id": "audio_module_5_lesson_1_seeitworking_3_line_2"
              }
            ],
            "full_audio_id": "audio_module_5_lesson_1_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_5_lesson_1_practice_1",
          "title": "Complete com am, is ou are + -ing",
          "type": "completar",
          "items": [
            {
              "prompt": "I ___ (study) English right now.",
              "answer": "am studying / 'm studying"
            },
            {
              "prompt": "She ___ (cook) dinner.",
              "answer": "is cooking"
            },
            {
              "prompt": "They ___ (watch) a movie.",
              "answer": "are watching"
            },
            {
              "prompt": "He ___ (not / work) today.",
              "answer": "is not working / isn't working"
            }
          ]
        },
        {
          "id": "module_5_lesson_1_practice_2",
          "title": "Rotina ou agora? Escolha a forma certa",
          "type": "escolha_por_contexto",
          "items": [
            {
              "prompt": "I usually ___ at seven.",
              "options": [
                "cook",
                "am cooking"
              ],
              "answer": 0
            },
            {
              "prompt": "Right now, she ___.",
              "options": [
                "works",
                "is working"
              ],
              "answer": 1
            },
            {
              "prompt": "They ___ English every day.",
              "options": [
                "study",
                "are studying"
              ],
              "answer": 0
            },
            {
              "prompt": "Look! He ___.",
              "options": [
                "dances",
                "is dancing"
              ],
              "answer": 1
            }
          ]
        },
        {
          "id": "module_5_lesson_1_practice_3",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "O presente contínuo é formado com to be + verbo -ing.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"I like\" pode virar naturalmente \"I'm liking\" no dia a dia.",
              "answer": false,
              "feedback": "F. \"Like\" normalmente não aparece com -ing."
            },
            {
              "statement": "O presente simples é usado para rotina; o contínuo, para o momento agora.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"She is working\" indica uma ação acontecendo agora.",
              "answer": true,
              "feedback": "V."
            }
          ]
        },
        {
          "id": "module_5_lesson_1_practice_4",
          "title": "Transforme em pergunta",
          "type": "transformar",
          "items": [
            {
              "prompt": "She is studying.",
              "answer": "Is she studying?"
            },
            {
              "prompt": "They are working.",
              "answer": "Are they working?"
            },
            {
              "prompt": "He is cooking.",
              "answer": "Is he cooking?"
            }
          ]
        }
      ],
      "your_turn": {
        "id": "module_5_lesson_1_production",
        "type": "producao_livre",
        "instruction": "Descreva o que você está fazendo agora e o que normalmente faz nesse horário.",
        "template": [
          "Right now, I'm __________.",
          "I usually __________ at this time."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Complete com -ing",
          "detail": "quatro frases no presente contínuo",
          "skill": "escrita"
        },
        {
          "label": "Rotina ou agora",
          "detail": "escolher a forma certa",
          "skill": "leitura"
        },
        {
          "label": "Ouça e identifique",
          "detail": "rotina ou ação do momento",
          "skill": "escuta"
        },
        {
          "label": "Agora mesmo",
          "detail": "gravar ou digitar o que está fazendo",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_5_lesson_1_review",
        "recycles": [
          "module_3_lesson_2"
        ],
        "instruction": "Complete reciclando o presente simples (Lição 8) antes de contrastar com o presente contínuo:",
        "template": "I usually ___ (work) at home, but today I ___ (work) at a café.",
        "possible_answer": "work, am working / 'm working"
      },
      "check_progress": {
        "can_do": [
          "formar o presente contínuo com to be + -ing",
          "diferenciar rotina de ação no momento",
          "perguntar o que alguém está fazendo agora"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Estruturas essenciais → Presente contínuo"
    },
    {
      "id": "module_5_lesson_2",
      "label": "Lição 14: Corpo, necessidades e desconfortos",
      "order": 2,
      "can_do": [
        "nomear partes do corpo",
        "expressar necessidade usando need e have to",
        "pedir e oferecer ajuda em uma situação simples de desconforto"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Enzo",
              "en": "Are you okay?",
              "audio_id": "audio_module_5_lesson_2_opening_line_1"
            },
            {
              "speaker": "Lara",
              "en": "Not really. My head hurts. I need some water.",
              "audio_id": "audio_module_5_lesson_2_opening_line_2"
            },
            {
              "speaker": "Enzo",
              "en": "Sure, I have to get some anyway. Do you need anything else?",
              "audio_id": "audio_module_5_lesson_2_opening_line_3"
            },
            {
              "speaker": "Lara",
              "en": "No, thank you. I just have to rest a little.",
              "audio_id": "audio_module_5_lesson_2_opening_line_4"
            }
          ],
          "full_audio_id": "audio_module_5_lesson_2_opening_full_1"
        },
        "translation": {
          "type": "summary",
          "text": "Enzo pergunta se Lara está bem. Ela não está muito bem — sua cabeça dói e ela precisa de água. Enzo vai pegar, e Lara só precisa descansar um pouco."
        },
        "pattern_note": "Compare \"I need some water\" (necessidade de algo) e \"I have to rest\" (necessidade de fazer algo)."
      },
      "understand": [
        {
          "title": "Need e have to",
          "table": {
            "columns": [
              "Expressão",
              "Uso",
              "Exemplo"
            ],
            "rows": [
              [
                "I need + substantivo",
                "necessidade de algo",
                "I need water."
              ],
              [
                "I need to + verbo",
                "necessidade de fazer algo",
                "I need to rest."
              ],
              [
                "I have to + verbo",
                "obrigação/necessidade",
                "I have to go to the doctor."
              ]
            ]
          }
        },
        {
          "title": "Partes do corpo e \"hurt\"",
          "table": {
            "columns": [
              "Parte do corpo",
              "Exemplo com hurt"
            ],
            "rows": [
              [
                "head",
                "My head hurts."
              ],
              [
                "stomach",
                "My stomach hurts."
              ],
              [
                "back",
                "My back hurts."
              ],
              [
                "legs (plural)",
                "My legs hurt."
              ],
              [
                "arm",
                "My arm hurts."
              ]
            ]
          },
          "atencao": {
            "title": "hurt concorda com singular ou plural",
            "text": "Com uma parte no singular, use hurts (My head hurts). Com uma parte no plural, use hurt sem -s (My legs hurt) — a mesma regra do presente simples que você já viu na Lição 8, aplicada aqui a \"hurt\"."
          }
        }
      ],
      "words_to_use": [
        {
          "word": "headache / stomachache",
          "example": "I have a headache.",
          "audio_id": "audio_module_5_lesson_2_word_example_1"
        },
        {
          "word": "rest",
          "example": "I need to rest.",
          "audio_id": "audio_module_5_lesson_2_word_example_2"
        },
        {
          "word": "water / medicine",
          "example": "Can I have some water?",
          "audio_id": "audio_module_5_lesson_2_word_example_3"
        },
        {
          "word": "Can I help you?",
          "example": "Are you okay? Can I help you?",
          "audio_id": "audio_module_5_lesson_2_word_example_4"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Pedindo ajuda no trabalho",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Are you okay? You look tired.",
                "audio_id": "audio_module_5_lesson_2_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "I have a headache. I need to rest for a few minutes.",
                "audio_id": "audio_module_5_lesson_2_seeitworking_1_line_2"
              }
            ],
            "full_audio_id": "audio_module_5_lesson_2_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Oferecendo ajuda",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "My back hurts. I have to sit down.",
                "audio_id": "audio_module_5_lesson_2_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "Can I help you? Do you need anything?",
                "audio_id": "audio_module_5_lesson_2_seeitworking_2_line_2"
              }
            ],
            "full_audio_id": "audio_module_5_lesson_2_seeitworking_2_full_1"
          }
        },
        {
          "title": "Situação 3 — No consultório",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "What's wrong?",
                "audio_id": "audio_module_5_lesson_2_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "My stomach hurts. I think I need to see a doctor.",
                "audio_id": "audio_module_5_lesson_2_seeitworking_3_line_2"
              }
            ],
            "full_audio_id": "audio_module_5_lesson_2_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_5_lesson_2_practice_1",
          "title": "Complete com need, need to ou have to",
          "type": "completar",
          "items": [
            {
              "prompt": "I ___ water.",
              "answer": "need"
            },
            {
              "prompt": "She ___ rest.",
              "answer": "needs to"
            },
            {
              "prompt": "We ___ go to the doctor.",
              "answer": "have to"
            },
            {
              "prompt": "He ___ some medicine.",
              "answer": "needs"
            }
          ]
        },
        {
          "id": "module_5_lesson_2_practice_2",
          "title": "Escolha hurt ou hurts",
          "type": "escolha_por_contexto",
          "items": [
            {
              "prompt": "My head ___.",
              "options": [
                "hurt",
                "hurts"
              ],
              "answer": 1
            },
            {
              "prompt": "My legs ___.",
              "options": [
                "hurt",
                "hurts"
              ],
              "answer": 0
            },
            {
              "prompt": "Her back ___.",
              "options": [
                "hurt",
                "hurts"
              ],
              "answer": 1
            },
            {
              "prompt": "My arms ___.",
              "options": [
                "hurt",
                "hurts"
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "module_5_lesson_2_practice_3",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "\"I need water\" usa need com substantivo.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"My legs hurt\" está no plural, sem -s.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"Have to\" indica algo opcional, sem necessidade real.",
              "answer": false,
              "feedback": "F. \"Have to\" indica obrigação ou necessidade real, não algo opcional."
            },
            {
              "statement": "\"Can I help you?\" é uma forma de oferecer ajuda.",
              "answer": true,
              "feedback": "V."
            }
          ]
        },
        {
          "id": "module_5_lesson_2_practice_4",
          "title": "Associe",
          "type": "associar",
          "instruction": "Ligue o sintoma à ajuda mais provável.",
          "columnA": [
            "My head hurts.",
            "I'm thirsty.",
            "I'm very tired."
          ],
          "columnB": [
            "I need to rest.",
            "I need some water.",
            "I need some medicine."
          ],
          "answer": {
            "My head hurts.": "I need some medicine.",
            "I'm thirsty.": "I need some water.",
            "I'm very tired.": "I need to rest."
          }
        }
      ],
      "your_turn": {
        "id": "module_5_lesson_2_production",
        "type": "producao_livre",
        "instruction": "Descreva um desconforto (real ou inventado) e o que você precisa fazer.",
        "template": [
          "My __________ hurts. I need __________."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Complete com need/have to",
          "detail": "quatro frases",
          "skill": "escrita"
        },
        {
          "label": "Hurt ou hurts",
          "detail": "completar quatro frases",
          "skill": "leitura/gramática"
        },
        {
          "label": "Ouça o sintoma",
          "detail": "identificar a parte do corpo mencionada",
          "skill": "escuta"
        },
        {
          "label": "Preciso de ajuda",
          "detail": "gravar ou digitar um pedido de ajuda",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_5_lesson_2_review",
        "recycles": [
          "module_3_lesson_3"
        ],
        "instruction": "Complete reciclando can/can't (Lição 9) para oferecer ajuda:",
        "template": "___ I help you? — Yes, ___ you get me some water, please?",
        "possible_answer": "Can, can"
      },
      "check_progress": {
        "can_do": [
          "nomear partes do corpo",
          "expressar necessidade com need e have to",
          "pedir e oferecer ajuda em uma situação simples"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Estruturas essenciais → Corpo e necessidades"
    },
    {
      "id": "module_5_lesson_3",
      "label": "Lição 15: Identificar, comparar e indicar posse",
      "order": 3,
      "can_do": [
        "usar this, that, these e those corretamente",
        "indicar posse com 's e pronomes possessivos",
        "fazer comparações simples com -er e more"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Iago",
              "en": "Is this your bag?",
              "audio_id": "audio_module_5_lesson_3_opening_line_1"
            },
            {
              "speaker": "Zoe",
              "en": "No, that's not mine. Mine is the blue one, over there.",
              "audio_id": "audio_module_5_lesson_3_opening_line_2"
            },
            {
              "speaker": "Iago",
              "en": "These shoes are Marco's, right?",
              "audio_id": "audio_module_5_lesson_3_opening_line_3"
            },
            {
              "speaker": "Zoe",
              "en": "Yes, and those are bigger than mine.",
              "audio_id": "audio_module_5_lesson_3_opening_line_4"
            }
          ],
          "full_audio_id": "audio_module_5_lesson_3_opening_full_1"
        },
        "translation": {
          "type": "summary",
          "text": "Iago pergunta se a bolsa é de Zoe. Não é — a dela é a azul, ali. Estes sapatos são do Marco, e aqueles são maiores que os dela."
        },
        "pattern_note": "Repare em this/these (perto) e that/those (longe), e em mine e Marco's indicando posse."
      },
      "understand": [
        {
          "title": "This, that, these, those",
          "table": {
            "columns": [
              "Palavra",
              "Distância",
              "Número"
            ],
            "rows": [
              [
                "this",
                "perto",
                "singular"
              ],
              [
                "that",
                "longe",
                "singular"
              ],
              [
                "these",
                "perto",
                "plural"
              ],
              [
                "those",
                "longe",
                "plural"
              ]
            ]
          },
          "model_sentences": [
            {
              "text": "This is my bag.",
              "audio_id": "audio_module_5_lesson_3_model_1"
            },
            {
              "text": "That is your bag.",
              "audio_id": "audio_module_5_lesson_3_model_2"
            },
            {
              "text": "These are my shoes.",
              "audio_id": "audio_module_5_lesson_3_model_3"
            },
            {
              "text": "Those are your shoes.",
              "audio_id": "audio_module_5_lesson_3_model_4"
            }
          ]
        },
        {
          "title": "Posse",
          "table": {
            "columns": [
              "Forma",
              "Exemplo"
            ],
            "rows": [
              [
                "'s (nome + apóstrofo + s)",
                "Marco's bag — a bolsa do Marco"
              ],
              [
                "mine, yours, his, hers, ours, theirs",
                "This bag is mine."
              ]
            ]
          },
          "atencao": {
            "title": "'s também aparece em contrações de is",
            "text": "Você já viu 's como contração de \"is\" (she's = she is). Aqui, 's tem outro papel: indicar posse (Marco's bag = a bolsa do Marco). O contexto da frase mostra qual dos dois usos está sendo feito."
          }
        },
        {
          "title": "Comparativos simples",
          "table": {
            "columns": [
              "Regra",
              "Exemplo"
            ],
            "rows": [
              [
                "Palavras curtas: -er",
                "big → bigger, cheap → cheaper"
              ],
              [
                "Palavras longas: more",
                "expensive → more expensive"
              ]
            ]
          },
          "model_sentences": [
            {
              "text": "This bag is bigger than that one.",
              "audio_id": "audio_module_5_lesson_3_model_5"
            },
            {
              "text": "This bag is more expensive than that one.",
              "audio_id": "audio_module_5_lesson_3_model_6"
            }
          ]
        }
      ],
      "words_to_use": [
        {
          "word": "mine / yours / his / hers",
          "example": "Is this yours?",
          "audio_id": "audio_module_5_lesson_3_word_example_1"
        },
        {
          "word": "bigger / smaller",
          "example": "This one is bigger.",
          "audio_id": "audio_module_5_lesson_3_word_example_2"
        },
        {
          "word": "more expensive / cheaper",
          "example": "That one is more expensive.",
          "audio_id": "audio_module_5_lesson_3_word_example_3"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Comparando duas opções",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "This shirt is nice, but that one is cheaper.",
                "audio_id": "audio_module_5_lesson_3_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "Yes, and it's more comfortable too.",
                "audio_id": "audio_module_5_lesson_3_seeitworking_1_line_2"
              }
            ],
            "full_audio_id": "audio_module_5_lesson_3_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Perguntando de quem é",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Whose bag is this?",
                "audio_id": "audio_module_5_lesson_3_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "It's Marco's. Mine is the black one.",
                "audio_id": "audio_module_5_lesson_3_seeitworking_2_line_2"
              }
            ],
            "full_audio_id": "audio_module_5_lesson_3_seeitworking_2_full_1"
          }
        },
        {
          "title": "Situação 3 — Comparando lugares",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Is this park bigger than that one?",
                "audio_id": "audio_module_5_lesson_3_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "Yes, this one is much bigger.",
                "audio_id": "audio_module_5_lesson_3_seeitworking_3_line_2"
              }
            ],
            "full_audio_id": "audio_module_5_lesson_3_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_5_lesson_3_practice_1",
          "title": "Escolha this, that, these ou those",
          "type": "escolha_por_contexto",
          "instruction": "Marque a opção correta.",
          "items": [
            {
              "prompt": "___ is my phone. (perto, uma coisa)",
              "options": [
                "This",
                "That",
                "These",
                "Those"
              ],
              "answer": 0
            },
            {
              "prompt": "___ are your shoes, over there. (longe, mais de uma coisa)",
              "options": [
                "This",
                "That",
                "These",
                "Those"
              ],
              "answer": 3
            },
            {
              "prompt": "___ is Marco's bag. (longe, uma coisa)",
              "options": [
                "This",
                "That",
                "These",
                "Those"
              ],
              "answer": 1
            },
            {
              "prompt": "___ are my keys. (perto, mais de uma coisa)",
              "options": [
                "This",
                "That",
                "These",
                "Those"
              ],
              "answer": 2
            }
          ]
        },
        {
          "id": "module_5_lesson_3_practice_2",
          "title": "Transforme para o comparativo",
          "type": "transformar",
          "items": [
            {
              "prompt": "This bag is ___ (big) than that one.",
              "answer": "bigger"
            },
            {
              "prompt": "This phone is ___ (expensive) than that one.",
              "answer": "more expensive"
            },
            {
              "prompt": "This shirt is ___ (cheap) than that one.",
              "answer": "cheaper"
            }
          ]
        },
        {
          "id": "module_5_lesson_3_practice_3",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "\"This\" é usado para algo perto, no singular.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"Those\" é usado para algo perto, no plural.",
              "answer": false,
              "feedback": "F. \"Those\" é para longe, no plural — \"these\" é para perto, no plural."
            },
            {
              "statement": "Palavras curtas geralmente formam o comparativo com -er.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"Marco's bag\" indica que a bolsa pertence a Marco.",
              "answer": true,
              "feedback": "V."
            }
          ]
        },
        {
          "id": "module_5_lesson_3_practice_4",
          "title": "Una as informações",
          "type": "una_as_informacoes",
          "instruction": "Transforme em uma frase de comparação.",
          "items": [
            {
              "prompt": "this bag / cheap / that bag",
              "answer": "This bag is cheaper than that bag."
            },
            {
              "prompt": "this park / big / that park",
              "answer": "This park is bigger than that park."
            }
          ]
        },
        {
          "id": "module_5_lesson_3_practice_5",
          "title": "Complete com mine, yours ou Marco's",
          "type": "completar",
          "items": [
            {
              "prompt": "This is my bag. This bag is ___.",
              "answer": "mine"
            },
            {
              "prompt": "Is this your phone? Is this ___?",
              "answer": "yours"
            },
            {
              "prompt": "This is Marco's jacket. It is ___ jacket.",
              "answer": "Marco's"
            }
          ]
        }
      ],
      "your_turn": {
        "id": "module_5_lesson_3_production",
        "type": "producao_livre",
        "instruction": "Compare dois objetos seus (reais ou inventados).",
        "template": [
          "This __________ is __________ than that __________."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "This, that, these, those",
          "detail": "completar quatro frases",
          "skill": "leitura/gramática"
        },
        {
          "label": "Comparativos",
          "detail": "completar três frases",
          "skill": "escrita"
        },
        {
          "label": "Posse",
          "detail": "completar três frases com mine, yours ou Marco's",
          "skill": "leitura/gramática"
        },
        {
          "label": "Ouça e compare",
          "detail": "identificar qual objeto é maior/mais caro",
          "skill": "escuta"
        },
        {
          "label": "Minha comparação",
          "detail": "gravar ou digitar uma comparação própria",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_5_lesson_3_review",
        "recycles": [
          "module_4_lesson_2",
          "module_4_lesson_3"
        ],
        "instruction": "Complete reciclando artigos, plural e objetos (Lição 11 e 12) antes de comparar:",
        "template": "This is ___ (a/an) bag. These ___ (is/are) shoes.",
        "possible_answer": "a, are"
      },
      "check_progress": {
        "can_do": [
          "usar this, that, these e those corretamente",
          "indicar posse com 's e pronomes possessivos",
          "fazer comparações simples com -er e more"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Estruturas essenciais → This, that e comparativos"
    }
  ],
  "checkpoint": {
    "id": "module_5_checkpoint",
    "label": "Checkpoint 5: Autonomia em situações previsíveis",
    "instruction": "Este é o checkpoint que encerra a Parte 2 do English Tool. Ele verifica as três lições do Módulo 5 em conjunto e reaplica os erros essenciais acumulados dos Checkpoints 1 a 4, até o critério de domínio ser atingido — não apenas o erro do checkpoint imediatamente anterior. Faça sem consultar o gabarito. Depois, corrija e repita somente o que errou.",
    "parts": [
      {
        "id": "module_5_checkpoint_part_a",
        "label": "Parte A — Complete a situação guiada",
        "type": "completar",
        "instruction": "Use uma vez cada expressão.",
        "word_bank": [
          "What are you doing",
          "I need to",
          "hurts",
          "this one",
          "bigger than"
        ],
        "text_template": "A: __________ right now?\nB: I'm resting. My back __________.\nA: __________ rest too. Which bag do you want, __________ or that one?\nB: That one. It's __________ this one.",
        "answer": "What are you doing right now? / I'm resting. My back hurts. / I need to rest too. Which bag do you want, this one or that one? / That one. It's bigger than this one."
      },
      {
        "id": "module_5_checkpoint_part_b",
        "label": "Parte B — Encontre e corrija o erro",
        "type": "encontre_o_erro",
        "instruction": "Reaplica pontos de todos os checkpoints anteriores.",
        "items": [
          {
            "prompt": "She work on Mondays.",
            "note": "reaplicado — presente simples, Checkpoint 3",
            "answer": "She works on Mondays."
          },
          {
            "prompt": "How much shirts do you have?",
            "note": "reaplicado — how much/how many, Checkpoint 4",
            "answer": "How many shirts do you have?"
          },
          {
            "prompt": "What your name?",
            "note": "reaplicado — pergunta com to be, Checkpoint 2/1",
            "answer": "What's your name?"
          },
          {
            "prompt": "I is cooking right now.",
            "note": "novo — presente contínuo, Lição 13",
            "answer": "I am cooking right now."
          },
          {
            "prompt": "My legs hurts.",
            "note": "novo — concordância de hurt, Lição 14",
            "answer": "My legs hurt."
          },
          {
            "prompt": "This are my shoes.",
            "note": "novo — this/these, Lição 15",
            "answer": "These are my shoes."
          }
        ]
      },
      {
        "id": "module_5_checkpoint_part_c",
        "label": "Parte C — Produção final",
        "type": "producao_livre",
        "instruction": "Escreva ou grave uma conversa de oito a dez falas combinando os cinco módulos. A conversa deve conter:",
        "requirements": [
          "um cumprimento e uma despedida (Módulo 1)",
          "uma pergunta essencial ou troca de dado pessoal (Módulo 2)",
          "uma referência a horário, rotina ou um convite (Módulo 3)",
          "uma descrição de lugar, objeto ou quantidade (Módulo 4)",
          "pelo menos uma frase no presente contínuo, uma necessidade e uma comparação (Módulo 5)"
        ],
        "criterion": "tentativa_registrada"
      }
    ],
    "completion_criterion": {
      "objective_items_total": 11,
      "objective_items_required": 9,
      "text": "acertar pelo menos 9 dos 11 itens objetivos do checkpoint (5 da Parte A + 6 da Parte B); concluir a produção final com os cinco elementos solicitados; refazer todos os itens essenciais ainda pendentes dos Checkpoints 1 a 5, não apenas os deste checkpoint.",
      "non_blocking_note": "Se ainda não alcançar o critério, o módulo não será apagado nem reiniciado. O English Tool mostrará quais lições e quais checkpoints anteriores revisar, e oferecerá novas tentativas apenas com os pontos necessários."
    },
    "part_end_note": "Fim da Parte 2: ao concluir o Checkpoint 5, você encerra o percurso principal do English Tool — você já consegue descrever seu entorno, expressar necessidades, falar do momento presente e do cotidiano, e sustentar uma conversa guiada com autonomia dentro do escopo Pre-A1 a uma base funcional A1."
  },
  "source": "ENGLISH-TOOL-MODULO-5-RECONSTRUIDO.md",
  "notes": [
    "Nenhuma referência a Entrevistas ou a qualquer conteúdo pessoal da Amanda (verificado na fonte e no QA-CONJUNTO-MODULOS-3-A-5.md)."
  ]
};

export const PART_2_MODULES = [MODULE_4, MODULE_5];

export const PART_2_AUDIO = [
  {
    "id": "audio_module_4_lesson_1_opening_line_1",
    "lesson_id": "module_4_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "What's your kitchen like?"
  },
  {
    "id": "audio_module_4_lesson_1_opening_line_2",
    "lesson_id": "module_4_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "There's a table in the middle. There are two chairs next to it."
  },
  {
    "id": "audio_module_4_lesson_1_opening_line_3",
    "lesson_id": "module_4_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Is there a window?"
  },
  {
    "id": "audio_module_4_lesson_1_opening_line_4",
    "lesson_id": "module_4_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, there's a window behind the table."
  },
  {
    "id": "audio_module_4_lesson_1_opening_full_1",
    "lesson_id": "module_4_lesson_1",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "What's your kitchen like? There's a table in the middle. There are two chairs next to it. Is there a window? Yes, there's a window behind the table."
  },
  {
    "id": "audio_module_4_lesson_1_word_example_1",
    "lesson_id": "module_4_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "The kitchen is small."
  },
  {
    "id": "audio_module_4_lesson_1_word_example_2",
    "lesson_id": "module_4_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "There's a park near my house."
  },
  {
    "id": "audio_module_4_lesson_1_word_example_3",
    "lesson_id": "module_4_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "There's a door next to the window."
  },
  {
    "id": "audio_module_4_lesson_1_word_example_4",
    "lesson_id": "module_4_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I live on a quiet street."
  },
  {
    "id": "audio_module_4_lesson_1_seeitworking_1_line_1",
    "lesson_id": "module_4_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "What's your living room like?"
  },
  {
    "id": "audio_module_4_lesson_1_seeitworking_1_line_2",
    "lesson_id": "module_4_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "There's a sofa in the middle and a TV in front of it."
  },
  {
    "id": "audio_module_4_lesson_1_seeitworking_1_full_1",
    "lesson_id": "module_4_lesson_1",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "What's your living room like? There's a sofa in the middle and a TV in front of it."
  },
  {
    "id": "audio_module_4_lesson_1_seeitworking_2_line_1",
    "lesson_id": "module_4_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Is there a supermarket near here?"
  },
  {
    "id": "audio_module_4_lesson_1_seeitworking_2_line_2",
    "lesson_id": "module_4_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, there's one next to the school."
  },
  {
    "id": "audio_module_4_lesson_1_seeitworking_2_full_1",
    "lesson_id": "module_4_lesson_1",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "Is there a supermarket near here? Yes, there's one next to the school."
  },
  {
    "id": "audio_module_4_lesson_1_seeitworking_3_line_1",
    "lesson_id": "module_4_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Excuse me, is there a park around here?"
  },
  {
    "id": "audio_module_4_lesson_1_seeitworking_3_line_2",
    "lesson_id": "module_4_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, it's behind that building."
  },
  {
    "id": "audio_module_4_lesson_1_seeitworking_3_full_1",
    "lesson_id": "module_4_lesson_1",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "Excuse me, is there a park around here? Yes, it's behind that building."
  },
  {
    "id": "audio_module_4_lesson_2_opening_line_1",
    "lesson_id": "module_4_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I need a new bag. Do you like this one?"
  },
  {
    "id": "audio_module_4_lesson_2_opening_line_2",
    "lesson_id": "module_4_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's nice, but it's expensive. What about that small blue one?"
  },
  {
    "id": "audio_module_4_lesson_2_opening_line_3",
    "lesson_id": "module_4_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "The blue one? It's cheaper, and it's really practical."
  },
  {
    "id": "audio_module_4_lesson_2_opening_full_1",
    "lesson_id": "module_4_lesson_2",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "I need a new bag. Do you like this one? It's nice, but it's expensive. What about that small blue one? The blue one? It's cheaper, and it's really practical."
  },
  {
    "id": "audio_module_4_lesson_2_word_example_1",
    "lesson_id": "module_4_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "It's a big house."
  },
  {
    "id": "audio_module_4_lesson_2_word_example_2",
    "lesson_id": "module_4_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I have a new phone."
  },
  {
    "id": "audio_module_4_lesson_2_word_example_3",
    "lesson_id": "module_4_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "This bag is expensive."
  },
  {
    "id": "audio_module_4_lesson_2_word_example_4",
    "lesson_id": "module_4_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I like the blue one."
  },
  {
    "id": "audio_module_4_lesson_2_word_example_5",
    "lesson_id": "module_4_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "These shoes are comfortable."
  },
  {
    "id": "audio_module_4_lesson_2_seeitworking_1_line_1",
    "lesson_id": "module_4_lesson_2",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Do you like this jacket?"
  },
  {
    "id": "audio_module_4_lesson_2_seeitworking_1_line_2",
    "lesson_id": "module_4_lesson_2",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's nice, but I prefer the black one. It's more practical."
  },
  {
    "id": "audio_module_4_lesson_2_seeitworking_1_full_1",
    "lesson_id": "module_4_lesson_2",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "Do you like this jacket? It's nice, but I prefer the black one. It's more practical."
  },
  {
    "id": "audio_module_4_lesson_2_seeitworking_2_line_1",
    "lesson_id": "module_4_lesson_2",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "What's your new coworker like?"
  },
  {
    "id": "audio_module_4_lesson_2_seeitworking_2_line_2",
    "lesson_id": "module_4_lesson_2",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "She's friendly and she has a big smile."
  },
  {
    "id": "audio_module_4_lesson_2_seeitworking_2_full_1",
    "lesson_id": "module_4_lesson_2",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "What's your new coworker like? She's friendly and she has a big smile."
  },
  {
    "id": "audio_module_4_lesson_2_seeitworking_3_line_1",
    "lesson_id": "module_4_lesson_2",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Which one do you like, the big bag or the small one?"
  },
  {
    "id": "audio_module_4_lesson_2_seeitworking_3_line_2",
    "lesson_id": "module_4_lesson_2",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "The small one. It's cheaper and it's easier to carry."
  },
  {
    "id": "audio_module_4_lesson_2_seeitworking_3_full_1",
    "lesson_id": "module_4_lesson_2",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "Which one do you like, the big bag or the small one? The small one. It's cheaper and it's easier to carry."
  },
  {
    "id": "audio_module_4_lesson_3_opening_line_1",
    "lesson_id": "module_4_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Can I help you?"
  },
  {
    "id": "audio_module_4_lesson_3_opening_line_2",
    "lesson_id": "module_4_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, please. How much is this shirt?"
  },
  {
    "id": "audio_module_4_lesson_3_opening_line_3",
    "lesson_id": "module_4_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's twenty dollars. Do you need it in another size?"
  },
  {
    "id": "audio_module_4_lesson_3_opening_line_4",
    "lesson_id": "module_4_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Do you have any in medium?"
  },
  {
    "id": "audio_module_4_lesson_3_opening_line_5",
    "lesson_id": "module_4_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, we have some in medium."
  },
  {
    "id": "audio_module_4_lesson_3_opening_full_1",
    "lesson_id": "module_4_lesson_3",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "Can I help you? Yes, please. How much is this shirt? It's twenty dollars. Do you need it in another size? Do you have any in medium? Yes, we have some in medium."
  },
  {
    "id": "audio_module_4_lesson_3_word_example_1",
    "lesson_id": "module_4_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "How much is it?"
  },
  {
    "id": "audio_module_4_lesson_3_word_example_2",
    "lesson_id": "module_4_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Do you have this in a large size?"
  },
  {
    "id": "audio_module_4_lesson_3_word_example_3",
    "lesson_id": "module_4_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I need a new jacket."
  },
  {
    "id": "audio_module_4_lesson_3_word_example_4",
    "lesson_id": "module_4_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I need some help."
  },
  {
    "id": "audio_module_4_lesson_3_seeitworking_1_line_1",
    "lesson_id": "module_4_lesson_3",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "How much are these shoes?"
  },
  {
    "id": "audio_module_4_lesson_3_seeitworking_1_line_2",
    "lesson_id": "module_4_lesson_3",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "They're forty dollars."
  },
  {
    "id": "audio_module_4_lesson_3_seeitworking_1_full_1",
    "lesson_id": "module_4_lesson_3",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "How much are these shoes? They're forty dollars."
  },
  {
    "id": "audio_module_4_lesson_3_seeitworking_2_line_1",
    "lesson_id": "module_4_lesson_3",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "How many shirts do you want?"
  },
  {
    "id": "audio_module_4_lesson_3_seeitworking_2_line_2",
    "lesson_id": "module_4_lesson_3",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Just one, please."
  },
  {
    "id": "audio_module_4_lesson_3_seeitworking_2_full_1",
    "lesson_id": "module_4_lesson_3",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "How many shirts do you want? Just one, please."
  },
  {
    "id": "audio_module_4_lesson_3_seeitworking_3_line_1",
    "lesson_id": "module_4_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Do you have any bags in blue?"
  },
  {
    "id": "audio_module_4_lesson_3_seeitworking_3_line_2",
    "lesson_id": "module_4_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, we have some. How many do you need?"
  },
  {
    "id": "audio_module_4_lesson_3_seeitworking_3_line_3",
    "lesson_id": "module_4_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Just one."
  },
  {
    "id": "audio_module_4_lesson_3_seeitworking_3_full_1",
    "lesson_id": "module_4_lesson_3",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "Do you have any bags in blue? Yes, we have some. How many do you need? Just one."
  },
  {
    "id": "audio_module_4_lesson_3_practice4_line_1",
    "lesson_id": "module_4_lesson_3",
    "type": "practice4_line",
    "language": "en-US",
    "rate": 1,
    "text": "Do you have __________ shirts in medium?"
  },
  {
    "id": "audio_module_4_lesson_3_practice4_line_2",
    "lesson_id": "module_4_lesson_3",
    "type": "practice4_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, we have __________."
  },
  {
    "id": "audio_module_4_lesson_3_practice4_line_3",
    "lesson_id": "module_4_lesson_3",
    "type": "practice4_line",
    "language": "en-US",
    "rate": 1,
    "text": "__________ are they?"
  },
  {
    "id": "audio_module_4_lesson_3_practice4_line_4",
    "lesson_id": "module_4_lesson_3",
    "type": "practice4_line",
    "language": "en-US",
    "rate": 1,
    "text": "Thirty dollars. __________ do you need?"
  },
  {
    "id": "audio_module_4_lesson_3_practice4_line_5",
    "lesson_id": "module_4_lesson_3",
    "type": "practice4_line",
    "language": "en-US",
    "rate": 1,
    "text": "Just two."
  },
  {
    "id": "audio_module_4_lesson_3_practice4_full_1",
    "lesson_id": "module_4_lesson_3",
    "type": "practice4_full",
    "language": "en-US",
    "rate": 1,
    "text": "Do you have __________ shirts in medium? Yes, we have __________. __________ are they? Thirty dollars. __________ do you need? Just two."
  },
  {
    "id": "audio_module_5_lesson_1_opening_line_1",
    "lesson_id": "module_5_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! What are you doing right now?"
  },
  {
    "id": "audio_module_5_lesson_1_opening_line_2",
    "lesson_id": "module_5_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm cooking dinner. What about you?"
  },
  {
    "id": "audio_module_5_lesson_1_opening_line_3",
    "lesson_id": "module_5_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm watching a movie. I usually cook at this time, but not today."
  },
  {
    "id": "audio_module_5_lesson_1_opening_full_1",
    "lesson_id": "module_5_lesson_1",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! What are you doing right now? I'm cooking dinner. What about you? I'm watching a movie. I usually cook at this time, but not today."
  },
  {
    "id": "audio_module_5_lesson_1_model_1",
    "lesson_id": "module_5_lesson_1",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "I'm not cooking right now."
  },
  {
    "id": "audio_module_5_lesson_1_model_2",
    "lesson_id": "module_5_lesson_1",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "Is she working? Yes, she is."
  },
  {
    "id": "audio_module_5_lesson_1_word_example_1",
    "lesson_id": "module_5_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I'm busy right now."
  },
  {
    "id": "audio_module_5_lesson_1_word_example_2",
    "lesson_id": "module_5_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "She's studying."
  },
  {
    "id": "audio_module_5_lesson_1_word_example_3",
    "lesson_id": "module_5_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "What are you doing?"
  },
  {
    "id": "audio_module_5_lesson_1_seeitworking_1_line_1",
    "lesson_id": "module_5_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "What are you doing?"
  },
  {
    "id": "audio_module_5_lesson_1_seeitworking_1_line_2",
    "lesson_id": "module_5_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm having lunch. Can I call you back?"
  },
  {
    "id": "audio_module_5_lesson_1_seeitworking_1_full_1",
    "lesson_id": "module_5_lesson_1",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "What are you doing? I'm having lunch. Can I call you back?"
  },
  {
    "id": "audio_module_5_lesson_1_seeitworking_2_line_1",
    "lesson_id": "module_5_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Do you usually work on Saturdays?"
  },
  {
    "id": "audio_module_5_lesson_1_seeitworking_2_line_2",
    "lesson_id": "module_5_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "No, I don't. But I'm working today because I have a deadline."
  },
  {
    "id": "audio_module_5_lesson_1_seeitworking_2_full_1",
    "lesson_id": "module_5_lesson_1",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "Do you usually work on Saturdays? No, I don't. But I'm working today because I have a deadline."
  },
  {
    "id": "audio_module_5_lesson_1_seeitworking_3_line_1",
    "lesson_id": "module_5_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Where's Marina?"
  },
  {
    "id": "audio_module_5_lesson_1_seeitworking_3_line_2",
    "lesson_id": "module_5_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "She's in the kitchen. She's cooking."
  },
  {
    "id": "audio_module_5_lesson_1_seeitworking_3_full_1",
    "lesson_id": "module_5_lesson_1",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "Where's Marina? She's in the kitchen. She's cooking."
  },
  {
    "id": "audio_module_5_lesson_2_opening_line_1",
    "lesson_id": "module_5_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Are you okay?"
  },
  {
    "id": "audio_module_5_lesson_2_opening_line_2",
    "lesson_id": "module_5_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Not really. My head hurts. I need some water."
  },
  {
    "id": "audio_module_5_lesson_2_opening_line_3",
    "lesson_id": "module_5_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Sure, I have to get some anyway. Do you need anything else?"
  },
  {
    "id": "audio_module_5_lesson_2_opening_line_4",
    "lesson_id": "module_5_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "No, thank you. I just have to rest a little."
  },
  {
    "id": "audio_module_5_lesson_2_opening_full_1",
    "lesson_id": "module_5_lesson_2",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "Are you okay? Not really. My head hurts. I need some water. Sure, I have to get some anyway. Do you need anything else? No, thank you. I just have to rest a little."
  },
  {
    "id": "audio_module_5_lesson_2_word_example_1",
    "lesson_id": "module_5_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I have a headache."
  },
  {
    "id": "audio_module_5_lesson_2_word_example_2",
    "lesson_id": "module_5_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I need to rest."
  },
  {
    "id": "audio_module_5_lesson_2_word_example_3",
    "lesson_id": "module_5_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Can I have some water?"
  },
  {
    "id": "audio_module_5_lesson_2_word_example_4",
    "lesson_id": "module_5_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Are you okay? Can I help you?"
  },
  {
    "id": "audio_module_5_lesson_2_seeitworking_1_line_1",
    "lesson_id": "module_5_lesson_2",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Are you okay? You look tired."
  },
  {
    "id": "audio_module_5_lesson_2_seeitworking_1_line_2",
    "lesson_id": "module_5_lesson_2",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "I have a headache. I need to rest for a few minutes."
  },
  {
    "id": "audio_module_5_lesson_2_seeitworking_1_full_1",
    "lesson_id": "module_5_lesson_2",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "Are you okay? You look tired. I have a headache. I need to rest for a few minutes."
  },
  {
    "id": "audio_module_5_lesson_2_seeitworking_2_line_1",
    "lesson_id": "module_5_lesson_2",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "My back hurts. I have to sit down."
  },
  {
    "id": "audio_module_5_lesson_2_seeitworking_2_line_2",
    "lesson_id": "module_5_lesson_2",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Can I help you? Do you need anything?"
  },
  {
    "id": "audio_module_5_lesson_2_seeitworking_2_full_1",
    "lesson_id": "module_5_lesson_2",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "My back hurts. I have to sit down. Can I help you? Do you need anything?"
  },
  {
    "id": "audio_module_5_lesson_2_seeitworking_3_line_1",
    "lesson_id": "module_5_lesson_2",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "What's wrong?"
  },
  {
    "id": "audio_module_5_lesson_2_seeitworking_3_line_2",
    "lesson_id": "module_5_lesson_2",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "My stomach hurts. I think I need to see a doctor."
  },
  {
    "id": "audio_module_5_lesson_2_seeitworking_3_full_1",
    "lesson_id": "module_5_lesson_2",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "What's wrong? My stomach hurts. I think I need to see a doctor."
  },
  {
    "id": "audio_module_5_lesson_3_opening_line_1",
    "lesson_id": "module_5_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Is this your bag?"
  },
  {
    "id": "audio_module_5_lesson_3_opening_line_2",
    "lesson_id": "module_5_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "No, that's not mine. Mine is the blue one, over there."
  },
  {
    "id": "audio_module_5_lesson_3_opening_line_3",
    "lesson_id": "module_5_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "These shoes are Marco's, right?"
  },
  {
    "id": "audio_module_5_lesson_3_opening_line_4",
    "lesson_id": "module_5_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, and those are bigger than mine."
  },
  {
    "id": "audio_module_5_lesson_3_opening_full_1",
    "lesson_id": "module_5_lesson_3",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "Is this your bag? No, that's not mine. Mine is the blue one, over there. These shoes are Marco's, right? Yes, and those are bigger than mine."
  },
  {
    "id": "audio_module_5_lesson_3_model_1",
    "lesson_id": "module_5_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "This is my bag."
  },
  {
    "id": "audio_module_5_lesson_3_model_2",
    "lesson_id": "module_5_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "That is your bag."
  },
  {
    "id": "audio_module_5_lesson_3_model_3",
    "lesson_id": "module_5_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "These are my shoes."
  },
  {
    "id": "audio_module_5_lesson_3_model_4",
    "lesson_id": "module_5_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "Those are your shoes."
  },
  {
    "id": "audio_module_5_lesson_3_model_5",
    "lesson_id": "module_5_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "This bag is bigger than that one."
  },
  {
    "id": "audio_module_5_lesson_3_model_6",
    "lesson_id": "module_5_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "This bag is more expensive than that one."
  },
  {
    "id": "audio_module_5_lesson_3_word_example_1",
    "lesson_id": "module_5_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Is this yours?"
  },
  {
    "id": "audio_module_5_lesson_3_word_example_2",
    "lesson_id": "module_5_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "This one is bigger."
  },
  {
    "id": "audio_module_5_lesson_3_word_example_3",
    "lesson_id": "module_5_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "That one is more expensive."
  },
  {
    "id": "audio_module_5_lesson_3_seeitworking_1_line_1",
    "lesson_id": "module_5_lesson_3",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "This shirt is nice, but that one is cheaper."
  },
  {
    "id": "audio_module_5_lesson_3_seeitworking_1_line_2",
    "lesson_id": "module_5_lesson_3",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, and it's more comfortable too."
  },
  {
    "id": "audio_module_5_lesson_3_seeitworking_1_full_1",
    "lesson_id": "module_5_lesson_3",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "This shirt is nice, but that one is cheaper. Yes, and it's more comfortable too."
  },
  {
    "id": "audio_module_5_lesson_3_seeitworking_2_line_1",
    "lesson_id": "module_5_lesson_3",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Whose bag is this?"
  },
  {
    "id": "audio_module_5_lesson_3_seeitworking_2_line_2",
    "lesson_id": "module_5_lesson_3",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's Marco's. Mine is the black one."
  },
  {
    "id": "audio_module_5_lesson_3_seeitworking_2_full_1",
    "lesson_id": "module_5_lesson_3",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "Whose bag is this? It's Marco's. Mine is the black one."
  },
  {
    "id": "audio_module_5_lesson_3_seeitworking_3_line_1",
    "lesson_id": "module_5_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Is this park bigger than that one?"
  },
  {
    "id": "audio_module_5_lesson_3_seeitworking_3_line_2",
    "lesson_id": "module_5_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, this one is much bigger."
  },
  {
    "id": "audio_module_5_lesson_3_seeitworking_3_full_1",
    "lesson_id": "module_5_lesson_3",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "Is this park bigger than that one? Yes, this one is much bigger."
  }
];
