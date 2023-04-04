import { createServer, Response } from "miragejs";

export default function () {
  createServer({
    routes() {
      /* =============
         SGnlp Models
         =============

         1. Relation Extraction
         2. Cross-lingual Cross-domain: UFD
         3. RECCON: Causal Span Extraction
         4. Emotion Entailment
         5. Identity Follow-Up Questions
         6. Essay Scoring
         7. Cross Sentence GEC
         8. Rumour Detection
         9. Discourse Parsing
         10. Aspect based sentiment analysis
         11. Rv + Stance detection
         12. Coherence momentum
         13. Stance classification
         14. Rumour verification

         -------------- */

      // Relation extraction
      this.post("/api/relation-extraction/lsr/predict", () => {
        return new Response(
          200,
          {},
          {
            clusters: [
              [
                [0, 4],
                [153, 155],
                [171, 174],
              ],
              [
                [34, 36],
                [53, 54],
                [96, 97],
              ],
              [
                [80, 82],
                [169, 170],
                [191, 193],
              ],
              [
                [10, 12],
                [103, 105],
              ],
              [
                [38, 39],
                [111, 112],
                [125, 135],
                [140, 148],
              ],
              [
                [72, 73],
                [120, 124],
              ],
              [
                [6, 8],
                [183, 185],
              ],
              [[13, 16]],
              [[25, 30]],
              [[31, 33]],
              [[55, 56]],
              [[57, 58]],
              [[164, 168]],
              [[194, 196]],
            ],
            document: [
              "Zest",
              "Airways",
              ",",
              "Inc.",
              "operated",
              "as",
              "AirAsia",
              "Zest",
              "(",
              "formerly",
              "Asian",
              "Spirit",
              "and",
              "Zest",
              "Air",
              ")",
              ",",
              "was",
              "a",
              "low",
              "-",
              "cost",
              "airline",
              "based",
              "at",
              "the",
              "Ninoy",
              "Aquino",
              "International",
              "Airport",
              "in",
              "Pasay",
              "City",
              ",",
              "Metro",
              "Manila",
              "in",
              "the",
              "Philippines",
              ".",
              "It",
              "operated",
              "scheduled",
              "domestic",
              "and",
              "international",
              "tourist",
              "services",
              ",",
              "mainly",
              "feeder",
              "services",
              "linking",
              "Manila",
              "and",
              "Cebu",
              "with",
              "24",
              "domestic",
              "destinations",
              "in",
              "support",
              "of",
              "the",
              "trunk",
              "route",
              "operations",
              "of",
              "other",
              "airlines",
              ".",
              "In",
              "2013",
              ",",
              "the",
              "airline",
              "became",
              "an",
              "affiliate",
              "of",
              "Philippines",
              "AirAsia",
              "operating",
              "their",
              "brand",
              "separately",
              ".",
              "Its",
              "main",
              "base",
              "was",
              "Ninoy",
              "Aquino",
              "International",
              "Airport",
              ",",
              "Manila",
              ".",
              "The",
              "airline",
              "was",
              "founded",
              "as",
              "Asian",
              "Spirit",
              ",",
              "the",
              "first",
              "airline",
              "in",
              "the",
              "Philippines",
              "to",
              "be",
              "run",
              "as",
              "a",
              "cooperative",
              ".",
              "On",
              "August",
              "16",
              ",",
              "2013",
              ",",
              "the",
              "Civil",
              "Aviation",
              "Authority",
              "of",
              "the",
              "Philippines",
              "(",
              "CAAP",
              ")",
              ",",
              "the",
              "regulating",
              "body",
              "of",
              "the",
              "Government",
              "of",
              "the",
              "Republic",
              "of",
              "the",
              "Philippines",
              "for",
              "civil",
              "aviation",
              ",",
              "suspended",
              "Zest",
              "Air",
              "flights",
              "until",
              "further",
              "notice",
              "because",
              "of",
              "safety",
              "issues",
              ".",
              "Less",
              "than",
              "a",
              "year",
              "after",
              "AirAsia",
              "and",
              "Zest",
              "Air",
              "'s",
              "strategic",
              "alliance",
              ",",
              "the",
              "airline",
              "has",
              "been",
              "rebranded",
              "as",
              "AirAsia",
              "Zest",
              ".",
              "The",
              "airline",
              "was",
              "merged",
              "into",
              "AirAsia",
              "Philippines",
              "in",
              "January",
              "2016",
              ".",
            ],
            relations: [
              {
                score: 0.7705950140953064,
                relation: "country",
                object_idx: 0,
                subject_idx: 4,
              },
              {
                score: 0.7438603043556213,
                relation: "headquarters location",
                object_idx: 0,
                subject_idx: 9,
              },
              {
                score: 0.8671950101852417,
                relation: "country",
                object_idx: 1,
                subject_idx: 4,
              },
              {
                score: 0.506489634513855,
                relation: "contains administrative territorial entity",
                object_idx: 1,
                subject_idx: 9,
              },
              {
                score: 0.4552365839481354,
                relation: "country",
                object_idx: 2,
                subject_idx: 4,
              },
              {
                score: 0.3873765468597412,
                relation: "contains administrative territorial entity",
                object_idx: 4,
                subject_idx: 1,
              },
              {
                score: 0.31146663427352905,
                relation: "owned by",
                object_idx: 6,
                subject_idx: 2,
              },
              {
                score: 0.5645918250083923,
                relation: "country",
                object_idx: 6,
                subject_idx: 4,
              },
              {
                score: 0.5823311805725098,
                relation: "country",
                object_idx: 8,
                subject_idx: 4,
              },
              {
                score: 0.5698578357696533,
                relation: "located in the administrative territorial entity",
                object_idx: 9,
                subject_idx: 1,
              },
              {
                score: 0.9171241521835327,
                relation: "country",
                object_idx: 9,
                subject_idx: 4,
              },
              {
                score: 0.6013875007629395,
                relation: "country",
                object_idx: 10,
                subject_idx: 4,
              },
            ],
          }
        );
      });
      // Cross-lingual Cross-domain: UFD
      this.post("/api/cross-lingual-cross-domain/ufd/predict", () => {
        return new Response(
          200,
          {},
          {
            music: {
              sentiment: 1,
              probability: 0.893,
              target_language: "de",
              target_domain: "books",
            },
            dvd: {
              sentiment: 1,
              probability: 0.921,
              target_language: "de",
              target_domain: "books",
            },
          }
        );
      });
      // RECCON: Causal Span Extraction
      this.post("/api/span-extraction/spanbert/predict", () => {
        return new Response(
          200,
          {},
          {
            utterances: [
              ["Why don 't you", "watch where you 're going ?"],
              ["Me?"],
              ["You 're the one who pulled out in front of me !"],
              ["There was plenty of room for me to pull out ."],
              ["You didn 't have to stay in the lane you were in ."],
              [
                "Hey , listen . I had every right to stay in the lane I was in .",
              ],
              ["You were supposed to wait until I passed to pull out ."],
              [
                "And anyhow , ",
                "you didn 't give me any time to change lanes.",
              ],
              [
                "All of a sudden",
                "--BANG--",
                "there you are right in front of me .",
              ],
            ],
            evidence_span: [
              [1, 0],
              [0],
              [1],
              [1],
              [0],
              [0],
              [0],
              [0, 1],
              [0, 1, 0],
            ],
            probability: [
              [0.8, -1],
              [-1],
              [0.89],
              [0.75],
              [-1],
              [-1],
              [-1],
              [-1, 0.91],
              [-1, 0.7, -1],
            ],
            emotion: "anger",
          }
        );
      });
      // RECCON: Emotion Entailment
      this.post("/api/emotion-entailment/roberta-base/predict", () => {
        return new Response(
          200,
          {},
          {
            utterances: [
              "David , why didn ' t you clean the room ?",
              "I ' m not in the mood .",
              "Why are you feeling depressed ?",
              "I was told my girlfriend was speaking ill of me .",
              "That ' s a real let-down .",
            ],
            causal_idx: [0, 0, 0, 1, 1],
            emotion: "sadness",
          }
        );
      });
      // Identify Follow-Up Questions
      this.post("/api/identify-follow-up-question/lif-3way-ap/predict", () => {
        return new Response(200, {}, { probability: 0.9 });
      });
      // Essay Scoring
      this.post("/api/essay-scoring/nea/predict", () => {
        return new Response(200, {}, { predictions: [0.1] });
      });
      // Cross Sentence GEC
      this.post("/api/grammatical-error-correction/csgec/predict", () => {
        return new Response(
          200,
          {},
          {
            original_text:
              "Machines have replaced a bunch of coolies and heavy labor. Cars and trucks diminish the redundancy of long time shipment. " +
              "As a result, people have more time to enjoy advantage of modern life. One can easily travel to the other half of the globe " +
              "to see beautiful scenery that one dreams for his lifetime. One can also easily see his deeply loved one through internet from miles away.",
            corrected_text:
              "Machines have replaced a bunch of coolies and heavy laborers. Cars and trucks diminish the redundancy of long time shipments. " +
              "As a result, people have more time to enjoy the advantage of modern life. One can easily travel to the other half of the globe " +
              "to see beautiful scenery that one dreams for his life. One can also easily see his deeply loved one through the internet from miles away.",
          }
        );
      });
      // Rumour Detection
      this.post(
        "/api/rumour-detection-twitter/rumour-detection-twitter/predict",
        () => {
          return new Response(
            200,
            {},
            { predicted_y: "a true rumour", predicted_prob: 99.8 }
          );
        }
      );
      // Discourse Parsing
      this.post("/api/discourse-parsing/rst-pointer/predict", () => {
        return new Response(
          200,
          {},
          {
            tree: {
              root: {
                attributes: ["root"],
                children: [
                  {
                    attributes: ["Joint"],
                    link: "Nucleus",
                    word: "Thumbs began to be troublesome about 4 months ago",
                  },
                  {
                    attributes: ["Joint"],
                    children: [
                      {
                        attributes: ["span"],
                        link: "Nucleus",
                        word: "and I made an appointment with the best hand surgeon in the Valley",
                      },
                      {
                        attributes: ["Enablement"],
                        children: [
                          {
                            attributes: ["Attribution"],
                            link: "Satellite",
                            word: "to see",
                          },
                          {
                            attributes: ["span"],
                            link: "Nucleus",
                            word: "if my working activities were the problem.",
                          },
                        ],
                        link: "Satellite",
                        word: "to see if my working activities were the problem.",
                      },
                    ],
                    link: "Nucleus",
                    word: "and I made an appointment with the best hand surgeon in the Valley to see if my working activities were the problem.",
                  },
                ],
                word: "Thumbs began to be troublesome about 4 months ago and I made an appointment with the best hand surgeon in the Valley to see if my working activities were the problem.",
              },
              text: "Thumbs began to be troublesome about 4 months ago and I made an appointment with the best hand surgeon in the Valley to see if my working activities were the problem.",
            },
          }
        );
      });
      // Aspect based sentiment analysis
      this.post(
        "/api/aspect-based-sentiment-analysis/sentic-gcn/predict",
        () => {
          return new Response(
            200,
            {},
            {
              sentence: [
                "Soup",
                "was",
                "tasty",
                "but",
                "soup",
                "is",
                "a",
                "little",
                "salty",
                ".",
                "My",
                "friend",
                "loved",
                "the",
                "soup",
                "!",
                "Nice",
                "place",
                "to",
                "chill",
                "and",
                "hangout",
                ".",
              ],
              aspects: [[0], [4], [14]],
              labels: [1, -1, 1],
            }
          );
        }
      );
      // Rv + Stance detection
      this.post("/api/rv-stance-detection/dual-bert/predict", () => {
        return new Response(
          200,
          {},
          {
            rumor_labels: "true rumour",
            stance_labels: ["Deny", "Support", "Query", "Comment", "Support"],
            text: [
              "Is it true? Prince rumoured to be performing surprise show in Toronto",
              "@LisaLaFlammeCTV hope not",
              "@LisaLaFlammeCTV yep, don't as me how I know, but yep",
              '@LisaLaFlammeCTV Do you mean the artist formerly known as "Strange Symbol"?',
              "@LisaLaFlammeCTV @CTVToronto a suprise concert on Vancouver would be cool #cmonprince",
              "@LisaLaFlammeCTV I am in a line up. It is going down Victoria Street to Queen.",
            ],
          }
        );
      });
      // Coherence momentum
      this.post("/api/coherence-modeling/coherence-momentum/predict", () => {
        return new Response(
          200,
          {},
          {
            text1_score: 100,
            text2_score: 50,
          }
        );
      });
      // Stance classification
      this.post("/api/stance-classification/stance-classification/predict", () => {
        return new Response(
          200,
          {},
          {
            tweets: [
              "Prince rumoured to be performing surprise show in Toronto",
              "@LisaLaFlammeCTV hope not",
              "@LisaLaFlammeCTV yep, don't as me how I know, but yep",
              '@LisaLaFlammeCTV Do you mean the artist formerly known as "Strange Symbol"?',
              "@LisaLaFlammeCTV @CTVToronto a suprise concert on Vancouver would be cool #cmonprince",
              "@LisaLaFlammeCTV I am in a line up. It is going down Victoria Street to Queen.",
            ],
            preds: ["SUPPORT", "DENY", "SUPPORT", "QUERY", "COMMENT", "SUPPORT"],
          }
        );
      });
      // Rumour verification
      this.post("/api/rumour-verification/rumour-verification/predict", () => {
        return new Response(
          200,
          {},
          { pred: "TRUE" }
        );
      });
      /* =================
         SEACoreNLP Models
         =================

         1. Tokenizer
         2. POS Tagger
         3. NER Tagger
         4. Dependency Parser
         5. Constituency Parser
         6. Coreference Resolver
         7. Semantic Role Labeler

         ------------------------ */

      // Tokenizer
      this.post("/api/sea-tokenizer/**", () => {
        return new Response(
          200,
          {},
          {
            words: [
              "กรุงเทพมหานคร",
              "เป็น",
              "เมืองหลวง",
              "และ",
              "นคร",
              "ที่",
              "มี",
              "ประชากร",
              "มาก",
              "ที่สุด",
              "ของ",
              "ประเทศไทย",
            ],
          }
        );
      });
      // POS Tagger
      this.post("/api/sea-pos-tagger/**", () => {
        return new Response(
          200,
          {},
          {
            words: [
              "Semua",
              " manusia dilahirkan",
              " ",
              "bebas",
              " ",
              "dan",
              " ",
              "samarata dari",
              " ",
              "segi",
              " kemuliaan",
              " ",
              "dan",
              " hak-hak",
              ".",
            ],
            tags: [
              "NCMN",
              "NCMN",
              "PUNC",
              "NCMN",
              "PUNC",
              "NCMN",
              "PUNC",
              "NCMN",
              "PUNC",
              "NCMN",
              "NCMN",
              "PUNC",
              "NCMN",
              "NCMN",
              "PUNC",
            ],
          }
        );
      });
      // NER Tagger
      this.post("/api/sea-ner-tagger/**", () => {
        return new Response(
          200,
          {},
          {
            words: [
              "ใน",
              "ปี",
              " ",
              "พ.ศ.",
              " ",
              "2561",
              " ",
              "และ",
              " ",
              "พ.ศ.",
              " ",
              "2562",
              " ",
              "กรุงเทพมหานคร",
              "ประสบ",
              "กับ",
              "ปัญหา",
              "ค่า",
              "ฝุ่นละออง",
              "เกิด",
              "มาตรา",
              "ฐาน",
            ],
            tags: [
              "O",
              "O",
              "O",
              "B-DATE",
              "I-DATE",
              "L-DATE",
              "O",
              "O",
              "O",
              "B-DATE",
              "I-DATE",
              "L-DATE",
              "O",
              "U-LOC",
              "O",
              "O",
              "O",
              "O",
              "O",
              "O",
              "O",
              "O",
            ],
          }
        );
      });
      // Dependency Parser
      this.post("/api/sea-dep-parser/**", () => {
        return new Response(200, {}, [
          {
            tree: {
              text: "All human beings are born free and equal in dignity and rights.",
              root: {
                word: "born",
                nodeType: "ROOT",
                attributes: ["VERB"],
                link: "ROOT",
                spans: [{ start: 21, end: 25 }],
                children: [
                  {
                    word: "beings",
                    nodeType: "nsubjpass",
                    attributes: ["NOUN"],
                    link: "nsubjpass",
                    spans: [{ start: 10, end: 16 }],
                    children: [
                      {
                        word: "All",
                        nodeType: "det",
                        attributes: ["DET"],
                        link: "det",
                        spans: [{ start: 0, end: 3 }],
                      },
                      {
                        word: "human",
                        nodeType: "amod",
                        attributes: ["ADJ"],
                        link: "amod",
                        spans: [{ start: 4, end: 9 }],
                      },
                    ],
                  },
                  {
                    word: "are",
                    nodeType: "auxpass",
                    attributes: ["AUX"],
                    link: "auxpass",
                    spans: [{ start: 17, end: 20 }],
                  },
                  {
                    word: "free",
                    nodeType: "advcl",
                    attributes: ["ADJ"],
                    link: "advcl",
                    spans: [{ start: 26, end: 30 }],
                    children: [
                      {
                        word: "and",
                        nodeType: "cc",
                        attributes: ["CCONJ"],
                        link: "cc",
                        spans: [{ start: 31, end: 34 }],
                      },
                      {
                        word: "equal",
                        nodeType: "conj",
                        attributes: ["ADJ"],
                        link: "conj",
                        spans: [{ start: 35, end: 40 }],
                        children: [
                          {
                            word: "in",
                            nodeType: "prep",
                            attributes: ["ADP"],
                            link: "prep",
                            spans: [{ start: 41, end: 43 }],
                            children: [
                              {
                                word: "dignity",
                                nodeType: "pobj",
                                attributes: ["NOUN"],
                                link: "pobj",
                                spans: [{ start: 44, end: 51 }],
                                children: [
                                  {
                                    word: "and",
                                    nodeType: "cc",
                                    attributes: ["CCONJ"],
                                    link: "cc",
                                    spans: [{ start: 52, end: 55 }],
                                  },
                                  {
                                    word: "rights",
                                    nodeType: "conj",
                                    attributes: ["NOUN"],
                                    link: "conj",
                                    spans: [{ start: 56, end: 62 }],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    word: ".",
                    nodeType: "punct",
                    attributes: ["PUNCT"],
                    link: "punct",
                    spans: [{ start: 62, end: 63 }],
                  },
                ],
              },
            },
            sentence:
              "All human beings are born free and equal in dignity and rights.",
          },
          {
            tree: {
              text: "They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
              root: {
                word: "endowed",
                nodeType: "ROOT",
                attributes: ["VERB"],
                link: "ROOT",
                spans: [{ start: 9, end: 16 }],
                children: [
                  {
                    word: "They",
                    nodeType: "nsubjpass",
                    attributes: ["PRON"],
                    link: "nsubjpass",
                    spans: [{ start: 0, end: 4 }],
                  },
                  {
                    word: "are",
                    nodeType: "auxpass",
                    attributes: ["AUX"],
                    link: "auxpass",
                    spans: [{ start: 5, end: 8 }],
                  },
                  {
                    word: "with",
                    nodeType: "prep",
                    attributes: ["ADP"],
                    link: "prep",
                    spans: [{ start: 17, end: 21 }],
                    children: [
                      {
                        word: "reason",
                        nodeType: "pobj",
                        attributes: ["NOUN"],
                        link: "pobj",
                        spans: [{ start: 22, end: 28 }],
                        children: [
                          {
                            word: "and",
                            nodeType: "cc",
                            attributes: ["CCONJ"],
                            link: "cc",
                            spans: [{ start: 29, end: 32 }],
                          },
                          {
                            word: "conscience",
                            nodeType: "conj",
                            attributes: ["NOUN"],
                            link: "conj",
                            spans: [{ start: 33, end: 43 }],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    word: "and",
                    nodeType: "cc",
                    attributes: ["CCONJ"],
                    link: "cc",
                    spans: [{ start: 44, end: 47 }],
                  },
                  {
                    word: "act",
                    nodeType: "conj",
                    attributes: ["VERB"],
                    link: "conj",
                    spans: [{ start: 55, end: 58 }],
                    children: [
                      {
                        word: "should",
                        nodeType: "aux",
                        attributes: ["VERB"],
                        link: "aux",
                        spans: [{ start: 48, end: 54 }],
                      },
                      {
                        word: "towards",
                        nodeType: "prep",
                        attributes: ["ADP"],
                        link: "prep",
                        spans: [{ start: 59, end: 66 }],
                        children: [
                          {
                            word: "one",
                            nodeType: "pobj",
                            attributes: ["NUM"],
                            link: "pobj",
                            spans: [{ start: 67, end: 70 }],
                            children: [
                              {
                                word: "another",
                                nodeType: "det",
                                attributes: ["DET"],
                                link: "det",
                                spans: [{ start: 71, end: 78 }],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        word: "in",
                        nodeType: "prep",
                        attributes: ["ADP"],
                        link: "prep",
                        spans: [{ start: 79, end: 81 }],
                        children: [
                          {
                            word: "spirit",
                            nodeType: "pobj",
                            attributes: ["NOUN"],
                            link: "pobj",
                            spans: [{ start: 84, end: 90 }],
                            children: [
                              {
                                word: "a",
                                nodeType: "det",
                                attributes: ["DET"],
                                link: "det",
                                spans: [{ start: 82, end: 83 }],
                              },
                              {
                                word: "of",
                                nodeType: "prep",
                                attributes: ["ADP"],
                                link: "prep",
                                spans: [{ start: 91, end: 93 }],
                                children: [
                                  {
                                    word: "brotherhood",
                                    nodeType: "pobj",
                                    attributes: ["NOUN"],
                                    link: "pobj",
                                    spans: [{ start: 94, end: 105 }],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    word: ".",
                    nodeType: "punct",
                    attributes: ["PUNCT"],
                    link: "punct",
                    spans: [{ start: 105, end: 106 }],
                  },
                ],
              },
            },
            sentence:
              "They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
          },
        ]);
      });
      // Constituency Parsing
      this.post("/api/sea-const-parser/**", () => {
        return new Response(200, {}, [
          {
            tree: {
              text: "Semua manusia dilahirkan bebas dan samarata dari segi kemuliaan dan hak-hak",
              root: {
                word: "Semua manusia dilahirkan bebas dan samarata dari segi kemuliaan dan hak-hak",
                nodeType: "ROOT",
                attributes: ["NOUN"],
                link: "ROOT",
                children: [
                  {
                    word: "Semua manusia dilahirkan bebas dan",
                    nodeType: "NOUN",
                    attributes: ["NOUN"],
                    link: "NOUN",
                    children: [
                      {
                        word: "Semua manusia dilahirkan",
                        nodeType: "NOUN",
                        attributes: ["NOUN"],
                        link: "NOUN",
                        children: [
                          {
                            word: "Semua",
                            nodeType: "POS",
                            attributes: ["conj"],
                            link: "POS",
                          },
                          {
                            word: "manusia dilahirkan",
                            nodeType: "NOUN",
                            attributes: ["NOUN"],
                            link: "NOUN",
                            children: [
                              {
                                word: "manusia",
                                nodeType: "POS",
                                attributes: ["noun"],
                                link: "POS",
                              },
                              {
                                word: "dilahirkan",
                                nodeType: "POS",
                                attributes: ["adv"],
                                link: "POS",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        word: "bebas dan",
                        nodeType: "NOUN",
                        attributes: ["NOUN"],
                        link: "NOUN",
                        children: [
                          {
                            word: "bebas",
                            nodeType: "POS",
                            attributes: ["verb"],
                            link: "POS",
                          },
                          {
                            word: "dan",
                            nodeType: "POS",
                            attributes: ["conj"],
                            link: "POS",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    word: "samarata dari segi kemuliaan dan hak-hak",
                    nodeType: "POS",
                    attributes: [null],
                    link: "POS",
                    children: [
                      {
                        word: "samarata dari segi kemuliaan dan",
                        nodeType: "NOUN",
                        attributes: ["NOUN"],
                        link: "NOUN",
                        children: [
                          {
                            word: "samarata dari segi kemuliaan",
                            nodeType: "NOUN",
                            attributes: ["NOUN"],
                            link: "NOUN",
                            children: [
                              {
                                word: "samarata",
                                nodeType: "POS",
                                attributes: ["verb"],
                                link: "POS",
                              },
                              {
                                word: "dari segi kemuliaan",
                                nodeType: "NOUN",
                                attributes: ["NOUN"],
                                link: "NOUN",
                                children: [
                                  {
                                    word: "dari",
                                    nodeType: "POS",
                                    attributes: ["verb"],
                                    link: "POS",
                                  },
                                  {
                                    word: "segi kemuliaan",
                                    nodeType: "NOUN",
                                    attributes: ["NOUN"],
                                    link: "NOUN",
                                    children: [
                                      {
                                        word: "segi",
                                        nodeType: "POS",
                                        attributes: ["verb"],
                                        link: "POS",
                                      },
                                      {
                                        word: "kemuliaan",
                                        nodeType: "POS",
                                        attributes: ["noun"],
                                        link: "POS",
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            word: "dan",
                            nodeType: "POS",
                            attributes: ["conj"],
                            link: "POS",
                          },
                        ],
                      },
                      {
                        word: "hak-hak",
                        nodeType: "POS",
                        attributes: ["noun"],
                        link: "POS",
                      },
                    ],
                  },
                ],
              },
            },
            sentence:
              "Semua manusia dilahirkan bebas dan samarata dari segi kemuliaan dan hak-hak",
          },
        ]);
      });
      // Coreference Resolver
      this.post("api/sea-coref-resolver/**", () => {
        return new Response(
          200,
          {},
          {
            antecedent_indices: [
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
              [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ],
            ],
            clusters: [
              [
                [0, 1],
                [24, 24],
                [36, 36],
                [47, 47],
                [54, 54],
              ],
              [
                [11, 13],
                [33, 33],
              ],
              [
                [38, 52],
                [56, 56],
              ],
              [
                [54, 56],
                [62, 62],
                [70, 70],
              ],
              [
                [26, 52],
                [62, 67],
              ],
            ],
            document: [
              "Paul",
              "Allen",
              "was",
              "born",
              "on",
              "January",
              "21",
              ",",
              "1953",
              ",",
              "in",
              "Seattle",
              ",",
              "Washington",
              ",",
              "to",
              "Kenneth",
              "Sam",
              "Allen",
              "and",
              "Edna",
              "Faye",
              "Allen",
              ".",
              "Allen",
              "attended",
              "Lakeside",
              "School",
              ",",
              "a",
              "private",
              "school",
              "in",
              "Seattle",
              ",",
              "where",
              "he",
              "befriended",
              "Bill",
              "Gates",
              ",",
              "two",
              "years",
              "younger",
              ",",
              "with",
              "whom",
              "he",
              "shared",
              "an",
              "enthusiasm",
              "for",
              "computers",
              ".",
              "Paul",
              "and",
              "Bill",
              "used",
              "a",
              "teletype",
              "terminal",
              "at",
              "their",
              "high",
              "school",
              ",",
              "Lakeside",
              ",",
              "to",
              "develop",
              "their",
              "programming",
              "skills",
              "on",
              "several",
              "time",
              "-",
              "sharing",
              "computer",
              "systems",
              ".",
            ],
            predicted_antecedents: [
              -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, 5, 11, -1, -1,
              11, -1, -1, 0, -1, 15, -1, -1, 21, 12, -1, 21, -1, -1, -1,
            ],
            top_spans: [
              [0, 1],
              [3, 3],
              [5, 8],
              [5, 14],
              [8, 8],
              [11, 13],
              [11, 14],
              [13, 13],
              [16, 18],
              [16, 22],
              [20, 22],
              [24, 24],
              [26, 52],
              [33, 33],
              [36, 36],
              [38, 52],
              [41, 42],
              [47, 47],
              [48, 48],
              [49, 52],
              [54, 54],
              [54, 56],
              [56, 56],
              [58, 60],
              [58, 67],
              [62, 62],
              [62, 67],
              [69, 69],
              [70, 70],
              [70, 72],
              [74, 79],
              [75, 75],
            ],
          }
        );
      });
      // Semantic Role Labeler
      this.post("/api/sea-srl-parser/**", () => {
        return new Response(
          200,
          {},
          {
            words: [
              "Saya",
              "pergi",
              "ke",
              "sekolah",
              "dengan",
              "cepat",
              "dan",
              "mereka",
              "makan",
              "nasi",
              "dengan",
              "sendok",
              "dan",
              "garpu",
            ],
            verbs: [
              {
                description: "",
                tags: [
                  "U-ARG1",
                  "U-V",
                  "B-ARG4",
                  "L-ARG4",
                  "B-ARGM-MNR",
                  "L-ARGM-MNR",
                  "O",
                  "O",
                  "O",
                  "O",
                  "O",
                  "O",
                  "O",
                  "O",
                ],
                verb: "pergi",
              },
              {
                description: "",
                tags: [
                  "O",
                  "O",
                  "O",
                  "O",
                  "O",
                  "O",
                  "O",
                  "U-ARG0",
                  "U-V",
                  "U-ARG1",
                  "B-ARGM-MNR",
                  "I-ARGM-MNR",
                  "I-ARGM-MNR",
                  "L-ARGM-MNR",
                ],
                verb: "makan",
              },
            ],
          }
        );
      });
      /*
      Other routes
      */
      // Model Card
      this.get("/api/**/model-card", () => {
        return new Response(
          200,
          {},
          {
            name: "RST Pointer",
            languages: "English",
            description:
              "This is a pointer network-based segmenter and parser that is trained to identify the relations between different sections of a sentence according to rhetorical structure theory (RST).",
            paper: {
              text: "Lin, X., Joty, S., Jwalapuram, P., & Bari, M. S. (2019). A Unified Linear-Time Framework for Sentence-Level Discourse Parsing. Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, July 2019 (pp. 4190-4200).",
              url: "https://aclanthology.org/P19-1410/",
            },
            trainingDataset: {
              text: "RST Discourse Treebank",
              url: "https://catalog.ldc.upenn.edu/LDC2002T07",
            },
            evaluationDataset: {
              text: "RST Discourse Treebank",
              url: "https://catalog.ldc.upenn.edu/LDC2002T07",
            },
            evaluationScores: [
              "Segmenter model test results (Trained/Reported) - Precision: 0.949/0.941, Recall: 0.968/0.966, F1: 0.958/0.954",
              "Parser model test results (Trained/Reported) - F1 Relation: 0.813/0.813, F1 Span: 0.966/0.969, F1 Nuclearity: 0.909/0.909",
            ],
            trainingConfig: [
              {
                text: "Segmenter training config",
                url: "https://storage.googleapis.com/sgnlp/models/rst_pointer/segmenter/training_config.json",
              },
              {
                text: "Parser training config",
                url: "https://storage.googleapis.com/sgnlp/models/rst_pointer/parser/training_config.json",
              },
            ],
            trainingTime:
              "~2 hours for 100 epochs on a single V100 GPU for segmenter model. ~6 hours for 200 epochs on a single V100 GPU for parser model",
            modelWeights: [
              {
                text: "Segmenter weights",
                url: "https://storage.googleapis.com/sgnlp/models/rst_pointer/segmenter/pytorch_model.bin",
              },
              {
                text: "Parser weights",
                url: "https://storage.googleapis.com/sgnlp/models/rst_pointer/parser/pytorch_model.bin",
              },
            ],
            modelConfig: [
              {
                text: "Segmenter config",
                url: "https://storage.googleapis.com/sgnlp/models/rst_pointer/segmenter/config.json",
              },
              {
                text: "Parser config",
                url: "https://storage.googleapis.com/sgnlp/models/rst_pointer/parser/config.json",
              },
            ],
            modelInput: "A sentence.",
            modelOutput: "Discourse parsed tree.",
            modelSize: "~362MB for segmenter model, ~361MB for parser model",
            inferenceInfo: "Not available.",
            usageScenarios:
              "Construct additional features for downstream NLP tasks.",
            originalCode: {
              text: "https://github.com/shawnlimn/UnifiedParser_RST",
              url: "https://github.com/shawnlimn/UnifiedParser_RST",
            },
            license: [
              {
                text: "Model is released under CC BY-NC-SA 4.0.",
                url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
              },
              {
                text: "Code is released under MIT License.",
                url: "https://choosealicense.com/licenses/mit",
              },
            ],
            contact: "sg-nlp@aisingapore.org",
            additionalInfo:
              "The dataset (RST Discourse Treebank) that the model is trained on is a licensed dataset.",
          }
        );
      });
      this.get("/api/**/model-usage", () => {
        return new Response(
          200,
          {},
          {
            usage: `from sgnlp.models.rst_pointer import (
    RstPointerParserConfig,
    RstPointerParserModel,
    RstPointerSegmenterConfig,
    RstPointerSegmenterModel,
    RstPreprocessor,
    RstPostprocessor
)

# Load processors and models
preprocessor = RstPreprocessor()
postprocessor = RstPostprocessor()

segmenter_config = RstPointerSegmenterConfig.from_pretrained(
    'https://storage.googleapis.com/sgnlp/models/rst_pointer/segmenter/config.json')
segmenter = RstPointerSegmenterModel.from_pretrained(
    'https://storage.googleapis.com/sgnlp/models/rst_pointer/segmenter/pytorch_model.bin',
    config=segmenter_config)
segmenter.eval()

parser_config = RstPointerParserConfig.from_pretrained(
    'https://storage.googleapis.com/sgnlp/models/rst_pointer/parser/config.json')
parser = RstPointerParserModel.from_pretrained(
    'https://storage.googleapis.com/sgnlp/models/rst_pointer/parser/pytorch_model.bin',
    config=parser_config)
parser.eval()

sentences = [
    "Thumbs began to be troublesome about 4 months ago and I made an appointment with the best hand surgeon in the "
    "Valley to see if my working activities were the problem.",
    "Every rule has exceptions, but the tragic and too-common tableaux of hundreds or even thousands of people "
    "snake-lining up for any task with a paycheck illustrates a lack of jobs, not laziness."
]

tokenized_sentences_ids, tokenized_sentences, lengths = preprocessor(sentences)

segmenter_output = segmenter(tokenized_sentences_ids, lengths)
end_boundaries = segmenter_output.end_boundaries

parser_output = parser(tokenized_sentences_ids, end_boundaries, lengths)

trees = postprocessor(sentences=sentences, tokenized_sentences=tokenized_sentences,
                      end_boundaries=end_boundaries,
                      discourse_tree_splits=parser_output.splits)
          `,
          }
        );
      });
    },
  });
}
