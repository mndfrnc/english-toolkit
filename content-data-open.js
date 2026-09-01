// content-data-open.js
// GERADO a partir dos módulos pedagógicos aprovados/candidatos (Parte 1: Etapa 0 + Módulos 1-3).
// Fonte de verdade: ver PART_1_OPEN_META.generated_from abaixo. Não editar
// pedagogicamente este arquivo direto — corrija o .md de origem e regere.
// Módulos 4 e 5 (Parte 2, conteúdo bloqueado) e Entrevistas NÃO estão aqui.
// Nenhum gate de acesso foi implementado neste arquivo — é conteúdo puro.

export const PART_1_OPEN_META = {
  "part_id": "part_1_open",
  "label": "Parte 1 (aberta): Etapa 0 + Módulos 1, 2 e 3",
  "generated_from": [
    "PADRAO-PEDAGOGICO-UNICO.md",
    "MAPA-15-LICOES-5-CHECKPOINTS.md",
    "ENGLISH-TOOL-MODULO-1-REVISADO.md",
    "ENGLISH-TOOL-MODULO-2-CANDIDATO-APROVACAO.md",
    "ENGLISH-TOOL-MODULO-3-RECONSTRUIDO.md"
  ],
  "excludes": [
    "module_4",
    "module_5",
    "interview/Entrevistas"
  ],
  "gate": "não implementado nesta entrega — content-data-open.js é conteúdo apenas, sem lógica de acesso",
  "note": "Não editar pedagogicamente este arquivo diretamente. Qualquer correção de conteúdo deve primeiro ser feita nos .md de origem, depois regerada aqui."
};

export const STAGE_0 = {
  "id": "stage_0",
  "label": "Etapa 0: Comece aqui",
  "required_day": 1,
  "part": "part_1_open",
  "status": "structure_only_no_lesson_content",
  "objective": "Aluno entende o produto, testa áudio, responde a uma atividade sem nota, localiza a revisão. Não introduz conteúdo de inglês novo — usa exemplos das lições seguintes apenas como demonstração.",
  "source": "MAPA-15-LICOES-5-CHECKPOINTS.md (única fonte encontrada; é uma frase de objetivo, não uma lição desenvolvida)",
  "lessons": [],
  "note": "Não existe, em nenhum documento aprovado ou candidato desta sessão, diálogo, atividade, produção ou critério de avanço escritos para a Etapa 0 — só a frase de objetivo acima. Não inventei conteúdo para preencher isso (instrução explícita: não reescrever/inventar pedagogicamente). Ver CONFLITOS-E-LACUNAS.md, item 1."
};

export const MODULE_1 = {
  "id": "module_1",
  "label": "Módulo 1: Entrar em uma conversa",
  "required_day": 1,
  "part": "part_1_open",
  "order": 1,
  "outcome": "ao concluir este módulo, você conseguirá cumprimentar alguém, responder como está, se apresentar, apresentar outra pessoa e encerrar uma conversa curta.",
  "how_to_use": "leia uma lição por vez. Faça primeiro as atividades da apostila e depois abra a prática indicada no English Tool. Fale os exemplos em voz alta, mesmo estudando sozinho. Ao terminar as três lições, faça o Checkpoint 1.",
  "lessons": [
    {
      "id": "module_1_lesson_1",
      "label": "Lição 1: Cumprimentar e se despedir",
      "order": 1,
      "can_do": [
        "escolher um cumprimento adequado ao horário e à situação",
        "responder quando alguém perguntar como você está",
        "encerrar uma conversa de maneira clara e educada"
      ],
      "opening": {
        "instruction": "Leia o diálogo. Depois, ouça-o no English Tool.",
        "dialogue": {
          "lines": [
            {
              "speaker": "Lucas",
              "en": "Good morning! How are you?",
              "audio_id": "audio_module_1_lesson_1_opening_line_1",
              "audio_id_slow": "audio_module_1_lesson_1_opening_line_slow_1"
            },
            {
              "speaker": "Maya",
              "en": "Hi, Lucas! I'm good, thanks. And you?",
              "audio_id": "audio_module_1_lesson_1_opening_line_2",
              "audio_id_slow": "audio_module_1_lesson_1_opening_line_slow_2"
            },
            {
              "speaker": "Lucas",
              "en": "I'm fine. See you later!",
              "audio_id": "audio_module_1_lesson_1_opening_line_3",
              "audio_id_slow": "audio_module_1_lesson_1_opening_line_slow_3"
            },
            {
              "speaker": "Maya",
              "en": "See you!",
              "audio_id": "audio_module_1_lesson_1_opening_line_4",
              "audio_id_slow": "audio_module_1_lesson_1_opening_line_slow_4"
            }
          ],
          "full_audio_id": "audio_module_1_lesson_1_opening_full_1"
        },
        "translation": {
          "type": "parallel",
          "lines": [
            [
              "Lucas",
              "Bom dia! Como você está?"
            ],
            [
              "Maya",
              "Oi, Lucas! Estou bem, obrigada. E você?"
            ],
            [
              "Lucas",
              "Estou bem. Até mais tarde!"
            ],
            [
              "Maya",
              "Até!"
            ]
          ]
        },
        "pattern_note": "Observe o percurso da conversa: cumprimento → pergunta → resposta → despedida. Você aprenderá essas quatro partes agora."
      },
      "understand": [
        {
          "title": "Cumprimentos",
          "intro": "Um cumprimento muda de acordo com o horário, o grau de formalidade e a proximidade entre as pessoas.",
          "table": {
            "columns": [
              "Expressão",
              "Uso mais comum",
              "Exemplo"
            ],
            "rows": [
              [
                "Hello",
                "neutro; funciona em muitas situações",
                "Hello, I'm Daniel."
              ],
              [
                "Hi",
                "comum e informal, sem ser íntimo demais",
                "Hi! How are you?"
              ],
              [
                "Hey",
                "casual; melhor entre conhecidos",
                "Hey, Ana!"
              ],
              [
                "Good morning",
                "da manhã até perto do meio-dia",
                "Good morning, everyone."
              ],
              [
                "Good afternoon",
                "depois do meio-dia e durante a tarde",
                "Good afternoon, Mr. Lee."
              ],
              [
                "Good evening",
                "ao chegar ou cumprimentar à noite",
                "Good evening. Nice to meet you."
              ]
            ]
          },
          "dica": "quando você não sabe qual cumprimento usar, Hi funciona quase sempre — é informal o suficiente para não soar frio e formal o suficiente para não soar íntimo demais.",
          "atencao": {
            "title": "evening não é night",
            "text": "Use good evening ao chegar ou cumprimentar alguém à noite. Use good night normalmente ao se despedir ou antes de dormir.",
            "examples": [
              {
                "en": "Good evening! Welcome.",
                "pt": "Boa noite! Bem-vindo. A pessoa está chegando."
              },
              {
                "en": "Good night! See you tomorrow.",
                "pt": "Boa noite! Até amanhã. A pessoa está saindo."
              }
            ]
          }
        },
        {
          "title": "Perguntar como alguém está",
          "intro": "A pergunta mais comum é: How are you? — Como você está?",
          "table": {
            "columns": [
              "Resposta",
              "Sentido"
            ],
            "rows": [
              [
                "I'm great.",
                "Estou ótimo/ótima."
              ],
              [
                "I'm good.",
                "Estou bem."
              ],
              [
                "I'm fine.",
                "Estou bem."
              ],
              [
                "I'm okay.",
                "Estou razoavelmente bem."
              ],
              [
                "I'm tired.",
                "Estou cansado/cansada."
              ],
              [
                "Not bad.",
                "Nada mal."
              ]
            ]
          },
          "note": "Para devolver a pergunta, diga: And you? — E você? \"Thanks\" significa \"obrigado\" ou \"obrigada\" e não muda de acordo com quem fala.",
          "model_sentences": [
            {
              "text": "How are you?",
              "audio_id": "audio_module_1_lesson_1_model_1"
            },
            {
              "text": "I'm good, thanks. And you?",
              "audio_id": "audio_module_1_lesson_1_model_2"
            }
          ]
        },
        {
          "title": "Despedidas",
          "table": {
            "columns": [
              "Expressão",
              "Uso"
            ],
            "rows": [
              [
                "Goodbye",
                "neutro, um pouco mais formal"
              ],
              [
                "Bye",
                "comum e informal"
              ],
              [
                "See you",
                "até mais"
              ],
              [
                "See you later",
                "até mais tarde"
              ],
              [
                "See you tomorrow",
                "até amanhã"
              ],
              [
                "Have a good day",
                "tenha um bom dia"
              ],
              [
                "Good night",
                "boa noite ao sair ou dormir"
              ]
            ]
          }
        }
      ],
      "words_to_use": [
        {
          "word": "morning / afternoon / evening",
          "example": "Good morning! / Good afternoon! / Good evening!",
          "audio_id": "audio_module_1_lesson_1_word_example_1"
        },
        {
          "word": "how",
          "example": "How are you today?",
          "audio_id": "audio_module_1_lesson_1_word_example_2"
        },
        {
          "word": "fine / good / tired / okay",
          "example": "I'm fine, thanks.",
          "audio_id": "audio_module_1_lesson_1_word_example_3"
        },
        {
          "word": "thanks",
          "example": "Thanks! I'm good.",
          "audio_id": "audio_module_1_lesson_1_word_example_4"
        },
        {
          "word": "later",
          "example": "See you later!",
          "audio_id": "audio_module_1_lesson_1_word_example_5"
        },
        {
          "word": "tomorrow",
          "example": "See you tomorrow!",
          "audio_id": "audio_module_1_lesson_1_word_example_6"
        },
        {
          "word": "welcome",
          "example": "Welcome! Good evening.",
          "audio_id": "audio_module_1_lesson_1_word_example_7"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Escola ou curso",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Hi! How are you?",
                "audio_id": "audio_module_1_lesson_1_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "I'm fine, thanks. And you?",
                "audio_id": "audio_module_1_lesson_1_seeitworking_1_line_2"
              },
              {
                "speaker": "A",
                "en": "I'm good. See you later!",
                "audio_id": "audio_module_1_lesson_1_seeitworking_1_line_3"
              },
              {
                "speaker": "B",
                "en": "See you!",
                "audio_id": "audio_module_1_lesson_1_seeitworking_1_line_4"
              }
            ],
            "full_audio_id": "audio_module_1_lesson_1_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Atendimento",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Good afternoon. How are you?",
                "audio_id": "audio_module_1_lesson_1_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "I'm fine, thank you.",
                "audio_id": "audio_module_1_lesson_1_seeitworking_2_line_2"
              },
              {
                "speaker": "A",
                "en": "Have a good day.",
                "audio_id": "audio_module_1_lesson_1_seeitworking_2_line_3"
              },
              {
                "speaker": "B",
                "en": "You too.",
                "audio_id": "audio_module_1_lesson_1_seeitworking_2_line_4"
              }
            ],
            "full_audio_id": "audio_module_1_lesson_1_seeitworking_2_full_1"
          },
          "note": "You too significa \"você também\"."
        },
        {
          "title": "Situação 3 — À noite",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Good evening!",
                "audio_id": "audio_module_1_lesson_1_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "Hello! How are you?",
                "audio_id": "audio_module_1_lesson_1_seeitworking_3_line_2"
              },
              {
                "speaker": "A",
                "en": "I'm tired, but I'm okay.",
                "audio_id": "audio_module_1_lesson_1_seeitworking_3_line_3"
              },
              {
                "speaker": "B",
                "en": "Good night. See you tomorrow!",
                "audio_id": "audio_module_1_lesson_1_seeitworking_3_line_4"
              },
              {
                "speaker": "A",
                "en": "See you!",
                "audio_id": "audio_module_1_lesson_1_seeitworking_3_line_5"
              }
            ],
            "full_audio_id": "audio_module_1_lesson_1_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_1_lesson_1_practice_1",
          "title": "Escolha a expressão",
          "type": "escolha_por_contexto",
          "instruction": "Escolha a opção mais adequada.",
          "items": [
            {
              "prompt": "Você chega a uma reunião às 9h.",
              "options": [
                "Good night",
                "Good morning",
                "See you"
              ],
              "answer": 1,
              "feedback": "Good morning. É uma chegada pela manhã."
            },
            {
              "prompt": "Você encontra um amigo à tarde.",
              "options": [
                "Hi",
                "Good night",
                "Goodbye, sir"
              ],
              "answer": 0,
              "feedback": "Hi. É adequado para um amigo."
            },
            {
              "prompt": "Você está indo dormir.",
              "options": [
                "Good evening",
                "Good afternoon",
                "Good night"
              ],
              "answer": 2,
              "feedback": "Good night. A pessoa está indo dormir."
            },
            {
              "prompt": "Alguém diz \"Have a good day\". Você responde:",
              "options": [
                "You too",
                "How are you",
                "Good morning"
              ],
              "answer": 0,
              "feedback": "You too. Devolve o desejo \"tenha um bom dia\"."
            },
            {
              "prompt": "Alguém pergunta \"How are you?\". Você está cansado, mas bem.",
              "options": [
                "I'm tired, but I'm okay.",
                "See you tomorrow.",
                "Good evening."
              ],
              "answer": 0,
              "feedback": "I'm tired, but I'm okay. Responde diretamente à pergunta."
            }
          ]
        },
        {
          "id": "module_1_lesson_1_practice_2",
          "title": "Organize o diálogo",
          "type": "ordenar",
          "instruction": "Numere as falas de 1 a 6 para formar uma conversa natural.",
          "shuffled": [
            "I'm good, thanks. And you?",
            "See you later!",
            "Hi, Pedro! How are you?",
            "I'm fine.",
            "See you!",
            "Hello, Nina!"
          ],
          "answer_order": [
            "Hello, Nina!",
            "Hi, Pedro! How are you?",
            "I'm good, thanks. And you?",
            "I'm fine.",
            "See you later!",
            "See you!"
          ]
        },
        {
          "id": "module_1_lesson_1_practice_3",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "instruction": "Leia e marque V (verdadeiro) ou F (falso). Corrija as falsas.",
          "items": [
            {
              "statement": "\"Good night\" é usado para cumprimentar alguém que está chegando à noite.",
              "answer": false,
              "feedback": "F. \"Good night\" é usado ao se despedir ou dormir; \"Good evening\" é para chegar/cumprimentar à noite."
            },
            {
              "statement": "\"Bye\" é uma forma informal de se despedir.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"How are you?\" só pode ser respondida com \"Fine, thanks.\"",
              "answer": false,
              "feedback": "F. Pode ser respondida com várias expressões: fine, good, okay, tired, not bad."
            },
            {
              "statement": "\"Good afternoon\" pode ser usado logo depois do meio-dia.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"See you tomorrow\" é uma despedida usada quando você vai encontrar a pessoa amanhã.",
              "answer": true,
              "feedback": "V."
            }
          ]
        }
      ],
      "your_turn": {
        "id": "module_1_lesson_1_production",
        "type": "producao_livre",
        "instruction": "Complete com informações verdadeiras para você (ou para uma personagem inventada).",
        "template": [
          "__________! How are you?",
          "I'm __________, thanks. And you?",
          "I'm __________.",
          "__________!"
        ],
        "note": "Leia o diálogo em voz alta duas vezes. Na segunda vez, tente não consultar o texto.",
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Ouça e escolha",
          "detail": "identificar a situação correta para seis cumprimentos",
          "skill": "escuta"
        },
        {
          "label": "Monte o diálogo",
          "detail": "ordenar seis falas",
          "skill": "leitura"
        },
        {
          "label": "Fale comigo",
          "detail": "ouvir e repetir quatro frases",
          "skill": "fala"
        },
        {
          "label": "Resposta rápida",
          "detail": "responder \"How are you?\" de três maneiras",
          "skill": "produção escrita ou oral"
        }
      ],
      "review": null,
      "check_progress": {
        "can_do": [
          "distinguir good evening de good night",
          "responder \"How are you?\" e devolver a pergunta",
          "montar uma conversa com início e despedida"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais do English Tool"
      },
      "if_stuck": "Apoio → Conversas básicas → Cumprimentos e despedidas"
    },
    {
      "id": "module_1_lesson_2",
      "label": "Lição 2: Dizer quem você é",
      "order": 2,
      "can_do": [
        "dizer seu nome, idade aproximada, origem e ocupação",
        "usar am, is e are em frases simples",
        "fazer e responder perguntas básicas com o verbo to be"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Amina",
              "en": "Hi! I'm Amina. I'm 16 years old. I'm from Brazil.",
              "audio_id": "audio_module_1_lesson_2_opening_line_1",
              "audio_id_slow": "audio_module_1_lesson_2_opening_line_slow_1"
            },
            {
              "speaker": "Noah",
              "en": "Nice to meet you, Amina. I'm Noah. I'm a student.",
              "audio_id": "audio_module_1_lesson_2_opening_line_2",
              "audio_id_slow": "audio_module_1_lesson_2_opening_line_slow_2"
            },
            {
              "speaker": "Amina",
              "en": "Are you from Brazil too?",
              "audio_id": "audio_module_1_lesson_2_opening_line_3"
            },
            {
              "speaker": "Noah",
              "en": "No, I'm not. I'm from Canada.",
              "audio_id": "audio_module_1_lesson_2_opening_line_4"
            }
          ],
          "full_audio_id": "audio_module_1_lesson_2_opening_full_1"
        },
        "translation": {
          "type": "parallel",
          "lines": [
            [
              "Amina",
              "Oi! Eu sou Amina. Tenho 16 anos. Sou do Brasil."
            ],
            [
              "Noah",
              "Prazer em conhecer você, Amina. Eu sou Noah. Sou estudante."
            ],
            [
              "Amina",
              "Você também é do Brasil?"
            ],
            [
              "Noah",
              "Não. Sou do Canadá."
            ]
          ]
        },
        "pattern_note": "Em inglês, usamos o verbo to be para dizer quem alguém é, como está e de onde vem."
      },
      "understand": [
        {
          "title": "Am, is e are",
          "table": {
            "columns": [
              "Pessoa",
              "Forma de to be",
              "Exemplo"
            ],
            "rows": [
              [
                "I",
                "am",
                "I am a student."
              ],
              [
                "You",
                "are",
                "You are from Recife."
              ],
              [
                "He",
                "is",
                "He is 20 years old."
              ],
              [
                "She",
                "is",
                "She is a teacher."
              ],
              [
                "It",
                "is",
                "It is new."
              ],
              [
                "We",
                "are",
                "We are friends."
              ],
              [
                "They",
                "are",
                "They are from Brazil."
              ]
            ]
          },
          "subsection": {
            "title": "Formas contraídas",
            "intro": "Na fala e em textos informais, as formas contraídas são muito comuns.",
            "table": {
              "columns": [
                "Forma completa",
                "Forma contraída"
              ],
              "rows": [
                [
                  "I am",
                  "I'm"
                ],
                [
                  "You are",
                  "You're"
                ],
                [
                  "He is",
                  "He's"
                ],
                [
                  "She is",
                  "She's"
                ],
                [
                  "It is",
                  "It's"
                ],
                [
                  "We are",
                  "We're"
                ],
                [
                  "They are",
                  "They're"
                ]
              ]
            },
            "examples": [
              {
                "text": "I am Lucas. = I'm Lucas.",
                "audio_id": "audio_module_1_lesson_2_model_1"
              },
              {
                "text": "She is a student. = She's a student.",
                "audio_id": "audio_module_1_lesson_2_model_2"
              }
            ]
          },
          "dica": "na fala do dia a dia, quase ninguém diz \"I am\" sem contrair. Acostume o ouvido com \"I'm\", \"she's\", \"they're\" desde já — é assim que você vai ouvir no English Tool."
        },
        {
          "title": "Negativas",
          "intro": "Coloque not depois de am, is ou are.",
          "examples": [
            {
              "en": "I am not from Canada.",
              "pt": "Eu não sou do Canadá."
            },
            {
              "en": "He is not a teacher.",
              "pt": "Ele não é professor."
            },
            {
              "en": "We are not tired.",
              "pt": "Nós não estamos cansados."
            }
          ],
          "note": "Formas contraídas comuns: is not → isn't | are not → aren't. Com I am not, use normalmente I'm not."
        },
        {
          "title": "Perguntas",
          "intro": "Para formar uma pergunta, coloque am, is ou are antes da pessoa.",
          "table": {
            "columns": [
              "Frase",
              "Pergunta"
            ],
            "rows": [
              [
                "You are a student.",
                "Are you a student?"
              ],
              [
                "She is from Brazil.",
                "Is she from Brazil?"
              ],
              [
                "They are friends.",
                "Are they friends?"
              ]
            ]
          },
          "note": "Respostas curtas: Are you a student? — Yes, I am. / No, I'm not. | Is he from Brazil? — Yes, he is. / No, he isn't.",
          "atencao": {
            "title": "idade em inglês",
            "text": "Em português, dizemos \"eu tenho 16 anos\". Em inglês, usamos o verbo to be: I am 16 years old. Literalmente: eu sou/estou com 16 anos. Não diga \"I have 16 years\"."
          }
        }
      ],
      "words_to_use": [
        {
          "word": "student",
          "example": "I'm a student.",
          "audio_id": "audio_module_1_lesson_2_word_example_1"
        },
        {
          "word": "teacher",
          "example": "She's a teacher.",
          "audio_id": "audio_module_1_lesson_2_word_example_2"
        },
        {
          "word": "designer",
          "example": "He's a designer.",
          "audio_id": "audio_module_1_lesson_2_word_example_3"
        },
        {
          "word": "assistant",
          "example": "I'm an assistant.",
          "audio_id": "audio_module_1_lesson_2_word_example_4"
        },
        {
          "word": "from",
          "example": "We're from Brazil.",
          "audio_id": "audio_module_1_lesson_2_word_example_5"
        },
        {
          "word": "years old",
          "example": "I'm 18 years old.",
          "audio_id": "audio_module_1_lesson_2_word_example_6"
        },
        {
          "word": "nice to meet you",
          "example": "Nice to meet you, Kai.",
          "audio_id": "audio_module_1_lesson_2_word_example_7"
        }
      ],
      "see_it_working": [
        {
          "title": "Apresentação curta",
          "model": {
            "text": "Hi! I'm Joana. I'm 19 years old. I'm from Vitória de Santo Antão. I'm a student. Nice to meet you!",
            "audio_id": "audio_module_1_lesson_2_model_3"
          }
        },
        {
          "title": "Perguntas possíveis",
          "items": [
            {
              "en": "What's your name?",
              "pt": "Qual é o seu nome?"
            },
            {
              "en": "How old are you?",
              "pt": "Quantos anos você tem?"
            },
            {
              "en": "Where are you from?",
              "pt": "De onde você é?"
            },
            {
              "en": "Are you a student?",
              "pt": "Você é estudante?"
            }
          ],
          "note": "Neste momento, concentre-se nas respostas. As palavras de pergunta serão estudadas com mais profundidade no Módulo 2."
        }
      ],
      "guided_practice": [
        {
          "id": "module_1_lesson_2_practice_1",
          "title": "Complete com am, is ou are",
          "type": "completar",
          "items": [
            {
              "prompt": "I ___ from Brazil.",
              "answer": "am"
            },
            {
              "prompt": "She ___ a teacher.",
              "answer": "is"
            },
            {
              "prompt": "We ___ friends.",
              "answer": "are"
            },
            {
              "prompt": "You ___ 15 years old.",
              "answer": "are"
            },
            {
              "prompt": "He ___ not a student.",
              "answer": "is"
            },
            {
              "prompt": "They ___ from Mexico.",
              "answer": "are"
            },
            {
              "prompt": "___ you a designer?",
              "answer": "Are"
            },
            {
              "prompt": "___ she from Recife?",
              "answer": "Is"
            }
          ]
        },
        {
          "id": "module_1_lesson_2_practice_2",
          "title": "Transforme",
          "type": "transformar",
          "instruction": "Siga a indicação.",
          "items": [
            {
              "prompt": "He is a student.",
              "transform": "Forma negativa",
              "answer": "He is not a student. / He isn't a student."
            },
            {
              "prompt": "They are from Brazil.",
              "transform": "Forma negativa",
              "answer": "They are not from Brazil. / They aren't from Brazil."
            },
            {
              "prompt": "You are 20 years old.",
              "transform": "Pergunta",
              "answer": "Are you 20 years old?"
            },
            {
              "prompt": "She is a teacher.",
              "transform": "Pergunta",
              "answer": "Is she a teacher?"
            },
            {
              "prompt": "Are you from Brazil?",
              "transform": "Resposta afirmativa curta",
              "answer": "Yes, I am."
            },
            {
              "prompt": "Is he tired?",
              "transform": "Resposta negativa curta",
              "answer": "No, he isn't."
            }
          ]
        },
        {
          "id": "module_1_lesson_2_practice_3",
          "title": "Leia e responda",
          "type": "compreensao_texto",
          "text": {
            "text": "Hello! I'm Ravi. I'm 18 years old. I'm from India, but I'm in Brazil now. I'm a student. My friend is Clara. She's 19 and she's from Brazil.",
            "audio_id": "audio_module_1_lesson_2_model_4"
          },
          "items": [
            {
              "prompt": "Is Ravi 18 years old?",
              "answer": "Yes, he is."
            },
            {
              "prompt": "Is Ravi from Brazil?",
              "answer": "No, he isn't."
            },
            {
              "prompt": "Is he a student?",
              "answer": "Yes, he is."
            },
            {
              "prompt": "Is Clara 18 years old?",
              "answer": "No, she isn't. She is 19."
            },
            {
              "prompt": "Is Clara from Brazil?",
              "answer": "Yes, she is."
            }
          ]
        },
        {
          "id": "module_1_lesson_2_practice_4",
          "title": "Associe",
          "type": "associar",
          "note": "novo — aumenta a variedade de tipos de exercício",
          "instruction": "Ligue a forma completa à sua contração correspondente.",
          "columnA": [
            "I am",
            "She is",
            "We are",
            "They are",
            "He is"
          ],
          "columnB": [
            "They're",
            "I'm",
            "He's",
            "She's",
            "We're"
          ],
          "answer": {
            "I am": "I'm",
            "She is": "She's",
            "We are": "We're",
            "They are": "They're",
            "He is": "He's"
          }
        }
      ],
      "your_turn": {
        "id": "module_1_lesson_2_production",
        "type": "producao_livre",
        "instruction": "Escreva uma apresentação de quatro frases.",
        "template": [
          "Hi! I'm __________.",
          "I'm __________ years old.",
          "I'm from __________.",
          "I'm a/an __________."
        ],
        "note": "Se não quiser informar sua idade ou ocupação real, invente uma personagem. O objetivo é praticar a estrutura.",
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Escolha o verbo",
          "detail": "am, is ou are em oito frases",
          "skill": "leitura/gramática"
        },
        {
          "label": "Mude a frase",
          "detail": "transformar afirmações em negativas e perguntas",
          "skill": "escrita"
        },
        {
          "label": "Ouça e identifique",
          "detail": "selecionar a ficha correspondente a uma apresentação",
          "skill": "escuta"
        },
        {
          "label": "Minha apresentação",
          "detail": "gravar ou digitar quatro frases",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_1_lesson_2_review",
        "recycles": [
          "module_1_lesson_1"
        ],
        "instruction": "Antes de praticar, reveja a Lição 1: complete o cumprimento abaixo antes de continuar a conversa com \"to be\".",
        "template": "__________, I'm Noah. __________ you a student too?",
        "possible_answer": "Hi, are"
      },
      "check_progress": {
        "can_do": [
          "combinar I com am, he/she/it com is e you/we/they com are",
          "formar uma negativa com not",
          "começar perguntas com am, is ou are",
          "apresentar-se em pelo menos quatro frases"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Estruturas essenciais → Verbo to be"
    },
    {
      "id": "module_1_lesson_3",
      "label": "Lição 3: Apresentar outra pessoa",
      "order": 3,
      "can_do": [
        "apresentar um amigo, familiar, colega ou personagem",
        "escolher he, she ou they de acordo com a informação disponível",
        "descrever uma pessoa com frases curtas e respeitosas"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Lia",
              "en": "This is my friend Sam. They're from South Africa.",
              "audio_id": "audio_module_1_lesson_3_opening_line_1"
            },
            {
              "speaker": "Sam",
              "en": "Hi! Nice to meet you.",
              "audio_id": "audio_module_1_lesson_3_opening_line_2"
            },
            {
              "speaker": "Bruno",
              "en": "Nice to meet you too. Are you a student?",
              "audio_id": "audio_module_1_lesson_3_opening_line_3"
            },
            {
              "speaker": "Sam",
              "en": "Yes, I am. I'm a music student.",
              "audio_id": "audio_module_1_lesson_3_opening_line_4"
            }
          ],
          "full_audio_id": "audio_module_1_lesson_3_opening_full_1"
        },
        "translation": {
          "type": "parallel",
          "lines": [
            [
              "Lia",
              "Esta pessoa é Sam, minha amizade. Sam é da África do Sul."
            ],
            [
              "Sam",
              "Oi! Prazer em conhecer você."
            ],
            [
              "Bruno",
              "Prazer em conhecer você também. Você é estudante?"
            ],
            [
              "Sam",
              "Sim. Sou estudante de música."
            ]
          ]
        },
        "pattern_note": "Em inglês, o pronome they pode indicar várias pessoas. Também pode ser usado para uma única pessoa quando não sabemos seu gênero ou quando esse é o pronome que ela usa."
      },
      "understand": [
        {
          "title": "Falar de outra pessoa",
          "table": {
            "columns": [
              "Pronome",
              "Uso básico",
              "Exemplo"
            ],
            "rows": [
              [
                "he",
                "uma pessoa que usa ele",
                "He is my brother."
              ],
              [
                "she",
                "uma pessoa que usa ela",
                "She is my teacher."
              ],
              [
                "they",
                "várias pessoas ou uma pessoa que usa they",
                "They are my friends. / They are my friend."
              ]
            ]
          },
          "note": "Com he e she, usamos is. Com they, usamos are, mesmo quando a palavra representa uma única pessoa.",
          "examples": [
            {
              "text": "He is from Brazil.",
              "audio_id": "audio_module_1_lesson_3_model_1"
            },
            {
              "text": "She is a designer.",
              "audio_id": "audio_module_1_lesson_3_model_2"
            },
            {
              "text": "They are my friend Alex.",
              "audio_id": "audio_module_1_lesson_3_model_3"
            }
          ],
          "dica": "se você não tem certeza de qual pronome uma pessoa usa, \"this is [nome]\" seguido do nome de novo na frase seguinte é uma saída segura enquanto você aprende a perguntar isso com mais naturalidade, mais adiante no percurso."
        },
        {
          "title": "Descrever sem rotular",
          "intro": "Adjetivos ajudam a acrescentar uma informação. Use descrições relevantes e respeitosas.",
          "table": {
            "columns": [
              "Adjetivo",
              "Sentido",
              "Exemplo"
            ],
            "rows": [
              [
                "friendly",
                "amigável",
                "She is friendly."
              ],
              [
                "quiet",
                "reservado/silencioso",
                "He is quiet."
              ],
              [
                "creative",
                "criativo",
                "They are creative."
              ],
              [
                "patient",
                "paciente",
                "My teacher is patient."
              ],
              [
                "funny",
                "engraçado",
                "My cousin is funny."
              ],
              [
                "kind",
                "gentil",
                "He is kind."
              ]
            ]
          },
          "note": "Adjetivos em inglês não mudam no masculino, feminino ou plural: She is creative. / He is creative. / They are creative.",
          "atencao": {
            "title": "adjetivo não concorda em gênero nem número",
            "text": "Diferente do português (\"criativa\", \"criativos\"), o adjetivo em inglês é sempre a mesma palavra — quem muda é o sujeito e o verbo, nunca o adjetivo."
          }
        }
      ],
      "words_to_use": [
        {
          "word": "my friend",
          "example": "This is my friend Leo.",
          "audio_id": "audio_module_1_lesson_3_word_example_1"
        },
        {
          "word": "my classmate",
          "example": "She is my classmate.",
          "audio_id": "audio_module_1_lesson_3_word_example_2"
        },
        {
          "word": "my coworker",
          "example": "He is my coworker.",
          "audio_id": "audio_module_1_lesson_3_word_example_3"
        },
        {
          "word": "my sister",
          "example": "She is my sister.",
          "audio_id": "audio_module_1_lesson_3_word_example_4"
        },
        {
          "word": "my brother",
          "example": "He is my brother.",
          "audio_id": "audio_module_1_lesson_3_word_example_5"
        },
        {
          "word": "my cousin",
          "example": "They are my cousin.",
          "audio_id": "audio_module_1_lesson_3_word_example_6"
        },
        {
          "word": "my teacher",
          "example": "This is my teacher.",
          "audio_id": "audio_module_1_lesson_3_word_example_7"
        }
      ],
      "see_it_working": [
        {
          "title": "Apresentação 1",
          "model": {
            "text": "This is my sister, Beatriz. She is 22 years old. She is a designer. She is creative and friendly.",
            "audio_id": "audio_module_1_lesson_3_model_4"
          }
        },
        {
          "title": "Apresentação 2",
          "model": {
            "text": "This is my classmate, Daniel. He is from Recife. He is a student. He is quiet and kind.",
            "audio_id": "audio_module_1_lesson_3_model_5"
          }
        },
        {
          "title": "Apresentação 3",
          "model": {
            "text": "This is Alex. They are my coworker. They are from Brazil. They are patient and funny.",
            "audio_id": "audio_module_1_lesson_3_model_6"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_1_lesson_3_practice_1",
          "title": "Escolha o pronome e o verbo",
          "type": "escolha_por_contexto",
          "items": [
            {
              "prompt": "Marina is my teacher. ___ (He / She / They) ___ (is / are) patient.",
              "answer": "She is"
            },
            {
              "prompt": "Paulo is my brother. ___ (He / She / They) ___ (is / are) 17.",
              "answer": "He is"
            },
            {
              "prompt": "Ana and Jo are my friends. ___ (He / She / They) ___ (is / are) creative.",
              "answer": "They are"
            },
            {
              "prompt": "Taylor uses the pronoun they. ___ (He / She / They) ___ (is / are) my classmate.",
              "answer": "They are"
            },
            {
              "prompt": "My parents are from Brazil. ___ (He / She / They) ___ (is / are) friendly.",
              "answer": "They are"
            }
          ]
        },
        {
          "id": "module_1_lesson_3_practice_2",
          "title": "Una as informações",
          "type": "una_as_informacoes",
          "instruction": "Transforme as informações em duas ou três frases.",
          "items": [
            {
              "prompt": "Camila / my cousin / 20 / student",
              "answer": "This is my cousin Camila. She is 20 years old. She is a student."
            },
            {
              "prompt": "Davi / my friend / from Recife / funny",
              "answer": "This is my friend Davi. He is from Recife. He is funny."
            },
            {
              "prompt": "Morgan / my coworker / designer / creative",
              "answer": "This is Morgan. They are my coworker. They are a designer and they are creative."
            }
          ]
        },
        {
          "id": "module_1_lesson_3_practice_3",
          "title": "Complete o diálogo",
          "type": "completar",
          "word_bank": [
            "This is",
            "Nice to meet you",
            "is",
            "Are",
            "am"
          ],
          "dialogue": {
            "lines": [
              {
                "speaker": "Nina",
                "en": "__________ my friend, Caio. He __________ from Brazil.",
                "audio_id": "audio_module_1_lesson_3_practice3_line_1"
              },
              {
                "speaker": "Caio",
                "en": "Hi! __________.",
                "audio_id": "audio_module_1_lesson_3_practice3_line_2"
              },
              {
                "speaker": "Luis",
                "en": "Nice to meet you too. __________ you a student?",
                "audio_id": "audio_module_1_lesson_3_practice3_line_3"
              },
              {
                "speaker": "Caio",
                "en": "Yes, I __________.",
                "audio_id": "audio_module_1_lesson_3_practice3_line_4"
              }
            ],
            "full_audio_id": "audio_module_1_lesson_3_practice3_full_1"
          },
          "answer": [
            "This is my friend, Caio. He is from Brazil.",
            "Hi! Nice to meet you.",
            "Nice to meet you too. Are you a student?",
            "Yes, I am."
          ]
        },
        {
          "id": "module_1_lesson_3_practice_4",
          "title": "Encontre o erro",
          "type": "encontre_o_erro",
          "note": "novo — aumenta a variedade de tipos de exercício",
          "instruction": "Cada frase tem um erro. Reescreva corretamente.",
          "items": [
            {
              "prompt": "She are my teacher.",
              "answer": "She is my teacher."
            },
            {
              "prompt": "They is creative and funny.",
              "answer": "They are creative and funny."
            },
            {
              "prompt": "This are my friend, Leo.",
              "answer": "This is my friend, Leo."
            },
            {
              "prompt": "He are quiet and kind.",
              "answer": "He is quiet and kind."
            }
          ]
        }
      ],
      "your_turn": {
        "id": "module_1_lesson_3_production",
        "type": "producao_livre",
        "instruction": "Escolha uma pessoa real ou invente uma personagem. Escreva de quatro a cinco frases.",
        "template": [
          "This is __________.",
          "He / She / They __________.",
          "__________.",
          "__________.",
          "__________."
        ],
        "note": "Antes de finalizar, confira se o pronome combina com is ou are.",
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Quem é quem",
          "detail": "associar pronome, pessoa e forma de to be",
          "skill": "leitura"
        },
        {
          "label": "Monte a apresentação",
          "detail": "ordenar frases para formar um texto curto",
          "skill": "leitura"
        },
        {
          "label": "Ouça e escolha",
          "detail": "identificar a pessoa descrita",
          "skill": "escuta"
        },
        {
          "label": "Apresente alguém",
          "detail": "gravar ou digitar quatro frases",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_1_lesson_3_review",
        "recycles": [
          "module_1_lesson_2"
        ],
        "instruction": "Complete usando to be (Lição 2) para depois praticar he/she/they (Lição 3):",
        "template": "I ___ Noah. This ___ my friend Sam. ___ they from Brazil? No, ___ not.",
        "possible_answer": "am, is, Are, they're"
      },
      "check_progress": {
        "can_do": [
          "apresentar alguém com \"This is…\"",
          "usar he/she com is e they com are",
          "acrescentar relação, origem, ocupação ou característica",
          "produzir uma descrição de quatro frases"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Pessoas e pronomes → He, she e they"
    }
  ],
  "checkpoint": {
    "id": "module_1_checkpoint",
    "label": "Checkpoint 1: Uma primeira conversa",
    "instruction": "O checkpoint verifica se você consegue usar as três lições em conjunto. Faça sem consultar o gabarito. Depois, corrija e repita somente o que errou.",
    "parts": [
      {
        "id": "module_1_checkpoint_part_a",
        "label": "Parte A — Complete a conversa",
        "type": "completar",
        "word_bank": [
          "Good morning",
          "How are you",
          "I'm fine",
          "This is",
          "Nice to meet you",
          "See you later"
        ],
        "dialogue": {
          "lines": [
            {
              "speaker": "Bia",
              "en": "__________, Ravi!",
              "audio_id": "audio_module_1_checkpoint_part_a_line_1"
            },
            {
              "speaker": "Ravi",
              "en": "Good morning, Bia! __________?",
              "audio_id": "audio_module_1_checkpoint_part_a_line_2"
            },
            {
              "speaker": "Bia",
              "en": "__________, thanks. __________ my friend, Luana.",
              "audio_id": "audio_module_1_checkpoint_part_a_line_3"
            },
            {
              "speaker": "Luana",
              "en": "Hi! __________.",
              "audio_id": "audio_module_1_checkpoint_part_a_line_4"
            },
            {
              "speaker": "Ravi",
              "en": "Nice to meet you too. __________!",
              "audio_id": "audio_module_1_checkpoint_part_a_line_5"
            },
            {
              "speaker": "Bia e Luana",
              "en": "See you!",
              "audio_id": "audio_module_1_checkpoint_part_a_line_6"
            }
          ],
          "full_audio_id": "audio_module_1_checkpoint_part_a_full_1"
        },
        "answer": [
          "Good morning, Ravi!",
          "Good morning, Bia! How are you?",
          "I'm fine, thanks. This is my friend, Luana.",
          "Hi! Nice to meet you.",
          "Nice to meet you too. See you later!",
          "See you!"
        ]
      },
      {
        "id": "module_1_checkpoint_part_b",
        "label": "Parte B — Encontre e corrija o erro",
        "type": "encontre_o_erro",
        "items": [
          {
            "prompt": "I is a student.",
            "answer": "I am a student."
          },
          {
            "prompt": "She are from Brazil.",
            "answer": "She is from Brazil."
          },
          {
            "prompt": "Are he your friend?",
            "answer": "Is he your friend?"
          },
          {
            "prompt": "They is creative.",
            "answer": "They are creative."
          },
          {
            "prompt": "I have 18 years old.",
            "answer": "I am 18 years old."
          },
          {
            "prompt": "Good night! Welcome to our evening class. (A pessoa está chegando. Reescreva o cumprimento:)",
            "answer": "Good evening! Welcome to our evening class."
          }
        ]
      },
      {
        "id": "module_1_checkpoint_part_c",
        "label": "Parte C — Produção final",
        "type": "producao_livre",
        "instruction": "Crie uma conversa de oito a dez falas com três pessoas. A conversa deve conter:",
        "requirements": [
          "um cumprimento adequado ao horário",
          "uma pergunta sobre como alguém está",
          "a apresentação de uma pessoa",
          "pelo menos duas informações sobre essa pessoa",
          "uma pergunta com to be",
          "uma despedida"
        ],
        "note": "Você pode escrever ou gravar no English Tool.",
        "criterion": "tentativa_registrada"
      }
    ],
    "completion_criterion": {
      "objective_items_total": 12,
      "objective_items_required": 9,
      "text": "acertar pelo menos 9 dos 12 itens objetivos do checkpoint; concluir a produção final com os seis elementos solicitados; refazer os itens essenciais registrados na revisão.",
      "non_blocking_note": "Se ainda não alcançar o critério, o módulo não será apagado nem reiniciado. O English Tool mostrará quais lições revisar e oferecerá uma nova tentativa apenas com os pontos necessários."
    }
  },
  "source": "ENGLISH-TOOL-MODULO-1-REVISADO.md"
};

export const MODULE_2 = {
  "id": "module_2",
  "label": "Módulo 2: Trocar informações e manter a conversa",
  "required_day": 1,
  "part": "part_1_open",
  "order": 2,
  "outcome": "ao concluir este módulo, você conseguirá soletrar seu nome e informar dados de contato, fazer perguntas essenciais para conhecer alguém, falar de suas preferências e manter uma conversa breve com trocas de turno.",
  "how_to_use": "leia uma lição por vez. Faça primeiro as atividades da apostila e depois abra a prática indicada no English Tool. Ao terminar as três lições, faça o Checkpoint 2.",
  "lessons": [
    {
      "id": "module_2_lesson_1",
      "label": "Lição 4: Soletrar e informar dados pessoais",
      "order": 1,
      "can_do": [
        "soletrar seu nome em inglês",
        "dizer e entender números para telefone e CEP",
        "informar um e-mail em voz alta"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Atendente",
              "en": "Good afternoon! What's your name, please?",
              "audio_id": "audio_module_2_lesson_1_opening_line_1"
            },
            {
              "speaker": "Yuki",
              "en": "My name is Yuki. Y-U-K-I.",
              "audio_id": "audio_module_2_lesson_1_opening_line_2",
              "audio_id_slow": "audio_module_2_lesson_1_opening_line_slow_1"
            },
            {
              "speaker": "Atendente",
              "en": "Thank you. And your phone number?",
              "audio_id": "audio_module_2_lesson_1_opening_line_3"
            },
            {
              "speaker": "Yuki",
              "en": "It's zero one one, nine eight seven six five, four three two one.",
              "audio_id": "audio_module_2_lesson_1_opening_line_4",
              "audio_id_slow": "audio_module_2_lesson_1_opening_line_slow_2"
            },
            {
              "speaker": "Atendente",
              "en": "Perfect. What's your email?",
              "audio_id": "audio_module_2_lesson_1_opening_line_5"
            },
            {
              "speaker": "Yuki",
              "en": "It's yuki dot silva at email dot com.",
              "audio_id": "audio_module_2_lesson_1_opening_line_6",
              "audio_id_slow": "audio_module_2_lesson_1_opening_line_slow_3"
            }
          ],
          "full_audio_id": "audio_module_2_lesson_1_opening_full_1"
        },
        "translation": {
          "type": "parallel",
          "lines": [
            [
              "Atendente",
              "Boa tarde! Qual é o seu nome, por favor?"
            ],
            [
              "Yuki",
              "Meu nome é Yuki. Y-U-K-I."
            ],
            [
              "Atendente",
              "Obrigado(a). E o seu telefone?"
            ],
            [
              "Yuki",
              "É zero um um, nove oito sete seis cinco, quatro três dois um."
            ],
            [
              "Atendente",
              "Perfeito. E o seu e-mail?"
            ],
            [
              "Yuki",
              "É yuki ponto silva arroba email ponto com."
            ]
          ]
        },
        "pattern_note": "Este diálogo recicla \"This is...\" e \"I'm...\" do Módulo 1 de outra forma: em vez de apresentar alguém, Yuki está informando os próprios dados."
      },
      "understand": [
        {
          "title": "Soletrar (spelling)",
          "intro": "Em situações de cadastro, atendimento ou ligação, é comum precisar soletrar o nome. Cada letra do alfabeto tem um som próprio em inglês.",
          "table": {
            "columns": [
              "Letra",
              "Som aproximado"
            ],
            "rows": [
              [
                "A",
                "ei",
                "",
                "audio_module_2_lesson_1_alphabet_letter_1"
              ],
              [
                "B",
                "bi",
                "",
                "audio_module_2_lesson_1_alphabet_letter_2"
              ],
              [
                "C",
                "si",
                "",
                "audio_module_2_lesson_1_alphabet_letter_3"
              ],
              [
                "D",
                "di",
                "",
                "audio_module_2_lesson_1_alphabet_letter_4"
              ],
              [
                "E",
                "i",
                "",
                "audio_module_2_lesson_1_alphabet_letter_5"
              ],
              [
                "F",
                "éf",
                "",
                "audio_module_2_lesson_1_alphabet_letter_6"
              ],
              [
                "G",
                "dji",
                "",
                "audio_module_2_lesson_1_alphabet_letter_7"
              ],
              [
                "H",
                "êitch",
                "",
                "audio_module_2_lesson_1_alphabet_letter_8"
              ],
              [
                "I",
                "ai",
                "",
                "audio_module_2_lesson_1_alphabet_letter_9"
              ],
              [
                "J",
                "djei",
                "",
                "audio_module_2_lesson_1_alphabet_letter_10"
              ],
              [
                "K",
                "quêi",
                "",
                "audio_module_2_lesson_1_alphabet_letter_11"
              ],
              [
                "L",
                "él",
                "",
                "audio_module_2_lesson_1_alphabet_letter_12"
              ],
              [
                "M",
                "ém",
                "",
                "audio_module_2_lesson_1_alphabet_letter_13"
              ],
              [
                "N",
                "en",
                "",
                "audio_module_2_lesson_1_alphabet_letter_14"
              ],
              [
                "O",
                "ôu",
                "",
                "audio_module_2_lesson_1_alphabet_letter_15"
              ],
              [
                "P",
                "pi",
                "",
                "audio_module_2_lesson_1_alphabet_letter_16"
              ],
              [
                "Q",
                "quiú",
                "",
                "audio_module_2_lesson_1_alphabet_letter_17"
              ],
              [
                "R",
                "ar",
                "",
                "audio_module_2_lesson_1_alphabet_letter_18"
              ],
              [
                "S",
                "és",
                "",
                "audio_module_2_lesson_1_alphabet_letter_19"
              ],
              [
                "T",
                "ti",
                "",
                "audio_module_2_lesson_1_alphabet_letter_20"
              ],
              [
                "U",
                "iú",
                "",
                "audio_module_2_lesson_1_alphabet_letter_21"
              ],
              [
                "V",
                "vi",
                "",
                "audio_module_2_lesson_1_alphabet_letter_22"
              ],
              [
                "W",
                "dâbliu",
                "",
                "audio_module_2_lesson_1_alphabet_letter_23"
              ],
              [
                "X",
                "éks",
                "",
                "audio_module_2_lesson_1_alphabet_letter_24"
              ],
              [
                "Y",
                "uai",
                "",
                "audio_module_2_lesson_1_alphabet_letter_25"
              ],
              [
                "Z",
                "zi",
                "",
                "audio_module_2_lesson_1_alphabet_letter_26"
              ]
            ],
            "column_note": "coluna 4 (opcional) = audio_id da pronúncia da letra"
          },
          "dica": "você não precisa decorar a tabela inteira de uma vez. Comece soletrando o seu próprio nome no English Tool — a repetição com o seu nome real (ou uma personagem) fixa o som muito mais rápido do que memorizar a lista solta.",
          "examples": [
            {
              "text": "My name is Marcos. M-A-R-C-O-S.",
              "audio_id": "audio_module_2_lesson_1_model_1"
            },
            {
              "text": "Can you spell that, please?",
              "audio_id": "audio_module_2_lesson_1_model_2"
            }
          ]
        },
        {
          "title": "Números para telefone e CEP",
          "intro": "Números de telefone e CEP em inglês são ditos um dígito de cada vez, não como uma dezena completa.",
          "table": {
            "columns": [
              "Número",
              "Palavra"
            ],
            "rows": [
              [
                "0",
                "zero / oh",
                "audio_module_2_lesson_1_number_word_1",
                "audio_module_2_lesson_1_number_word_2"
              ],
              [
                "1",
                "one",
                "audio_module_2_lesson_1_number_word_3"
              ],
              [
                "2",
                "two",
                "audio_module_2_lesson_1_number_word_4"
              ],
              [
                "3",
                "three",
                "audio_module_2_lesson_1_number_word_5"
              ],
              [
                "4",
                "four",
                "audio_module_2_lesson_1_number_word_6"
              ],
              [
                "5",
                "five",
                "audio_module_2_lesson_1_number_word_7"
              ],
              [
                "6",
                "six",
                "audio_module_2_lesson_1_number_word_8"
              ],
              [
                "7",
                "seven",
                "audio_module_2_lesson_1_number_word_9"
              ],
              [
                "8",
                "eight",
                "audio_module_2_lesson_1_number_word_10"
              ],
              [
                "9",
                "nine",
                "audio_module_2_lesson_1_number_word_11"
              ],
              [
                "10",
                "ten",
                "audio_module_2_lesson_1_number_word_12"
              ]
            ],
            "column_note": "coluna 3 (+4 para o \"0\") = audio_id"
          },
          "examples": [
            {
              "en": "Phone number: 011 98765-4321 → zero one one, nine eight seven six five, four three two one."
            },
            {
              "en": "Zip code: 01310-100 → zero one three one zero, one zero zero."
            }
          ],
          "atencao": {
            "title": "zero também pode ser \"oh\"",
            "text": "Em números de telefone e CEP, \"0\" é dito tanto como zero quanto como oh (como a letra O). Os dois estão corretos."
          }
        },
        {
          "title": "E-mail em voz alta",
          "table": {
            "columns": [
              "Símbolo",
              "Como dizer"
            ],
            "rows": [
              [
                "@",
                "at"
              ],
              [
                ".",
                "dot"
              ],
              [
                "-",
                "dash / hyphen"
              ],
              [
                "_",
                "underscore"
              ]
            ]
          },
          "examples": [
            {
              "en": "ana.souza@email.com → ana dot souza at email dot com"
            }
          ]
        }
      ],
      "words_to_use": [
        {
          "word": "name",
          "example": "What's your name?",
          "audio_id": "audio_module_2_lesson_1_word_example_1"
        },
        {
          "word": "spell",
          "example": "Can you spell that?",
          "audio_id": "audio_module_2_lesson_1_word_example_2"
        },
        {
          "word": "phone number",
          "example": "What's your phone number?",
          "audio_id": "audio_module_2_lesson_1_word_example_3"
        },
        {
          "word": "email",
          "example": "What's your email?",
          "audio_id": "audio_module_2_lesson_1_word_example_4"
        },
        {
          "word": "address",
          "example": "What's your address?",
          "audio_id": "audio_module_2_lesson_1_word_example_5"
        },
        {
          "word": "zip code",
          "example": "What's your zip code?",
          "audio_id": "audio_module_2_lesson_1_word_example_6"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Cadastro em uma loja",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Hi! Can I have your name, please?",
                "audio_id": "audio_module_2_lesson_1_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "Sure. It's Théo. T-H-É-O.",
                "audio_id": "audio_module_2_lesson_1_seeitworking_1_line_2"
              },
              {
                "speaker": "A",
                "en": "And your phone number?",
                "audio_id": "audio_module_2_lesson_1_seeitworking_1_line_3"
              },
              {
                "speaker": "B",
                "en": "It's zero two one, nine five five five, one two three four.",
                "audio_id": "audio_module_2_lesson_1_seeitworking_1_line_4"
              }
            ],
            "full_audio_id": "audio_module_2_lesson_1_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Ligação telefônica",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Hello, this is the English Tool support line. What's your name?",
                "audio_id": "audio_module_2_lesson_1_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "My name is Renata. R-E-N-A-T-A.",
                "audio_id": "audio_module_2_lesson_1_seeitworking_2_line_2"
              },
              {
                "speaker": "A",
                "en": "Thank you, Renata. What's your email?",
                "audio_id": "audio_module_2_lesson_1_seeitworking_2_line_3"
              },
              {
                "speaker": "B",
                "en": "It's renata dot lima at email dot com.",
                "audio_id": "audio_module_2_lesson_1_seeitworking_2_line_4"
              }
            ],
            "full_audio_id": "audio_module_2_lesson_1_seeitworking_2_full_1"
          }
        },
        {
          "title": "Situação 3 — Entrega em casa",
          "note": "novo — reforça a graduação de exemplos, QA ponto 3",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Hi! What's your zip code, please?",
                "audio_id": "audio_module_2_lesson_1_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "It's zero one three one zero, one zero zero.",
                "audio_id": "audio_module_2_lesson_1_seeitworking_3_line_2"
              },
              {
                "speaker": "A",
                "en": "Perfect. And your phone number, in case we need to call?",
                "audio_id": "audio_module_2_lesson_1_seeitworking_3_line_3"
              },
              {
                "speaker": "B",
                "en": "It's zero one one, nine eight eight eight, seven seven seven six.",
                "audio_id": "audio_module_2_lesson_1_seeitworking_3_line_4"
              }
            ],
            "full_audio_id": "audio_module_2_lesson_1_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_2_lesson_1_practice_1",
          "title": "Complete com a letra certa",
          "type": "completar",
          "instruction": "Escreva por extenso o som da letra.",
          "items": [
            {
              "prompt": "B → ____",
              "answer": "bi",
              "feedback": null
            },
            {
              "prompt": "J → ____",
              "answer": "djei"
            },
            {
              "prompt": "R → ____",
              "answer": "ar"
            },
            {
              "prompt": "Y → ____",
              "answer": "uai"
            },
            {
              "prompt": "Q → ____",
              "answer": "quiú"
            }
          ],
          "gabarito_note": "Se você errou mais de uma, ouça o alfabeto completo no English Tool antes de repetir o exercício — a memorização auditiva funciona melhor que a leitura isolada da tabela."
        },
        {
          "id": "module_2_lesson_1_practice_2",
          "title": "Transforme em palavras",
          "type": "transformar",
          "note": "corrigido — evita repetir o tipo \"completar\" da atividade 1, QA ponto 5",
          "instruction": "Transforme cada número em sua forma falada, dígito por dígito.",
          "items": [
            {
              "prompt": "5 → ____",
              "answer": "five"
            },
            {
              "prompt": "0 → ____ (duas formas possíveis)",
              "answer": "zero / oh"
            },
            {
              "prompt": "8 → ____",
              "answer": "eight"
            },
            {
              "prompt": "Telefone 011 987654321 → transforme em dígitos falados:",
              "answer": "zero, one, one, nine, eight, seven, six, five, four, three, two, one"
            },
            {
              "prompt": "CEP 04567-000 → transforme em dígitos falados:",
              "answer": "zero, four, five, six, seven, zero, zero, zero"
            }
          ],
          "gabarito_note": "Repare que o CEP (item 5) segue a mesma lógica do telefone: cada dígito é dito separadamente, nunca como dezena."
        },
        {
          "id": "module_2_lesson_1_practice_3",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "\"@\" se diz \"at\" em inglês.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "Números de telefone são ditos como dezenas completas (\"noventa e oito\"), como em português.",
              "answer": false,
              "feedback": "F. Números de telefone são ditos dígito por dígito, não como dezenas."
            },
            {
              "statement": "\".\" em um e-mail se diz \"dot\".",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"Zero\" é a única forma correta de dizer \"0\" ao telefone.",
              "answer": false,
              "feedback": "F. \"0\" pode ser dito como \"zero\" ou \"oh\"."
            }
          ]
        },
        {
          "id": "module_2_lesson_1_practice_4",
          "title": "Associe",
          "type": "associar",
          "instruction": "Ligue a pergunta à resposta mais adequada.",
          "columnA": [
            "What's your name?",
            "Can you spell that?",
            "What's your phone number?",
            "What's your email?"
          ],
          "columnB": [
            "It's ana@email.com.",
            "It's zero one one, nine...",
            "My name is Ana.",
            "Sure. A-N-A."
          ],
          "answer": {
            "What's your name?": "My name is Ana.",
            "Can you spell that?": "Sure. A-N-A.",
            "What's your phone number?": "It's zero one one, nine...",
            "What's your email?": "It's ana@email.com."
          }
        }
      ],
      "your_turn": {
        "id": "module_2_lesson_1_production",
        "type": "producao_livre",
        "instruction": "Soletre seu nome (ou o de uma personagem) e informe um número de telefone e um e-mail — reais ou inventados.",
        "template": [
          "My name is __________. __________ (soletre).",
          "My phone number is __________.",
          "My email is __________."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Ouça e escreva",
          "detail": "transcrever um nome soletrado",
          "skill": "escuta"
        },
        {
          "label": "Soletre em voz alta",
          "detail": "gravar o próprio nome letra por letra",
          "skill": "fala"
        },
        {
          "label": "Números por extenso",
          "detail": "completar dígitos ouvidos, incluindo CEP",
          "skill": "escuta"
        },
        {
          "label": "Meu cadastro",
          "detail": "gravar ou digitar nome soletrado, telefone e e-mail",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_2_lesson_1_review",
        "recycles": [
          "module_1_lesson_2",
          "module_1_lesson_3"
        ],
        "instruction": "Complete usando \"this is\" ou \"I'm\" (Módulo 1) antes de soletrar seu nome:",
        "template": "Hi! ___ Kim. K-I-M. ___ your friend, right?",
        "possible_answer": "I'm, This is"
      },
      "check_progress": {
        "can_do": [
          "soletrar seu nome usando o alfabeto em inglês",
          "dizer um número de telefone e um CEP dígito por dígito",
          "informar um e-mail em voz alta usando \"at\" e \"dot\""
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Números e alfabeto → Soletrar e números"
    },
    {
      "id": "module_2_lesson_2",
      "label": "Lição 5: Fazer perguntas essenciais",
      "order": 2,
      "can_do": [
        "usar what, where, when, who e how para perguntar informações",
        "formar perguntas simples com do/does",
        "reconhecer did em uma pergunta, sem precisar respondê-la ainda"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Diego",
              "en": "Where are you from, Sofia?",
              "audio_id": "audio_module_2_lesson_2_opening_line_1"
            },
            {
              "speaker": "Sofia",
              "en": "I'm from Portugal. What about you?",
              "audio_id": "audio_module_2_lesson_2_opening_line_2"
            },
            {
              "speaker": "Diego",
              "en": "I'm from Brazil. What do you do?",
              "audio_id": "audio_module_2_lesson_2_opening_line_3"
            },
            {
              "speaker": "Sofia",
              "en": "I work at a hospital. Do you work too?",
              "audio_id": "audio_module_2_lesson_2_opening_line_4"
            },
            {
              "speaker": "Diego",
              "en": "Yes, I do. I work at a school.",
              "audio_id": "audio_module_2_lesson_2_opening_line_5"
            }
          ],
          "full_audio_id": "audio_module_2_lesson_2_opening_full_1"
        },
        "translation": {
          "type": "parallel",
          "lines": [
            [
              "Diego",
              "De onde você é, Sofia?"
            ],
            [
              "Sofia",
              "Sou de Portugal. E você?"
            ],
            [
              "Diego",
              "Sou do Brasil. O que você faz?"
            ],
            [
              "Sofia",
              "Trabalho em um hospital. Você também trabalha?"
            ],
            [
              "Diego",
              "Sim. Trabalho em uma escola."
            ]
          ]
        }
      },
      "understand": [
        {
          "title": "Palavras de pergunta (WH-words)",
          "table": {
            "columns": [
              "Palavra",
              "Significado",
              "Exemplo"
            ],
            "rows": [
              [
                "What",
                "o quê",
                "What's your name?"
              ],
              [
                "Where",
                "onde",
                "Where are you from?"
              ],
              [
                "When",
                "quando",
                "When is your birthday?"
              ],
              [
                "Who",
                "quem",
                "Who is that?"
              ],
              [
                "How",
                "como",
                "How are you?"
              ],
              [
                "Why",
                "por quê",
                "Why do you like it?"
              ],
              [
                "Which",
                "qual",
                "Which one is yours?"
              ]
            ]
          },
          "dica": "repare que várias perguntas que você já usa (What's your name?, How are you?, Where are you from?) já têm uma palavra de pergunta dentro delas. Você já está usando WH-words desde a Lição 1 — agora está aprendendo o nome da peça e como formar novas perguntas com ela."
        },
        {
          "title": "Perguntas com do/does",
          "intro": "Para perguntar sobre ações no dia a dia, usamos do com I/you/we/they e does com he/she/it.",
          "table": {
            "columns": [
              "Sujeito",
              "Pergunta",
              "Exemplo"
            ],
            "rows": [
              [
                "I / you / we / they",
                "Do + sujeito + verbo?",
                "Do you like coffee?"
              ],
              [
                "he / she / it",
                "Does + sujeito + verbo?",
                "Does she work here?"
              ]
            ]
          },
          "note": "Respostas curtas: Do you work here? — Yes, I do. / No, I don't. | Does he like coffee? — Yes, he does. / No, he doesn't.",
          "atencao": {
            "title": "did (só reconhecimento por enquanto)",
            "text": "Você vai ouvir e ler perguntas com did (ex.: \"Did you like it?\") em conversas reais. Por enquanto, você só precisa reconhecer que \"did\" também é uma pergunta com do/does, mas sobre o passado. Você não precisa produzir frases com did neste módulo — isso será estudado mais adiante no seu percurso."
          }
        }
      ],
      "words_to_use": [
        {
          "word": "work",
          "example": "I work at a school.",
          "audio_id": "audio_module_2_lesson_2_word_example_1"
        },
        {
          "word": "study",
          "example": "Where do you study?",
          "audio_id": "audio_module_2_lesson_2_word_example_2"
        },
        {
          "word": "live",
          "example": "Where do you live?",
          "audio_id": "audio_module_2_lesson_2_word_example_3"
        },
        {
          "word": "like",
          "example": "Do you like coffee?",
          "audio_id": "audio_module_2_lesson_2_word_example_4"
        },
        {
          "word": "birthday",
          "example": "When is your birthday?",
          "audio_id": "audio_module_2_lesson_2_word_example_5"
        }
      ],
      "see_it_working": [
        {
          "title": "Conversa 1 — Conhecendo alguém",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "What do you do?",
                "audio_id": "audio_module_2_lesson_2_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "I'm a student. And you?",
                "audio_id": "audio_module_2_lesson_2_seeitworking_1_line_2"
              },
              {
                "speaker": "A",
                "en": "I work at a store.",
                "audio_id": "audio_module_2_lesson_2_seeitworking_1_line_3"
              }
            ],
            "full_audio_id": "audio_module_2_lesson_2_seeitworking_1_full_1"
          }
        },
        {
          "title": "Conversa 2 — Perguntas rápidas",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Where do you live?",
                "audio_id": "audio_module_2_lesson_2_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "I live in São Paulo. Where do you live?",
                "audio_id": "audio_module_2_lesson_2_seeitworking_2_line_2"
              },
              {
                "speaker": "A",
                "en": "I live in Lisbon.",
                "audio_id": "audio_module_2_lesson_2_seeitworking_2_line_3"
              }
            ],
            "full_audio_id": "audio_module_2_lesson_2_seeitworking_2_full_1"
          }
        },
        {
          "title": "Conversa 3 — Novo colega",
          "note": "novo — reforça a graduação de exemplos, QA ponto 3",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Do you study English?",
                "audio_id": "audio_module_2_lesson_2_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "Yes, I do. Do you study here too?",
                "audio_id": "audio_module_2_lesson_2_seeitworking_3_line_2"
              },
              {
                "speaker": "A",
                "en": "Yes! What's your name?",
                "audio_id": "audio_module_2_lesson_2_seeitworking_3_line_3"
              },
              {
                "speaker": "B",
                "en": "I'm Karim. Nice to meet you.",
                "audio_id": "audio_module_2_lesson_2_seeitworking_3_line_4"
              }
            ],
            "full_audio_id": "audio_module_2_lesson_2_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_2_lesson_2_practice_1",
          "title": "Complete com a palavra de pergunta certa",
          "type": "completar",
          "word_bank": [
            "What",
            "Where",
            "When",
            "Who",
            "How"
          ],
          "items": [
            {
              "prompt": "___ are you from? (lugar)",
              "answer": "Where"
            },
            {
              "prompt": "___ is your name? (informação)",
              "answer": "What"
            },
            {
              "prompt": "___ is that? (pessoa)",
              "answer": "Who"
            },
            {
              "prompt": "___ are you? (estado)",
              "answer": "How"
            },
            {
              "prompt": "___ is your birthday? (tempo)",
              "answer": "When"
            }
          ]
        },
        {
          "id": "module_2_lesson_2_practice_2",
          "title": "Escolha: Do ou Does?",
          "type": "escolha_por_contexto",
          "note": "corrigido — reformulado como escolha, não completar, para não repetir o tipo da atividade 1, QA ponto 5",
          "items": [
            {
              "prompt": "___ you like tea?",
              "options": [
                "Do",
                "Does"
              ],
              "answer": 0
            },
            {
              "prompt": "___ she work at a hospital?",
              "options": [
                "Do",
                "Does"
              ],
              "answer": 1
            },
            {
              "prompt": "___ they study English?",
              "options": [
                "Do",
                "Does"
              ],
              "answer": 0
            },
            {
              "prompt": "___ he live in Brazil?",
              "options": [
                "Do",
                "Does"
              ],
              "answer": 1
            },
            {
              "prompt": "___ we need a phone number?",
              "options": [
                "Do",
                "Does"
              ],
              "answer": 0
            }
          ],
          "gabarito_note": "Repare no padrão: \"does\" aparece sempre que o sujeito é he, she ou it (itens 2 e 4); \"do\" aparece com os demais."
        },
        {
          "id": "module_2_lesson_2_practice_3",
          "title": "Transforme em pergunta",
          "type": "transformar",
          "items": [
            {
              "prompt": "You work here.",
              "answer": "Do you work here?"
            },
            {
              "prompt": "She likes coffee.",
              "answer": "Does she like coffee?"
            },
            {
              "prompt": "They live in Recife.",
              "answer": "Do they live in Recife?"
            }
          ]
        },
        {
          "id": "module_2_lesson_2_practice_4",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "\"Where\" pergunta sobre lugar.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "Usamos \"does\" com I, you, we e they.",
              "answer": false,
              "feedback": "F. Usamos \"do\" com I, you, we, they; \"does\" é com he/she/it."
            },
            {
              "statement": "\"Did\" é usado para perguntar sobre o passado.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"Who\" pergunta sobre uma pessoa.",
              "answer": true,
              "feedback": "V."
            }
          ]
        }
      ],
      "your_turn": {
        "id": "module_2_lesson_2_production",
        "type": "producao_livre",
        "instruction": "Escreva três perguntas que você faria para conhecer alguém novo.",
        "template": [
          "1. __________________________________?",
          "2. __________________________________?",
          "3. __________________________________?"
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Escolha a palavra de pergunta",
          "detail": "completar seis perguntas",
          "skill": "leitura/gramática"
        },
        {
          "label": "Do ou does",
          "detail": "escolher a forma certa em cinco perguntas",
          "skill": "leitura"
        },
        {
          "label": "Ouça e responda",
          "detail": "ouvir uma pergunta e escolher a resposta certa",
          "skill": "escuta"
        },
        {
          "label": "Minhas perguntas",
          "detail": "gravar ou digitar três perguntas próprias",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_2_lesson_2_review",
        "recycles": [
          "module_1_lesson_2",
          "module_2_lesson_1"
        ],
        "instruction": "Complete o diálogo reciclando \"to be\" (Lição 2) e os dados pessoais (Lição 4) antes de usar as novas perguntas:",
        "template": "Hi, ___ your name Sofia? — Yes, it ___. My email ___ sofia@email.com. ___ you work here?",
        "possible_answer": "is, is, is, Do"
      },
      "check_progress": {
        "can_do": [
          "usar what, where, when, who e how para perguntar",
          "formar perguntas simples com do/does",
          "reconhecer did em uma pergunta sem precisar respondê-la"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Palavras de pergunta → WH-words e do/does"
    },
    {
      "id": "module_2_lesson_3",
      "label": "Lição 6: Falar de preferências e sustentar small talk",
      "order": 3,
      "can_do": [
        "dizer do que gosta, ama ou não gosta usando like/love/hate + -ing",
        "fazer uma pergunta de continuidade para manter a conversa",
        "reagir de forma natural quando concorda ou discorda de uma preferência"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Malia",
              "en": "Do you like cooking?",
              "audio_id": "audio_module_2_lesson_3_opening_line_1"
            },
            {
              "speaker": "Theo",
              "en": "Yes, I love cooking! I hate cleaning, though.",
              "audio_id": "audio_module_2_lesson_3_opening_line_2"
            },
            {
              "speaker": "Malia",
              "en": "Me too! What about watching movies?",
              "audio_id": "audio_module_2_lesson_3_opening_line_3"
            },
            {
              "speaker": "Theo",
              "en": "I like watching movies. Do you like reading?",
              "audio_id": "audio_module_2_lesson_3_opening_line_4"
            },
            {
              "speaker": "Malia",
              "en": "Not really. I prefer playing sports.",
              "audio_id": "audio_module_2_lesson_3_opening_line_5"
            }
          ],
          "full_audio_id": "audio_module_2_lesson_3_opening_full_1"
        },
        "translation": {
          "type": "parallel",
          "lines": [
            [
              "Malia",
              "Você gosta de cozinhar?"
            ],
            [
              "Theo",
              "Sim, eu amo cozinhar! Mas eu odeio limpar."
            ],
            [
              "Malia",
              "Eu também! E assistir filmes?"
            ],
            [
              "Theo",
              "Eu gosto de assistir filmes. Você gosta de ler?"
            ],
            [
              "Malia",
              "Não muito. Eu prefiro praticar esportes."
            ]
          ]
        }
      },
      "understand": [
        {
          "title": "Like, love, hate + -ing",
          "intro": "Para falar de uma atividade que você gosta ou não gosta, use like/love/hate seguido do verbo com -ing.",
          "table": {
            "columns": [
              "Expressão",
              "Sentido",
              "Exemplo"
            ],
            "rows": [
              [
                "I like + -ing",
                "eu gosto de",
                "I like cooking."
              ],
              [
                "I love + -ing",
                "eu amo",
                "I love traveling."
              ],
              [
                "I hate + -ing",
                "eu odeio",
                "I hate cleaning."
              ],
              [
                "I don't like + -ing",
                "eu não gosto de",
                "I don't like waiting."
              ]
            ]
          },
          "atencao": {
            "title": "like também pode vir com substantivo",
            "text": "Você já viu \"like\" antes com um substantivo direto (Do you like coffee?, Lição 5). Com uma atividade/ação, use -ing: \"I like cooking\", não \"I like cook\"."
          }
        },
        {
          "title": "Perguntas e reações de continuidade",
          "intro": "Small talk depende de devolver a conversa, não só responder.",
          "table": {
            "columns": [
              "Expressão",
              "Uso"
            ],
            "rows": [
              [
                "What about you?",
                "E você?"
              ],
              [
                "Me too.",
                "Eu também. (quando você concorda)"
              ],
              [
                "Really?",
                "Sério? (mostra interesse)"
              ],
              [
                "I prefer...",
                "Eu prefiro..."
              ],
              [
                "Not really.",
                "Não muito."
              ]
            ]
          },
          "dica": "você não precisa de uma frase longa para manter a conversa — \"Really?\" e \"Me too\" já fazem o outro continuar falando. É a mesma lógica de \"And you?\" que você já usa desde a Lição 1."
        }
      ],
      "words_to_use": [
        {
          "word": "cooking",
          "example": "I love cooking.",
          "audio_id": "audio_module_2_lesson_3_word_example_1"
        },
        {
          "word": "reading",
          "example": "Do you like reading?",
          "audio_id": "audio_module_2_lesson_3_word_example_2"
        },
        {
          "word": "watching movies",
          "example": "I like watching movies.",
          "audio_id": "audio_module_2_lesson_3_word_example_3"
        },
        {
          "word": "playing sports",
          "example": "I prefer playing sports.",
          "audio_id": "audio_module_2_lesson_3_word_example_4"
        },
        {
          "word": "traveling",
          "example": "I love traveling.",
          "audio_id": "audio_module_2_lesson_3_word_example_5"
        },
        {
          "word": "cleaning",
          "example": "I hate cleaning.",
          "audio_id": "audio_module_2_lesson_3_word_example_6"
        }
      ],
      "see_it_working": [
        {
          "title": "Conversa 1",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Do you like traveling?",
                "audio_id": "audio_module_2_lesson_3_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "Yes, I love it! What about you?",
                "audio_id": "audio_module_2_lesson_3_seeitworking_1_line_2"
              },
              {
                "speaker": "A",
                "en": "Me too. I love traveling.",
                "audio_id": "audio_module_2_lesson_3_seeitworking_1_line_3"
              }
            ],
            "full_audio_id": "audio_module_2_lesson_3_seeitworking_1_full_1"
          }
        },
        {
          "title": "Conversa 2",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Do you like reading?",
                "audio_id": "audio_module_2_lesson_3_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "Not really. I prefer watching movies.",
                "audio_id": "audio_module_2_lesson_3_seeitworking_2_line_2"
              },
              {
                "speaker": "A",
                "en": "Really? I like both.",
                "audio_id": "audio_module_2_lesson_3_seeitworking_2_line_3"
              }
            ],
            "full_audio_id": "audio_module_2_lesson_3_seeitworking_2_full_1"
          }
        },
        {
          "title": "Conversa 3 — Discordando sem desconforto",
          "note": "novo — reforça a graduação de exemplos, QA ponto 3",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "I love cleaning!",
                "audio_id": "audio_module_2_lesson_3_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "Really? I hate cleaning.",
                "audio_id": "audio_module_2_lesson_3_seeitworking_3_line_2"
              },
              {
                "speaker": "A",
                "en": "That's okay! What about cooking?",
                "audio_id": "audio_module_2_lesson_3_seeitworking_3_line_3"
              },
              {
                "speaker": "B",
                "en": "I like cooking a lot.",
                "audio_id": "audio_module_2_lesson_3_seeitworking_3_line_4"
              }
            ],
            "full_audio_id": "audio_module_2_lesson_3_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_2_lesson_3_practice_1",
          "title": "Complete com o verbo em -ing",
          "type": "completar",
          "items": [
            {
              "prompt": "I like ___ (cook).",
              "answer": "cooking"
            },
            {
              "prompt": "She loves ___ (travel).",
              "answer": "traveling"
            },
            {
              "prompt": "They hate ___ (clean).",
              "answer": "cleaning"
            },
            {
              "prompt": "He prefers ___ (read).",
              "answer": "reading"
            },
            {
              "prompt": "We like ___ (watch) movies.",
              "answer": "watching"
            }
          ],
          "gabarito_note": "Todos os verbos ganham -ing porque vêm depois de like/love/hate/prefer — nenhuma exceção nesta lista."
        },
        {
          "id": "module_2_lesson_3_practice_2",
          "title": "Escolha a reação natural",
          "type": "escolha_por_contexto",
          "items": [
            {
              "prompt": "Alguém diz \"I love cooking!\" e você também ama. Você diz:",
              "options": [
                "Not really.",
                "Me too!",
                "What's your name?"
              ],
              "answer": 1
            },
            {
              "prompt": "Alguém diz \"I hate cleaning.\" Você quer saber mais. Você diz:",
              "options": [
                "Really? Why?",
                "See you later.",
                "I'm fine, thanks."
              ],
              "answer": 0
            }
          ]
        },
        {
          "id": "module_2_lesson_3_practice_3",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "\"I like cooking\" usa o verbo com -ing.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"What about you?\" serve para devolver a pergunta.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"I like coffee\" também precisa de -ing.",
              "answer": false,
              "feedback": "F. \"I like coffee\" usa substantivo direto, sem -ing."
            },
            {
              "statement": "\"Me too\" é usado quando você discorda.",
              "answer": false,
              "feedback": "F. \"Me too\" é usado quando você concorda/compartilha a mesma preferência."
            }
          ]
        },
        {
          "id": "module_2_lesson_3_practice_4",
          "title": "Una as informações",
          "type": "una_as_informacoes",
          "items": [
            {
              "prompt": "Marcos / love / travel",
              "answer": "Marcos loves traveling."
            },
            {
              "prompt": "Ana / hate / clean",
              "answer": "Ana hates cleaning."
            },
            {
              "prompt": "Léo e Bia / like / cook",
              "answer": "Léo and Bia like cooking."
            }
          ]
        }
      ],
      "your_turn": {
        "id": "module_2_lesson_3_production",
        "type": "producao_livre",
        "instruction": "Escreva sobre três coisas que você gosta, ama ou odeia fazer.",
        "template": [
          "I like __________.",
          "I love __________.",
          "I hate __________."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Complete com -ing",
          "detail": "cinco frases",
          "skill": "escrita"
        },
        {
          "label": "Reação certa",
          "detail": "escolher a resposta de continuidade adequada",
          "skill": "leitura"
        },
        {
          "label": "Ouça e concorde",
          "detail": "ouvir uma preferência e reagir com \"Me too\" ou \"Really?\"",
          "skill": "escuta"
        },
        {
          "label": "Minhas preferências",
          "detail": "gravar ou digitar três frases próprias",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_2_lesson_3_review",
        "recycles": [
          "module_2_lesson_2"
        ],
        "instruction": "Complete usando uma palavra de pergunta (Lição 5) antes de expressar a preferência:",
        "template": "___ do you like doing on the weekend? — I like ___ (cook) and ___ (read).",
        "possible_answer": "What, cooking, reading"
      },
      "check_progress": {
        "can_do": [
          "dizer do que gosta, ama ou não gosta usando -ing",
          "fazer uma pergunta de continuidade para manter a conversa",
          "reagir de forma natural a uma preferência que alguém compartilhou"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Conversas básicas → Preferências e small talk"
    }
  ],
  "checkpoint": {
    "id": "module_2_checkpoint",
    "label": "Checkpoint 2: Trocar informações",
    "instruction": "O checkpoint verifica se você consegue usar as três lições do Módulo 2 em conjunto — e também reaplica um ponto do Checkpoint 1. Faça sem consultar o gabarito. Depois, corrija e repita somente o que errou.",
    "parts": [
      {
        "id": "module_2_checkpoint_part_a",
        "label": "Parte A — Complete a conversa",
        "type": "completar",
        "word_bank": [
          "What's your name",
          "Can you spell that",
          "phone number",
          "email",
          "Do you like"
        ],
        "dialogue": {
          "lines": [
            {
              "speaker": "Recepcionista",
              "en": "Hi! __________, please?",
              "audio_id": "audio_module_2_checkpoint_part_a_line_1"
            },
            {
              "speaker": "Aluno",
              "en": "It's Kim. K-I-M.",
              "audio_id": "audio_module_2_checkpoint_part_a_line_2"
            },
            {
              "speaker": "Recepcionista",
              "en": "__________?",
              "audio_id": "audio_module_2_checkpoint_part_a_line_3"
            },
            {
              "speaker": "Aluno",
              "en": "Sure. K-I-M.",
              "audio_id": "audio_module_2_checkpoint_part_a_line_4"
            },
            {
              "speaker": "Recepcionista",
              "en": "And your __________?",
              "audio_id": "audio_module_2_checkpoint_part_a_line_5"
            },
            {
              "speaker": "Aluno",
              "en": "It's zero one one, nine eight seven, six five four three.",
              "audio_id": "audio_module_2_checkpoint_part_a_line_6"
            },
            {
              "speaker": "Recepcionista",
              "en": "What's your __________?",
              "audio_id": "audio_module_2_checkpoint_part_a_line_7"
            },
            {
              "speaker": "Aluno",
              "en": "It's kim dot lee at email dot com.",
              "audio_id": "audio_module_2_checkpoint_part_a_line_8"
            },
            {
              "speaker": "Recepcionista",
              "en": "__________ coffee?",
              "audio_id": "audio_module_2_checkpoint_part_a_line_9"
            },
            {
              "speaker": "Aluno",
              "en": "Yes, I do. I love it.",
              "audio_id": "audio_module_2_checkpoint_part_a_line_10"
            }
          ],
          "full_audio_id": "audio_module_2_checkpoint_part_a_full_1"
        },
        "answer": [
          "Hi! What's your name, please?",
          "It's Kim. K-I-M.",
          "Can you spell that?",
          "Sure. K-I-M.",
          "And your phone number?",
          "It's zero one one, nine eight seven, six five four three.",
          "What's your email?",
          "It's kim dot lee at email dot com.",
          "Do you like coffee?",
          "Yes, I do. I love it."
        ]
      },
      {
        "id": "module_2_checkpoint_part_b",
        "label": "Parte B — Encontre e corrija o erro",
        "type": "encontre_o_erro",
        "items": [
          {
            "prompt": "Where you are from?",
            "answer": "Where are you from?"
          },
          {
            "prompt": "Does you like coffee?",
            "answer": "Do you like coffee?"
          },
          {
            "prompt": "I like cook.",
            "answer": "I like cooking."
          },
          {
            "prompt": "She are my friend.",
            "note": "reaplicado do Checkpoint 1 — verbo to be",
            "answer": "She is my friend."
          },
          {
            "prompt": "What your name?",
            "answer": "What's your name?"
          },
          {
            "prompt": "Do he live in Brazil?",
            "answer": "Does he live in Brazil?"
          }
        ]
      },
      {
        "id": "module_2_checkpoint_part_c",
        "label": "Parte C — Produção final: conversa guiada de seis turnos",
        "type": "producao_livre",
        "instruction": "Escreva ou grave uma conversa de seis turnos entre você e outra pessoa (real ou personagem). A conversa deve conter:",
        "requirements": [
          "um cumprimento (revisão do Módulo 1)",
          "três perguntas essenciais diferentes (What, Where e uma com do/does)",
          "a troca de pelo menos dois dados pessoais (nome soletrado, telefone ou e-mail)",
          "uma preferência com like/love/hate + -ing e uma reação de continuidade",
          "uma despedida (revisão do Módulo 1)"
        ],
        "criterion": "tentativa_registrada"
      }
    ],
    "completion_criterion": {
      "objective_items_total": 12,
      "objective_items_required": 9,
      "text": "acertar pelo menos 9 dos 12 itens objetivos do checkpoint (6 da Parte A + 6 da Parte B, mesmo formato do Checkpoint 1); concluir a produção final com os cinco elementos solicitados; refazer os itens essenciais registrados na revisão, incluindo o item reaplicado do Checkpoint 1 (Parte B, item 4).",
      "non_blocking_note": "Se ainda não alcançar o critério, o módulo não será apagado nem reiniciado. O English Tool mostrará quais lições revisar e oferecerá uma nova tentativa apenas com os pontos necessários."
    },
    "part_end_note": "Fim da Parte 1: ao concluir o Checkpoint 2, você encerra a Parte 1 do English Tool — você já consegue iniciar uma interação, se apresentar, trocar dados básicos, fazer perguntas simples e manter uma conversa breve com apoio."
  },
  "source": "ENGLISH-TOOL-MODULO-2-CANDIDATO-APROVACAO.md"
};

export const MODULE_3 = {
  "id": "module_3",
  "label": "Módulo 3: Organizar tempo, rotina e planos",
  "required_day": 1,
  "part": "part_1_open",
  "order": 3,
  "outcome": "ao concluir este módulo, você conseguirá dizer horas, dias e datas, marcar e confirmar compromissos, descrever sua rotina e frequência, falar de hobbies e habilidades, e aceitar ou recusar um convite.",
  "how_to_use": "leia uma lição por vez. Faça primeiro as atividades da apostila e depois abra a prática indicada no English Tool. Ao terminar as três lições, faça o Checkpoint 3.",
  "lessons": [
    {
      "id": "module_3_lesson_1",
      "label": "Lição 7: Horas, datas e compromissos",
      "order": 1,
      "can_do": [
        "dizer as horas em inglês",
        "usar at, on e in corretamente para marcar horário, dia e mês",
        "marcar e confirmar um compromisso"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Clara",
              "en": "What time is it?",
              "audio_id": "audio_module_3_lesson_1_opening_line_1"
            },
            {
              "speaker": "Iris",
              "en": "It's three o'clock.",
              "audio_id": "audio_module_3_lesson_1_opening_line_2"
            },
            {
              "speaker": "Clara",
              "en": "Great. My appointment is at four o'clock, on Tuesday.",
              "audio_id": "audio_module_3_lesson_1_opening_line_3"
            },
            {
              "speaker": "Iris",
              "en": "Is that this week?",
              "audio_id": "audio_module_3_lesson_1_opening_line_4"
            },
            {
              "speaker": "Clara",
              "en": "Yes, it's on March 12th.",
              "audio_id": "audio_module_3_lesson_1_opening_line_5"
            }
          ],
          "full_audio_id": "audio_module_3_lesson_1_opening_full_1"
        },
        "translation": {
          "type": "summary",
          "text": "Clara pergunta as horas. São três horas. O compromisso de Clara é às quatro horas, na terça-feira, dia 12 de março."
        }
      },
      "understand": [
        {
          "title": "Horas",
          "intro": "Para dizer uma hora exata, use it's + o número da hora + o'clock.",
          "table": {
            "columns": [
              "Hora",
              "Em inglês"
            ],
            "rows": [
              [
                "3:00",
                "It's three o'clock."
              ],
              [
                "7:00",
                "It's seven o'clock."
              ],
              [
                "12:00",
                "It's twelve o'clock."
              ]
            ]
          },
          "dica": "quando a hora não é exata (3:15, 3:30...), o jeito mais simples para começar é dizer os números direto, como um número de telefone: 3:15 = \"It's three fifteen.\" Formas como \"quarter past\" existem, mas você vai aprendê-las mais adiante — por enquanto, o número direto já resolve qualquer situação real."
        },
        {
          "title": "At, on e in para tempo",
          "table": {
            "columns": [
              "Preposição",
              "Uso",
              "Exemplo"
            ],
            "rows": [
              [
                "at",
                "horários exatos",
                "at three o'clock, at noon"
              ],
              [
                "on",
                "dias e datas",
                "on Tuesday, on March 12th"
              ],
              [
                "in",
                "meses e períodos maiores",
                "in March, in the morning"
              ]
            ]
          },
          "dica": "pense assim — at é para o ponteiro do relógio, on é para o dia marcado no calendário, in é para o mês ou período que envolve o calendário inteiro.",
          "atencao": {
            "title": "\"in the morning\" mas \"at night\"",
            "text": "A maioria dos períodos do dia usa in (in the morning, in the afternoon, in the evening), mas a noite para dormir usa at: at night. Essa é uma exceção que você só aprende com uso repetido."
          }
        }
      ],
      "words_to_use": [
        {
          "word": "Monday, Tuesday, Wednesday...",
          "example": "My class is on Monday.",
          "audio_id": "audio_module_3_lesson_1_word_example_1"
        },
        {
          "word": "January, February, March...",
          "example": "My birthday is in July.",
          "audio_id": "audio_module_3_lesson_1_word_example_2"
        },
        {
          "word": "appointment",
          "example": "I have an appointment at five.",
          "audio_id": "audio_module_3_lesson_1_word_example_3"
        },
        {
          "word": "today / tomorrow / this week",
          "example": "Is that today or tomorrow?",
          "audio_id": "audio_module_3_lesson_1_word_example_4"
        },
        {
          "word": "noon / midnight",
          "example": "The store closes at midnight.",
          "audio_id": "audio_module_3_lesson_1_word_example_5"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Marcando uma consulta",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Can I make an appointment, please?",
                "audio_id": "audio_module_3_lesson_1_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "Sure. Is Thursday okay for you?",
                "audio_id": "audio_module_3_lesson_1_seeitworking_1_line_2"
              },
              {
                "speaker": "A",
                "en": "Yes. What time?",
                "audio_id": "audio_module_3_lesson_1_seeitworking_1_line_3"
              },
              {
                "speaker": "B",
                "en": "At two o'clock.",
                "audio_id": "audio_module_3_lesson_1_seeitworking_1_line_4"
              }
            ],
            "full_audio_id": "audio_module_3_lesson_1_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Combinando com um amigo",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Are you free on Saturday?",
                "audio_id": "audio_module_3_lesson_1_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "Yes! What time?",
                "audio_id": "audio_module_3_lesson_1_seeitworking_2_line_2"
              },
              {
                "speaker": "A",
                "en": "How about at seven o'clock, in the evening?",
                "audio_id": "audio_module_3_lesson_1_seeitworking_2_line_3"
              },
              {
                "speaker": "B",
                "en": "Perfect. See you then.",
                "audio_id": "audio_module_3_lesson_1_seeitworking_2_line_4"
              }
            ],
            "full_audio_id": "audio_module_3_lesson_1_seeitworking_2_full_1"
          }
        },
        {
          "title": "Situação 3 — Horário de curso",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "What time is your English class?",
                "audio_id": "audio_module_3_lesson_1_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "It's at six o'clock, on Mondays and Wednesdays.",
                "audio_id": "audio_module_3_lesson_1_seeitworking_3_line_2"
              },
              {
                "speaker": "A",
                "en": "And when does it start? This month?",
                "audio_id": "audio_module_3_lesson_1_seeitworking_3_line_3"
              },
              {
                "speaker": "B",
                "en": "Yes, in March.",
                "audio_id": "audio_module_3_lesson_1_seeitworking_3_line_4"
              }
            ],
            "full_audio_id": "audio_module_3_lesson_1_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_3_lesson_1_practice_1",
          "title": "Escolha at, on ou in",
          "type": "escolha_por_contexto",
          "items": [
            {
              "prompt": "My class is ___ Monday.",
              "answer": "on"
            },
            {
              "prompt": "The meeting is ___ three o'clock.",
              "answer": "at"
            },
            {
              "prompt": "Her birthday is ___ April.",
              "answer": "in"
            },
            {
              "prompt": "We study ___ the morning.",
              "answer": "in"
            },
            {
              "prompt": "I sleep ___ night.",
              "answer": "at"
            }
          ],
          "gabarito_note": "Lembre-se do resumo: at = horário, on = dia, in = mês/período. Todos os itens seguem essa régua sem exceção, exceto \"at night\", que já é uma exceção conhecida."
        },
        {
          "id": "module_3_lesson_1_practice_2",
          "title": "Escreva a hora por extenso",
          "type": "completar",
          "items": [
            {
              "prompt": "8:00 → ____",
              "answer": "It's eight o'clock."
            },
            {
              "prompt": "12:00 → ____",
              "answer": "It's twelve o'clock."
            },
            {
              "prompt": "5:00 → ____",
              "answer": "It's five o'clock."
            },
            {
              "prompt": "9:15 → ____ (dica: use os números direto, como visto na seção Entenda)",
              "answer": "It's nine fifteen."
            }
          ]
        },
        {
          "id": "module_3_lesson_1_practice_3",
          "title": "Associe",
          "type": "associar",
          "columnA": [
            "December",
            "Monday",
            "Sunday"
          ],
          "columnB": [
            "primeiro dia da semana de trabalho, no calendário comum",
            "mês de festas de fim de ano",
            "dia de descanso mais comum"
          ],
          "answer": {
            "December": "mês de festas de fim de ano",
            "Monday": "primeiro dia da semana de trabalho, no calendário comum",
            "Sunday": "dia de descanso mais comum"
          }
        },
        {
          "id": "module_3_lesson_1_practice_4",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "Usamos \"at\" para dizer o dia da semana.",
              "answer": false,
              "feedback": "F. Usamos \"on\" para dias da semana, não \"at\"."
            },
            {
              "statement": "\"In the morning\" é a forma correta para se referir à manhã.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"At night\" é uma exceção — não usamos \"in\" aqui.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"On\" é usado para meses inteiros.",
              "answer": true,
              "feedback": "V."
            }
          ]
        }
      ],
      "your_turn": {
        "id": "module_3_lesson_1_production",
        "type": "producao_livre",
        "instruction": "Escreva um compromisso real ou inventado, com hora, dia e mês.",
        "template": [
          "I have an appointment/class at __________, on __________, in __________."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Ouça e escolha",
          "detail": "identificar a hora certa entre três opções",
          "skill": "escuta"
        },
        {
          "label": "At, on ou in",
          "detail": "completar seis frases",
          "skill": "leitura/gramática"
        },
        {
          "label": "Marque o compromisso",
          "detail": "ordenar uma conversa de agendamento",
          "skill": "leitura"
        },
        {
          "label": "Meu compromisso",
          "detail": "gravar ou digitar um horário marcado por você",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_3_lesson_1_review",
        "recycles": [
          "module_2_lesson_1"
        ],
        "instruction": "Complete usando os números que você já aprendeu na Lição 4 antes de praticar horas:",
        "template": "My phone number is ___ ___ ___ (soletre um número de três dígitos). My appointment is at ___ o'clock.",
        "possible_answer": "Resposta livre — o importante é usar números falados corretamente, como na Lição 4"
      },
      "check_progress": {
        "can_do": [
          "dizer horas exatas em inglês",
          "usar at, on e in para horário, dia e mês",
          "marcar e confirmar um compromisso"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Tempo e agenda → Horas e preposições de tempo"
    },
    {
      "id": "module_3_lesson_2",
      "label": "Lição 8: Rotina e frequência",
      "order": 2,
      "can_do": [
        "descrever sua rotina usando o presente simples",
        "usar advérbios de frequência (always, usually, sometimes, never)",
        "perguntar e responder \"How often...?\""
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Noah",
              "en": "What time do you wake up?",
              "audio_id": "audio_module_3_lesson_2_opening_line_1"
            },
            {
              "speaker": "Priya",
              "en": "I usually wake up at six o'clock. I work from Monday to Friday.",
              "audio_id": "audio_module_3_lesson_2_opening_line_2"
            },
            {
              "speaker": "Noah",
              "en": "How often do you exercise?",
              "audio_id": "audio_module_3_lesson_2_opening_line_3"
            },
            {
              "speaker": "Priya",
              "en": "I always exercise in the morning. I never skip it.",
              "audio_id": "audio_module_3_lesson_2_opening_line_4"
            }
          ],
          "full_audio_id": "audio_module_3_lesson_2_opening_full_1"
        },
        "translation": {
          "type": "summary",
          "text": "Priya geralmente acorda às seis horas e trabalha de segunda a sexta. Ela sempre se exercita de manhã e nunca deixa de fazer isso."
        }
      },
      "understand": [
        {
          "title": "Presente simples (rotina)",
          "intro": "Para falar de hábitos e rotina, use o verbo no presente simples. Com he, she, it, o verbo ganha -s.",
          "table": {
            "columns": [
              "Pessoa",
              "Forma do verbo",
              "Exemplo"
            ],
            "rows": [
              [
                "I / you / we / they",
                "forma base",
                "I work. / They study."
              ],
              [
                "he / she / it",
                "forma base + s",
                "She works. / He studies."
              ]
            ]
          },
          "note": "Negativa e pergunta usam do/does, que você já viu na Lição 5 — agora para uso produtivo, não só reconhecimento: I don't work on Sundays. / She doesn't work on Sundays. / Do you work on Sundays? Does she work on Sundays?",
          "atencao": {
            "title": "verbos terminados em consoante + y",
            "text": "Verbos como study mudam o y para i antes do -es: studies. Verbos como play não mudam: plays."
          }
        },
        {
          "title": "Advérbios de frequência",
          "table": {
            "columns": [
              "Advérbio",
              "Frequência",
              "Exemplo"
            ],
            "rows": [
              [
                "always",
                "sempre",
                "I always wake up early."
              ],
              [
                "usually",
                "geralmente",
                "She usually studies at night."
              ],
              [
                "sometimes",
                "às vezes",
                "We sometimes work on Saturdays."
              ],
              [
                "rarely",
                "raramente",
                "He rarely watches TV."
              ],
              [
                "never",
                "nunca",
                "I never skip breakfast."
              ]
            ]
          },
          "dica": "o advérbio de frequência vem antes do verbo principal (I always wake up), mas depois do verbo to be (I am always tired).",
          "note": "Para perguntar a frequência: How often do you exercise? — Com que frequência você se exercita? / I exercise three times a week."
        }
      ],
      "words_to_use": [
        {
          "word": "wake up",
          "example": "I wake up at six.",
          "audio_id": "audio_module_3_lesson_2_word_example_1"
        },
        {
          "word": "work / study",
          "example": "She works from home.",
          "audio_id": "audio_module_3_lesson_2_word_example_2"
        },
        {
          "word": "exercise",
          "example": "He exercises every day.",
          "audio_id": "audio_module_3_lesson_2_word_example_3"
        },
        {
          "word": "have breakfast/lunch/dinner",
          "example": "We have dinner at seven.",
          "audio_id": "audio_module_3_lesson_2_word_example_4"
        },
        {
          "word": "go to bed",
          "example": "I go to bed at eleven.",
          "audio_id": "audio_module_3_lesson_2_word_example_5"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Rotina de trabalho",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "What time do you start work?",
                "audio_id": "audio_module_3_lesson_2_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "I usually start at nine. I never start late.",
                "audio_id": "audio_module_3_lesson_2_seeitworking_1_line_2"
              }
            ],
            "full_audio_id": "audio_module_3_lesson_2_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Pergunta sobre hábito",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "How often do you cook?",
                "audio_id": "audio_module_3_lesson_2_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "I sometimes cook. My partner usually cooks.",
                "audio_id": "audio_module_3_lesson_2_seeitworking_2_line_2"
              }
            ],
            "full_audio_id": "audio_module_3_lesson_2_seeitworking_2_full_1"
          }
        },
        {
          "title": "Situação 3 — Fim de semana",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Do you work on weekends?",
                "audio_id": "audio_module_3_lesson_2_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "No, I don't. I rarely work on Saturdays or Sundays.",
                "audio_id": "audio_module_3_lesson_2_seeitworking_3_line_2"
              }
            ],
            "full_audio_id": "audio_module_3_lesson_2_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_3_lesson_2_practice_1",
          "title": "Complete com o verbo certo",
          "type": "completar",
          "items": [
            {
              "prompt": "I ___ (wake up) at seven.",
              "answer": "wake up"
            },
            {
              "prompt": "She ___ (study) every night.",
              "answer": "studies"
            },
            {
              "prompt": "They ___ (work) from home.",
              "answer": "work"
            },
            {
              "prompt": "He ___ (exercise) on Sundays.",
              "answer": "exercises"
            }
          ],
          "gabarito_note": "Repare que só \"she\" e \"he\" ganham -s (studies, exercises) — \"I\" e \"they\" ficam na forma base."
        },
        {
          "id": "module_3_lesson_2_practice_2",
          "title": "Transforme em negativa e pergunta",
          "type": "transformar",
          "items": [
            {
              "prompt": "I work on Sundays.",
              "transform": "Negativa",
              "answer": "I don't work on Sundays."
            },
            {
              "prompt": "She studies at night.",
              "transform": "Pergunta",
              "answer": "Does she study at night?"
            },
            {
              "prompt": "They exercise every day.",
              "transform": "Negativa",
              "answer": "They don't exercise every day."
            }
          ]
        },
        {
          "id": "module_3_lesson_2_practice_3",
          "title": "Ordene as palavras",
          "type": "ordenar",
          "note": "corrigido — reformulado como ordenar, para não repetir o tipo \"transformar\" da atividade 2, QA",
          "instruction": "Coloque as palavras embaralhadas na ordem certa, formando uma frase com o advérbio na posição correta.",
          "items": [
            {
              "shuffled": "early / I / wake up / always",
              "answer": "I always wake up early."
            },
            {
              "shuffled": "usually / is / she / tired",
              "answer": "She is usually tired."
            },
            {
              "shuffled": "never / work / we / on Saturdays",
              "answer": "We never work on Saturdays."
            }
          ]
        },
        {
          "id": "module_3_lesson_2_practice_4",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "O advérbio de frequência vem sempre depois do verbo principal.",
              "answer": false,
              "feedback": "F. O advérbio vem antes do verbo principal (depois do to be)."
            },
            {
              "statement": "Com he/she/it, o verbo no presente simples ganha -s.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"How often\" pergunta sobre frequência.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"Study\" no presente simples com \"she\" vira \"studys\".",
              "answer": false,
              "feedback": "F. A forma correta é \"studies\", não \"studys\"."
            }
          ]
        }
      ],
      "your_turn": {
        "id": "module_3_lesson_2_production",
        "type": "producao_livre",
        "instruction": "Descreva sua rotina em três frases, usando pelo menos um advérbio de frequência.",
        "template": [
          "I usually __________.",
          "I sometimes __________.",
          "I never __________."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Complete o verbo",
          "detail": "presente simples em seis frases",
          "skill": "escrita"
        },
        {
          "label": "Transforme",
          "detail": "negativas e perguntas com do/does",
          "skill": "escrita"
        },
        {
          "label": "Ouça a rotina",
          "detail": "identificar a frequência mencionada em um áudio",
          "skill": "escuta"
        },
        {
          "label": "Minha rotina",
          "detail": "gravar ou digitar três frases sobre a própria rotina",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_3_lesson_2_review",
        "recycles": [
          "module_2_lesson_2"
        ],
        "instruction": "Antes de praticar rotina, reveja do/does (Lição 5) transformando em pergunta:",
        "template": "She works on Mondays. → Pergunta: ___ she work on Mondays?",
        "possible_answer": "Does"
      },
      "check_progress": {
        "can_do": [
          "descrever sua rotina no presente simples",
          "usar advérbios de frequência na posição correta",
          "perguntar e responder \"How often...?\""
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Estruturas essenciais → Presente simples e frequência"
    },
    {
      "id": "module_3_lesson_3",
      "label": "Lição 9: Hobbies, convites e habilidades",
      "order": 3,
      "can_do": [
        "falar sobre suas habilidades usando can/can't",
        "convidar alguém para fazer algo",
        "aceitar ou recusar um convite de forma educada"
      ],
      "opening": {
        "instruction": null,
        "dialogue": {
          "lines": [
            {
              "speaker": "Leo",
              "en": "Would you like to go swimming on Saturday?",
              "audio_id": "audio_module_3_lesson_3_opening_line_1"
            },
            {
              "speaker": "Mia",
              "en": "I'd love to! I can swim really well.",
              "audio_id": "audio_module_3_lesson_3_opening_line_2"
            },
            {
              "speaker": "Leo",
              "en": "Great! Can you also play volleyball?",
              "audio_id": "audio_module_3_lesson_3_opening_line_3"
            },
            {
              "speaker": "Mia",
              "en": "No, I can't. I'm not good at that.",
              "audio_id": "audio_module_3_lesson_3_opening_line_4"
            }
          ],
          "full_audio_id": "audio_module_3_lesson_3_opening_full_1"
        },
        "translation": {
          "type": "summary",
          "text": "Leo convida Mia para nadar no sábado. Mia adoraria — ela sabe nadar bem. Mas ela não sabe jogar vôlei."
        }
      },
      "understand": [
        {
          "title": "Can e can't (habilidade)",
          "intro": "Can indica que você é capaz de fazer algo; can't indica que não é.",
          "table": {
            "columns": [
              "Frase",
              "Sentido"
            ],
            "rows": [
              [
                "I can swim.",
                "Eu sei nadar."
              ],
              [
                "I can't cook.",
                "Eu não sei cozinhar."
              ],
              [
                "She can play the guitar.",
                "Ela sabe tocar violão."
              ],
              [
                "Can you dance?",
                "Você sabe dançar?"
              ]
            ]
          },
          "atencao": {
            "title": "can e can't parecem escritos de forma parecida",
            "text": "Na fala, can é rápido e sem ênfase; can't é mais forte e claro, com o som de \"t\" no final. Quando ouvir no English Tool, preste atenção na duração da palavra, não só na primeira letra."
          }
        },
        {
          "title": "Convites",
          "table": {
            "columns": [
              "Expressão",
              "Uso"
            ],
            "rows": [
              [
                "Would you like to...?",
                "Convite educado"
              ],
              [
                "I'd love to!",
                "Aceitar com entusiasmo"
              ],
              [
                "Sure!",
                "Aceitar de forma simples"
              ],
              [
                "Sorry, I can't. I have to...",
                "Recusar explicando o motivo"
              ]
            ]
          },
          "dica": "recusar um convite não precisa ser desconfortável — \"Sorry, I can't\" seguido de um motivo curto já é suficiente e soa natural."
        }
      ],
      "words_to_use": [
        {
          "word": "swim",
          "example": "I can swim.",
          "audio_id": "audio_module_3_lesson_3_word_example_1"
        },
        {
          "word": "dance",
          "example": "Can you dance?",
          "audio_id": "audio_module_3_lesson_3_word_example_2"
        },
        {
          "word": "cook",
          "example": "She can't cook.",
          "audio_id": "audio_module_3_lesson_3_word_example_3"
        },
        {
          "word": "paint",
          "example": "He can paint really well.",
          "audio_id": "audio_module_3_lesson_3_word_example_4"
        },
        {
          "word": "play an instrument",
          "example": "They can play the guitar.",
          "audio_id": "audio_module_3_lesson_3_word_example_5"
        }
      ],
      "see_it_working": [
        {
          "title": "Situação 1 — Convite para o cinema",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Would you like to watch a movie tonight?",
                "audio_id": "audio_module_3_lesson_3_seeitworking_1_line_1"
              },
              {
                "speaker": "B",
                "en": "Sure! What time?",
                "audio_id": "audio_module_3_lesson_3_seeitworking_1_line_2"
              }
            ],
            "full_audio_id": "audio_module_3_lesson_3_seeitworking_1_full_1"
          }
        },
        {
          "title": "Situação 2 — Recusando um convite",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Would you like to go running tomorrow?",
                "audio_id": "audio_module_3_lesson_3_seeitworking_2_line_1"
              },
              {
                "speaker": "B",
                "en": "Sorry, I can't. I have to work.",
                "audio_id": "audio_module_3_lesson_3_seeitworking_2_line_2"
              }
            ],
            "full_audio_id": "audio_module_3_lesson_3_seeitworking_2_full_1"
          }
        },
        {
          "title": "Situação 3 — Falando de habilidades",
          "dialogue": {
            "lines": [
              {
                "speaker": "A",
                "en": "Can you play any instrument?",
                "audio_id": "audio_module_3_lesson_3_seeitworking_3_line_1"
              },
              {
                "speaker": "B",
                "en": "Yes, I can play the piano. Can you?",
                "audio_id": "audio_module_3_lesson_3_seeitworking_3_line_2"
              },
              {
                "speaker": "A",
                "en": "No, I can't, but I can paint.",
                "audio_id": "audio_module_3_lesson_3_seeitworking_3_line_3"
              }
            ],
            "full_audio_id": "audio_module_3_lesson_3_seeitworking_3_full_1"
          }
        }
      ],
      "guided_practice": [
        {
          "id": "module_3_lesson_3_practice_1",
          "title": "Complete com can ou can't",
          "type": "completar",
          "items": [
            {
              "prompt": "I ___ swim, but I ___ dance. (sei nadar, não sei dançar)",
              "answer": "can, can't"
            },
            {
              "prompt": "She ___ play the guitar.",
              "answer": "can"
            },
            {
              "prompt": "___ you cook?",
              "answer": "Can"
            },
            {
              "prompt": "He ___ paint, but he ___ sing.",
              "answer": "can, can't"
            }
          ]
        },
        {
          "id": "module_3_lesson_3_practice_2",
          "title": "Escolha a resposta adequada",
          "type": "escolha_por_contexto",
          "items": [
            {
              "prompt": "\"Would you like to go swimming?\" Você aceita com entusiasmo.",
              "options": [
                "Sorry, I can't.",
                "I'd love to!",
                "How are you?"
              ],
              "answer": 1
            },
            {
              "prompt": "\"Would you like to have dinner tonight?\" Você não pode.",
              "options": [
                "Sure!",
                "Sorry, I can't. I have to study.",
                "I can swim."
              ],
              "answer": 1
            }
          ]
        },
        {
          "id": "module_3_lesson_3_practice_3",
          "title": "Verdadeiro ou falso",
          "type": "verdadeiro_falso",
          "items": [
            {
              "statement": "\"Can\" indica habilidade.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"I'd love to!\" é uma forma de recusar um convite.",
              "answer": false,
              "feedback": "F. \"I'd love to!\" é uma forma de aceitar, não recusar."
            },
            {
              "statement": "\"Sorry, I can't\" pode vir acompanhado de um motivo.",
              "answer": true,
              "feedback": "V."
            },
            {
              "statement": "\"Would you like to...?\" é uma forma de convidar alguém.",
              "answer": true,
              "feedback": "V."
            }
          ]
        },
        {
          "id": "module_3_lesson_3_practice_4",
          "title": "Una as informações",
          "type": "una_as_informacoes",
          "items": [
            {
              "prompt": "Marcos / swim / not cook",
              "answer": "Marcos can swim, but he can't cook."
            },
            {
              "prompt": "Ana / dance / paint",
              "answer": "Ana can dance and paint."
            }
          ]
        }
      ],
      "your_turn": {
        "id": "module_3_lesson_3_production",
        "type": "producao_livre",
        "instruction": "Escreva sobre duas coisas que você sabe fazer e uma que não sabe.",
        "template": [
          "I can __________.",
          "I can __________.",
          "I can't __________."
        ],
        "criterion": "tentativa_registrada"
      },
      "in_app": [
        {
          "label": "Can ou can't",
          "detail": "completar quatro frases",
          "skill": "escrita"
        },
        {
          "label": "Responda ao convite",
          "detail": "escolher a reação adequada",
          "skill": "leitura"
        },
        {
          "label": "Ouça a habilidade",
          "detail": "identificar o que a pessoa sabe fazer",
          "skill": "escuta"
        },
        {
          "label": "Minhas habilidades",
          "detail": "gravar ou digitar frases próprias",
          "skill": "produção"
        }
      ],
      "review": {
        "id": "module_3_lesson_3_review",
        "recycles": [
          "module_2_lesson_3"
        ],
        "instruction": "Complete reciclando like/love (Lição 6) antes de falar de habilidade:",
        "template": "I ___ (love) cooking, and I ___ (can) cook really well.",
        "possible_answer": "love, can"
      },
      "check_progress": {
        "can_do": [
          "falar sobre habilidades usando can/can't",
          "convidar alguém para fazer algo",
          "aceitar ou recusar um convite de forma educada"
        ],
        "criterion": "obter pelo menos 75% nas atividades essenciais"
      },
      "if_stuck": "Apoio → Estruturas essenciais → Can, can't e convites"
    }
  ],
  "checkpoint": {
    "id": "module_3_checkpoint",
    "label": "Checkpoint 3: Rotina e planos",
    "instruction": "O checkpoint verifica se você consegue usar as três lições do Módulo 3 em conjunto — e também reaplica um ponto de um checkpoint anterior. Faça sem consultar o gabarito. Depois, corrija e repita somente o que errou.",
    "parts": [
      {
        "id": "module_3_checkpoint_part_a",
        "label": "Parte A — Complete a conversa",
        "type": "completar",
        "word_bank": [
          "What time",
          "usually",
          "How often",
          "Would you like to",
          "I'd love to",
          "can't"
        ],
        "dialogue": {
          "lines": [
            {
              "speaker": "Ravi",
              "en": "__________ do you wake up?",
              "audio_id": "audio_module_3_checkpoint_part_a_line_1"
            },
            {
              "speaker": "Sara",
              "en": "I __________ wake up at six.",
              "audio_id": "audio_module_3_checkpoint_part_a_line_2"
            },
            {
              "speaker": "Ravi",
              "en": "__________ do you exercise?",
              "audio_id": "audio_module_3_checkpoint_part_a_line_3"
            },
            {
              "speaker": "Sara",
              "en": "Every day. __________ go running with me tomorrow?",
              "audio_id": "audio_module_3_checkpoint_part_a_line_4"
            },
            {
              "speaker": "Ravi",
              "en": "__________! What time?",
              "audio_id": "audio_module_3_checkpoint_part_a_line_5"
            },
            {
              "speaker": "Sara",
              "en": "Sorry, I __________ run at six — I have class. How about seven?",
              "audio_id": "audio_module_3_checkpoint_part_a_line_6"
            }
          ],
          "full_audio_id": "audio_module_3_checkpoint_part_a_full_1"
        },
        "answer": [
          "What time do you wake up?",
          "I usually wake up at six.",
          "How often do you exercise?",
          "Every day. Would you like to go running with me tomorrow?",
          "I'd love to! What time?",
          "Sorry, I can't run at six — I have class. How about seven?"
        ]
      },
      {
        "id": "module_3_checkpoint_part_b",
        "label": "Parte B — Encontre e corrija o erro",
        "type": "encontre_o_erro",
        "items": [
          {
            "prompt": "She work on Mondays.",
            "note": "presente simples, 3ª pessoa",
            "answer": "She works on Mondays."
          },
          {
            "prompt": "I always am tired in the morning.",
            "note": "posição do advérbio com to be",
            "answer": "I am always tired in the morning."
          },
          {
            "prompt": "My class is at Monday.",
            "note": "preposição errada para dia",
            "answer": "My class is on Monday."
          },
          {
            "prompt": "What your name?",
            "note": "reaplicado do Checkpoint 2 — pergunta com to be",
            "answer": "What's your name?"
          },
          {
            "prompt": "Can you to swim?",
            "note": "estrutura de can",
            "answer": "Can you swim?"
          },
          {
            "prompt": "I no can dance.",
            "note": "ordem de can't",
            "answer": "I can't dance."
          }
        ]
      },
      {
        "id": "module_3_checkpoint_part_c",
        "label": "Parte C — Produção final",
        "type": "producao_livre",
        "instruction": "Escreva ou grave uma conversa combinando um plano com outra pessoa. A conversa deve conter:",
        "requirements": [
          "um horário e um dia usando at/on/in",
          "uma pergunta sobre rotina ou frequência",
          "um convite (\"Would you like to...?\")",
          "uma resposta de aceite ou recusa educada",
          "pelo menos uma frase sobre habilidade com can/can't"
        ],
        "criterion": "tentativa_registrada"
      }
    ],
    "completion_criterion": {
      "objective_items_total": 12,
      "objective_items_required": 9,
      "text": "acertar pelo menos 9 dos 12 itens objetivos do checkpoint (6 da Parte A + 6 da Parte B); concluir a produção final com os cinco elementos solicitados; refazer os itens essenciais registrados na revisão, incluindo o item reaplicado do Checkpoint 2 (Parte B, item 4).",
      "non_blocking_note": "Se ainda não alcançar o critério, o módulo não será apagado nem reiniciado. O English Tool mostrará quais lições revisar e oferecerá uma nova tentativa apenas com os pontos necessários."
    }
  },
  "source": "ENGLISH-TOOL-MODULO-3-RECONSTRUIDO.md",
  "notes": [
    "Nenhuma referência a Entrevistas ou a qualquer conteúdo pessoal da Amanda (verificado na fonte)."
  ]
};

export const PART_1_OPEN_MODULES = [MODULE_1, MODULE_2, MODULE_3];

export const PART_1_OPEN_AUDIO = [
  {
    "id": "audio_module_1_lesson_1_opening_line_1",
    "lesson_id": "module_1_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Good morning! How are you?"
  },
  {
    "id": "audio_module_1_lesson_1_opening_line_slow_1",
    "lesson_id": "module_1_lesson_1",
    "type": "opening_line_slow",
    "language": "en-US",
    "rate": 0.72,
    "text": "Good morning! How are you?"
  },
  {
    "id": "audio_module_1_lesson_1_opening_line_2",
    "lesson_id": "module_1_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hi, Lucas! I'm good, thanks. And you?"
  },
  {
    "id": "audio_module_1_lesson_1_opening_line_slow_2",
    "lesson_id": "module_1_lesson_1",
    "type": "opening_line_slow",
    "language": "en-US",
    "rate": 0.72,
    "text": "Hi, Lucas! I'm good, thanks. And you?"
  },
  {
    "id": "audio_module_1_lesson_1_opening_line_3",
    "lesson_id": "module_1_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm fine. See you later!"
  },
  {
    "id": "audio_module_1_lesson_1_opening_line_slow_3",
    "lesson_id": "module_1_lesson_1",
    "type": "opening_line_slow",
    "language": "en-US",
    "rate": 0.72,
    "text": "I'm fine. See you later!"
  },
  {
    "id": "audio_module_1_lesson_1_opening_line_4",
    "lesson_id": "module_1_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "See you!"
  },
  {
    "id": "audio_module_1_lesson_1_opening_line_slow_4",
    "lesson_id": "module_1_lesson_1",
    "type": "opening_line_slow",
    "language": "en-US",
    "rate": 0.72,
    "text": "See you!"
  },
  {
    "id": "audio_module_1_lesson_1_opening_full_1",
    "lesson_id": "module_1_lesson_1",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "Good morning! How are you? Hi, Lucas! I'm good, thanks. And you? I'm fine. See you later! See you!"
  },
  {
    "id": "audio_module_1_lesson_1_model_1",
    "lesson_id": "module_1_lesson_1",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "How are you?"
  },
  {
    "id": "audio_module_1_lesson_1_model_2",
    "lesson_id": "module_1_lesson_1",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "I'm good, thanks. And you?"
  },
  {
    "id": "audio_module_1_lesson_1_word_example_1",
    "lesson_id": "module_1_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Good morning! / Good afternoon! / Good evening!"
  },
  {
    "id": "audio_module_1_lesson_1_word_example_2",
    "lesson_id": "module_1_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "How are you today?"
  },
  {
    "id": "audio_module_1_lesson_1_word_example_3",
    "lesson_id": "module_1_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I'm fine, thanks."
  },
  {
    "id": "audio_module_1_lesson_1_word_example_4",
    "lesson_id": "module_1_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Thanks! I'm good."
  },
  {
    "id": "audio_module_1_lesson_1_word_example_5",
    "lesson_id": "module_1_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "See you later!"
  },
  {
    "id": "audio_module_1_lesson_1_word_example_6",
    "lesson_id": "module_1_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "See you tomorrow!"
  },
  {
    "id": "audio_module_1_lesson_1_word_example_7",
    "lesson_id": "module_1_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Welcome! Good evening."
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_1_line_1",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! How are you?"
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_1_line_2",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm fine, thanks. And you?"
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_1_line_3",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm good. See you later!"
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_1_line_4",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "See you!"
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_1_full_1",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! How are you? I'm fine, thanks. And you? I'm good. See you later! See you!"
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_2_line_1",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Good afternoon. How are you?"
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_2_line_2",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm fine, thank you."
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_2_line_3",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Have a good day."
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_2_line_4",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "You too."
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_2_full_1",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "Good afternoon. How are you? I'm fine, thank you. Have a good day. You too."
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_3_line_1",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Good evening!"
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_3_line_2",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hello! How are you?"
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_3_line_3",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm tired, but I'm okay."
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_3_line_4",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Good night. See you tomorrow!"
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_3_line_5",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "See you!"
  },
  {
    "id": "audio_module_1_lesson_1_seeitworking_3_full_1",
    "lesson_id": "module_1_lesson_1",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "Good evening! Hello! How are you? I'm tired, but I'm okay. Good night. See you tomorrow! See you!"
  },
  {
    "id": "audio_module_1_lesson_2_opening_line_1",
    "lesson_id": "module_1_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! I'm Amina. I'm 16 years old. I'm from Brazil."
  },
  {
    "id": "audio_module_1_lesson_2_opening_line_slow_1",
    "lesson_id": "module_1_lesson_2",
    "type": "opening_line_slow",
    "language": "en-US",
    "rate": 0.72,
    "text": "Hi! I'm Amina. I'm 16 years old. I'm from Brazil."
  },
  {
    "id": "audio_module_1_lesson_2_opening_line_2",
    "lesson_id": "module_1_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Nice to meet you, Amina. I'm Noah. I'm a student."
  },
  {
    "id": "audio_module_1_lesson_2_opening_line_slow_2",
    "lesson_id": "module_1_lesson_2",
    "type": "opening_line_slow",
    "language": "en-US",
    "rate": 0.72,
    "text": "Nice to meet you, Amina. I'm Noah. I'm a student."
  },
  {
    "id": "audio_module_1_lesson_2_opening_line_3",
    "lesson_id": "module_1_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Are you from Brazil too?"
  },
  {
    "id": "audio_module_1_lesson_2_opening_line_4",
    "lesson_id": "module_1_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "No, I'm not. I'm from Canada."
  },
  {
    "id": "audio_module_1_lesson_2_opening_full_1",
    "lesson_id": "module_1_lesson_2",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! I'm Amina. I'm 16 years old. I'm from Brazil. Nice to meet you, Amina. I'm Noah. I'm a student. Are you from Brazil too? No, I'm not. I'm from Canada."
  },
  {
    "id": "audio_module_1_lesson_2_model_1",
    "lesson_id": "module_1_lesson_2",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "I am Lucas. = I'm Lucas."
  },
  {
    "id": "audio_module_1_lesson_2_model_2",
    "lesson_id": "module_1_lesson_2",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "She is a student. = She's a student."
  },
  {
    "id": "audio_module_1_lesson_2_word_example_1",
    "lesson_id": "module_1_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I'm a student."
  },
  {
    "id": "audio_module_1_lesson_2_word_example_2",
    "lesson_id": "module_1_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "She's a teacher."
  },
  {
    "id": "audio_module_1_lesson_2_word_example_3",
    "lesson_id": "module_1_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "He's a designer."
  },
  {
    "id": "audio_module_1_lesson_2_word_example_4",
    "lesson_id": "module_1_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I'm an assistant."
  },
  {
    "id": "audio_module_1_lesson_2_word_example_5",
    "lesson_id": "module_1_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "We're from Brazil."
  },
  {
    "id": "audio_module_1_lesson_2_word_example_6",
    "lesson_id": "module_1_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I'm 18 years old."
  },
  {
    "id": "audio_module_1_lesson_2_word_example_7",
    "lesson_id": "module_1_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Nice to meet you, Kai."
  },
  {
    "id": "audio_module_1_lesson_2_model_3",
    "lesson_id": "module_1_lesson_2",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! I'm Joana. I'm 19 years old. I'm from Vitória de Santo Antão. I'm a student. Nice to meet you!"
  },
  {
    "id": "audio_module_1_lesson_2_model_4",
    "lesson_id": "module_1_lesson_2",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "Hello! I'm Ravi. I'm 18 years old. I'm from India, but I'm in Brazil now. I'm a student. My friend is Clara. She's 19 and she's from Brazil."
  },
  {
    "id": "audio_module_1_lesson_3_opening_line_1",
    "lesson_id": "module_1_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "This is my friend Sam. They're from South Africa."
  },
  {
    "id": "audio_module_1_lesson_3_opening_line_2",
    "lesson_id": "module_1_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! Nice to meet you."
  },
  {
    "id": "audio_module_1_lesson_3_opening_line_3",
    "lesson_id": "module_1_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Nice to meet you too. Are you a student?"
  },
  {
    "id": "audio_module_1_lesson_3_opening_line_4",
    "lesson_id": "module_1_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, I am. I'm a music student."
  },
  {
    "id": "audio_module_1_lesson_3_opening_full_1",
    "lesson_id": "module_1_lesson_3",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "This is my friend Sam. They're from South Africa. Hi! Nice to meet you. Nice to meet you too. Are you a student? Yes, I am. I'm a music student."
  },
  {
    "id": "audio_module_1_lesson_3_model_1",
    "lesson_id": "module_1_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "He is from Brazil."
  },
  {
    "id": "audio_module_1_lesson_3_model_2",
    "lesson_id": "module_1_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "She is a designer."
  },
  {
    "id": "audio_module_1_lesson_3_model_3",
    "lesson_id": "module_1_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "They are my friend Alex."
  },
  {
    "id": "audio_module_1_lesson_3_word_example_1",
    "lesson_id": "module_1_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "This is my friend Leo."
  },
  {
    "id": "audio_module_1_lesson_3_word_example_2",
    "lesson_id": "module_1_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "She is my classmate."
  },
  {
    "id": "audio_module_1_lesson_3_word_example_3",
    "lesson_id": "module_1_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "He is my coworker."
  },
  {
    "id": "audio_module_1_lesson_3_word_example_4",
    "lesson_id": "module_1_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "She is my sister."
  },
  {
    "id": "audio_module_1_lesson_3_word_example_5",
    "lesson_id": "module_1_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "He is my brother."
  },
  {
    "id": "audio_module_1_lesson_3_word_example_6",
    "lesson_id": "module_1_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "They are my cousin."
  },
  {
    "id": "audio_module_1_lesson_3_word_example_7",
    "lesson_id": "module_1_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "This is my teacher."
  },
  {
    "id": "audio_module_1_lesson_3_model_4",
    "lesson_id": "module_1_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "This is my sister, Beatriz. She is 22 years old. She is a designer. She is creative and friendly."
  },
  {
    "id": "audio_module_1_lesson_3_model_5",
    "lesson_id": "module_1_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "This is my classmate, Daniel. He is from Recife. He is a student. He is quiet and kind."
  },
  {
    "id": "audio_module_1_lesson_3_model_6",
    "lesson_id": "module_1_lesson_3",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "This is Alex. They are my coworker. They are from Brazil. They are patient and funny."
  },
  {
    "id": "audio_module_1_lesson_3_practice3_line_1",
    "lesson_id": "module_1_lesson_3",
    "type": "practice3_line",
    "language": "en-US",
    "rate": 1,
    "text": "__________ my friend, Caio. He __________ from Brazil."
  },
  {
    "id": "audio_module_1_lesson_3_practice3_line_2",
    "lesson_id": "module_1_lesson_3",
    "type": "practice3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! __________."
  },
  {
    "id": "audio_module_1_lesson_3_practice3_line_3",
    "lesson_id": "module_1_lesson_3",
    "type": "practice3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Nice to meet you too. __________ you a student?"
  },
  {
    "id": "audio_module_1_lesson_3_practice3_line_4",
    "lesson_id": "module_1_lesson_3",
    "type": "practice3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, I __________."
  },
  {
    "id": "audio_module_1_lesson_3_practice3_full_1",
    "lesson_id": "module_1_lesson_3",
    "type": "practice3_full",
    "language": "en-US",
    "rate": 1,
    "text": "__________ my friend, Caio. He __________ from Brazil. Hi! __________. Nice to meet you too. __________ you a student? Yes, I __________."
  },
  {
    "id": "audio_module_1_checkpoint_part_a_line_1",
    "lesson_id": "module_1_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "__________, Ravi!"
  },
  {
    "id": "audio_module_1_checkpoint_part_a_line_2",
    "lesson_id": "module_1_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "Good morning, Bia! __________?"
  },
  {
    "id": "audio_module_1_checkpoint_part_a_line_3",
    "lesson_id": "module_1_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "__________, thanks. __________ my friend, Luana."
  },
  {
    "id": "audio_module_1_checkpoint_part_a_line_4",
    "lesson_id": "module_1_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! __________."
  },
  {
    "id": "audio_module_1_checkpoint_part_a_line_5",
    "lesson_id": "module_1_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "Nice to meet you too. __________!"
  },
  {
    "id": "audio_module_1_checkpoint_part_a_line_6",
    "lesson_id": "module_1_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "See you!"
  },
  {
    "id": "audio_module_1_checkpoint_part_a_full_1",
    "lesson_id": "module_1_checkpoint",
    "type": "part_a_full",
    "language": "en-US",
    "rate": 1,
    "text": "__________, Ravi! Good morning, Bia! __________? __________, thanks. __________ my friend, Luana. Hi! __________. Nice to meet you too. __________! See you!"
  },
  {
    "id": "audio_module_2_lesson_1_opening_line_1",
    "lesson_id": "module_2_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Good afternoon! What's your name, please?"
  },
  {
    "id": "audio_module_2_lesson_1_opening_line_2",
    "lesson_id": "module_2_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "My name is Yuki. Y-U-K-I."
  },
  {
    "id": "audio_module_2_lesson_1_opening_line_slow_1",
    "lesson_id": "module_2_lesson_1",
    "type": "opening_line_slow",
    "language": "en-US",
    "rate": 0.72,
    "text": "My name is Yuki. Y-U-K-I."
  },
  {
    "id": "audio_module_2_lesson_1_opening_line_3",
    "lesson_id": "module_2_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Thank you. And your phone number?"
  },
  {
    "id": "audio_module_2_lesson_1_opening_line_4",
    "lesson_id": "module_2_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's zero one one, nine eight seven six five, four three two one."
  },
  {
    "id": "audio_module_2_lesson_1_opening_line_slow_2",
    "lesson_id": "module_2_lesson_1",
    "type": "opening_line_slow",
    "language": "en-US",
    "rate": 0.72,
    "text": "It's zero one one, nine eight seven six five, four three two one."
  },
  {
    "id": "audio_module_2_lesson_1_opening_line_5",
    "lesson_id": "module_2_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Perfect. What's your email?"
  },
  {
    "id": "audio_module_2_lesson_1_opening_line_6",
    "lesson_id": "module_2_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's yuki dot silva at email dot com."
  },
  {
    "id": "audio_module_2_lesson_1_opening_line_slow_3",
    "lesson_id": "module_2_lesson_1",
    "type": "opening_line_slow",
    "language": "en-US",
    "rate": 0.72,
    "text": "It's yuki dot silva at email dot com."
  },
  {
    "id": "audio_module_2_lesson_1_opening_full_1",
    "lesson_id": "module_2_lesson_1",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "Good afternoon! What's your name, please? My name is Yuki. Y-U-K-I. Thank you. And your phone number? It's zero one one, nine eight seven six five, four three two one. Perfect. What's your email? It's yuki dot silva at email dot com."
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_1",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "A"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_2",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "B"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_3",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "C"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_4",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "D"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_5",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "E"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_6",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "F"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_7",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "G"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_8",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "H"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_9",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "I"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_10",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "J"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_11",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "K"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_12",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "L"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_13",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "M"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_14",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "N"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_15",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "O"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_16",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "P"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_17",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "Q"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_18",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "R"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_19",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "S"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_20",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "T"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_21",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "U"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_22",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "V"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_23",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "W"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_24",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "X"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_25",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "Y"
  },
  {
    "id": "audio_module_2_lesson_1_alphabet_letter_26",
    "lesson_id": "module_2_lesson_1",
    "type": "alphabet_letter",
    "language": "en-US",
    "rate": 1,
    "text": "Z"
  },
  {
    "id": "audio_module_2_lesson_1_model_1",
    "lesson_id": "module_2_lesson_1",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "My name is Marcos. M-A-R-C-O-S."
  },
  {
    "id": "audio_module_2_lesson_1_model_2",
    "lesson_id": "module_2_lesson_1",
    "type": "model",
    "language": "en-US",
    "rate": 1,
    "text": "Can you spell that, please?"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_1",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "zero"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_2",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "oh"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_3",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "one"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_4",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "two"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_5",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "three"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_6",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "four"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_7",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "five"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_8",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "six"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_9",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "seven"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_10",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "eight"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_11",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "nine"
  },
  {
    "id": "audio_module_2_lesson_1_number_word_12",
    "lesson_id": "module_2_lesson_1",
    "type": "number_word",
    "language": "en-US",
    "rate": 1,
    "text": "ten"
  },
  {
    "id": "audio_module_2_lesson_1_word_example_1",
    "lesson_id": "module_2_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "What's your name?"
  },
  {
    "id": "audio_module_2_lesson_1_word_example_2",
    "lesson_id": "module_2_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Can you spell that?"
  },
  {
    "id": "audio_module_2_lesson_1_word_example_3",
    "lesson_id": "module_2_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "What's your phone number?"
  },
  {
    "id": "audio_module_2_lesson_1_word_example_4",
    "lesson_id": "module_2_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "What's your email?"
  },
  {
    "id": "audio_module_2_lesson_1_word_example_5",
    "lesson_id": "module_2_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "What's your address?"
  },
  {
    "id": "audio_module_2_lesson_1_word_example_6",
    "lesson_id": "module_2_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "What's your zip code?"
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_1_line_1",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! Can I have your name, please?"
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_1_line_2",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Sure. It's Théo. T-H-É-O."
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_1_line_3",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "And your phone number?"
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_1_line_4",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's zero two one, nine five five five, one two three four."
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_1_full_1",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! Can I have your name, please? Sure. It's Théo. T-H-É-O. And your phone number? It's zero two one, nine five five five, one two three four."
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_2_line_1",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hello, this is the English Tool support line. What's your name?"
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_2_line_2",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "My name is Renata. R-E-N-A-T-A."
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_2_line_3",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Thank you, Renata. What's your email?"
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_2_line_4",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's renata dot lima at email dot com."
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_2_full_1",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "Hello, this is the English Tool support line. What's your name? My name is Renata. R-E-N-A-T-A. Thank you, Renata. What's your email? It's renata dot lima at email dot com."
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_3_line_1",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! What's your zip code, please?"
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_3_line_2",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's zero one three one zero, one zero zero."
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_3_line_3",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Perfect. And your phone number, in case we need to call?"
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_3_line_4",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's zero one one, nine eight eight eight, seven seven seven six."
  },
  {
    "id": "audio_module_2_lesson_1_seeitworking_3_full_1",
    "lesson_id": "module_2_lesson_1",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! What's your zip code, please? It's zero one three one zero, one zero zero. Perfect. And your phone number, in case we need to call? It's zero one one, nine eight eight eight, seven seven seven six."
  },
  {
    "id": "audio_module_2_lesson_2_opening_line_1",
    "lesson_id": "module_2_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Where are you from, Sofia?"
  },
  {
    "id": "audio_module_2_lesson_2_opening_line_2",
    "lesson_id": "module_2_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm from Portugal. What about you?"
  },
  {
    "id": "audio_module_2_lesson_2_opening_line_3",
    "lesson_id": "module_2_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm from Brazil. What do you do?"
  },
  {
    "id": "audio_module_2_lesson_2_opening_line_4",
    "lesson_id": "module_2_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I work at a hospital. Do you work too?"
  },
  {
    "id": "audio_module_2_lesson_2_opening_line_5",
    "lesson_id": "module_2_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, I do. I work at a school."
  },
  {
    "id": "audio_module_2_lesson_2_opening_full_1",
    "lesson_id": "module_2_lesson_2",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "Where are you from, Sofia? I'm from Portugal. What about you? I'm from Brazil. What do you do? I work at a hospital. Do you work too? Yes, I do. I work at a school."
  },
  {
    "id": "audio_module_2_lesson_2_word_example_1",
    "lesson_id": "module_2_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I work at a school."
  },
  {
    "id": "audio_module_2_lesson_2_word_example_2",
    "lesson_id": "module_2_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Where do you study?"
  },
  {
    "id": "audio_module_2_lesson_2_word_example_3",
    "lesson_id": "module_2_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Where do you live?"
  },
  {
    "id": "audio_module_2_lesson_2_word_example_4",
    "lesson_id": "module_2_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Do you like coffee?"
  },
  {
    "id": "audio_module_2_lesson_2_word_example_5",
    "lesson_id": "module_2_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "When is your birthday?"
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_1_line_1",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "What do you do?"
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_1_line_2",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm a student. And you?"
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_1_line_3",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "I work at a store."
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_1_full_1",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "What do you do? I'm a student. And you? I work at a store."
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_2_line_1",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Where do you live?"
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_2_line_2",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "I live in São Paulo. Where do you live?"
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_2_line_3",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "I live in Lisbon."
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_2_full_1",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "Where do you live? I live in São Paulo. Where do you live? I live in Lisbon."
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_3_line_1",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Do you study English?"
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_3_line_2",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, I do. Do you study here too?"
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_3_line_3",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes! What's your name?"
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_3_line_4",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'm Karim. Nice to meet you."
  },
  {
    "id": "audio_module_2_lesson_2_seeitworking_3_full_1",
    "lesson_id": "module_2_lesson_2",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "Do you study English? Yes, I do. Do you study here too? Yes! What's your name? I'm Karim. Nice to meet you."
  },
  {
    "id": "audio_module_2_lesson_3_opening_line_1",
    "lesson_id": "module_2_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Do you like cooking?"
  },
  {
    "id": "audio_module_2_lesson_3_opening_line_2",
    "lesson_id": "module_2_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, I love cooking! I hate cleaning, though."
  },
  {
    "id": "audio_module_2_lesson_3_opening_line_3",
    "lesson_id": "module_2_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Me too! What about watching movies?"
  },
  {
    "id": "audio_module_2_lesson_3_opening_line_4",
    "lesson_id": "module_2_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I like watching movies. Do you like reading?"
  },
  {
    "id": "audio_module_2_lesson_3_opening_line_5",
    "lesson_id": "module_2_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Not really. I prefer playing sports."
  },
  {
    "id": "audio_module_2_lesson_3_opening_full_1",
    "lesson_id": "module_2_lesson_3",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "Do you like cooking? Yes, I love cooking! I hate cleaning, though. Me too! What about watching movies? I like watching movies. Do you like reading? Not really. I prefer playing sports."
  },
  {
    "id": "audio_module_2_lesson_3_word_example_1",
    "lesson_id": "module_2_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I love cooking."
  },
  {
    "id": "audio_module_2_lesson_3_word_example_2",
    "lesson_id": "module_2_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Do you like reading?"
  },
  {
    "id": "audio_module_2_lesson_3_word_example_3",
    "lesson_id": "module_2_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I like watching movies."
  },
  {
    "id": "audio_module_2_lesson_3_word_example_4",
    "lesson_id": "module_2_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I prefer playing sports."
  },
  {
    "id": "audio_module_2_lesson_3_word_example_5",
    "lesson_id": "module_2_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I love traveling."
  },
  {
    "id": "audio_module_2_lesson_3_word_example_6",
    "lesson_id": "module_2_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I hate cleaning."
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_1_line_1",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Do you like traveling?"
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_1_line_2",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, I love it! What about you?"
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_1_line_3",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Me too. I love traveling."
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_1_full_1",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "Do you like traveling? Yes, I love it! What about you? Me too. I love traveling."
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_2_line_1",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Do you like reading?"
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_2_line_2",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Not really. I prefer watching movies."
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_2_line_3",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Really? I like both."
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_2_full_1",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "Do you like reading? Not really. I prefer watching movies. Really? I like both."
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_3_line_1",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "I love cleaning!"
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_3_line_2",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Really? I hate cleaning."
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_3_line_3",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "That's okay! What about cooking?"
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_3_line_4",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "I like cooking a lot."
  },
  {
    "id": "audio_module_2_lesson_3_seeitworking_3_full_1",
    "lesson_id": "module_2_lesson_3",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "I love cleaning! Really? I hate cleaning. That's okay! What about cooking? I like cooking a lot."
  },
  {
    "id": "audio_module_2_checkpoint_part_a_line_1",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! __________, please?"
  },
  {
    "id": "audio_module_2_checkpoint_part_a_line_2",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's Kim. K-I-M."
  },
  {
    "id": "audio_module_2_checkpoint_part_a_line_3",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "__________?"
  },
  {
    "id": "audio_module_2_checkpoint_part_a_line_4",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "Sure. K-I-M."
  },
  {
    "id": "audio_module_2_checkpoint_part_a_line_5",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "And your __________?"
  },
  {
    "id": "audio_module_2_checkpoint_part_a_line_6",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's zero one one, nine eight seven, six five four three."
  },
  {
    "id": "audio_module_2_checkpoint_part_a_line_7",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "What's your __________?"
  },
  {
    "id": "audio_module_2_checkpoint_part_a_line_8",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's kim dot lee at email dot com."
  },
  {
    "id": "audio_module_2_checkpoint_part_a_line_9",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "__________ coffee?"
  },
  {
    "id": "audio_module_2_checkpoint_part_a_line_10",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, I do. I love it."
  },
  {
    "id": "audio_module_2_checkpoint_part_a_full_1",
    "lesson_id": "module_2_checkpoint",
    "type": "part_a_full",
    "language": "en-US",
    "rate": 1,
    "text": "Hi! __________, please? It's Kim. K-I-M. __________? Sure. K-I-M. And your __________? It's zero one one, nine eight seven, six five four three. What's your __________? It's kim dot lee at email dot com. __________ coffee? Yes, I do. I love it."
  },
  {
    "id": "audio_module_3_lesson_1_opening_line_1",
    "lesson_id": "module_3_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "What time is it?"
  },
  {
    "id": "audio_module_3_lesson_1_opening_line_2",
    "lesson_id": "module_3_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's three o'clock."
  },
  {
    "id": "audio_module_3_lesson_1_opening_line_3",
    "lesson_id": "module_3_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Great. My appointment is at four o'clock, on Tuesday."
  },
  {
    "id": "audio_module_3_lesson_1_opening_line_4",
    "lesson_id": "module_3_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Is that this week?"
  },
  {
    "id": "audio_module_3_lesson_1_opening_line_5",
    "lesson_id": "module_3_lesson_1",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, it's on March 12th."
  },
  {
    "id": "audio_module_3_lesson_1_opening_full_1",
    "lesson_id": "module_3_lesson_1",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "What time is it? It's three o'clock. Great. My appointment is at four o'clock, on Tuesday. Is that this week? Yes, it's on March 12th."
  },
  {
    "id": "audio_module_3_lesson_1_word_example_1",
    "lesson_id": "module_3_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "My class is on Monday."
  },
  {
    "id": "audio_module_3_lesson_1_word_example_2",
    "lesson_id": "module_3_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "My birthday is in July."
  },
  {
    "id": "audio_module_3_lesson_1_word_example_3",
    "lesson_id": "module_3_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I have an appointment at five."
  },
  {
    "id": "audio_module_3_lesson_1_word_example_4",
    "lesson_id": "module_3_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Is that today or tomorrow?"
  },
  {
    "id": "audio_module_3_lesson_1_word_example_5",
    "lesson_id": "module_3_lesson_1",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "The store closes at midnight."
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_1_line_1",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Can I make an appointment, please?"
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_1_line_2",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Sure. Is Thursday okay for you?"
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_1_line_3",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes. What time?"
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_1_line_4",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "At two o'clock."
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_1_full_1",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "Can I make an appointment, please? Sure. Is Thursday okay for you? Yes. What time? At two o'clock."
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_2_line_1",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Are you free on Saturday?"
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_2_line_2",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes! What time?"
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_2_line_3",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "How about at seven o'clock, in the evening?"
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_2_line_4",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Perfect. See you then."
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_2_full_1",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "Are you free on Saturday? Yes! What time? How about at seven o'clock, in the evening? Perfect. See you then."
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_3_line_1",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "What time is your English class?"
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_3_line_2",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "It's at six o'clock, on Mondays and Wednesdays."
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_3_line_3",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "And when does it start? This month?"
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_3_line_4",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, in March."
  },
  {
    "id": "audio_module_3_lesson_1_seeitworking_3_full_1",
    "lesson_id": "module_3_lesson_1",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "What time is your English class? It's at six o'clock, on Mondays and Wednesdays. And when does it start? This month? Yes, in March."
  },
  {
    "id": "audio_module_3_lesson_2_opening_line_1",
    "lesson_id": "module_3_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "What time do you wake up?"
  },
  {
    "id": "audio_module_3_lesson_2_opening_line_2",
    "lesson_id": "module_3_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I usually wake up at six o'clock. I work from Monday to Friday."
  },
  {
    "id": "audio_module_3_lesson_2_opening_line_3",
    "lesson_id": "module_3_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "How often do you exercise?"
  },
  {
    "id": "audio_module_3_lesson_2_opening_line_4",
    "lesson_id": "module_3_lesson_2",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I always exercise in the morning. I never skip it."
  },
  {
    "id": "audio_module_3_lesson_2_opening_full_1",
    "lesson_id": "module_3_lesson_2",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "What time do you wake up? I usually wake up at six o'clock. I work from Monday to Friday. How often do you exercise? I always exercise in the morning. I never skip it."
  },
  {
    "id": "audio_module_3_lesson_2_word_example_1",
    "lesson_id": "module_3_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I wake up at six."
  },
  {
    "id": "audio_module_3_lesson_2_word_example_2",
    "lesson_id": "module_3_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "She works from home."
  },
  {
    "id": "audio_module_3_lesson_2_word_example_3",
    "lesson_id": "module_3_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "He exercises every day."
  },
  {
    "id": "audio_module_3_lesson_2_word_example_4",
    "lesson_id": "module_3_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "We have dinner at seven."
  },
  {
    "id": "audio_module_3_lesson_2_word_example_5",
    "lesson_id": "module_3_lesson_2",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I go to bed at eleven."
  },
  {
    "id": "audio_module_3_lesson_2_seeitworking_1_line_1",
    "lesson_id": "module_3_lesson_2",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "What time do you start work?"
  },
  {
    "id": "audio_module_3_lesson_2_seeitworking_1_line_2",
    "lesson_id": "module_3_lesson_2",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "I usually start at nine. I never start late."
  },
  {
    "id": "audio_module_3_lesson_2_seeitworking_1_full_1",
    "lesson_id": "module_3_lesson_2",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "What time do you start work? I usually start at nine. I never start late."
  },
  {
    "id": "audio_module_3_lesson_2_seeitworking_2_line_1",
    "lesson_id": "module_3_lesson_2",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "How often do you cook?"
  },
  {
    "id": "audio_module_3_lesson_2_seeitworking_2_line_2",
    "lesson_id": "module_3_lesson_2",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "I sometimes cook. My partner usually cooks."
  },
  {
    "id": "audio_module_3_lesson_2_seeitworking_2_full_1",
    "lesson_id": "module_3_lesson_2",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "How often do you cook? I sometimes cook. My partner usually cooks."
  },
  {
    "id": "audio_module_3_lesson_2_seeitworking_3_line_1",
    "lesson_id": "module_3_lesson_2",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Do you work on weekends?"
  },
  {
    "id": "audio_module_3_lesson_2_seeitworking_3_line_2",
    "lesson_id": "module_3_lesson_2",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "No, I don't. I rarely work on Saturdays or Sundays."
  },
  {
    "id": "audio_module_3_lesson_2_seeitworking_3_full_1",
    "lesson_id": "module_3_lesson_2",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "Do you work on weekends? No, I don't. I rarely work on Saturdays or Sundays."
  },
  {
    "id": "audio_module_3_lesson_3_opening_line_1",
    "lesson_id": "module_3_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Would you like to go swimming on Saturday?"
  },
  {
    "id": "audio_module_3_lesson_3_opening_line_2",
    "lesson_id": "module_3_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "I'd love to! I can swim really well."
  },
  {
    "id": "audio_module_3_lesson_3_opening_line_3",
    "lesson_id": "module_3_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "Great! Can you also play volleyball?"
  },
  {
    "id": "audio_module_3_lesson_3_opening_line_4",
    "lesson_id": "module_3_lesson_3",
    "type": "opening_line",
    "language": "en-US",
    "rate": 1,
    "text": "No, I can't. I'm not good at that."
  },
  {
    "id": "audio_module_3_lesson_3_opening_full_1",
    "lesson_id": "module_3_lesson_3",
    "type": "opening_full",
    "language": "en-US",
    "rate": 1,
    "text": "Would you like to go swimming on Saturday? I'd love to! I can swim really well. Great! Can you also play volleyball? No, I can't. I'm not good at that."
  },
  {
    "id": "audio_module_3_lesson_3_word_example_1",
    "lesson_id": "module_3_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "I can swim."
  },
  {
    "id": "audio_module_3_lesson_3_word_example_2",
    "lesson_id": "module_3_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "Can you dance?"
  },
  {
    "id": "audio_module_3_lesson_3_word_example_3",
    "lesson_id": "module_3_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "She can't cook."
  },
  {
    "id": "audio_module_3_lesson_3_word_example_4",
    "lesson_id": "module_3_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "He can paint really well."
  },
  {
    "id": "audio_module_3_lesson_3_word_example_5",
    "lesson_id": "module_3_lesson_3",
    "type": "word_example",
    "language": "en-US",
    "rate": 1,
    "text": "They can play the guitar."
  },
  {
    "id": "audio_module_3_lesson_3_seeitworking_1_line_1",
    "lesson_id": "module_3_lesson_3",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Would you like to watch a movie tonight?"
  },
  {
    "id": "audio_module_3_lesson_3_seeitworking_1_line_2",
    "lesson_id": "module_3_lesson_3",
    "type": "seeitworking_1_line",
    "language": "en-US",
    "rate": 1,
    "text": "Sure! What time?"
  },
  {
    "id": "audio_module_3_lesson_3_seeitworking_1_full_1",
    "lesson_id": "module_3_lesson_3",
    "type": "seeitworking_1_full",
    "language": "en-US",
    "rate": 1,
    "text": "Would you like to watch a movie tonight? Sure! What time?"
  },
  {
    "id": "audio_module_3_lesson_3_seeitworking_2_line_1",
    "lesson_id": "module_3_lesson_3",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Would you like to go running tomorrow?"
  },
  {
    "id": "audio_module_3_lesson_3_seeitworking_2_line_2",
    "lesson_id": "module_3_lesson_3",
    "type": "seeitworking_2_line",
    "language": "en-US",
    "rate": 1,
    "text": "Sorry, I can't. I have to work."
  },
  {
    "id": "audio_module_3_lesson_3_seeitworking_2_full_1",
    "lesson_id": "module_3_lesson_3",
    "type": "seeitworking_2_full",
    "language": "en-US",
    "rate": 1,
    "text": "Would you like to go running tomorrow? Sorry, I can't. I have to work."
  },
  {
    "id": "audio_module_3_lesson_3_seeitworking_3_line_1",
    "lesson_id": "module_3_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Can you play any instrument?"
  },
  {
    "id": "audio_module_3_lesson_3_seeitworking_3_line_2",
    "lesson_id": "module_3_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "Yes, I can play the piano. Can you?"
  },
  {
    "id": "audio_module_3_lesson_3_seeitworking_3_line_3",
    "lesson_id": "module_3_lesson_3",
    "type": "seeitworking_3_line",
    "language": "en-US",
    "rate": 1,
    "text": "No, I can't, but I can paint."
  },
  {
    "id": "audio_module_3_lesson_3_seeitworking_3_full_1",
    "lesson_id": "module_3_lesson_3",
    "type": "seeitworking_3_full",
    "language": "en-US",
    "rate": 1,
    "text": "Can you play any instrument? Yes, I can play the piano. Can you? No, I can't, but I can paint."
  },
  {
    "id": "audio_module_3_checkpoint_part_a_line_1",
    "lesson_id": "module_3_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "__________ do you wake up?"
  },
  {
    "id": "audio_module_3_checkpoint_part_a_line_2",
    "lesson_id": "module_3_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "I __________ wake up at six."
  },
  {
    "id": "audio_module_3_checkpoint_part_a_line_3",
    "lesson_id": "module_3_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "__________ do you exercise?"
  },
  {
    "id": "audio_module_3_checkpoint_part_a_line_4",
    "lesson_id": "module_3_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "Every day. __________ go running with me tomorrow?"
  },
  {
    "id": "audio_module_3_checkpoint_part_a_line_5",
    "lesson_id": "module_3_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "__________! What time?"
  },
  {
    "id": "audio_module_3_checkpoint_part_a_line_6",
    "lesson_id": "module_3_checkpoint",
    "type": "part_a_line",
    "language": "en-US",
    "rate": 1,
    "text": "Sorry, I __________ run at six — I have class. How about seven?"
  },
  {
    "id": "audio_module_3_checkpoint_part_a_full_1",
    "lesson_id": "module_3_checkpoint",
    "type": "part_a_full",
    "language": "en-US",
    "rate": 1,
    "text": "__________ do you wake up? I __________ wake up at six. __________ do you exercise? Every day. __________ go running with me tomorrow? __________! What time? Sorry, I __________ run at six — I have class. How about seven?"
  }
];
