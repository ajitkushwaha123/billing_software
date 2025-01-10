import React from "react";

const Policies = [
  {
    title: "Introduction",
    content: `
      Welcome to <b>Kravy Billing Software</b> by <b>Magicscale!</b> Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you access our software or use our services.
    `,
  },
  {
    title: "Information We Collect",
    content: `
      We collect information that you provide to us directly, such as your <b>name, email address, phone number,</b> and any documents necessary for onboarding or FSSAI licensing. Additionally, we may collect data automatically, such as your <b>IP address, device details, browser type,</b> and usage data while you use Kravy Billing Software.
    `,
  },
  {
    title: "How We Use Your Information",
    content: `
      The information we collect is used to <b>provide and improve Kravy Billing Software,</b> manage your account, process your requests, and ensure compliance with legal obligations. We may also use your data to send you software updates, promotional offers, or technical notifications.
    `,
  },
  {
    title: "Sharing Your Information",
    content: `
      We do not <b>sell or rent</b> your personal information to third parties. However, we may share your data with <b>trusted partners,</b> such as financial institutions, compliance authorities, or service providers, to facilitate the services you’ve requested through Kravy Billing Software.
    `,
  },
  {
    title: "Data Security",
    content: `
      We implement <b>robust security measures</b> to protect your information from unauthorized access, alteration, or destruction. Despite our efforts, no system can be 100% secure, and we advise users to take precautions when sharing sensitive information online.
    `,
  },
  {
    title: "Cookies and Tracking",
    content: `
      Kravy Billing Software may use <b>cookies</b> to improve user experience and analyze performance. You can manage or disable cookies through your browser or device settings. Note that some features of the software may not function properly without cookies.
    `,
  },
  {
    title: "Your Rights",
    content: `
      You have the right to <b>access, update, or delete</b> your personal information at any time. To exercise these rights, please contact us at <b>support@magicscale.in</b>.
    `,
  },
  {
    title: "Changes to this Privacy Policy",
    content: `
      We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted here with an updated revision date. We encourage you to <b>review this policy periodically.</b>
    `,
  },
  {
    title: "Contact Us",
    content: `
      If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us:<br>
      <b>Email:</b> support@magicscale.in<br>
      <b>Phone:</b> +91 8178739633<br>
      <b>Address:</b> B72 Near Mohalla Clinic, Rajokari, New Delhi - 110038
    `,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-white m-5">
      <div className="p-12">
        {Policies.map((policy, index) => (
          <div
            key={index}
            className="py-4 text-start border-b-2 border-gray-50"
          >
            <h2 className="text-[30px] pb-3 font-bold text-[#353535]">
              {policy.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: policy.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
