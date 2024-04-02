import React from "react";
import OMImage from "../../../../public/OM.webp";
import traingleImage from "../../../../public/testimoni-sparator.png";
import quoteImage from "../../../../public/blockquote.png";
import { Space } from "antd";
import Image from "next/image"

const UsersFeedbackSection: React.FC = () => {
  const feedbackData = [
    {
      logo: OMImage,
      feedback:
        "صارت حياتي أسهل مع فلاي أكيد. كنا نستعمل وكالات السفر بس مع فلاي أكيد أقدر استقبل الطلبات بشكل مباشر بدل ما يستنى الموظف يوم أو يومين إلى ما تجيهم الموافقة على السفر. - فودكس",
    },
    { logo: OMImage, feedback: "سابقًا كنا نعمل على عمليات ورقية لموافقات السفر والتواصل عن طريق الايميل مع وكلاؤنا. كانت العملية تأخذ وقت طويل وما كان عندنا مراقبة كاملة على اجراءات السفر لكن الآن مع فلاي أكيد الموضوع شفاف عن طريق المنصة. -يعرب الصايغ، فيرجن موبايل" },
    { logo: OMImage, feedback: "كشركة من أهم المزايا الموجودة هي التتبع المباشر التي تساعدنا في معرفة الرحلات المستخدمة ومواعيدها وتكلفتها. -أحمد كونش، عنصر مشع" },
  ];

  return (
    <div className={"users-feedback-section"}>
      {feedbackData?.map((item, index) => {
        return <div><div key={index} className="hero">
            <Space align="start"><Image src={quoteImage} alt={"traingle"}/><span>{item?.feedback}</span></Space></div>
            <Image width={24} src={item?.logo} alt={"company"}/>
        </div>;
      })}
    </div>
  );
};

export default UsersFeedbackSection;
