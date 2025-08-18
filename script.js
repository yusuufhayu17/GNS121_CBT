const questions = [
  {
    question: "The technical term for academic dishonesty is known as:",
    options: [
      "Citation",
      "Plagiarism",
      "Referencing",
      "Paraphrasing"
    ],
    answer: 1
  },
  {
    question: "The main reason behind every scientific investigation is:",
    options: [
      "Information gathering",
      "Hypothesis testing",
      "Problem-solving",
      "Data analysis"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT a quality of research?",
    options: [
      "It is opinion-based",
      "It is systematic",
      "It is rigorous",
      "It is diligent"
    ],
    answer: 0
  },
  {
    question: "A project-based paper has three major parts: preliminary pages, the main report, and __________.",
    options: [
      "the end matter",
      "the appendices",
      "the conclusion",
      "the references"
    ],
    answer: 0
  },
  {
    question: "In line with current APA guidelines, the two basic items required in an in-text citation are:",
    options: [
      "Author's last name and year of publication",
      "Author's first name and title of the work",
      "Author's last name and page number",
      "Author's full name and year of publication"
    ],
    answer: 0
  },
  {
    question: "The section of a research paper that provides the background to the work is:",
    options: [
      "The conclusion",
      "The abstract",
      "The introduction",
      "The discussion"
    ],
    answer: 2
  },
  {
    question: "Which chapter of a project is known as 'Research Methodology'?",
    options: [
      "Chapter One",
      "Chapter Two",
      "Chapter Three",
      "Chapter Four"
    ],
    answer: 2
  },
  {
    question: "The process of rewriting or summarizing someone's views using your own words is called:",
    options: [
      "Referencing",
      "Plagiarism",
      "Quotation",
      "Paraphrasing"
    ],
    answer: 3
  },
  {
    question: "A book's preface differs from a research paper's abstract in that a preface:",
    options: [
      "informs the reader what is available in the text section by section",
      "is a brief, concise summary of the entire document",
      "is not more than 120 words long",
      "is presented in a less technical manner"
    ],
    answer: 0
  },
  {
    question: "In a project-based paper, the Approval/Certification page contains:",
    options: [
      "the title of the work and the author's name",
      "the researcher's declaration of independent study",
      "the signatures of relevant persons having approved the report",
      "a list of tables and figures"
    ],
    answer: 2
  },
  {
    question: "According to the document, which of the following is an example of an end matter?",
    options: [
      "List of figures",
      "Abstract",
      "Appendices",
      "Title page"
    ],
    answer: 2
  },
  {
    question: "A hypothesis is a tentative proposition suggested as a solution to a problem or as an explanation of a phenomenon.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "The full meaning of APA is:",
    options: [
      "American Psychological Association",
      "African Publishing Association",
      "American Psychology Association",
      "Association of Professional Academics"
    ],
    answer: 0
  },
  {
    question: "The section of an article-based paper that presents the findings but does not interpret their meanings is the:",
    options: [
      "Discussion",
      "Abstract",
      "Introduction",
      "Results"
    ],
    answer: 3
  },
  {
    question: "What are the two major types of research based on the approach adopted?",
    options: [
      "Pure and applied",
      "Qualitative and quantitative",
      "Survey and experimental",
      "Descriptive and correlative"
    ],
    answer: 1
  },
  {
    question: "What is the process in which a portion of the population is carefully selected as a representation of the whole?",
    options: [
      "Categorization",
      "Division",
      "Sampling",
      "Classification"
    ],
    answer: 2
  },
  {
    question: "Which page of a project is where the researcher declares that the work is an independent study?",
    options: [
      "Title page",
      "Approval page",
      "Declaration page",
      "Dedication page"
    ],
    answer: 2
  },
  {
    question: "In an article-based paper, the introduction is written in what person?",
    options: [
      "First person",
      "Second person",
      "Third person",
      "It can be any person"
    ],
    answer: 2
  },
  {
    question: "A 'variable' is defined as:",
    options: [
      "a tentative proposition suggested as a solution to a problem",
      "a systematic inquiry to find a solution to a problem",
      "a condition that obtains at a given time and which may vary as time goes on",
      "a detailed list of works cited"
    ],
    answer: 2
  },
  {
    question: "A research project is shorter than a journal paper.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "An abstract of a journal article is typically not more than:",
    options: [
      "250 words",
      "120 words",
      "15 pages",
      "10 pages"
    ],
    answer: 1
  },
  {
    question: "What is the purpose of the 'Discussion' section in a research paper?",
    options: [
      "To present the raw data collected",
      "To summarize the background of the study",
      "To interpret the data in relation to the original objectives or hypotheses",
      "To list all authors cited in the work"
    ],
    answer: 2
  },
  {
    question: "Which of the following is a type of research based on the process or approach adopted?",
    options: [
      "Pure research",
      "Correlative research",
      "Mixed approach research",
      "Applied research"
    ],
    answer: 2
  },
  {
    question: "A journal paper is usually not more than how many pages long?",
    options: [
      "10",
      "15",
      "20",
      "25"
    ],
    answer: 1
  },
  {
    question: "The abbreviation 'I.E.E.E' stands for:",
    options: [
      "Institute of European and English Engineering",
      "Institute of Electrical and Electronics Engineering",
      "International Electrical and Engineering Enterprise",
      "International English and European Education"
    ],
    answer: 1
  },
  {
    question: "An abstract is written after the work has been completed but brought to the beginning of the paper.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "What is the name of the first page of a thesis?",
    options: [
      "Table of Contents",
      "Title page",
      "Abstract",
      "Cover page"
    ],
    answer: 3
  },
  {
    question: "In a project-based paper, Chapter Two is typically known as:",
    options: [
      "Literature Review",
      "Introduction",
      "Research Methodology",
      "Result Analysis and Interpretation"
    ],
    answer: 0
  },
  {
    question: "The purpose of the 'Literature Review' chapter is to:",
    options: [
      "present the data analysis procedure",
      "provide a basis for the problem and link it to the data collection instrument",
      "report all findings sequentially",
      "identify the limitations of the study"
    ],
    answer: 1
  },
  {
    question: "Which section of a research project's preliminary pages mentions the person or phenomenon the study is dedicated to?",
    options: [
      "Acknowledgements",
      "Dedication",
      "Declaration page",
      "Abstract"
    ],
    answer: 1
  },
  {
    question: "In APA format, the detailed information of all authors cited in a work are written in alphabetical order according to their:",
    options: [
      "first names",
      "last names",
      "publication year",
      "order of appearance in the text"
    ],
    answer: 1
  },
  {
    question: "The section where the researcher points out the contributions the study would make to existing knowledge is:",
    options: [
      "Statement of Problem",
      "Aim and Objectives",
      "Significance of the study",
      "Limitations"
    ],
    answer: 2
  },
  {
    question: "What is the main difference between 'References' and 'Bibliography'?",
    options: [
      "'Bibliography' is only for online sources.",
      "'References' is a list of works not cited but relevant to the study.",
      "'References' is a list of all authors cited in the work, while 'Bibliography' also includes works not cited but relevant.",
      "'References' are written in a specific style, while 'Bibliography' is not."
    ],
    answer: 2
  },
  {
    question: "What is the name of the section that identifies characteristics of the design or methodology that impacted the interpretation of the findings?",
    options: [
      "Implications",
      "Summary",
      "Recommendations",
      "Limitations"
    ],
    answer: 3
  },
  {
    question: "The 'Method of data collection' section is also known as:",
    options: [
      "Instrumentation",
      "Research design",
      "Sampling technique",
      "Data analytical procedure"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a purpose of research for academic purposes?",
    options: [
      "doing old things in a new and easier way",
      "understanding our environment better",
      "doing new things in new and faster ways",
      "none of the above"
    ],
    answer: 3
  },
  {
    question: "A hypothesis can be formulated in three forms: declarative, non-directional (null), and:",
    options: [
      "a list",
      "a question",
      "a statement",
      "a conclusion"
    ],
    answer: 1
  },
  {
    question: "The list of all tables in a work with their corresponding page locations is found in the:",
    options: [
      "List of Figures",
      "List of Tables",
      "Table of Contents",
      "List of Appendices"
    ],
    answer: 1
  },
  {
    question: "The section that involves the materials used in a study and the steps taken in the experiment is the:",
    options: [
      "Introduction",
      "Discussion",
      "Materials and Method",
      "Results"
    ],
    answer: 2
  },
  {
    question: "An abstract for a research project can be as long as:",
    options: [
      "120 words",
      "250 words",
      "15 pages",
      "10 pages"
    ],
    answer: 1
  },
  {
    question: "In the 'Results' section, the same data should not be presented in both a table and a figure.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "The Statement of Problem in a research paper indicates:",
    options: [
      "why there is a gap the investigation is set out to fill",
      "the researcher's opinion on the issue",
      "a summary of previous findings",
      "the aim and objectives of the study"
    ],
    answer: 0
  },
  {
    question: "In an article-based paper, the 'Materials and Method' section is written in:",
    options: [
      "present tense",
      "future tense",
      "past tense",
      "first person"
    ],
    answer: 2
  },
  {
    question: "What is the page that lists all abbreviations and acronyms related to the study with their full meanings?",
    options: [
      "List of Appendices",
      "Operational definition of terms",
      "Abbreviations",
      "Acknowledgements"
    ],
    answer: 2
  },
  {
    question: "The section of a research project's main report that reports all findings sequentially in relation to the research questions is the:",
    options: [
      "Summary",
      "Conclusion",
      "Discussion",
      "Recommendations"
    ],
    answer: 0
  },
  {
    question: "What is the purpose of the 'Significance of the study' section?",
    options: [
      "To define the relationship between variables",
      "To provide an educated guess about the expected relationship",
      "To point out the study's contributions to existing knowledge",
      "To indicate the width and breadth the study problem is able to manage"
    ],
    answer: 2
  },
  {
    question: "The 'Introduction' of a research paper moves from:",
    options: [
      "specific to general information",
      "general to specific information",
      "chronological to reverse chronological order",
      "the author's opinion to factual data"
    ],
    answer: 1
  },
  {
    question: "The List of figures is different from the List of tables because:",
    options: [
      "the full title of each table is mentioned at the top, while the number and title of every figure is indicated on its bottom",
      "the full title of each figure is at the top, while the number and title of every table is at the bottom",
      "figures are not serially numbered",
      "tables do not have titles"
    ],
    answer: 0
  },
  {
    question: "'Academic writing' is generally:",
    options: [
      "opinion-based, speculative, and non-verifiable",
      "objective, factual, and verifiable",
      "a combination of business and official writing",
      "a form of personal expression"
    ],
    answer: 1
  },
  {
    question: "The page where significant terms are defined in the context of the study is the:",
    options: [
      "Dedication page",
      "Acknowledgement page",
      "Operational definition of terms",
      "List of Appendices"
    ],
    answer: 2
  },
  {
    question: "What is the name of the section where the researcher makes suggestions to improve existing conditions?",
    options: [
      "Discussion",
      "Conclusion",
      "Recommendations",
      "Summary"
    ],
    answer: 2
  },
  {
    question: "The term 'Research' can be defined as a careful, diligent, and rigorous study to find out new facts on a particular issue.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a form a hypothesis can be formulated in?",
    options: [
      "Declarative form",
      "Non-directional (null) form",
      "Question form",
      "Conclusion form"
    ],
    answer: 3
  },
  {
    question: "The 'Scope and delimitation' section indicates:",
    options: [
      "the contributions the study makes to existing knowledge",
      "why there is a gap that needs to be filled",
      "the width and breadth the study problem is able to manage",
      "the aim of the study"
    ],
    answer: 2
  },
  {
    question: "In a research project, Chapter Four is known as:",
    options: [
      "Research Methodology",
      "Literature Review",
      "Result Analysis and Interpretation of Data",
      "Summary, Conclusion and Recommendations"
    ],
    answer: 2
  },
  {
    question: "The 'End matter' of a project-based paper mainly consists of:",
    options: [
      "references and appendices",
      "a cover page and a title page",
      "the main report and the abstract",
      "the literature review and methodology"
    ],
    answer: 0
  },
  {
    question: "The 'Introduction' of a research project's main report introduces and fully explains the:",
    options: [
      "methodology",
      "research findings",
      "problem of the study",
      "data analysis procedure"
    ],
    answer: 2
  },
  {
    question: "Which of the following is a primary source of data?",
    options: [
      "Books",
      "Newspapers",
      "Questionnaires",
      "Journals"
    ],
    answer: 2
  },
  {
    question: "The Acknowledgment section is devoted to:",
    options: [
      "summarizing the background, purpose, and methodology",
      "listing all tables and figures",
      "mentioning all those who helped in the completion of the work",
      "declaring the work is an independent study"
    ],
    answer: 2
  },
  {
    question: "The Declaration page is where a researcher testifies that their study has never been presented before.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "What is the abbreviation 'CMS' an acronym for in the provided text?",
    options: [
      "Council of Medical Scholars",
      "Council of Science Editors",
      "Chicago Manual Style",
      "Certified Management Society"
    ],
    answer: 2
  },
  {
    question: "What is the name of the section where a researcher comments on the results and highlights some previous findings?",
    options: [
      "Conclusion",
      "Discussion",
      "Summary",
      "Recommendations"
    ],
    answer: 1
  },
  {
    question: "The Preliminaries of a project-based paper are those pages that come before the main report and are usually numbered with:",
    options: [
      "Arabic numerals",
      "letters",
      "Roman numerals",
      "no numbering"
    ],
    answer: 2
  },
  {
    question: "Interpolation is defined as:",
    options: [
      "comments or clarifications added in brackets to quotations",
      "words of another person copied verbatim",
      "further remarks on an issue coming at the end of a chapter",
      "a list of all authors cited in the work"
    ],
    answer: 0
  },
  {
    question: "A long essay or term paper is considered a rigorous research activity.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "A footnote is called that because it is written:",
    options: [
      "at the end of the chapter",
      "at the bottom of the relevant page",
      "in the appendix",
      "in a separate document"
    ],
    answer: 1
  },
  {
    question: "Endnote is a further remark on an issue that comes at the end of the chapter or section.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "The section that indicates the width and breadth the study problem is able to manage is the:",
    options: [
      "Limitations",
      "Significance of the study",
      "Research questions",
      "Scope and delimitation"
    ],
    answer: 3
  },
  {
    question: "In a journal, the Approval page comes after the Abstract.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "Bibliography involves both work cited and those not cited but relevant to the present study.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "The syllable \"re\" in the word research implies:",
    options: [
      "\"revising again\"",
      "\"recreating again\"",
      "\"doing again\"",
      "\"researching again\""
    ],
    answer: 2
  },
  {
    question: "While formatting end work of references, the title of the work comes immediately after the author's initial.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "The abbreviation 'CBE' stands for:",
    options: [
      "Council of Business Ethics",
      "Council of Biology Editors",
      "Council of Business Engineers",
      "Committee of Biomedical Education"
    ],
    answer: 1
  },
  {
    question: "The section that briefly discusses the statistical design with which the data collated is computed is the:",
    options: [
      "Data analytical procedure",
      "Data collection method",
      "Results analysis",
      "Methodology"
    ],
    answer: 0
  },
  {
    question: "The Introduction in an article-based paper also discusses the results and conclusions of previously published studies.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "The Introduction in an article-based paper is limited to studies that relate directly to the present study.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "The term Abstract is a brief concise summary of the entire document, typically not more than:",
    options: [
      "250 words",
      "120 words",
      "100 words",
      "150 words"
    ],
    answer: 0
  },
  {
    question: "What is a condition that obtains at a given time and which may vary as time goes on?",
    options: [
      "A hypothesis",
      "A conclusion",
      "A variable",
      "A result"
    ],
    answer: 2
  },
  {
    question: "The Results section presents findings but does not include:",
    options: [
      "tables and figures",
      "text summaries",
      "raw data collected",
      "statistical probability levels"
    ],
    answer: 2
  },
  {
    question: "What is the name for the third and last part of a research project?",
    options: [
      "Main report",
      "Preliminary pages",
      "End matter",
      "Chapter Five"
    ],
    answer: 2
  },
  {
    question: "A Title page of a project-based paper, in addition to containing everything on the cover page, also states:",
    options: [
      "the total word count",
      "the purpose for which the project is submitted",
      "the researcher's contact information",
      "the list of figures"
    ],
    answer: 1
  },
  {
    question: "The Table of contents lists:",
    options: [
      "all figures and tables",
      "only the main chapters",
      "all the headings and subheadings with their corresponding page locations",
      "all the abbreviations and acronyms"
    ],
    answer: 2
  },
  {
    question: "The Dedication page is typically written with:",
    options: [
      "more than two lines",
      "a full paragraph",
      "the fewest words, usually not more than one or two lines",
      "no words at all"
    ],
    answer: 2
  },
  {
    question: "The Abstract of a research project summarizes:",
    options: [
      "background, purpose, methodology, results, conclusion, implications, and recommendations",
      "only the results and conclusions",
      "the table of contents and list of figures",
      "only the purpose and methodology"
    ],
    answer: 0
  },
  {
    question: "A researcher quotes authoritative sources in the Background of the study section to:",
    options: [
      "demonstrate their knowledge of the subject",
      "support that the present study is required",
      "provide a list of references",
      "make the report longer"
    ],
    answer: 1
  },
  {
    question: "The Aim of the study is always:",
    options: [
      "more than one",
      "one",
      "two",
      "five"
    ],
    answer: 1
  },
  {
    question: "Research questions are specific objectives converted into:",
    options: [
      "declarative expressions",
      "interrogative expressions",
      "statements of problem",
      "educated guesses"
    ],
    answer: 1
  },
  {
    question: "A Literature Review provides a basis for the problem and links it to:",
    options: [
      "the researcher's opinion",
      "the data collection instrument",
      "the project's limitations",
      "the significance of the study"
    ],
    answer: 1
  },
  {
    question: "The Population for the study explains:",
    options: [
      "the total number of persons, events, or constructs the study is concerned with",
      "the sample size",
      "the sampling technique",
      "the statistical design"
    ],
    answer: 0
  },
  {
    question: "The Method of data collection section justifies its validity and reliability often by way of:",
    options: [
      "a pilot study",
      "a detailed list of instruments",
      "a literature review",
      "a research design"
    ],
    answer: 0
  },
  {
    question: "In a project, brief interpretations of the data are presented:",
    options: [
      "in the Limitations section",
      "after the tables or graphs in the Result Analysis and Interpretation chapter",
      "in the Summary",
      "in the Conclusion"
    ],
    answer: 1
  },
  {
    question: "The Conclusion section is where a conclusion is provided in light of what the study found out.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "The References section is a list of all authors cited in the work, written in alphabetical order according to their:",
    options: [
      "first names",
      "surnames",
      "a combination of first and last names",
      "the order of appearance"
    ],
    answer: 1
  },
  {
    question: "Information of secondary importance that cannot be accommodated in the main report are known as:",
    options: [
      "Endnotes",
      "Footnotes",
      "Appendices",
      "Abstracts"
    ],
    answer: 2
  },
  {
    question: "In Direct quotation, if a quote is less than three lines, it is:",
    options: [
      "indented without quotation marks",
      "put in quotation marks without being indented",
      "put in italics",
      "paraphrased"
    ],
    answer: 1
  },
  {
    question: "Academic writing involves which of the following?",
    options: [
      "Students written assignments",
      "Term papers",
      "Projects",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Research can be described as a means of:",
    options: [
      "solving the problems around us",
      "understanding our environment better",
      "doing old things in a new and easier way",
      "all of the above"
    ],
    answer: 3
  },
  {
    question: "From the viewpoint of application, the two broad categories of research are:",
    options: [
      "structured and unstructured",
      "descriptive and correlative",
      "pure and applied",
      "survey and experimental"
    ],
    answer: 2
  },
  {
    question: "An interview could be:",
    options: [
      "structured or unstructured",
      "pure or applied",
      "descriptive or exploratory",
      "quantitative or qualitative"
    ],
    answer: 0
  },
  {
    question: "A journal paper is much shorter than a research project.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "The Abstract of a research paper is presented in a less technical manner.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "The Materials and Method section is NOT:",
    options: [
      "a list of instruments",
      "written in past tense",
      "a description of the steps taken in the study",
      "a description of the statistical test used"
    ],
    answer: 3
  },
  {
    question: "In the Discussion section, it is acceptable to explain:",
    options: [
      "what the results mean",
      "why they differ from what others have found",
      "both a and b",
      "neither a nor b"
    ],
    answer: 2
  },
  {
    question: "Which of the following is NOT part of the Preliminary pages of a project?",
    options: [
      "Cover page",
      "Main report",
      "Abstract",
      "Acknowledgements"
    ],
    answer: 1
  },
  {
    question: "Chapter One of a project is known as:",
    options: [
      "Literature Review",
      "Introduction",
      "Research Methodology",
      "Conclusion"
    ],
    answer: 1
  },
  {
    question: "A Cover page consists of a title of about:",
    options: [
      "20 words in length",
      "50 words in length",
      "10 words in length",
      "100 words in length"
    ],
    answer: 0
  },
  {
    question: "The page numbers in the Table of contents are usually identified and written:",
    options: [
      "at the beginning of the project",
      "after the work has been completed",
      "before the work has been completed",
      "during the writing of each chapter"
    ],
    answer: 1
  },
  {
    question: "The List of tables lists all tables in the work with their corresponding page locations and:",
    options: [
      "a list of figures",
      "the full title of each table",
      "the name of the author",
      "the chapter number"
    ],
    answer: 1
  },
  {
    question: "An Abstract for a research project is much longer than that of a journal paper.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "In the Statement of Problem section, the researcher indicates why there is a gap that the present investigation is set out to fill.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "The research questions are needed to be answered to arrive at the:",
    options: [
      "hypothesis",
      "research design",
      "research findings",
      "problem statement"
    ],
    answer: 2
  },
  {
    question: "A hypothesis provides an educated guess regarding the nature of the expected relationship between the:",
    options: [
      "limitations",
      "variables",
      "population",
      "data"
    ],
    answer: 1
  },
  {
    question: "The Limitations section brings into focus the restricted aspect of the problem the study can address.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "All authors cited in the Literature Review are finally accounted for under the list of references.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "The Data analytical procedure section discusses the statistical design with which the data is:",
    options: [
      "collected",
      "computed",
      "interpreted",
      "presented"
    ],
    answer: 1
  },
  {
    question: "The Discussion section compares the presented results with previous findings by other scholars.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "The Summary section reports all findings sequentially in relation to the:",
    options: [
      "research questions raised in chapter one",
      "limitations of the study",
      "implications of the findings",
      "literature review"
    ],
    answer: 0
  },
  {
    question: "The Recommendations section proffers suggestions to all those concerned based on the:",
    options: [
      "research design",
      "methodology",
      "findings of the research",
      "abstract"
    ],
    answer: 2
  },
  {
    question: "References is a list of all authors cited in the work, written in:",
    options: [
      "alphabetical order according to first names",
      "alphabetical order according to surnames",
      "the order they appear in the work",
      "chronological order"
    ],
    answer: 1
  },
  {
    question: "Bibliography involves only works cited in the study.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "The Latin term Ibid/Ib/Ibidem means:",
    options: [
      "different place",
      "same place",
      "in the work cited",
      "none of the above"
    ],
    answer: 1
  },
  {
    question: "Op cit /Loc cit means:",
    options: [
      "same place, different place, same place",
      "different place, same place, same place",
      "same place, same place, different place",
      "different place, different place, same place"
    ],
    answer: 3
  },
  {
    question: "Functional writing is one of the two components of the GNS 121 course. What is the other?",
    options: [
      "Academic writing",
      "Official writing",
      "Research paper writing",
      "Business writing"
    ],
    answer: 0
  },
  {
    question: "What is a structured inquiry that utilizes acceptable scientific methodology to solve problems and create new knowledge?",
    options: [
      "A hypothesis",
      "An experiment",
      "Research",
      "A report"
    ],
    answer: 2
  },
  {
    question: "The problem for a scientific investigation must be:",
    options: [
      "established and observable",
      "empirically testable",
      "clearly defined",
      "all of the above"
    ],
    answer: 3
  },
  {
    question: "A variable is usually an interrogative sentence that asks for a clear relationship between two or more variables.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "The two broad categories of research, from the viewpoint of application, are Pure research and Applied research.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "Secondary sources of data include:",
    options: [
      "questionnaires and interviews",
      "observation",
      "books and journals",
      "all of the above"
    ],
    answer: 2
  },
  {
    question: "An article-based paper is much shorter than a research project due to:",
    options: [
      "a journal's limited space",
      "a project's detailed nature",
      "the need for more in-depth analysis",
      "the type of research undertaken"
    ],
    answer: 0
  },
  {
    question: "The Abstract of an article-based paper is a summary of the entire document, typically not more than:",
    options: [
      "120 words",
      "250 words",
      "15 pages",
      "10 pages"
    ],
    answer: 0
  },
  {
    question: "The Introduction of a research paper is organized to move from:",
    options: [
      "specific to general information",
      "general to specific information",
      "chronological order",
      "least important to most important information"
    ],
    answer: 1
  },
  {
    question: "The Materials and Method section is written in:",
    options: [
      "present tense",
      "past tense",
      "future tense",
      "a combination of tenses"
    ],
    answer: 1
  },
  {
    question: "The Results section presents findings but does not attempt to:",
    options: [
      "interpret their meanings",
      "summarize data",
      "use tables and figures",
      "state the results"
    ],
    answer: 0
  },
  {
    question: "In the Results section, you should concentrate on general:",
    options: [
      "raw data",
      "speculation",
      "patterns, trends, and differences",
      "opinions and guesses"
    ],
    answer: 2
  },
  {
    question: "The Discussion section relates the interpretations to the present state of knowledge and future needs for research.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "Which section of a research project is usually broken into chapters?",
    options: [
      "Preliminary pages",
      "Main report",
      "End matter",
      "Appendices"
    ],
    answer: 1
  },
  {
    question: "The Title page of a project-based paper is immediately next to the:",
    options: [
      "Abstract",
      "Cover page",
      "Table of contents",
      "Declaration page"
    ],
    answer: 1
  },
  {
    question: "The List of appendices lists:",
    options: [
      "all figures and tables",
      "all appendices with their corresponding page locations",
      "only the raw data",
      "only the references"
    ],
    answer: 1
  },
  {
    question: "The Abstract of a research project summarizes the:",
    options: [
      "background",
      "purpose and methodology",
      "results and conclusions",
      "all of the above"
    ],
    answer: 3
  },
  {
    question: "The Statement of Problem in a research project indicates why there is:",
    options: [
      "a gap that the investigation is set out to fill",
      "a relationship between variables",
      "a need for a pilot study",
      "a debate among scholars"
    ],
    answer: 0
  },
  {
    question: "The Limitations section provides convincing reasons for the restrictions of the study.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "The Literature Review chapter is where a researcher points out the purpose of the review.",
    options: [
      "True",
      "False"
    ],
    answer: 1
  },
  {
    question: "Sampling is defined as a process in which a portion of the population is carefully selected as a representation of the whole.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "Appendices are information of secondary importance that cannot be accommodated in the main report.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "Bibliography is a detailed list of works cited as well as those not cited but relevant to the topic.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "Methodology refers to the procedure adopted in the study involving design for data gathering and analysis.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a type of formal writing mentioned in the document?",
    options: [
      "Academic writing",
      "Business writing",
      "Official writing",
      "Personal writing"
    ],
    answer: 3
  },
  {
    question: "A research is usually systematic and based on:",
    options: [
      "speculation, guessing, or opinion",
      "observations and experiments",
      "personal experience",
      "previous research"
    ],
    answer: 1
  },
  {
    question: "The Discussion section is where you interpret the data in relation to the original objectives or hypotheses.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  },
  {
    question: "In the References section, the list of authors is written in alphabetical order according to their surnames.",
    options: [
      "True",
      "False"
    ],
    answer: 0
  }
];

// UI Elements
const questionNav = document.getElementById('question-nav');
const startScreen = document.getElementById('start-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const app = document.getElementById('app');
const timerEl = document.getElementById('timer');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreEl = document.getElementById('score');
const resultsList = document.getElementById('results-list');
const retryBtn = document.getElementById('retry-btn');
const customConfirm = document.getElementById('customConfirm');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Quiz variables
const TOTAL_QUESTIONS = 45;
const TIME_LIMIT = 45 * 60; // in seconds
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timer;
let timeRemaining = TIME_LIMIT;

// Initialize quiz
startQuizBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  app.style.display = 'flex';
  initQuiz();
});

function initQuiz() {
  // Shuffle and pick questions
  const shuffled = shuffleArray([...questions]);
  selectedQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));

  currentQuestionIndex = 0;
  userAnswers = new Array(selectedQuestions.length).fill(null);

  timeRemaining = TIME_LIMIT;
  updateTimerDisplay();

  showQuestion();

  prevBtn.disabled = true;
  nextBtn.disabled = false;
  submitBtn.disabled = true;

  quizContainer.style.display = 'flex';
  resultContainer.style.display = 'none';

  startTimer();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  let min = Math.floor(timeRemaining / 60);
  let sec = timeRemaining % 60;
  timerEl.textContent = `Time Left: ${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

function renderQuestionNav() {
  questionNav.innerHTML = '';
  selectedQuestions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    if (userAnswers[i] !== null) btn.classList.add('answered');
    if (i === currentQuestionIndex) btn.classList.add('current');
    btn.addEventListener('click', () => {
      currentQuestionIndex = i;
      showQuestion();
      renderQuestionNav();
    });
    questionNav.appendChild(btn);
  });
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
  questionTextEl.textContent = q.question;

  optionsContainer.innerHTML = '';

  q.options.forEach((optionText, i) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = String.fromCharCode(65 + i) + ". " + optionText;
    
    // Add keyboard shortcut badge
    const keyBadge = document.createElement('div');
    keyBadge.className = 'key-badge';
    keyBadge.textContent = String.fromCharCode(65 + i);
    optionDiv.appendChild(keyBadge);

    if(userAnswers[currentQuestionIndex] === i) {
      optionDiv.classList.add('selected');
    }

    optionDiv.addEventListener('click', () => {
      selectOption(i);
    });

    optionsContainer.appendChild(optionDiv);
  });

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === selectedQuestions.length - 1;
  submitBtn.disabled = userAnswers[currentQuestionIndex] === null;

  renderQuestionNav();
}

function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  
  Array.from(optionsContainer.children).forEach((optEl, idx) => {
    optEl.classList.toggle('selected', idx === optionIndex);
  });

  submitBtn.disabled = false;
  renderQuestionNav();
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
  if(currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if(currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
});

// Submit button shows custom confirmation dialog
submitBtn.addEventListener('click', () => {
  customConfirm.style.display = 'flex';
});

// Confirm dialog buttons
confirmYes.addEventListener('click', () => {
  customConfirm.style.display = 'none';
  finishQuiz();
});

confirmNo.addEventListener('click', () => {
  customConfirm.style.display = 'none';
});

function finishQuiz() {
  clearInterval(timer);
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'flex';

  let correctCount = 0;
  resultsList.innerHTML = '';

  selectedQuestions.forEach((q, idx) => {
    const userAnsIndex = userAnswers[idx];
    const isCorrect = userAnsIndex === q.answer;
    if (isCorrect) correctCount++;

    const userAnswerText = userAnsIndex !== null ? q.options[userAnsIndex] : 'No Answer';
    const correctAnswerText = q.options[q.answer];

    const div = document.createElement('div');
    div.className = 'result-question';
    div.innerHTML = `
      <div><strong>Q${idx + 1}:</strong> ${q.question}</div>
      <div>Your answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${userAnswerText}</span></div>
      ${isCorrect ? '' : `<div>Correct answer: <span class="correct">${correctAnswerText}</span></div>`}
    `;
    resultsList.appendChild(div);
  });

  scoreEl.textContent = `You answered ${correctCount} out of ${selectedQuestions.length} questions correctly.`;
  
  // Add performance comment
  let comment = "";
  const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
  
  if (percentage >= 80) comment = "Excellent work! You have a strong grasp of this material.";
  else if (percentage >= 60) comment = "Good effort! Review the incorrect answers to improve.";
  else comment = "Keep studying! Focus on the topics you missed.";
  
  scoreEl.innerHTML += `<div style="margin-top:10px;font-weight:normal">${comment}</div>`;
}

retryBtn.addEventListener('click', () => {
  initQuiz();
});

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ignore if focus is on input elements
  if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) {
    return;
  }
  
  const key = e.key.toUpperCase();
  
  // Option selection
  if (key >= 'A' && key <= 'E') {
    const optionIndex = key.charCodeAt(0) - 65;
    const currentOptions = selectedQuestions[currentQuestionIndex]?.options || [];
    
    if (optionIndex < currentOptions.length) {
      selectOption(optionIndex);
    }
  }
  
  // Navigation
  switch(key) {
    case 'P':
      if (!prevBtn.disabled) prevBtn.click();
      break;
    case 'N':
      if (!nextBtn.disabled) nextBtn.click();
      break;
  }
});
