import { useEffect, useState } from "react";
import {
  FAQProps,
  melantoninFaqs,
  orderFaqs,
  sleepstiqFaqs,
} from "../../constants";

interface SearchProps {
  searchTerm: string;
}

const FAQs: React.FC<SearchProps> = ({ searchTerm }) => {
  const [faqCategory, setFaqCategory] = useState<string>("Sleepstiq Product");
  const [showAnswer, setShowAnswer] = useState<string>("");
  const [faqs, setFaqs] = useState<FAQProps[]>([]);

  useEffect(() => {
    switch (faqCategory) {
      case "Sleepstiq Product":
        setFaqs(sleepstiqFaqs);
        break;
      case "Order":
        setFaqs(orderFaqs);
        break;
      case "Melantonin":
        setFaqs(melantoninFaqs);
        break;
    }
  }, [faqCategory]);

  const filteredFaqs =
    searchTerm === ""
      ? faqs
      : faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleCategoryChange = (category: string) => {
    setFaqCategory(category);
  };

  const handleShowAnswer = (faqId: string) => {
    if (showAnswer === faqId) {
      setShowAnswer("");
      return;
    }
    setShowAnswer(faqId);
  };

  return (
    <section className="p-6 md:p-10 lg:p-[66px] flex flex-col md:flex-row items-start gap-10 md:gap-12 lg:gap-8">
      <div className="flex flex-col gap-6 w-full md:w-[212px]">
        {["Sleepstiq Product", "Order", "Melantonin"].map((item, index) => {
          return (
            <p
              onClick={() => handleCategoryChange(item)}
              key={index}
              className={`text-sm md:text-base lg:text-lg text-primary cursor-pointer transition-all duration-300 delay-100 ease-in-out ${
                faqCategory === item && "font-bold"
              }`}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col gap-6 border-b border-[#BDBDBD] w-full lg:w-[800px] xl:w-[913px]">
        {filteredFaqs?.map((faq, index) => {
          return (
            <div
              key={index}
              onClick={() => handleShowAnswer(faq.id)}
              className={`pt-4 border-t border-[#BDBDBD] cursor-pointer flex flex-col gap-4 ${
                index === faqs.length - 1 && "pb-4"
              }`}
            >
              <p
                className={`text-sm md:text-base lg:text-lg text-primary ${
                  showAnswer === faq.id && "font-semibold"
                }`}
              >
                {faq?.question}
              </p>
              {showAnswer === faq.id && (
                <p className="text-xs md:text-sm lg:text-base text-black transition-all duration-300 delay-100 ease-in-out">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
