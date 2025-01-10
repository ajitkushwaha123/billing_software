import React from "react";
const conditions = [
  {
    title: "Introduction",
    content: `
      Welcome to <b>Kravy Billing Software</b> by <b>Magicscale!</b> These Terms and Conditions (the “Terms”) outline your rights and responsibilities when accessing or using our services through the website, mobile application, or software solutions provided by Magicscale.
    `,
  },
  {
    title: "Definitions",
    content: `
      <b>“Services”</b> include functionalities such as billing, inventory management, table management, and other restaurant operation tools integrated with Kravy Billing Software. 
      <b>“Content”</b> refers to all materials provided within the software, including visual interfaces, interactive features, code, and other proprietary components. 
      <b>“User Content”</b> refers to any data or information you upload, share, or transmit, including customer data, table availability, or usage logs.
    `,
  },
  {
    title: "General Usage Rules",
    content: `
      <ul>
        <li>Use the services only for lawful purposes and in accordance with these Terms.</li>
        <li>Do not attempt to reverse-engineer, copy, or resell any part of the software.</li>
        <li>Ensure compliance with all applicable laws and regulations when using Kravy Billing Software.</li>
      </ul>
    `,
  },
  {
    title: "Intellectual Property",
    content: `
      Magicscale owns all intellectual property rights to Kravy Billing Software and its content. Users are granted a limited, non-exclusive, and non-transferable license to use the software solely for its intended purpose.
    `,
  },
  {
    title: "User Responsibilities",
    content: `
      Users are responsible for maintaining the confidentiality of their login credentials and all activities occurring under their account. Misuse, unauthorized access, or sharing of accounts is prohibited.
    `,
  },
  {
    title: "Free Trial and Subscription Fees",
    content: `
      New users may be eligible for a free trial period, the terms of which will be specified during signup. Subscription fees will be charged after the trial ends unless the subscription is canceled. Fees are non-refundable once paid.
    `,
  },
  {
    title: "Data Privacy",
    content: `
      We respect your privacy and process your data in accordance with our <b>Privacy Policy.</b> By using our services, you agree to the collection and use of your information as described therein.
    `,
  },
  {
    title: "Limitation of Liability",
    content: `
      Use of Kravy Billing Software is at your own risk. Magicscale is not liable for any damages, including but not limited to, lost profits, data loss, or business interruptions resulting from your use of the software.
    `,
  },
  {
    title: "Service Modifications and Suspension",
    content: `
      Magicscale reserves the right to modify or discontinue any part of the service at any time without prior notice. We are not liable for any consequences resulting from such changes or suspensions.
    `,
  },
  {
    title: "Termination",
    content: `
      We reserve the right to terminate your account or access to the services at any time, with or without notice, for violations of these Terms or other applicable policies.
    `,
  },
  {
    title: "Governing Law",
    content: `
      These Terms are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of New Delhi, India.
    `,
  },
  {
    title: "Contact Us",
    content: `
      For questions or concerns regarding these Terms, please reach out to us:<br>
      <b>Email:</b> support@magicscale.in<br>
      <b>Phone:</b> +91 8178739633<br>
      <b>Address:</b> B72 Near Mohalla Clinic, Rajokari, New Delhi - 110038
    `,
  },
];

const TermsAndCondition = () => {
  return (
    <div className="bg-white m-5">
      <div className="p-12">
        {conditions.map((condition, index) => (
          <div
            key={index}
            className="py-4 text-start border-b-2 border-gray-50"
          >
            <h2 className="text-[30px] pb-3 font-bold text-[#353535]">
              {condition.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: condition.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndCondition;
